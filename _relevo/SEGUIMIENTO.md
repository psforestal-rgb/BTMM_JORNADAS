# SEGUIMIENTO — BTMM JORNADAS (estado de relevo)

> Última actualización: 2026-09-11 17:20 por Claude Code
> Estado de la sesión: LIMPIO — LISTO PARA CONTINUAR

## 🚨 ANTES DE NADA: el trabajo NO está en `main`, está en un PR abierto

Esta sesión se ejecutó en un entorno que **obliga** a desarrollar en una rama
propia, así que los commits están en **`claude/festive-allen-hl6igv`** y no en
`main`. Todo pasa tests y build, pero **el deploy a `gh-pages` no se ha
disparado** porque solo lo dispara `main`.

El trabajo está en el pull request
**[#91](https://github.com/psforestal-rgb/BTMM_JORNADAS/pull/91)**. Fusionarlo
desde ahí es la vía preferida: cualquier commit nuevo que se empuje a esa rama
actualiza el mismo PR.

Si hiciera falta fusionar a mano en lugar de por el PR:

```bash
git fetch origin
git checkout main && git pull --rebase origin main
git merge --no-ff origin/claude/festive-allen-hl6igv
npm ci --ignore-scripts && npm test    # debe dar 352/352
git push origin main
```

Tras el merge, verificar que `dist/version.json` en el sitio publicado diga
**1.17.0**. Si la siguiente IA también está atada a una rama, que parta de
`claude/festive-allen-hl6igv` (o de `main` ya fusionado) y lo anote aquí.

## ▶️ SIGUIENTE ACCIÓN (léeme primero)

**FASE 1 · último quick win pendiente: `[F1][UX-WIZARD]`** — pasos en
`src/features/funcionarios/ModalFuncionario.jsx` (A-P3 / F-P2 / F-P10).
Es el único punto crítico de Fase 1 que sigue vigente y enlaza directamente con
RF7 («Crear Rápido» de 3 pasos) de Fase 2, así que conviene diseñarlo una sola
vez para las dos cosas.

Alcance propuesto, ya validado contra el código actual:

1. El modal tiene 6 secciones y 18 campos en un scroll de `max-h-[70vh]`
   (`ModalFuncionario.jsx:50`). Convertirlo en 3 pasos:
   - Paso 1 «Quién»: nombre, cédula, correo (sección Identificación).
   - Paso 2 «Dónde y cómo»: cargo, puesto operativo, condición, estado,
     jornada, modalidad.
   - Paso 3 «Respaldo»: resolución, contrato, vencimiento, ingreso, atributos,
     observaciones.
2. Solo el nombre es obligatorio hoy (`Funcionarios.jsx:69` descarta el guardado
   si viene vacío). Mantener eso: el paso 1 basta para crear, los pasos 2 y 3
   deben poder quedar a medias. **No** introducir validaciones nuevas en esta
   tarea; F-P13/F-P14 (validación en tiempo real) van aparte.
3. Indicador «Paso X de 3» + botones Atrás/Siguiente/Guardar, con `aria-current`
   en el paso activo. Al editar un funcionario existente, permitir saltar
   directo a cualquier paso (no obligar a recorrerlos).
4. Conservar los 4 paneles de `<Ayuda>` ya existentes en sus secciones.
5. `ModalFuncionario.test.jsx` comprueba que existen las 6 cabeceras de sección
   y que el foco no se pierde al teclear en Nombre: **ambas pruebas deben
   seguir pasando o adaptarse conscientemente**, no borrarse.
6. Bump de `version` en `package.json`.

Después de esa tarea, Fase 1 queda cerrada y arranca Fase 2 (CRUD de
funcionarios y puestos, rol `E` Teletrabajo).

## 📍 Estado del repo al relevar

- Versión: **1.17.0** — Rama: **`claude/festive-allen-hl6igv`** (6 commits por
  delante de `main`) — Último commit: `22dfd87` «[F1][UX-TOOLTIP] ayuda
  contextual en el formulario de funcionario»
- Tests: ✅ **352/352** (45 archivos) — Build: ✅ `npm run build` limpio,
  base path `/BTMM_JORNADAS/` intacto, `dist/version.json` = 1.17.0

## ✅ Hecho en esta sesión

- `5a4c83f` `[FASE0][AUDIT]` — baseline real de tests fijado en **290/290** y
  auditoría de los 18 puntos de dolor contra el código, con evidencia de archivo
  y línea. 7 ya estaban resueltos por los sprints móvil/contraste.
- `a361b1c` `[F1][UX-TOAST]` — sistema de avisos (`src/context/ToastContext.jsx`
  + `src/ui/Toast.jsx`) con acción «Deshacer», y borrado reversible de
  funcionarios en lugar del modal de confirmación.
- `058d26d` `[F1][UX-UNDO]` — el mismo «Deshacer» en los otros cuatro puntos de
  borrado (reposiciones y actividades), con `src/lib/undo.js` y el hook
  `useEliminarActividad`.
- `5c552f0` `[F1][UX-CHIPS]` — filtros de Funcionarios visibles desde 768 px,
  con `aria-pressed`; corrige de paso un fallo real de `src/lib/useMobile.js`.
- `0ab797c` `[F1][UX-TOUCH]` — objetivos táctiles de 48 px en 41 botones, más un
  test estático que impide que vuelvan a encogerse.
- `22dfd87` `[F1][UX-TOOLTIP]` — `src/ui/Ayuda.jsx` y ayuda contextual por
  sección en el formulario de funcionario, con textos tomados del glosario.

Tests: de 290 a 352 (+62). Ninguna función existente se eliminó.

### 🔎 Auditoría de puntos de dolor (2026-09-11, actualizada al cierre)

⚠️ **Los dos documentos usan numeraciones `P` distintas e incompatibles.**
`PROTOCOLO.md` §7 usa la de `docs/DOCUMENTO_FINAL_MEJORAS.md` (18 puntos);
`docs/ANALISIS_UX_UI_MEJORAS.md` tiene otra (mismo rango, distinto significado).
Se citan ambas: **A-Pn** = ANALISIS_UX_UI_MEJORAS.md · **F-Pn** =
DOCUMENTO_FINAL_MEJORAS.md (la de PROTOCOLO §7, canónica).

| A-Pn | F-Pn | Problema | Estado | Dónde |
|------|------|----------|--------|-------|
| A-P5 | F-P4 | Falta de feedback visual | ✅ **RESUELTO** | `src/context/ToastContext.jsx`, `src/ui/Toast.jsx` |
| — | F-P12 | Falta de deshacer en acciones destructivas | ✅ **RESUELTO** | `src/lib/undo.js`, `src/features/actividades/useEliminarActividad.js` |
| A-P2 | F-P1 | Filtros ocultos por defecto | ✅ **RESUELTO** | `Funcionarios.jsx`, visibles desde `md` |
| A-P7 | F-P8 | Faltan tooltips contextuales | ✅ **RESUELTO** | `src/ui/Ayuda.jsx` + 4 secciones de `ModalFuncionario.jsx` |
| A-P6 | F-P9 | Controles inconsistentes / demasiado pequeños | ✅ **RESUELTO** | 41 botones a 48 px + `src/lib/__tests__/objetivosTactiles.test.js` |
| A-P3 | F-P2 / F-P10 | Modal de Funcionario demasiado largo, sin pasos | 🔴 **VIGENTE** | `ModalFuncionario.jsx`: 6 secciones, 18 campos → `[F1][UX-WIZARD]` |
| A-P1 | — | Sobrecarga cognitiva en Funcionarios | 🟡 **PARCIAL** | mejora bastante al partir el modal en pasos |
| A-P14 | F-P13 / F-P14 | Validación solo al guardar, errores poco descriptivos | 🟡 **VIGENTE** | `ModalFuncionario.jsx` no valida nada salvo nombre vacío |
| A-P8 | F-P5 | Tabla de Roles muy densa | 🟡 **VIGENTE** | `RolesMensualGrid.jsx` (873 líneas) → A1, Fase 3 |
| A-P12 | F-P14 / F-P17 | Sin atajos de teclado | 🟡 **VIGENTE** | no hay `Ctrl+F` ni navegación por celdas |
| A-P17 | — | Sin estado «cargando» al guardar | 🟢 **MENOR** | todo es síncrono en memoria; solo aplicaría a import/export |
| A-P4 | — | Navegación no intuitiva en Roles | ✅ RESUELTO antes de esta sesión | `Roles.jsx:156-265` |
| A-P10 | — | «Restaurar mes» poco descubrible | ✅ RESUELTO / no aplica | vive en `Datos.jsx` y `Configuracion.jsx` |
| — | F-P3 / F-P11 | Navegación difícil de recorrer | ✅ RESUELTO antes de esta sesión | `Sidebar.jsx`, `BottomNav.jsx` |
| — | F-P6 | Información saturada en la vista Día | ✅ RESUELTO en móvil | `DiaLayout.jsx`, `DiaResumenMovil.jsx` |
| A-P13 | F-P16 | Contraste bajo / colores poco intuitivos | ✅ RESUELTO antes de esta sesión | `ui/styles.js`, tema `hc` |
| A-P18 | F-P18 | Texto pequeño en móvil | ✅ RESUELTO antes de esta sesión | sprint móvil, commit `f951d3e` |

## 🔜 Pendiente (en orden)

1. `[F1][UX-WIZARD]` — ver «SIGUIENTE ACCIÓN». Cierra Fase 1.
2. FASE 2 — CRUD de funcionarios (RF1–RF9, import CSV con preview y respaldo
   automático), CRUD de puestos con versionado de schema Dexie (RP1–RP8),
   asistente «Crear Rápido» (RF7, sale del wizard del punto 1), rol `E`
   Teletrabajo (RT1–RT8).
3. FASE 3 — Vista Minimalista de Funcionario (VF1–VF8) reutilizando el cálculo
   de dominio existente para el Banco de Tiempo, virtualización de Roles (A1),
   estado de tablas y filtros en la URL, exportación CSV (B1).
4. Sueltos de menor prioridad, ya auditados: validación en tiempo real
   (F-P13/F-P14) y atajos de teclado (A-P12).

## 🧠 Decisiones vigentes (append-only; no revertir sin registrar el reemplazo)

- 2026-09-11: Trabajo por fases según `PROTOCOLO.md` §7. Fuera de alcance hasta
  decidir si existe backend: A3 (sync/heartbeat), RF10 (auth), C4 (API),
  i18n multi-idioma.
- 2026-09-11: El Banco de Tiempo (VF3) DEBE reutilizar la función de dominio
  existente; prohibido un segundo cálculo paralelo.
- 2026-09-11: Flujo de trabajo directo sobre `main` (push = deploy), con la
  regla de no pushear `main` con tests en rojo; trabajo a medias se guarda en
  rama `relevo-wip`.
- 2026-09-11 (Claude Code): **Numeración `P` canónica = la de `PROTOCOLO.md` §7
  / `docs/DOCUMENTO_FINAL_MEJORAS.md` (F-Pn)**. Al citar un punto de dolor se
  antepone `A-` o `F-` según el documento del que venga. Motivo: los dos
  documentos reusan P1–P18 con significados distintos.
- 2026-09-11 (Claude Code): **Baseline de tests al arrancar la sesión = 290/290**
  (hoy 352/352). Los números de `docs/DOCUMENTO_FINAL_MEJORAS.md` («126/126») y
  del historial («185/185») están obsoletos.
- 2026-09-11 (Claude Code): «Undo con snackbar en vez de confirmaciones» (F-P12)
  se aplica **solo a acciones reversibles en memoria** (eliminar funcionario,
  actividad, reposición): borrado inmediato y «Deshacer» durante 10 s que
  restaura en el mismo índice. Las acciones que tocan la persistencia completa
  (`Datos.jsx` restaurar respaldo, `Configuracion.jsx` restaurar
  predeterminados) **conservan su modal de confirmación**.
- 2026-09-11 (Claude Code): Al retirar una confirmación, **el texto que
  advertía del alcance no se pierde**: pasa al detalle del aviso. Se hizo así
  con «desaparece para todos los funcionarios asignados».
- 2026-09-11 (Claude Code): La ayuda contextual (F-P8) es **revelación en línea**
  (`src/ui/Ayuda.jsx`), no un tooltip flotante: el tooltip no funciona al tacto,
  se recorta dentro de los contenedores con scroll y obliga a duplicar el texto
  para lector de pantalla. Va **por sección**, no por campo.
- 2026-09-11 (Claude Code): Los textos de ayuda normativos se copian de
  `docs/GLOSARIO.md`. Si cambia el glosario, cambian las claves
  `modalFuncionario.ayuda.*` de `src/i18n/es-CR.js`.
- 2026-09-11 (Claude Code): Objetivo táctil mínimo = **48 px** (`min-h-touch`).
  Las dos excepciones vivas (cuadrícula de Roles a 40 px y tarjeta de actividad
  dentro de una celda del mes) están comentadas en el código y registradas en
  `src/lib/__tests__/objetivosTactiles.test.js`. **Para añadir una excepción hay
  que registrarla ahí con su motivo**, no relajar el test.

## ⚠️ Advertencias / trampas conocidas

- **El trabajo de esta sesión vive en `claude/festive-allen-hl6igv`** y en el PR
  [#91](https://github.com/psforestal-rgb/BTMM_JORNADAS/pull/91), no en `main`;
  hasta que se fusione, el sitio publicado sigue en 1.14.17.
- `npm ci` normal falla por el proxy al compilar `sharp`; usar
  `npm ci --ignore-scripts`.
- Base path `/BTMM_JORNADAS/` en `vite.config.js` — no tocar.
- Los `Modal` (`src/ui/Modal.jsx`) y el viewport de avisos (`src/ui/Toast.jsx`)
  se renderizan con **portal a `document.body`**: un `backdrop-filter` en un
  ancestro descoloca cualquier `position: fixed`. Todo overlay nuevo debe hacer
  lo mismo.
- **`useToast()` lanza si falta `<ToastProvider>`.** Cualquier test que renderice
  una vista que borre o guarde debe envolverla en `<ToastProvider>` (ver
  `src/features/funcionarios/__tests__/Funcionarios.test.jsx`). Es intencional:
  un fallo ruidoso es mejor que avisos que desaparecen en silencio.
- El aviso de «Deshacer» dura 10 s y se pausa al pasar el ratón o al enfocarlo
  con el teclado. Pasado ese tiempo el borrado es definitivo y ya no hay
  confirmación previa: tenerlo en cuenta al añadir borrados nuevos.
- `src/lib/__tests__/objetivosTactiles.test.js` analiza el JSX como texto. Un
  botón escrito de forma inusual (por ejemplo con el `className` calculado en
  una variable aparte) se le escapa; no es una garantía absoluta, es una red.
- Dual persistence localStorage + Dexie sin política de conflicto definida:
  antes de tocar persistencia (A2/RP3), definir y documentar cuál gana.
- En `ModalFuncionario.jsx`, `Field` y `Seccion` están definidos a nivel de
  módulo a propósito: dentro del componente cambiaban de identidad cada render
  y el input perdía el foco al teclear. No moverlos adentro.
- `src/features/funcionarios/__tests__/Funcionarios.test.jsx` usa
  `require("react")` dentro del componente `Probe`; funciona bajo Vitest pero es
  frágil si se migra a ESM puro.
- `HANDOFF.md`, `PLAN_IMPLEMENTACION.md`, `PROMPT_REVISION.md` (raíz) son
  históricos. `docs/DOCUMENTO_FINAL_MEJORAS.md` dice «126/126 pruebas»: obsoleto.

## 📜 Historial de sesiones (nuevo arriba)

### 2026-09-11 — Claude Code — Fase 0 cerrada (baseline 290/290 + auditoría de los 18 puntos de dolor) y 4 de los 5 quick wins de Fase 1 entregados: avisos con «Deshacer» en los 5 puntos de borrado, filtros visibles, objetivos táctiles de 48 px con test que los protege, y ayuda contextual. De 290 a 352 tests. Commits `5a4c83f`…`22dfd87` en la rama `claude/festive-allen-hl6igv`, abiertos en el PR [#91](https://github.com/psforestal-rgb/BTMM_JORNADAS/pull/91) y pendientes de fusionar en `main`.

### 2026-09-11 — ZCode (preparación) — Creación del sistema de relevo `_relevo/`. Sin cambios de código.
