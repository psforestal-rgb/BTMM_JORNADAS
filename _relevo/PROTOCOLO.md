# PROTOCOLO DE RELEVO ENTRE IAs — BTMM JORNADAS (PNLQ)

Este repositorio se desarrolla **por turnos** entre varias IAs (Claude Code, ChatGPT Code
y otras que el usuario incorpore). Toda sesión de trabajo —sin excepción— cumple este protocolo.

> `_relevo/SEGUIMIENTO.md` y este archivo son la ÚNICA fuente de verdad de dónde quedó
> el trabajo. Si este documento y la memoria de una IA discrepan, manda este documento.

---

## 1. Regla de oro (NO NEGOCIABLE)

**Cero pérdida funcional.** Ninguno de los 30 indicadores/validaciones normativos, ningún
registro, alerta ni flujo existente puede desaparecer. Pueden reubicarse o cambiar de forma,
nunca eliminarse. Además:

- La app es **offline-first PWA**: no romper el service worker, el base path
  `/BTMM_JORNADAS/` (`vite.config.js`) ni la dual persistence (localStorage + Dexie).
- **No se hace push con tests en rojo** (`npm test`; baseline vigente anotado en SEGUIMIENTO.md).
- El cálculo de **Banco de Tiempo** y cualquier indicador normativo reutiliza las funciones
  de dominio existentes (`src/domain/`); **prohibido crear un segundo cálculo paralelo**.

## 2. Inicio de toda sesión (obligatorio, en este orden)

1. `git pull --rebase origin main`
2. Leer COMPLETO este archivo (`_relevo/PROTOCOLO.md`).
3. Leer COMPLETO `_relevo/SEGUIMIENTO.md`.
4. Continuar EXACTAMENTE en la tarea marcada en **"▶️ SIGUIENTE ACCIÓN"**. No rehacer
   trabajo ya hecho; no ampliar el alcance sin registrarlo en SEGUIMIENTO.md.
5. Contexto técnico si hace falta: `docs/ARQUITECTURA.md`, `docs/TESTING.md`,
   `docs/GLOSARIO.md`. Planificación de mejoras: `docs/DOCUMENTO_FINAL_MEJORAS.md`.
   ⚠️ `HANDOFF.md`, `PLAN_IMPLEMENTACION.md` y `PROMPT_REVISION.md` (raíz) son **históricos**.

## 3. Disciplina de trabajo

- Commits pequeños y descriptivos: `[FASEn][ID] descripción`
  (ej. `[F1][P12] undo con snackbar al eliminar funcionario`).
- **Push de cada avance** (tarea completada o decisión tomada): un trabajo sin push
  no existe para la siguiente IA.
- Si el cambio toca `src/` (código de la app), **subir `version` en `package.json`**:
  los usuarios con caché verán el banner «Actualizar ahora». Los cambios de solo
  documentación no requieren bump.
- Toda decisión de diseño se registra en SEGUIMIENTO.md → «Decisiones» (fecha + motivo).
  Esa sección es **append-only**: para cambiar una decisión se agrega una nueva entrada
  que la reemplace explícitamente.
- No incluir identificadores de modelo/IA en commits, PRs, código ni artefactos.

## 4. Fin de sesión: EL RELEVO

Dispara el relevo cuando (a) el usuario escriba **RELEVO**, (b) estimes que te queda
~15–20 % de tu ventana de contexto, o (c) completes el hito que el usuario pidió cerrar.

1. Deja el código compilando y con tests en verde. Si hay algo a medias, termina la
   pieza mínima que deje los tests verdes, o márcalo BLOQUEADO (paso 4).
2. **Actualiza `_relevo/SEGUIMIENTO.md`** usando la plantilla (§6): nueva entrada arriba
   del historial, y la sección **«▶️ SIGUIENTE ACCIÓN»** con una instrucción exacta y
   autocontenida (archivo, qué hacer, comando si aplica). La próxima IA debe poder
   continuar leyendo SOLO ese archivo.
