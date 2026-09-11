# PROMPT PARA INCORPORAR UNA NUEVA IA AL RELEVO

**Cómo usarlo:** copia el bloque de abajo y pégalo tal cual, como PRIMER mensaje,
en cualquier IA que quieras sumar al relevo (Claude Code, ChatGPT Code, u otra).
Es idéntico para todas: el protocolo hace que las IAs sean intercambiables.
Después de la primera sesión, el mismo prompt sirve para retomar en cualquier momento.

---

```text
Estás tomando un turno de desarrollo por RELEVO en el repositorio BTMM_JORNADAS
(PWA offline-first de gestión de jornadas laborales: React 18 + Vite + Tailwind +
Dexie, tests con Vitest vía `npm test`, i18n propio es-CR). El desarrollo se hace
por turnos entre varias IAs y existe un protocolo obligatorio dentro del repo.

Ejecuta en este orden, sin saltarte pasos:

1. `git fetch origin` y sitúate donde esté el trabajo más reciente:
   - Si hay una rama de trabajo pendiente de fusionar, `_relevo/SEGUIMIENTO.md`
     lo dice en su primer bloque y nombra la rama y el PR. Trabaja sobre esa
     rama, NO sobre `main`, o perderás lo que hizo la IA anterior.
   - Si no hay nada pendiente, `git pull --rebase origin main`.
   Ante la duda, mira primero `_relevo/SEGUIMIENTO.md` y luego decide.
2. Lee COMPLETO `_relevo/PROTOCOLO.md` y cúmplelo durante toda la sesión.
3. Lee COMPLETO `_relevo/SEGUIMIENTO.md`: es la única fuente de verdad de dónde
   quedó la IA anterior.
4. Continúa EXACTAMENTE en la tarea de la sección "▶️ SIGUIENTE ACCIÓN".
   No rehagas trabajo ya hecho ni amplíes el alcance sin registrarlo en
   SEGUIMIENTO.md.
5. Trabaja con commits pequeños (`[FASEn][ID] descripción`) y haz PUSH de cada
   avance: un trabajo sin push no existe para la siguiente IA.
6. REGLA DE ORO: cero pérdida funcional (30 indicadores normativos), no romper la
   PWA offline ni el base path `/BTMM_JORNADAS/`, y NO hacer push con tests en rojo.
7. Ejecuta `npm ci --ignore-scripts` y `npm test` antes de tocar nada, y anota el
   número exacto de pruebas. Debe coincidir con el que dice SEGUIMIENTO.md; si no
   coincide, averigua por qué antes de seguir.
8. Al cerrar cada respuesta, dime SIEMPRE una de estas dos cosas:
   - «Puedo concluir el siguiente paso con el contexto que me queda», o
   - «Conviene relevar», y en ese caso entrégame ya el prompt listo para pegar
     en la siguiente IA, junto con el resumen de qué quedó hecho y qué sigue.
9. Cuando yo escriba "RELEVO", o cuando estimes que te queda poco contexto (~15%),
   o cuando cierres el hito en curso: actualiza `_relevo/SEGUIMIENTO.md` con la
   plantilla del protocolo, haz commit + push, y cierra con un resumen de qué
   quedó hecho, qué sigue y advertencias.

Empieza ahora por el paso 1. No me preguntes nada que esté respondido en esos
dos archivos.
```

---

**Palabras clave durante la sesión:**
- `RELEVO` → la IA cierra la sesión: actualiza SEGUIMIENTO.md, commit, push, resumen.
- `CONTINÚA` → sigue la tarea marcada en SEGUIMIENTO.md.

**Regla del usuario:** una sola IA a la vez trabajando en el repositorio.

**Si la IA está atada a su propia rama.** Algunos entornos (Claude Code en la web,
por ejemplo) obligan a desarrollar en una rama con nombre asignado y no dejan
empujar a `main`. En ese caso la IA debe:

1. Partir de la rama que indique SEGUIMIENTO.md, no de `main`.
2. Anotar en SEGUIMIENTO.md, en el primer bloque, el nombre de su rama y el PR,
   para que la siguiente IA no se pierda.
3. No dar por desplegado el trabajo: el deploy a `gh-pages` solo lo dispara `main`.
