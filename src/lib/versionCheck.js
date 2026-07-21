import { APP_VERSION, APP_VERSION_URL, APP_COMMIT } from './appVersion.js'

const DEFAULT_INTERVAL_MS = 5 * 60 * 1000

async function fetchRemoteVersion() {
  const url = `${APP_VERSION_URL}?t=${Date.now()}`
  const res = await fetch(url, { cache: 'no-store', headers: { 'Cache-Control': 'no-cache' } })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

export function startVersionCheck({ intervalMs = DEFAULT_INTERVAL_MS, onOutdated } = {}) {
  let stopped = false
  let timer = null

  // La primera verificación ocurre al abrir la app (`immediate`): permite que
  // el consumidor auto-actualice en ese momento (recarga segura) en lugar de
  // solo mostrar el aviso. Las verificaciones periódicas o por foco no lo son.
  let primera = true

  const check = async () => {
    if (stopped) return
    // Se consume `immediate` en la PRIMERA llamada (el chequeo de montaje),
    // aunque sea sin conexión: si la app se abrió offline, al reconectar el
    // chequeo ya NO se considera de apertura, así que se mostrará el aviso en
    // lugar de auto-recargar a mitad de sesión.
    const immediate = primera
    primera = false
    if (typeof navigator === 'undefined' || !navigator.onLine) return
    try {
      const remote = await fetchRemoteVersion()
      // Compara por commit (no solo por número de versión) para detectar
      // cualquier despliegue nuevo, incluso cuando package.json no cambió.
      if (remote?.commit && remote.commit !== APP_COMMIT) {
        onOutdated?.({ local: APP_VERSION, remote: remote.version, remoteBuildTime: remote.buildTime, remoteCommit: remote.commit, immediate })
      }
    } catch {
      // silencioso: sin red o JSON ausente; reintenta en el siguiente tick.
    }
  }

  const schedule = () => {
    if (stopped) return
    timer = setTimeout(async () => {
      await check()
      schedule()
    }, intervalMs)
  }

  const onVisible = () => { if (document.visibilityState === 'visible') check() }
  const onOnline = () => check()

  document.addEventListener('visibilitychange', onVisible)
  window.addEventListener('online', onOnline)

  check()
  schedule()

  return () => {
    stopped = true
    if (timer) clearTimeout(timer)
    document.removeEventListener('visibilitychange', onVisible)
    window.removeEventListener('online', onOnline)
  }
}
