export function iniciales(n) {
  return n.split(" ").slice(0, 2).map((x) => x[0]).join("").toUpperCase();
}

// Fondos sólidos saturados para máximo contraste bajo luz solar directa.
// Contraste texto blanco sobre fondo: ≥ 7:1 (WCAG AAA).
export function avatar(n) {
  return [
    "bg-emerald-700 text-white",
    "bg-sky-700 text-white",
    "bg-rose-700 text-white",
    "bg-amber-700 text-white",
    "bg-purple-700 text-white",
  ][n.charCodeAt(0) % 5];
}

export function estadoCls(e) {
  return (
    {
      Activo: "bg-emerald-100 text-emerald-900 border-emerald-200",
      "De vacaciones": "bg-sky-100 text-sky-900 border-sky-200",
      Incapacitado: "bg-red-100 text-red-900 border-red-200",
      Inactivo: "bg-slate-100 text-slate-700 border-slate-200",
    }[e] || "bg-slate-100 text-slate-700 border-slate-200"
  );
}

// Badges de rol — fondos sólidos para uso en campo bajo sol.
// T=turno (verde), I=incapacidad (rojo), V=vacaciones (azul),
// L=libre (ámbar), O=otro (violeta), finde=fin de semana (gris oscuro).
export function codigoCls(c, finde) {
  const v = String(c || "").toUpperCase();
  if (finde && !v)   return "bg-slate-600 text-white border-slate-700";
  if (v.startsWith("T")) return "bg-emerald-700 text-white border-emerald-800";
  if (v.startsWith("I")) return "bg-rose-700    text-white border-rose-800";
  if (v.startsWith("V")) return "bg-sky-700     text-white border-sky-800";
  if (v.startsWith("L")) return "bg-amber-700   text-white border-amber-800";
  if (v.startsWith("O")) return "bg-violet-700  text-white border-violet-800";
  if (!v) return finde ? "bg-slate-600 text-white border-slate-700" : "bg-slate-400 text-white border-slate-500";
  return finde ? "bg-slate-600 text-white border-slate-700" : "bg-emerald-700 text-white border-emerald-800";
}
