# SEGUIMIENTO — BTMM JORNADAS (estado de relevo)

> Última actualización: 2026-09-11 20:20 por Grok
> Estado de la sesión: LIMPIO — LISTO PARA CONTINUAR

## ▶️ SIGUIENTE ACCIÓN (léeme primero)

FASE 1 — siguiente quick win vigente: **P1 filtros visibles tipo chips** (`PROTOCOLO.md` §7; IDs de `docs/DOCUMENTO_FINAL_MEJORAS.md`).

En `src/features/funcionarios/Funcionarios.jsx` los 6 filtros siguen dentro de un `<details>` colapsado. Sacar los chips básicos (Todos / Guardaparques / Con disponibilidad) fuera del `<details>` para que se vean al cargar; dejar el resto (Acumulativa, ONG, Sin resolución + ordenar) en «Más filtros». No tocar el toast/undo. Actualizar tests de filtros si el DOM cambia. Si se toca `src/`, bump de `1.15.0` → `1.15.1`.

## 📍 Estado del repo al relevar

- Versión: 1.15.0 — Rama: `main`
- Tests: ✅ 298/298 (sesión local previa; re-verificar si se toca código)
- Baseline al arrancar: 290/290 en v1.14.17 @ `4e8da66`

## ✅ Hecho en esta sesión

- Fase 0 + auditoría P1–P6.
- Infra toast/undo en `main` (`undo.js`, `ToastContext`, `Toast`, `App`, bump 1.15.0).
- Eliminación reversible de funcionario y reposición + toast al guardar funcionario.

## 🔜 Pendiente (en orden)

1. FASE 1 — chips de filtros visibles (P1).
2. P3/P11 nav (parcialmente resuelto).
3. P8 HelpSheet en campos del modal.
4. Toast en más acciones; FASE 2 y 3.

## 🧠 Decisiones vigentes (append-only; no revertir sin registrar el reemplazo)

- 2026-09-11: Trabajo por fases según `PROTOCOLO.md` §7. Fuera de alcance hasta decidir si existe backend: A3, RF10, C4, i18n multi-idioma.
- 2026-09-11: El Banco de Tiempo (VF3) DEBE reutilizar la función de dominio existente.
- 2026-09-11: Flujo directo sobre `main`; no pushear `main` con tests en rojo; WIP en `relevo-wip`.
- 2026-09-11: IDs P1–P18 canónicos = `docs/DOCUMENTO_FINAL_MEJORAS.md` (P12 = undo snackbar; P4 = feedback; P1 = filtros ocultos). `ANALISIS_UX_UI_MEJORAS.md` usa otra numeración.
- 2026-09-11: Eliminar funcionario/reposición = inmediato + toast Deshacer 10 s. Reseteos de Datos/Config siguen con modal.
- 2026-09-11: PR #91 (`claude/festive-allen-hl6igv`) solapa Toast/undo. No fusionar sin rebase contra 1.15.0.

## ⚠️ Advertencias / trampas conocidas

- `npm ci` al registry interno puede dar 502; usar `--registry https://registry.npmjs.org`.
- Base path `/BTMM_JORNADAS/` no tocar.
- Modal y Toast portan a `document.body` (toast z-60).
- Dual persistence sin política de conflicto.
- `useToast()` es noop si no hay provider.

## 📜 Historial de sesiones (nuevo arriba)

### 2026-09-11 — Grok — Fase 0 (290/290) + auditoría P1–P6 + [F1][P12] toast/undo. v1.15.0. Tests 298/298.

- P1 filtros ocultos: VIGENTE.
- P2 modal largo: VIGENTE.
- P3/P11 nav: PARCIAL (labels visibles; tema en Configuración).
- P4 feedback: RESUELTO en guardar/eliminar funcionario y eliminar reposición.
- P5 Roles densa: VIGENTE (FASE 3).
- P6 Día: PARCIAL.
- P12 confirmación: RESUELTO funcionario y reposición.

### 2026-09-11 — ZCode (preparación) — Creación del sistema de relevo `_relevo/`. Sin cambios de código.
