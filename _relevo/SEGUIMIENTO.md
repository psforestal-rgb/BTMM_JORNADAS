# SEGUIMIENTO — BTMM JORNADAS (estado de relevo)

> Última actualización: 2026-09-11 18:05 por Claude Code (sesión Fase 0 + Fase 1)
> Estado de la sesión: EN CURSO

## ▶️ SIGUIENTE ACCIÓN (léeme primero)

**FASE 1 · quick win elegido: `[F1][UX-TOAST]` sistema de feedback (Toast/snackbar) con
acción «Deshacer».** Es el punto de dolor crítico más vigente (ver auditoría abajo: no
existe NINGÚN toast/snackbar en `src/`) y es prerrequisito de todo lo demás de Fase 1.

Alcance exacto de la tarea en curso:

1. `src/context/ToastContext.jsx` — nuevo. `ToastProvider` + hook `useToast()` con API
   `mostrar({ mensaje, tipo, accion, duracion })` y `cerrar(id)`. Cola de máx. 3, cierre
   automático, pausa al enfocar/hover, `role="status"` + `aria-live="polite"`
   (`assertive` para `tipo: "error"`).
2. `src/ui/Toast.jsx` — nuevo. Viewport visual (portal a `document.body`, igual que
   `Modal.jsx`), sobre la `BottomNav` en móvil.
3. `src/i18n/es-CR.js` — grupo `toast.*` + textos de eliminación/restauración.
4. `src/App.jsx` — envolver `AppShell` con `ToastProvider`.
5. `src/features/funcionarios/Funcionarios.jsx` — eliminar funcionario pasa de modal de
   confirmación bloqueante a borrado inmediato + toast «Deshacer» (restaura en el MISMO
   índice). Toast de confirmación también al guardar.
6. Tests: `src/ui/__tests__/Toast.test.jsx` (nuevo) y actualizar el bloque
   «Funcionarios — eliminación con confirmación» de
   `src/features/funcionarios/__tests__/Funcionarios.test.jsx`.
7. Bump de `version` en `package.json` (toca `src/`).

Después de esto, siguiente en la fila: `[F1][UX-CHIPS]` filtros visibles como chips en
Funcionarios a partir de `sm:` conservando el `<details>` en móvil (ver «Pendiente»).

## 📍 Estado del repo al relevar

- Versión: 1.14.17 — Rama: `main` — Último commit: `4e8da66` «docs(relevo): protocolo de
  relevo entre IAs (PROTOCOLO, SEGUIMIENTO, PROMPT_NUEVA_IA)»
- Tests: ✅ **290/290** (39 archivos, `npm test`, 12 s) — Build: no verificado aún

## ✅ Hecho en esta sesión

- Fase 0.1 — baseline de tests fijado: **290/290** con `npm ci --ignore-scripts` + `npm test`.
  (El histórico de 185/185 y el «126/126» de `docs/DOCUMENTO_FINAL_MEJORAS.md` están obsoletos.)
- Fase 0.2 — auditoría de los puntos de dolor contra el código actual (tabla abajo).
- Fase 0.3 — quick win elegido y registrado en «SIGUIENTE ACCIÓN».

### 🔎 Auditoría de puntos de dolor contra el código actual (2026-09-11)

⚠️ **Los dos documentos usan numeraciones `P` distintas e incompatibles.** `PROTOCOLO.md` §7
usa la de `docs/DOCUMENTO_FINAL_MEJORAS.md` (18 puntos); `docs/ANALISIS_UX_UI_MEJORAS.md`
tiene otra (18 puntos, mismo rango, distinto significado). En esta tabla se citan ambas:
**A-Pn** = ANALISIS_UX_UI_MEJORAS.md · **F-Pn** = DOCUMENTO_FINAL_MEJORAS.md (la de PROTOCOLO §7).

