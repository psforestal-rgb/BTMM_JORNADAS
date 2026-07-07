export function dim(y, m) {
  return new Date(y, m + 1, 0).getDate();
}

export function pad2(n) {
  return String(n).padStart(2, "0");
}

/** Fecha civil local (no UTC), segura para formularios y filtros diarios. */
export function toLocalISODate(date = new Date()) {
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
}

/** Marca local legible y apta para nombres de archivo. */
export function toLocalFileTimestamp(date = new Date()) {
  return `${toLocalISODate(date)}_${pad2(date.getHours())}-${pad2(date.getMinutes())}-${pad2(date.getSeconds())}`;
}

export function isoFecha(year, month, dia) {
  return `${year}-${pad2(month + 1)}-${pad2(dia)}`;
}

export function fecha(f) {
  if (!f) return "—";
  const p = f.split("-");
  return `${p[2]}/${p[1]}/${p[0]}`;
}

export function faltan(f, hoy = new Date(2026, 4, 19)) {
  if (!f) return null;
  return Math.round((new Date(f + "T00:00:00") - hoy) / 86400000);
}

export function primerDiaLaboral(year, month, feriados = null) {
  for (let d = 1; d <= dim(year, month); d++) {
    const dow = new Date(year, month, d).getDay();
    if (dow >= 1 && dow <= 5) {
      if (!feriados) return d;
      const iso = isoFecha(year, month, d);
      if (!feriados.has(iso)) return d;
    }
  }
  return 1;
}
