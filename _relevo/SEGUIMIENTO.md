# SEGUIMIENTO — BTMM JORNADAS (estado de relevo)

> Última actualización: 2026-09-11 20:40 por Claude Code
> Estado de la sesión: LIMPIO — LISTO PARA CONTINUAR

## 🚨 ANTES DE NADA: hubo DOS IAs a la vez y esta rama ya resolvió el choque

**Qué pasó.** Mientras esta sesión trabajaba en la rama
`claude/festive-allen-hl6igv` (PR
[#91](https://github.com/psforestal-rgb/BTMM_JORNADAS/pull/91)), otra IA (Grok)
trabajó **en paralelo sobre `main`** y construyó su propia infraestructura de
toast/undo para el mismo punto de dolor (F-P12), publicada como v1.15.0. Eso
viola `PROTOCOLO.md` §5 («una IA por vez») y produjo dos implementaciones
distintas de lo mismo.

**Cómo se resolvió**, siguiendo §5 («resolver conservando ambas entradas»):
`origin/main` se fusionó dentro de esta rama y el conflicto se resolvió a mano,
comparando las dos versiones función por función. Ver la decisión del
2026-09-11 «Resolución del choque con la rama `main` de Grok» más abajo. El
historial y las decisiones de Grok se conservan íntegros en este documento.

**Dónde está el trabajo.** Sigue en la rama
`claude/festive-allen-hl6igv` y en el PR
[#91](https://github.com/psforestal-rgb/BTMM_JORNADAS/pull/91), que ahora ya
contiene `main` fusionado. **El deploy a `gh-pages` solo lo dispara `main`**, así
que hasta fusionar el PR el sitio publicado se queda en v1.15.0.

Si hiciera falta fusionar a mano en lugar de por el PR:

```bash
git fetch origin
git checkout main && git pull --rebase origin main
git merge --no-ff origin/claude/festive-allen-hl6igv
npm ci --ignore-scripts && npm test    # debe dar 364/364
git push origin main
```

**Regla para la próxima sesión:** antes de tocar nada, `git fetch origin` y
comprueba si `main` se movió. Si te toca una rama propia, parte de la que diga
este bloque, nunca de `main` a secas.

## ▶️ SIGUIENTE ACCIÓN (léeme primero)

**FASE 1 ESTÁ CERRADA.** Arranca **FASE 2**, y el primer bloque es
**`[F2][RF-DATOS]` completar el CRUD de funcionarios (RF1–RF9)**.

Auditado contra el código actual, esto es lo que YA existe y lo que falta:

| Req | Qué pide | Estado | Dónde |
|-----|----------|--------|-------|
| RF1 | Agregar funcionarios | ✅ existe | `Funcionarios.jsx` + `ModalFuncionario.jsx` |
| RF2 | Eliminar funcionarios | ✅ existe, con «Deshacer» | `Funcionarios.jsx:79` |
| RF6 | Búsqueda y filtrado | ✅ existe | `Funcionarios.jsx`, 6 filtros + orden + texto |
| RF7 | Asistente «Crear Rápido» de 3 pasos | ✅ **hecho en esta sesión** | `ModalFuncionario.jsx`, wizard de 3 pasos |
| RF5 | Exportar lista | 🟡 parcial | `Datos.jsx` exporta JSON completo; **falta CSV solo de funcionarios** |
| RF8 | Confirmación con respaldo automático | 🟡 parcial | `Datos.jsx:102` ya descarga respaldo antes de restaurar; **falta antes de importar funcionarios** |
| RF3 | Validación en tiempo real | 🔴 falta | `ModalFuncionario.jsx` solo rechaza nombre vacío (`Funcionarios.jsx:69`) |
| RF4 | Importación masiva CSV con vista previa | 🔴 falta | no existe nada de CSV en `src/` |
| RF9 | Historial de cambios | 🔴 falta | no existe |

Orden sugerido, de menor a mayor riesgo:

1. **RF3 — validación en tiempo real.** Es lo que menos toca y más se nota.
   Validar al salir del campo (`onBlur`), no al teclear: cédula con formato
   costarricense, correo, y la regla de negocio real de que jornada
   Acumulativa sin resolución y sin ONG ya se marca en la tabla
   (`Funcionarios.jsx:220`). Mostrar el error bajo el campo con
   `aria-invalid` y `aria-describedby`. **No bloquear el guardado por nada que
   no sea el nombre vacío**: la app es de campo y los datos llegan
   incompletos; el wizard promete explícitamente que se puede guardar y
   completar después (clave `modalFuncionario.pasos.soloNombre`).
2. **RF5 — exportar CSV de funcionarios.** Reutilizar `descargarArchivo()` de
   `Datos.jsx:19`; separar la función de serialización a `src/lib/csv.js` para
   que RF4 la comparta. Cuidado con comas, comillas y tildes: exportar con BOM
   UTF-8 o Excel en español lo abre mal.
3. **RF4 + RF8 — importar CSV con vista previa y respaldo.** Reutilizar el
   patrón ya probado de `Datos.jsx:252`: modal que muestra qué va a entrar y
   qué reemplaza, y respaldo automático descargado ANTES de aplicar. Decidir y
   registrar en «Decisiones» si el import añade o reemplaza, y cómo se
   resuelven cédulas repetidas.
4. **RF9 — historial de cambios.** Es el más caro y toca persistencia; dejarlo
   para el final y leer antes la advertencia sobre la doble persistencia.

Bloques siguientes de Fase 2, ya explorados para que no haya sorpresas:

- **`[F2][RP-PUESTOS]` CRUD de puestos (RP1–RP8).** `src/data/puestos.js` son
  29 líneas de datos fijos que importan **10 módulos**. Dos de esos importes
  son el problema real: `src/data/opciones.js` y `src/config/reglas.js:14`
  construyen constantes **en tiempo de importación**, así que no basta con
  mover los puestos a estado: hay que convertir esos consumidores en funciones
  o llevarlos al contexto. `REGLAS_DEFAULT.puestosRequierenVisitantesDiario`
  (`reglas.js:22`) es donde vive hoy el «requiereVisit» de RP5, por nombre de
  puesto: si los puestos pasan a ser editables, renombrar uno rompe esa lista.
  Dexie está en `version(1)` y `SCHEMA_VERSION = 1` (`src/lib/schemaVersion.js`),
  que debe subir a la vez que el esquema; los dos backends deben coincidir o
  `loadFromDexie()` rechaza snapshots válidos.
- **`[F2][RT-TELETRABAJO]` rol `E` (RT1–RT8).** Toca `src/domain/roles.js`,
  `conflictos.js` y `cobertura.js`, que son dominio con 25, 3 y 3 pruebas
  respectivamente. Añadir el código a las pruebas existentes, no crear un
  módulo paralelo.

## 📍 Estado del repo al relevar

- Versión: **1.18.0** — Rama: **`claude/festive-allen-hl6igv`** (9 commits por
  delante de `main`) — Último commit: `a4af5aa` «[F1][UX-WIZARD] el formulario
  de funcionario pasa a tres pasos»
- Tests: ✅ **364/364** (45 archivos) — Build: ✅ `npm run build` limpio,
  base path `/BTMM_JORNADAS/` intacto, `dist/version.json` = 1.18.0

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
- `a4af5aa` `[F1][UX-WIZARD]` — el formulario de funcionario pasa a 3 pasos.
  **Con esto Fase 1 queda cerrada** y de paso queda hecho RF7 de Fase 2.

Tests: de 290 a 364 (+74). Ninguna función existente se eliminó.

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
| A-P3 | F-P2 / F-P10 | Modal de Funcionario demasiado largo, sin pasos | ✅ **RESUELTO** | `ModalFuncionario.jsx`: 3 pasos con indicador y pestañas |
| A-P1 | — | Sobrecarga cognitiva en Funcionarios | ✅ **RESUELTO** | filtros visibles + formulario en 3 pasos |
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

1. `[F2][RF-DATOS]` — completar RF1–RF9 de funcionarios. Ver «SIGUIENTE ACCIÓN».
2. `[F2][RP-PUESTOS]` — CRUD de puestos con versionado de schema Dexie y
   migración con respaldo (RP1–RP8).
3. `[F2][RT-TELETRABAJO]` — rol `E` Teletrabajo con su lógica de conflictos y
   cobertura (RT1–RT8).
4. FASE 3 — Vista Minimalista de Funcionario (VF1–VF8) reutilizando el cálculo
   de dominio existente para el Banco de Tiempo, virtualización de Roles (A1),
   estado de tablas y filtros en la URL, exportación CSV (B1).
5. Sueltos de menor prioridad, ya auditados: atajos de teclado (A-P12) y estado
   «cargando» en import/export (A-P17).

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
- 2026-09-11 (Grok, conservada): IDs P1–P18 canónicos = `docs/DOCUMENTO_FINAL_MEJORAS.md`.
  Coincide con la decisión de Claude Code sobre la numeración canónica; se
  mantienen las dos por ser un registro append-only.
- 2026-09-11 (Grok, conservada): Eliminar funcionario/reposición = inmediato +
  toast «Deshacer» 10 s. Los reseteos de Datos/Configuración siguen con modal.
  Coincide con la decisión equivalente de Claude Code.
- 2026-09-11 (Grok, conservada): «PR #91 solapa Toast/undo. No fusionar sin
  rebase contra 1.15.0.» — **cumplida**: `main` se fusionó dentro de la rama del
  PR el 2026-09-11 a las 20:40.
- 2026-09-11 (Claude Code): **Resolución del choque con la rama `main` de Grok.**
  Las dos implementaciones de toast/undo se compararon función por función y se
  conservó la de esta rama, incorporando lo mejor de la de Grok:
  - `src/lib/undo.js` es una **fusión real**: la versión de esta rama con las dos
    guardas más estrictas de Grok, que eran mejores — rechazar un ítem sin `id`
    (rompería el borrado por id y las claves de React) y devolver intacta una
    lista que no sea un array (sustituirla por un único elemento sería pérdida
    silenciosa de datos). Las pruebas de ambas partes quedan fundidas en un solo
    archivo.
  - `ToastContext.jsx` y `Toast.jsx`: se conserva la versión de esta rama porque
    es un superconjunto (avisos persistentes con `duracion: 0`, línea de detalle,
    regiones vivas permanentes `status`/`alert`, pausa también al enfocar con
    teclado, atajos `exito`/`error`/`aviso`/`conDeshacer`, 23 pruebas) y porque
    ya está cableada en los cinco puntos de borrado de la app.
  - Motivo técnico añadido: `src/ui/Toast.jsx` de Grok llamaba a
    `t("toast.deshacer")` y `t("toast.cerrar")`, claves que **no existían** en su
    `src/i18n/es-CR.js`; el diccionario devuelve la clave cuando falta, así que
    esos botones habrían mostrado literalmente «toast.deshacer» y «toast.cerrar».
  - Toda la «SIGUIENTE ACCIÓN» que Grok dejó pendiente (claves i18n, cableado en
    Funcionarios y Reposición, test que pasa a «elimina y Deshacer restaura» con
    conteo `2/2`, pruebas del contexto, y P1 chips) **ya estaba hecha** en esta
    rama; no se rehízo nada.
- 2026-09-11 (Claude Code): El formulario de funcionario es un wizard de 3
  pasos, pero **«Guardar» está disponible desde el paso 1**: solo el nombre es
  obligatorio y la promesa al usuario está escrita en la clave
  `modalFuncionario.pasos.soloNombre`. Motivo: los datos llegan incompletos del
  campo; obligar a recorrer 3 pasos para anotar un nombre es peor que el
  formulario largo que se quiso arreglar. **RF3 (validación en tiempo real) no
  debe bloquear el guardado** por nada que no sea el nombre vacío.
- 2026-09-11 (Claude Code): Al **crear**, una pestaña de paso no visitada está
  deshabilitada; al **editar** se puede saltar a cualquier paso desde el
  inicio, porque quien edita viene a cambiar un campo concreto.
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
- **Discrepancia corregida (PROTOCOLO §5).** El seguimiento de Grok decía
  «`useToast()` es noop si no hay provider». En la implementación que sobrevivió
  al merge **no es así: lanza**. Ver la advertencia siguiente.
- `npm ci` contra el registry interno puede devolver 502 (observado por Grok);
  en ese caso, `npm ci --registry https://registry.npmjs.org`. En este entorno
  el problema fue otro: `sharp` falla al compilar, por lo que se usa
  `npm ci --ignore-scripts`. Prueba una cosa y luego la otra según el fallo.
- Grok observó que su entorno **no tenía credenciales para `git push` por HTTPS**
  y perdió trabajo ya escrito por eso. Si tu entorno tiene la misma limitación,
  resuélvelo ANTES de escribir código, no después.
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
- **`src/data/puestos.js` no se puede volver dinámico sin tocar dos importes en
  tiempo de carga**: `src/data/opciones.js` y `src/config/reglas.js:14`
  construyen constantes al importar. Además
  `REGLAS_DEFAULT.puestosRequierenVisitantesDiario` referencia puestos **por
  nombre**, así que renombrar un puesto rompería la cobertura crítica.
- Dexie está en `version(1)` y `SCHEMA_VERSION = 1`
  (`src/lib/schemaVersion.js`). **Los dos backends deben coincidir siempre**: un
  desajuste hace que `loadFromDexie()` rechace snapshots válidos. Subir el
  esquema implica subir ambos y migrar con respaldo previo.
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

### 2026-09-11 — Claude Code — **FASE 1 CERRADA.** Fase 0 (baseline 290/290 + auditoría de los 18 puntos de dolor) y los 5 quick wins de Fase 1 entregados: avisos con «Deshacer» en los 5 puntos de borrado, filtros visibles, objetivos táctiles de 48 px con test que los protege, ayuda contextual y el formulario de funcionario en 3 pasos (que además cubre RF7 de Fase 2). De 290 a 364 tests. Commits `5a4c83f`…`a4af5aa` en la rama `claude/festive-allen-hl6igv`, abiertos en el PR [#91](https://github.com/psforestal-rgb/BTMM_JORNADAS/pull/91) y pendientes de fusionar en `main`. Al cerrar se fusionó `origin/main` (infra toast/undo de Grok, v1.15.0) dentro de la rama, resolviendo a mano los 7 archivos en conflicto.

### 2026-09-11 — Grok — Fase 0 + auditoría + infra toast/undo v1.15.0. Cableado de vistas pendiente de push.

Auditoría: P1 vigente; P2 vigente; P3/P11 parcial; P4/P12 infra lista, vistas aún con modal; P5 vigente; P6 parcial.

> Nota de Claude Code (2026-09-11 20:40): esta sesión de Grok corrió en paralelo
> sobre `main`, contra `PROTOCOLO.md` §5. Su infraestructura se fusionó dentro
> de la rama del PR #91; el detalle está en «Decisiones vigentes». Su entrada se
> conserva íntegra por exigencia del propio §5.

### 2026-09-11 — ZCode (preparación) — Creación del sistema de relevo `_relevo/`. Sin cambios de código.