| A-Pn | F-Pn | Problema | Estado real | Evidencia en el código |
|------|------|----------|-------------|------------------------|
| A-P5 | F-P4 | Falta de feedback visual (toast al guardar/eliminar) | 🔴 **VIGENTE (total)** | `grep -rn "toast\|snackbar" src/` → 0 resultados. Ninguna acción confirma visualmente. |
| — | F-P12 | Falta de deshacer en acciones destructivas | 🔴 **VIGENTE** | 4 flujos de borrado con modal bloqueante y sin undo: `Funcionarios.jsx:271`, `Reposicion.jsx:366`, `ActividadesDiaModal.jsx:120`, `Dia.jsx:196` / `Planificacion.jsx:115` (estos dos borran sin confirmar). |
| A-P3 | F-P2 | Modal de Funcionario demasiado largo | 🔴 **VIGENTE** | `ModalFuncionario.jsx`: 6 secciones, 18 campos, scroll obligado (`max-h-[70vh]`). Sin wizard ni pasos (F-P10/A-P9). |
| A-P2 | F-P1 | Filtros ocultos por defecto en Funcionarios | 🟡 **VIGENTE pero deliberado** | `Funcionarios.jsx:127-155`: `<details>` con comentario que lo justifica (sprint móvil: adelantar la primera fila en el viewport). El `summary` ya muestra el filtro activo. → Resolver como chips visibles desde `sm:` y `<details>` solo en móvil; **no** revertir la decisión móvil. |
| A-P1 | — | Sobrecarga cognitiva en Funcionarios | 🟡 **PARCIAL** | Siguen 6 filtros + orden + búsqueda + toggle tabla/tarjetas + 18 campos de modal. Mejora con A-P3/F-P2. |
| A-P6 | F-P9 | Inconsistencia de controles / tamaños | 🟡 **PARCIAL** | `min-h-touch` ya es mayoritario, pero las acciones de fila de la tabla no lo usan: `Funcionarios.jsx:252-257`. |
| A-P8 | F-P5 | Tabla de Roles muy densa | 🟡 **VIGENTE** | `RolesMensualGrid.jsx` = 873 líneas, ~31 columnas, sin virtualización. Corresponde a A1/Fase 3, no a Fase 1. |
| A-P7 | F-P8 | Tooltips contextuales | 🟡 **VIGENTE** | Solo `title=` nativo (55 usos) y `HelpSheet.jsx`; no hay componente `Tooltip` accesible (táctil + teclado). |
| A-P4 | — | Navegación no intuitiva en Roles / filtros ocultos | ✅ **RESUELTO** | `Roles.jsx:156-265`: panel de selección con búsqueda, «Solo», «Ver todos», «Limpiar filtros», casillas con estado `indeterminate` y formulario «Ir a fecha». |
| A-P10 | — | «Restaurar mes» poco descubrible en Roles | ✅ **RESUELTO / no aplica** | Ya no existe en `Roles.jsx`; la restauración vive en `Datos.jsx` y `Configuracion.jsx` con confirmación y respaldo previo. |
| — | F-P3 / F-P11 | Navegación no intuitiva / difícil encontrar funciones | ✅ **RESUELTO** | `Sidebar.jsx` con 3 grupos, icono **y** etiqueta siempre visibles; `BottomNav.jsx` con 4 accesos + «Más» y etiquetas permanentes. |
| — | F-P6 | Información saturada en la vista Día | ✅ **RESUELTO en móvil** | `DiaLayout.jsx` + `DiaResumenMovil.jsx` + `BottomSheet.jsx` + FAB contextual con `IntersectionObserver`. |
| A-P13 | F-P16 | Contraste bajo / colores poco intuitivos | ✅ **RESUELTO** | `ui/styles.js`: fondos sólidos ≥7:1 (WCAG AAA) y tema `hc` en `ThemeContext.jsx`. |
| A-P18 | F-P18 | Texto pequeño / no responsive en móvil | ✅ **RESUELTO** | Sprint móvil (commit `f951d3e`). |

## 🔜 Pendiente (en orden)

1. `[F1][UX-TOAST]` — **en curso**, ver «SIGUIENTE ACCIÓN».
2. `[F1][UX-CHIPS]` — filtros de Funcionarios como chips visibles desde `sm:`, conservando
   el `<details>` colapsado en móvil (A-P2/F-P1).
3. `[F1][UX-TOUCH]` — uniformar `min-h-touch` en acciones de fila (`Funcionarios.jsx:252-257`)
   y auditar el resto de botones (A-P6/F-P9).
4. `[F1][UX-TOOLTIP]` — componente `Tooltip` accesible (táctil + teclado) para campos
   complejos, empezando por «modalidad 10x5» (A-P7/F-P8).
