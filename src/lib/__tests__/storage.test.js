/**
 * @vitest-environment jsdom
 */
import "fake-indexeddb/auto";
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  STORAGE_KEY,
  SCHEMA_VERSION,
  loadState,
  saveState,
  clearState,
  exportSnapshot,
  parseSnapshot,
} from '../storage.js'

describe('storage — localStorage round-trip', () => {
  beforeEach(() => {
    localStorage.clear()
  })
  afterEach(() => {
    localStorage.clear()
  })

  it('loadState devuelve null cuando no hay nada persistido', () => {
    expect(loadState()).toBeNull()
  })

  it('saveState + loadState preservan el estado', () => {
    const state = { personas: [{ id: 'f1', nombre: 'X' }], actividadesPlan: [], roleData: {} }
    saveState(state)
    expect(loadState()).toEqual(state)
  })

  it('clearState elimina el contenido persistido', () => {
    saveState({ a: 1 })
    expect(loadState()).not.toBeNull()
    clearState()
    expect(loadState()).toBeNull()
  })

  it('loadState ignora JSON corrupto sin lanzar', () => {
    localStorage.setItem(STORAGE_KEY, '{no es json válido')
    expect(loadState()).toBeNull()
  })

  it('loadState con schemaVersion diferente: descarta y crea backup', () => {
    const obsolete = JSON.stringify({ schemaVersion: 0, savedAt: '2020-01-01', state: { x: 1 } })
    localStorage.setItem(STORAGE_KEY, obsolete)
    expect(loadState()).toBeNull()
    // Debe existir al menos una clave de backup que empiece con pnlq:backup:v0-
    const keys = Object.keys(localStorage).filter((k) => k.startsWith('pnlq:backup:v0-'))
    expect(keys.length).toBeGreaterThan(0)
    expect(localStorage.getItem(keys[0])).toBe(obsolete)
  })
})

describe('storage — snapshot import/export', () => {
  it('exportSnapshot incluye metadatos y schemaVersion', () => {
    const snap = exportSnapshot({ personas: [], actividadesPlan: [], roleData: {} })
    expect(snap.schemaVersion).toBe(SCHEMA_VERSION)
    expect(snap.appName).toMatch(/PNLQ/)
    expect(snap.unidad).toBe('PNLQ-BTMM')
    expect(snap.exportadoEn).toMatch(/^\d{4}-\d{2}-\d{2}T/)
    expect(snap.state).toBeDefined()
  })

  it('parseSnapshot acepta uno válido', () => {
    const snap = exportSnapshot({ personas: [{ id: 'a' }] })
    const r = parseSnapshot(JSON.stringify(snap))
    expect(r.ok).toBe(true)
    expect(r.state.personas).toEqual([{ id: 'a' }])
  })

  it('parseSnapshot rechaza JSON corrupto', () => {
    const r = parseSnapshot('{')
    expect(r.ok).toBe(false)
    expect(r.reason).toMatch(/malformado/i)
  })

  it('parseSnapshot rechaza schemaVersion distinta', () => {
    const r = parseSnapshot(JSON.stringify({ schemaVersion: 999, state: {} }))
    expect(r.ok).toBe(false)
    expect(r.reason).toMatch(/incompatible/i)
  })

  it('parseSnapshot rechaza payload sin state', () => {
    const r = parseSnapshot(JSON.stringify({ schemaVersion: SCHEMA_VERSION }))
    expect(r.ok).toBe(false)
  })

  it('round-trip: reglas no predeterminadas sobreviven exportar + importar', () => {
    const reglasPersonalizadas = {
      diaCorteViaticos: 20,
      horasJornada: 10,
      mesObjetivoViaticos: 'actual',
      puestosRequierenVisitantesDiario: ['Puesto Esperanza'],
    }
    const snap = exportSnapshot({
      personas: [{ id: 'f1', nombre: 'X' }],
      actividadesPlan: [],
      reposiciones: [],
      roleData: {},
      reglas: reglasPersonalizadas,
    })
    const r = parseSnapshot(JSON.stringify(snap))
    expect(r.ok).toBe(true)
    // mergeReglas rellena defaults para campos no incluidos en el respaldo;
    // los campos personalizados deben sobrevivir intactos.
    expect(r.state.reglas).toMatchObject(reglasPersonalizadas)
  })
})

