# SEGUIMIENTO — BTMM JORNADAS (estado de relevo)

> Última actualización: 2026-09-12 00:35 por Claude Code
> Estado de la sesión: LIMPIO — LISTO PARA CONTINUAR

## 🚨 ANTES DE NADA: el PR #91 ya se fusionó; esta rama lleva lo posterior

**Historia, porque explica la forma del repositorio.** Esta sesión trabajó en la
rama `claude/festive-allen-hl6igv`. En paralelo, otra IA (Grok) trabajó **sobre
`main`**, contra `PROTOCOLO.md` §5 («una IA por vez»), y publicó su propia
infraestructura de toast/undo en v1.15.0. El choque se resolvió fusionando
`main` dentro de esta rama y comparando las dos implementaciones función por
función (ver «Decisiones»). El historial de Grok se conserva íntegro aquí.

**Estado actual.** El PR
[#91](https://github.com/psforestal-rgb/BTMM_JORNADAS/pull/91) se fusionó
**con squash** el 2026-09-11 a las 22:56. `main` quedó en **v1.22.0** con todo
hasta RF9 incluido.

El trabajo posterior —el bloque de puestos operativos, v1.26.0— está en la rama
`claude/festive-allen-hl6igv`, rebasada sobre el `main` fusionado, y abierto en
el **PR [#92](https://github.com/psforestal-rgb/BTMM_JORNADAS/pull/92)**.

**Regla para la próxima sesión:** `git fetch origin` ANTES de nada y comprueba
si `main` se movió. Si la rama de trabajo tiene commits que `main` no tiene,
rebásalos sobre `main` en vez de fusionar: el merge con squash deja el
historial divergente aunque el contenido sea idéntico.

## ▶️ SIGUIENTE ACCIÓN (léeme primero)

**LA FASE 2 ESTÁ CERRADA.** RF1–RF9, RP1–RP8 y RT1–RT8, los tres bloques
completos. Arranca la **FASE 3**, y el primer bloque es la **Vista Minimalista
de Funcionario (VF1–VF8)**.

⚠️ **La regla que más importa de toda la Fase 3**, y está en `PROTOCOLO.md` §1 y
en «Decisiones» desde el primer día: **el Banco de Tiempo (VF3) DEBE reutilizar
la función de dominio existente. Está prohibido crear un segundo cálculo
paralelo.** Antes de escribir una línea, localiza el cálculo vigente en
`src/domain/reposicion.js` (`saldoHoras`, `cuotasDe`, `resumenReposiciones`,
`historialPorFuncionario`) y úsalo. Si te parece que no encaja, **adáptalo ahí**,
no lo reescribas en la vista.

Qué pide cada requisito y con qué se apoya:

| Req | Qué pide | Piezas que YA existen |
|-----|----------|------------------------|
| VF1 | Acceso desde Funcionarios y Roles | `useAppNavigation` y `src/lib/navigation.js` (enlaces profundos, 4 pruebas) |
| VF2 | Información básica | la ficha entera ya está en `personas` |
| VF3 | **Banco de Tiempo** | `src/domain/reposicion.js` — **reutilizar, no reescribir** |
| VF4 | Actividades programadas | `actividadesEnDia`, `teletrabajoDeActividad` |
| VF5 | Resumen de roles | `codigoRolFuncionario`, `categoriaDe`, `etiquetaRol` |
| VF6 | Alertas específicas | `src/domain/alertas.js` (18 pruebas entre los dos archivos) |
| VF7 | Filtro próximas/pasadas/todas | patrón de filtro de `src/features/dia/Dia.jsx` |
| VF8 | Diseño limpio y responsive | `Card`, `EmptyState`, tokens semánticos |

Decisión que hay que tomar y **registrar antes de codificar**: si la vista es
una entrada nueva de navegación o un panel dentro de Funcionarios. La app ya se
criticaba por tener demasiadas entradas (F-P3/F-P11), así que un panel o una
ruta con parámetro es más coherente que un undécimo botón en la barra.

Después de VF vienen, en orden de valor: **virtualización de la cuadrícula de
Roles (A1)** —`RolesMensualGrid.jsx` son 873 líneas y ~31 columnas—, **estado de
tablas y filtros en la URL**, y **exportación CSV de más vistas (B1)**, para la
que ya están `src/lib/csv.js`, `src/lib/descargas.js` y `src/lib/respaldo.js`.

⚠️ **Pendiente heredado, independiente de la Fase 3.** La «cobertura crítica»
que describe `docs/GLOSARIO.md` **no está conectada a nada**: existen
`puestoRequiereAtencionRutinaria`, `esAtencionRutinaria` y las claves
`alertas.coberturaCritica`, pero ningún componente las consume. Si la cableas,
usa `puedeAtenderVisitantes` y no `esRolActivo`, o un puesto con todo el mundo
en teletrabajo saldría como cubierto.

## 📍 Estado del repo al relevar

- Versión: **1.28.0** — Rama: **`claude/festive-allen-hl6igv`**, rebasada sobre
  el `main` fusionado, abierta en el PR
  [#92](https://github.com/psforestal-rgb/BTMM_JORNADAS/pull/92) — Último
  commit: `df5e576` «[F2][RT2+RT6+RT8] teletrabajo derivado del rol, filtro y
  resumen»
- Tests: ✅ **585/585** (54 archivos) — Build: ✅ `npm run build` limpio,
  base path `/BTMM_JORNADAS/` intacto, `dist/version.json` = 1.28.0

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

- `e236c08` **merge de `origin/main`** — resuelve el choque con la sesión
  paralela de Grok (ver el bloque de arriba y «Decisiones»).
- `2b36a52` `[F2][RF3]` — validación en tiempo real cableando los validadores de
  dominio, que existían con 22 pruebas y **no los usaba nadie**.
- `fa456ab` `[F2][RF5]` — exportación CSV (`src/lib/csv.js`), y
  `descargarArchivo` extraído a `src/lib/descargas.js` para no duplicarlo.

- `6dfe4f1` `[F2][RF4+RF8]` — importación CSV con vista previa y respaldo
  automático, con `parsearCSV`/`filasAObjetos` en `src/lib/csv.js` y la lógica
  de fusión en `src/features/funcionarios/importarFuncionarios.js`.

- `5580025` `[F2][RF9]` — historial de cambios: `src/domain/historial.js`, la
  clave `historial` en el estado y la vista en «Datos · respaldo». **Con esto
  el bloque RF1–RF9 queda cerrado entero.**

- `a26a10c` `[F2][RP-PUESTOS]` — los puestos pasan a ser estado editable. Era
  el obstáculo real: dos módulos congelaban la lista al importarse.
- `aaa06a7` `[F2][RP-PUESTOS]` — CRUD en Configuración, con cascada al
  renombrar y bloqueo de la baja cuando hay fichas asignadas.
- `e5fc8c2` `[F2][RP7]` — orden personalizable, y una guarda táctil más
  estricta al descubrir que `min-w-touch` dejaba pasar botones de 24 px de alto.

- `3971d2a` `[F2][RP6]` — exportar e importar puestos, y **arregla un respaldo
  incompleto**: `crearRespaldo` no guardaba `puestos` ni `historial`.

- `c025d48` `[F2][RT]` — rol `E` de teletrabajo en el dominio: activo pero no
  presencial, con el conflicto de RT4 y el indicador visual.

- `df5e576` `[F2][RT2+RT6+RT8]` — teletrabajo derivado del rol, filtro por tipo
  de trabajo y resumen. **Con esto la FASE 2 queda cerrada entera.**

Tests: de 290 a 585 (+295). Ninguna función existente se eliminó.

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

1. `[F3][VF]` — Vista Minimalista de Funcionario (VF1–VF8). Ver «SIGUIENTE ACCIÓN».
2. `[F3][A1]` — virtualización de la cuadrícula de Roles.
3. Estado de tablas y filtros en la URL; exportación CSV de más vistas (B1).
4. Cablear la cobertura crítica, hoy desconectada.
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
- 2026-09-11 (Claude Code): **Las validaciones guían, nunca bloquean.** Es la
  filosofía que ya traía escrita `src/domain/validaciones.js` y que el
  formulario ahora respeta: avisos en ámbar, nada deshabilita «Guardar», y lo
  único que impide guardar sigue siendo el nombre vacío. Motivo: en campo los
  datos llegan incompletos y el registro no puede quedar bloqueado por una
  cédula mal tecleada. **RF4 debe seguir la misma regla** al importar.
- 2026-09-11 (Claude Code): Los avisos de campo se disparan **al salir del
  foco**, no al teclear: mientras alguien escribe, el valor está incompleto por
  definición y avisar es ruido.
- 2026-09-12 (Claude Code): **El teletrabajo NO es un campo de la actividad: se
  DERIVA del rol del día.** RT2 pedía un campo `esTeletrabajo` en la actividad y
  se implementó de otra forma, a propósito. Sería una segunda fuente de verdad
  que puede contradecir al rol, y además no podría representar una actividad de
  varios días en la que la persona teletrabaja solo uno. La capacidad que RT2
  quería la da `teletrabajoDeActividad()` en `src/domain/actividades.js`.
- 2026-09-12 (Claude Code): **El teletrabajo es rol ACTIVO pero NO presencial.**
  Activo porque la persona trabaja: si no lo fuera, asignarle cualquier
  actividad marcaría conflicto, lo contrario de lo que el rol significa. No
  presencial porque desde casa no se atiende a nadie. Todo lo que dependa de la
  presencia física debe usar `esRolPresencial`, nunca `esRolActivo`; confundirlos
  daría por cubierto un puesto vacío.
- 2026-09-12 (Claude Code): **RT4 se expresa como CONFLICTO**, no como cobertura
  crítica, porque el conflicto es un indicador ya vivo y visible en tres vistas
  mientras que la cobertura crítica no está conectada a nada. Así la regla del
  teletrabajo se ve desde el primer día.
- 2026-09-11 (Claude Code): **La importación de puestos solo agrega y actualiza;
  NUNCA elimina.** Si pudiera borrar un puesto, las fichas que lo referencian
  quedarían apuntando a algo inexistente y la cobertura crítica dejaría de
  evaluarse en silencio. Una fila cuyo código ya usa otro puesto **se omite y se
  informa**: pisar el código del otro rompería su identificación e inventar uno
  sería fabricar un dato que nadie escribió. Un color desconocido cae al primero
  de la paleta, porque el color es decoración y no justifica perder la fila.
- 2026-09-11 (Claude Code): **`crearRespaldo` elige las claves a mano.** Cada
  clave NUEVA del estado que deba sobrevivir a un respaldo hay que añadirla ahí
  y a la lista de `src/lib/__tests__/respaldo.test.js`. Se descubrió por las
  malas: `puestos` e `historial` no estaban, así que el respaldo parecía
  completo y no lo era.
- 2026-09-11 (Claude Code): **Un puesto se identifica por su NOMBRE, no por un
  id.** Las fichas guardan `puestoOperativo` y las reglas de cobertura guardan
  nombres; introducir ids obligaría a migrar datos ya persistidos y a subir el
  esquema. El coste es que **renombrar tiene que arrastrar las referencias**, y
  de eso se encarga `renombrarPuesto` en `src/domain/puestos.js`, que devuelve
  puestos, personas y reglas a la vez para que no puedan aplicarse a medias.
- 2026-09-11 (Claude Code): **En los puestos SÍ se bloquea el guardado** ante un
  nombre o un código repetido, a diferencia de las fichas de funcionario. Un
  duplicado rompería el agrupado de Roles y la cobertura, y no hay una lectura
  razonable de «guardar igual». **Eliminar un puesto con fichas asignadas
  también se bloquea**, porque dejaría registros apuntando a algo inexistente.
- 2026-09-11 (Claude Code): **El color de un puesto se elige de una paleta
  cerrada** (`PALETA` en `src/features/configuracion/ModalPuesto.jsx`): el valor
  son clases de Tailwind que la cuadrícula aplica tal cual, y un valor libre
  saldría sin estilo o con un contraste ilegible bajo el sol.
- 2026-09-11 (Claude Code): **La guarda de objetivos táctiles solo admite
  señales de ALTO.** Admitía `min-w-touch`, que es de ancho, y dejaba pasar
  botones de 24 px de alto por ser anchos. Para añadir una excepción hay que
  registrarla en `src/lib/__tests__/objetivosTactiles.test.js` con su motivo.
- 2026-09-11 (Claude Code): **El rastro de cambios guarda el valor anterior y el
  nuevo** de cada campo modificado, no solo qué campos cambiaron: es lo que lo
  hace útil para control interno. Tope de **200 entradas**, las más nuevas
  primero, aplicado **dentro del reducer** para que ningún llamador pueda
  saltárselo. **Viaja en el respaldo**, porque un rastro que desaparece al
  restaurar no es un rastro. Se ve en «Datos · respaldo», no en una vista nueva.
- 2026-09-11 (Claude Code): **Eliminar y deshacer dejan DOS entradas en el
  rastro, no cero.** El historial cuenta lo que pasó; borrar la baja al deshacer
  lo dejaría como si nunca hubiera ocurrido.
- 2026-09-11 (Claude Code): **Una importación deja UNA entrada resumen**, no una
  por fila: importar 200 fichas llenaría el rastro entero y expulsaría todo lo
  anterior.
- 2026-09-11 (Claude Code): **Añadir una clave nueva al estado NO obliga a subir
  `SCHEMA_VERSION`.** `mergePersistedWithSeed` completa desde `seedState` lo que
  el snapshot no traiga, así que un estado anterior carga con la clave en su
  valor por defecto. Verificado en
  `src/context/__tests__/AppContext-historial.test.jsx`. Subir el esquema solo
  hace falta si cambia la FORMA de datos ya persistidos.
- 2026-09-11 (Claude Code): **La importación CSV fusiona, nunca reemplaza.** Un
  archivo incompleto no puede borrar a quien no aparece en él; en una app de
  campo ese sería el peor fallo posible. La identidad es la **cédula comparada
  solo por sus dígitos** («1-0000-0001» y «100000001» son la misma persona); sin
  cédula se cae al nombre normalizado; sin ninguna de las dos la fila se omite y
  se informa. Al actualizar **solo se pisan las columnas presentes en el
  archivo**, y el `id` nunca. Si el archivo repite una identidad, **gana la
  última fila** y se dice cuántas había.
- 2026-09-11 (Claude Code): **El respaldo de RF8 se descarga ANTES de aplicar y,
  si la descarga falla, no se importa.** Es el mismo formato que acepta «Datos →
  Restaurar respaldo», así que una importación desafortunada siempre se puede
  revertir por ahí. Cualquier operación masiva futura debe seguir esta regla.
- 2026-09-11 (Claude Code): **Formato del CSV** (`src/lib/csv.js`): separador
  coma y comillas dobles según RFC 4180, fin de línea CRLF, y **BOM UTF-8**
  delante. Sin BOM, Excel en español abre «Pérez» como «PÃ©rez», que es el
  fallo que más se ve. Los booleanos se escriben «Sí»/«No», no «true»/«false».
  El orden de columnas es el del formulario y es el contrato que debe respetar
  el import de RF4.
- 2026-09-11 (Claude Code): El botón de exportar manda **lo que se está
  viendo** (lista filtrada y ordenada), no la lista completa, porque el
  contador «N/M» está justo encima y es lo que la persona espera.
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
- La serialización y el parseo del CSV viven **en el mismo módulo**
  (`src/lib/csv.js`) a propósito: son un contrato de ida y vuelta y separarlos
  es la vía rápida a que se desincronicen. La prueba que más vale de
  `src/lib/__tests__/csv.test.js` es la de ida y vuelta; si se toca uno de los
  dos lados, esa prueba es la que avisa.
- El `Blob` de jsdom no expone su contenido ni implementa `.text()`. Para probar
  una descarga hay que sustituir `global.Blob` por un doble que guarde lo que
  recibe; está hecho así en el bloque de exportación CSV de
  `src/features/funcionarios/__tests__/Funcionarios.test.jsx`.
- Toda operación que modifique fichas debe **registrar su entrada en el rastro**
  (`registrarCambio` del contexto). Los cuatro puntos que ya lo hacen están en
  `src/features/funcionarios/Funcionarios.jsx`: `guardar`, `eliminar`, el
  «Deshacer» de ese borrado y `aplicarImportacion`. Si se añade un quinto punto
  de modificación y se olvida el registro, el rastro miente en silencio.
- `src/data/puestos.js` es ahora **solo la semilla**: la lista viva está en el
  estado. Quien necesite los puestos debe leerlos de `useApp()`, nunca importar
  el módulo de datos, o se quedará con la lista del arranque.
- En las pruebas de la vista Día, el panel de actividades **arranca colapsado**:
  hay que pulsar «Actividades planificadas (N)» antes de buscar nada dentro.
- Al añadir una clave a `src/i18n/es-CR.js`, **comprueba en qué grupo cae**. El
  diccionario devuelve la clave cuando no existe, así que una clave en el grupo
  equivocado no falla: se muestra literalmente en pantalla. Pasó con
  `dia.teletrabajoResumen`, que acabó en `roles`.
- ⚠️ **La cobertura crítica del glosario NO está implementada.** Sus funciones y
  textos existen pero ningún componente los usa. Ver «SIGUIENTE ACCIÓN». Si la
  cableas, usa `puedeAtenderVisitantes` y no `esRolActivo`.
- En las pruebas, construye las claves de `roleData` con `rolKey()` y no a mano:
  el formato es un detalle del dominio y escribirlo a pelo hace que la prueba
  mienta en silencio si cambia. Se comprobó por las malas.
- **El respaldo no copia el estado entero**, selecciona claves en
  `src/lib/respaldo.js`. Si añades una clave al estado y no la añades ahí, el
  respaldo la pierde sin avisar. `src/lib/__tests__/respaldo.test.js` enumera
  las obligatorias justamente para que eso salte.
- El orden de los puestos **es un dato**, no algo que se recalcule: se guarda con
  la lista y se ve en Roles, en los desplegables de las fichas y en la vista Día.
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

### 2026-09-11 — Claude Code — **FASE 1 CERRADA.** Fase 0 (baseline 290/290 + auditoría de los 18 puntos de dolor) y los 5 quick wins de Fase 1 entregados: avisos con «Deshacer» en los 5 puntos de borrado, filtros visibles, objetivos táctiles de 48 px con test que los protege, ayuda contextual y el formulario de funcionario en 3 pasos (que además cubre RF7 de Fase 2). De 290 a 364 tests. Commits `5a4c83f`…`a4af5aa` en la rama `claude/festive-allen-hl6igv`, abiertos en el PR [#91](https://github.com/psforestal-rgb/BTMM_JORNADAS/pull/91) y pendientes de fusionar en `main`. Al cerrar se fusionó `origin/main` (infra toast/undo de Grok, v1.15.0) dentro de la rama, resolviendo a mano los 7 archivos en conflicto, y se avanzó Fase 2 con RF3 (validación en tiempo real), RF5 (exportación CSV) RF4+RF8 (importación con vista previa y respaldo) y RF9 (historial de cambios). Después, RP1–RP8 completo: los puestos operativos pasan a ser editables, con cascada al renombrar, orden personalizable e import/export. **Los bloques RF1–RF9 y RP1–RP8 quedan cerrados enteros.** Y el rol `E` de teletrabajo completo (RT1–RT8). **LA FASE 2 QUEDA CERRADA ENTERA.** 585 tests, v1.28.0.

### 2026-09-11 — Grok — Fase 0 + auditoría + infra toast/undo v1.15.0. Cableado de vistas pendiente de push.

Auditoría: P1 vigente; P2 vigente; P3/P11 parcial; P4/P12 infra lista, vistas aún con modal; P5 vigente; P6 parcial.

> Nota de Claude Code (2026-09-11 20:40): esta sesión de Grok corrió en paralelo
> sobre `main`, contra `PROTOCOLO.md` §5. Su infraestructura se fusionó dentro
> de la rama del PR #91; el detalle está en «Decisiones vigentes». Su entrada se
> conserva íntegra por exigencia del propio §5.

### 2026-09-11 — ZCode (preparación) — Creación del sistema de relevo `_relevo/`. Sin cambios de código.