5. `[F1][UX-WIZARD]` — pasos en `ModalFuncionario` (A-P3/F-P2), enlaza con RF7 de Fase 2.
6. FASE 2 — CRUD funcionarios/puestos + rol `E` Teletrabajo.
7. FASE 3 — Vista Minimalista de Funcionario, virtualización de Roles, estado en URL, export CSV.

## 🧠 Decisiones vigentes (append-only; no revertir sin registrar el reemplazo)

- 2026-09-11: Trabajo por fases según `PROTOCOLO.md` §7. Fuera de alcance hasta decidir
  si existe backend: A3 (sync/heartbeat), RF10 (auth), C4 (API), i18n multi-idioma.
- 2026-09-11: El Banco de Tiempo (VF3) DEBE reutilizar la función de dominio existente;
  prohibido un segundo cálculo paralelo.
- 2026-09-11: Flujo de trabajo directo sobre `main` (push = deploy), con la regla de no
  pushear `main` con tests en rojo; trabajo a medias se guarda en rama `relevo-wip`.
- 2026-09-11 (Claude Code): **Numeración `P` canónica = la de `PROTOCOLO.md` §7 /
  `docs/DOCUMENTO_FINAL_MEJORAS.md` (F-Pn)**. Al citar un punto de dolor se antepone
  `A-` o `F-` para decir de qué documento viene. Motivo: los dos documentos reusan
  P1–P18 con significados distintos y eso ya generaba ambigüedad en las instrucciones.
- 2026-09-11 (Claude Code): **Baseline de tests = 290/290**, no 185/185 ni 126/126.
  Los números de `docs/DOCUMENTO_FINAL_MEJORAS.md` y del historial están obsoletos.
- 2026-09-11 (Claude Code): En Fase 1, «undo con snackbar en vez de confirmaciones»
  (F-P12) se aplica **solo a acciones reversibles en memoria** (eliminar funcionario,
  actividad, reposición): se borra de inmediato y el toast ofrece «Deshacer» durante
  10 s restaurando en el mismo índice. Motivo: mantiene la red de seguridad sin el
  coste de un modal por clic. Las acciones que tocan la persistencia completa
  (`Datos.jsx` restaurar respaldo, `Configuracion.jsx` restaurar predeterminados)
  **conservan su modal de confirmación**: no son deshacibles en memoria.

## ⚠️ Advertencias / trampas conocidas

- `npm ci` normal falla por el proxy al compilar `sharp`; usar `npm ci --ignore-scripts`.
- Base path `/BTMM_JORNADAS/` en `vite.config.js` — no tocar; afecta preview y deploy.
- Los `Modal` (`src/ui/Modal.jsx`) se renderizan con **portal a `document.body`**
  (un `backdrop-filter` en el topbar descolocaba los modales fixed). Mantener el portal.
  Cualquier overlay nuevo (toast incluido) debe usar el mismo portal por la misma razón.
- Dual persistence localStorage + Dexie sin política de conflicto definida: antes de
  tocar persistencia (A2/RP3), definir y documentar cuál gana ante conflicto.
- `HANDOFF.md`, `PLAN_IMPLEMENTACION.md`, `PROMPT_REVISION.md` (raíz) son históricos;
  la planificación vigente es `PROTOCOLO.md` §7 + `docs/DOCUMENTO_FINAL_MEJORAS.md`.
- `docs/DOCUMENTO_FINAL_MEJORAS.md` dice «126/126 pruebas»: **dato obsoleto**, son 290.
- En `ModalFuncionario.jsx`, `Field` y `Seccion` están definidos a nivel de módulo a
  propósito: dentro del componente cambiaban de identidad cada render y el input perdía
  el foco al teclear. No moverlos adentro.
- `src/features/funcionarios/__tests__/Funcionarios.test.jsx` usa `require("react")`
  dentro del componente `Probe`; funciona bajo Vitest pero es frágil si se cambia a ESM puro.

## 📜 Historial de sesiones (nuevo arriba)

### 2026-09-11 — Claude Code — Fase 0 cerrada: baseline 290/290 fijado y auditoría de los 18 puntos de dolor contra el código actual (7 ya resueltos por los sprints móvil/contraste, 8 vigentes). Detectada y resuelta la colisión de numeraciones `P` entre los dos documentos. Quick win elegido: `[F1][UX-TOAST]`.

### 2026-09-11 — ZCode (preparación) — Creación del sistema de relevo `_relevo/`. Sin cambios de código.