3. `git add -A && git commit -m "[relevo] <resumen de 1 línea>" && git push`
4. Si los tests quedaran en rojo y no pudieras arreglarlos: **NO pushees `main`**.
   Guarda el trabajo en la rama `relevo-wip`
   (`git checkout -b relevo-wip && git push -u origin relevo-wip`), regístralo en
   SEGUIMIENTO.md y vuelve a `main` limpio. La próxima IA lo recupera desde ahí.
5. Cierra respondiendo al usuario: qué quedó hecho, qué sigue, advertencias (máx. 10 líneas).

## 5. Convivencia entre IAs

- **Una IA por vez.** Nunca dos sesiones simultáneas (conflictos de push).
- Nunca borrar ni reescribir entradas del historial de otra IA en SEGUIMIENTO.md.
- Si `git pull --rebase` genera conflicto en SEGUIMIENTO.md: resolver conservando
  **ambas** entradas; no se pierde información de ninguna IA.
- Si encuentras algo que contradice SEGUIMIENTO.md: corrige el documento y anota la
  discrepancia en la entrada del día.

## 6. Plantilla de SEGUIMIENTO.md (respetar estructura)

```markdown
# SEGUIMIENTO — BTMM JORNADAS (estado de relevo)

> Última actualización: [YYYY-MM-DD HH:mm] por [nombre de la herramienta/IA]
> Estado de la sesión: [EN CURSO / BLOQUEADO / LIMPIO — LISTO PARA CONTINUAR]

## ▶️ SIGUIENTE ACCIÓN (léeme primero)
[instrucción concreta y autocontenida: archivo, qué hacer exactamente, comando si aplica]

## 📍 Estado del repo al relevar
- Versión: [x.y.z] — Rama: [main] — Último commit: [hash] [mensaje]
- Tests: [✅ N/N] — Build: [✅ / ❌ / no verificado]

## ✅ Hecho en esta sesión
- [lista con hashes de commit]

## 🔜 Pendiente (en orden)
1. [...]

## 🧠 Decisiones vigentes (append-only; no revertir sin registrar el reemplazo)
- [fecha] [decisión + motivo]

## ⚠️ Advertencias / trampas conocidas
- [gotchas, código frágil, bugs conocidos]

## 📜 Historial de sesiones (nuevo arriba)
### [fecha] — [IA] — [resumen 1–3 líneas + hash del commit de relevo]
```

## 7. Roadmap acordado (resumen; detalle en `docs/DOCUMENTO_FINAL_MEJORAS.md`)

- **Fase 1 — Quick wins UX**: primero validar contra el código actual (los sprints
  móviles/contraste ya resolvieron varios puntos): undo con snackbar en vez de
  confirmaciones (P12), filtros visibles tipo chips (P1/P5), etiquetas siempre visibles
  en navegación (P3/P11), tooltips contextuales (P8), foco visible + transiciones
  150–200 ms, skeleton y empty states, paleta reducida (P6/P16).
- **Fase 2 — Features núcleo**: CRUD de funcionarios (RF1–RF9, con import CSV con
  preview y backup automático), CRUD de puestos con versionado de schema Dexie +
  migración con backup (RP1–RP8), asistente «Crear Rápido» de 3 pasos como flujo por
  defecto (RF7), rol `E` Teletrabajo con lógica de conflictos/cobertura (RT1–RT8).
- **Fase 3 — Vistas**: Vista Minimalista de Funcionario (VF1–VF8) consumiendo el
  cálculo de dominio existente para el Banco de Tiempo, virtualización de la tabla
  Roles (A1), estado de tablas/filtros en la URL, exportación CSV (B1).
- **Fuera de alcance hasta decidir backend**: A3 (sincronización/heartbeat),
  RF10 (autenticación), C4 (API externa), i18n multi-idioma (ya existe es-CR propio).

## 8. Despliegue

- Cada push/merge a `main` dispara el deploy automático a `gh-pages` (GitHub Pages).
- Sitio en vivo: https://psforestal-rgb.github.io/BTMM_JORNADAS/
- Si hubo bump de versión, verificar que el deploy termine y que `dist/version.json`
  refleje la versión nueva.