describe('storage — IndexedDB (Fase 5 paso 1)', () => {
  // Los tests anteriores (localStorage round-trip) llaman a saveState()
  // sin esperar la promesa; su escritura a Dexie queda encolada en
  // writeQueue (db.js) y puede completarse recién aquí, contaminando
  // estos tests con datos de otro describe. Se limpia todo antes de
  // cada caso para que el estado de Dexie/localStorage/revisión sea
  // determinista sin importar el orden de ejecución.
  beforeEach(async () => {
    const { wipeDexie, __INTERNALS__ } = await import('../db.js')
    const { __resetRevisionParaTests } = await import('../storage.js')
    await wipeDexie()
    __INTERNALS__.resetSingleton()
    __resetRevisionParaTests()
    localStorage.clear()
  })

  it('getBackendInfo identifica IndexedDB cuando está disponible', async () => {
    const { getBackendInfo } = await import('../storage.js')
    const info = getBackendInfo()
    expect(info.kind).toBe('indexeddb')
    expect(info.hasIDB).toBe(true)
  })

  it('loadStateAsync devuelve null cuando ambos backends están vacíos', async () => {
    const { loadStateAsync } = await import('../storage.js')
    const { __INTERNALS__ } = await import('../db.js')
    __INTERNALS__.resetSingleton()
    const r = await loadStateAsync()
    expect(r.state).toBeNull()
    expect(r.source).toBeNull()
  })

  it('saveState también escribe a Dexie (dual-write)', async () => {
    const { saveState, loadStateAsync } = await import('../storage.js')
    const state = { personas: [{ id: 'f1' }], reglas: {} }
    saveState(state)
    // dar tiempo al fire-and-forget de Dexie
    await new Promise((r) => setTimeout(r, 50))
    const loaded = await loadStateAsync()
    expect(loaded.state.personas).toEqual([{ id: 'f1' }])
  })

  it('loadStateAsync migra desde localStorage si Dexie está vacío', async () => {
    // Sembrar solo localStorage (sin Dexie).
    const { saveState } = await import('../storage.js')
    const { __INTERNALS__, wipeDexie } = await import('../db.js')
    saveState({ personas: [{ id: 'migrado' }] })
    await wipeDexie() // borrar el dexie de la escritura dual
    __INTERNALS__.resetSingleton()

    const { loadStateAsync } = await import('../storage.js')
    const r = await loadStateAsync()
    expect(r.state.personas).toEqual([{ id: 'migrado' }])
    // Tras la migración, Dexie debería tener el snapshot.
    expect(['indexeddb', 'localStorage']).toContain(r.source)
  })
})

