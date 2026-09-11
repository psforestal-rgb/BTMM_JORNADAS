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

1. `git pull --rebase origin main`
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
7. Cuando yo escriba "RELEVO", o cuando estimes que te queda poco contexto (~15%):
   actualiza `_relevo/SEGUIMIENTO.md` con la plantilla del protocolo, haz commit +
   push, y cierra con un resumen de qué quedó hecho, qué sigue y advertencias.

Empieza ahora por el paso 1. No me preguntes nada que esté respondido en esos
dos archivos.
```

---

**Palabras clave durante la sesión:**
- `RELEVO` → la IA cierra la sesión: actualiza SEGUIMIENTO.md, commit, push, resumen.
- `CONTINÚA` → sigue la tarea marcada en SEGUIMIENTO.md.

**Regla del usuario:** una sola IA a la vez trabajando en el repositorio.
