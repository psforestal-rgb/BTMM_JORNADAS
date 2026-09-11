# SEGUIMIENTO — BTMM JORNADAS (estado de relevo)

> Última actualización: 2026-09-11 por ZCode (sesión de preparación del sistema de relevo)
> Estado de la sesión: LIMPIO — LISTO PARA CONTINUAR

## ▶️ SIGUIENTE ACCIÓN (léeme primero)

Fase 0 — Verificación del punto de partida (una sola vez):

1. `npm ci --ignore-scripts` (el flag evita que falle `sharp` por el proxy; solo se usa
   para generar assets PWA, no afecta build/test) y `npm test` para confirmar el baseline
   de tests. Anota el número exacto en «Estado del repo» de la próxima entrada.
2. Auditar los puntos de dolor P1–P6 del diagnóstico (`docs/ANALISIS_UX_UI_MEJORAS.md`)
   contra el código ACTUAL en `src/` — varios ya fueron resueltos por los sprints de
   móvil/contraste (secciones colapsadas por defecto, tema movido a Configuración,
   legibilidad móvil). Documentar cuáles siguen vigentes, aquí y en la entrada del día.
3. Elegir el primer quick win vigente de la FASE 1 (ver `PROTOCOLO.md` §7; se sugiere
   empezar por P12 → undo con snackbar), registrarlo en «SIGUIENTE ACCIÓN» antes de
   empezar a codificar.

## 📍 Estado del repo al relevar

- Versión: 1.14.17 — Rama: `main` — Último commit: `4ee1a89` «Agrega documentos de
  mejoras: DOCUMENTO_FINAL_MEJORAS.md, MEJORAS_PROPUESTAS.md, ANALISIS_UX_UI_MEJORAS.md»
- Tests: por verificar al arrancar (baseline histórico conocido: 185/185 en v1.14.9;
  probablemente difiere ahora) — Build: no verificado

## ✅ Hecho en esta sesión

- Creada la carpeta `_relevo/` con `PROTOCOLO.md`, `SEGUIMIENTO.md` y `PROMPT_NUEVA_IA.md`.
- No se tocó código de la app (`src/`); no corresponde bump de versión.

## 🔜 Pendiente (en orden)

1. Fase 0 (ver «SIGUIENTE ACCIÓN»).
2. FASE 1 — Quick wins UX (ver `PROTOCOLO.md` §7).
3. FASE 2 — CRUD funcionarios/puestos + rol E Teletrabajo.
4. FASE 3 — Vista Minimalista de Funcionario, virtualización Roles, estado en URL, export CSV.

## 🧠 Decisiones vigentes (append-only; no revertir sin registrar el reemplazo)

- 2026-09-11: Trabajo por fases según `PROTOCOLO.md` §7. Fuera de alcance hasta decidir
  si existe backend: A3 (sync/heartbeat), RF10 (auth), C4 (API), i18n multi-idioma.
- 2026-09-11: El Banco de Tiempo (VF3) DEBE reutilizar la función de dominio existente;
  prohibido un segundo cálculo paralelo.
- 2026-09-11: Flujo de trabajo directo sobre `main` (push = deploy), con la regla de no
  pushear `main` con tests en rojo; trabajo a medias se guarda en rama `relevo-wip`.

## ⚠️ Advertencias / trampas conocidas

- `npm ci` normal falla por el proxy al compilar `sharp`; usar `npm ci --ignore-scripts`.
- Base path `/BTMM_JORNADAS/` en `vite.config.js` — no tocar; afecta preview y deploy.
- Los `Modal` (`src/ui/Modal.jsx`) se renderizan con **portal a `document.body`**
  (un `backdrop-filter` en el topbar descolocaba los modales fixed). Mantener el portal.
- Dual persistence localStorage + Dexie sin política de conflicto definida: antes de
  tocar persistencia (A2/RP3), definir y documentar cuál gana ante conflicto.
- `HANDOFF.md`, `PLAN_IMPLEMENTACION.md`, `PROMPT_REVISION.md` (raíz) son históricos;
  la planificación vigente es `PROTOCOLO.md` §7 + `docs/DOCUMENTO_FINAL_MEJORAS.md`.

## 📜 Historial de sesiones (nuevo arriba)

### 2026-09-11 — ZCode (preparación) — Creación del sistema de relevo `_relevo/`. Sin cambios de código.