describe('storage — Fase 5 paso 2: revisión monotónica y coordinación LS/IDB', () => {
  beforeEach(async () => {
    const { wipeDexie, __INTERNALS__ } = await import('../db.js')
    const { __resetRevisionParaTests, STORAGE_KEY: KEY } = await import('../storage.js')
    await wipeDexie()
    __INTERNALS__.resetSingleton()
    __resetRevisionParaTests()
    localStorage.clear()
    void KEY
  })

  function sembrarLS({ revision, savedAt, state }) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ schemaVersion: SCHEMA_VERSION, savedAt, revision, state }),
    )
  }

  it('localStorage con revisión mayor gana sobre IndexedDB', async () => {
    const { saveToDexie } = await import('../db.js')
    await saveToDexie({ marca: 'idb-vieja' }, 1)
    sembrarLS({ revision: 5, savedAt: '2026-01-01T00:00:00.000Z', state: { marca: 'ls-nueva' } })

    const { loadStateAsync } = await import('../storage.js')
    const r = await loadStateAsync()
    expect(r.source).toBe('localStorage')
    expect(r.state.marca).toBe('ls-nueva')
  })

  it('IndexedDB con revisión mayor gana sobre localStorage', async () => {
    const { saveToDexie } = await import('../db.js')
    await saveToDexie({ marca: 'idb-nueva' }, 9)
    sembrarLS({ revision: 2, savedAt: '2026-01-01T00:00:00.000Z', state: { marca: 'ls-vieja' } })

    const { loadStateAsync } = await import('../storage.js')
    const r = await loadStateAsync()
    expect(r.source).toBe('indexeddb')
    expect(r.state.marca).toBe('idb-nueva')
  })

  it('empate de revisión: desempata por savedAt más reciente', async () => {
    const { saveToDexie } = await import('../db.js')
    await saveToDexie({ marca: 'idb-reloj-nuevo' }, 3)
    // Reescribe savedAt directamente en Dexie para simular reloj más nuevo
    // con la misma revisión (caso legado sin revisión consistente).
    const { getDb, SNAPSHOT_ID } = await import('../db.js')
    const db = await getDb()
    await db.state.update(SNAPSHOT_ID, { savedAt: '2026-06-01T00:00:00.000Z' })
    sembrarLS({ revision: 3, savedAt: '2026-01-01T00:00:00.000Z', state: { marca: 'ls-reloj-viejo' } })

    const { loadStateAsync } = await import('../storage.js')
    const r = await loadStateAsync()
    expect(r.source).toBe('indexeddb')
    expect(r.state.marca).toBe('idb-reloj-nuevo')
  })

  it('empate total (misma revisión, mismo savedAt o ambos ausentes): localStorage gana por ser el backend síncrono', async () => {
    const { saveToDexie } = await import('../db.js')
    await saveToDexie({ marca: 'idb' }, 0)
    sembrarLS({ revision: 0, savedAt: null, state: { marca: 'ls' } })

    const { loadStateAsync } = await import('../storage.js')
    const r = await loadStateAsync()
    expect(r.source).toBe('localStorage')
    expect(r.state.marca).toBe('ls')
  })

  it('JSON corrupto en localStorage no bloquea: usa IndexedDB si está sano', async () => {
    const { saveToDexie } = await import('../db.js')
    await saveToDexie({ marca: 'idb-sano' }, 4)
    localStorage.setItem(STORAGE_KEY, '{esto no es json válido')

    const { loadStateAsync } = await import('../storage.js')
    const r = await loadStateAsync()
    expect(r.source).toBe('indexeddb')
    expect(r.state.marca).toBe('idb-sano')
  })

  it('un backend ausente: sin datos en Dexie, localStorage solo, funciona sin error', async () => {
    sembrarLS({ revision: 1, savedAt: '2026-01-01T00:00:00.000Z', state: { marca: 'solo-ls' } })
    const { loadStateAsync } = await import('../storage.js')
    const r = await loadStateAsync()
    expect(r.state.marca).toBe('solo-ls')
  })

  it('cuota excedida en localStorage: saveState reporta ls:false pero igual guarda en IndexedDB (ok:true)', async () => {
    const { saveState } = await import('../storage.js')
    const originalSetItem = Storage.prototype.setItem
    Storage.prototype.setItem = function (key) {
      if (key === STORAGE_KEY) {
        const err = new Error('QuotaExceededError')
        err.name = 'QuotaExceededError'
        throw err
      }
      return originalSetItem.apply(this, arguments)
    }
    try {
      const resultado = await saveState({ marca: 'cuota' })
      expect(resultado.ls).toBe(false)
      expect(resultado.idb).toBe(true)
      expect(resultado.ok).toBe(true)
    } finally {
      Storage.prototype.setItem = originalSetItem
    }
  })

  it('fallo de apertura de IndexedDB: saveState reporta idb:false pero conserva ok:true por localStorage', async () => {
    const dbModule = await import('../db.js')
    const originalSaveToDexie = dbModule.saveToDexie
    const spy = vi.spyOn(dbModule, 'saveToDexie').mockResolvedValue(false)
    try {
      const { saveState } = await import('../storage.js')
      const resultado = await saveState({ marca: 'idb-caido' })
      expect(resultado.idb).toBe(false)
      expect(resultado.ls).toBe(true)
      expect(resultado.ok).toBe(true)
    } finally {
      spy.mockRestore()
      void originalSaveToDexie
    }
  })

  it('dos guardados rápidos en sucesión: la revisión más alta (el guardado más nuevo) queda como ganadora', async () => {
    const { saveState, loadStateAsync } = await import('../storage.js')
    const [r1, r2] = await Promise.all([
      saveState({ marca: 'primero' }),
      saveState({ marca: 'segundo' }),
    ])
    expect(r2.revision).toBeGreaterThan(r1.revision)
    const final = await loadStateAsync()
    // El ganador debe ser el de mayor revisión, sin importar el orden de
    // resolución de las promesas concurrentes.
    const revisionGanadora = r1.revision > r2.revision ? r1.revision : r2.revision
    const marcaEsperada = revisionGanadora === r1.revision ? 'primero' : 'segundo'
    expect(final.state.marca).toBe(marcaEsperada)
  })

  it('reset seguido de recarga: clearState() deja ambos backends vacíos y loadStateAsync no resucita datos viejos', async () => {
    const { saveState, clearState, loadStateAsync } = await import('../storage.js')
    await saveState({ marca: 'antes-del-reset' })
    const resultadoClear = await clearState()
    expect(resultadoClear.ls).toBe(true)
    const r = await loadStateAsync()
    expect(r.state).toBeNull()
    expect(r.source).toBeNull()
  })
})
