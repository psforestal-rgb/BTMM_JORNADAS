# Punto de restauración — UX móvil legible

**Fecha:** 2026-07-28

## Cómo volver atrás

La versión **previa** a las mejoras de legibilidad móvil está en la rama:

```
backup/pre-mobile-ux-legible-20260728
```

Commit de referencia:

```
fac92514072e42f7710bd3db5f4a9fa94f4fedbd
```

### Restaurar main a ese estado (solo si es necesario)

```bash
git fetch origin
git checkout main
git reset --hard origin/backup/pre-mobile-ux-legible-20260728
git push --force origin main   # solo con autorización explícita
```

O bien abrir un PR desde `backup/pre-mobile-ux-legible-20260728` hacia `main`.

## Qué incluye este cambio (rama `feat/mobile-ux-legible`)

- Tipografía mínima en móvil (16px / 13–14px)
- Alertas en la barra inferior principal
- Resumen de 3 cifras en la vista Día
- SyncStatus visible en móvil
- BottomSheet con tokens de tema
- Ayuda «?» en el resumen del Día
- Cadenas i18n nuevas
