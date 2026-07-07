import { useMemo, useState } from "react";
import Badge from "../../ui/Badge.jsx";
import Icon from "../../ui/Icon.jsx";
import { dim, primerDiaLaboral } from "../../domain/fechas.js";
import { codigoRolFuncionario, esRolActivo, patchCategoriaDia } from "../../domain/roles.js";
import { useFeriadosDelAno } from "../../lib/useFeriadosDelAno.js";
import { useT } from "../../i18n/useT.js";
import MenuCelda from "./MenuCelda.jsx";

export default function RolesDiaMobile({ grupos, grupoActivo, year, month, personas, roleData, setRoleData }) {
  const t = useT();
  const hoy = new Date();
  const inicial = hoy.getFullYear() === year && hoy.getMonth() === month ? hoy.getDate() : 1;
  const [dia, setDia] = useState(inicial);
  const [menu, setMenu] = useState(null);
  const feriados = useFeriadosDelAno(year);
  const max = dim(year, month);
  const fechaLegible = new Intl.DateTimeFormat("es-CR", { weekday: "long", day: "numeric", month: "long" })
    .format(new Date(year, month, dia));

  const filas = useMemo(() => grupoActivo.funcionarios.map((nombre) => ({
    nombre,
    codigo: codigoRolFuncionario(personas, roleData, year, month, nombre, dia, feriados),
  })), [dia, feriados, grupoActivo.funcionarios, month, personas, roleData, year]);
  const enTurno = filas.filter((fila) => esRolActivo(fila.codigo));
  const fuera = filas.filter((fila) => !esRolActivo(fila.codigo));
  const cobertura = grupos.map((grupo) => ({
    nombre: grupo.nombre,
    total: grupo.funcionarios.filter((nombre) => esRolActivo(codigoRolFuncionario(personas, roleData, year, month, nombre, dia, feriados))).length,
  }));

  const seleccionar = (categoria) => {
    if (!menu) return;
    const patch = patchCategoriaDia({ roleData, personas, year, month, persona: menu.persona, dia, categoria, feriados });
    setRoleData((prev) => ({ ...prev, ...patch }));
    setMenu(null);
  };
  const mover = (paso) => setDia((actual) => Math.min(max, Math.max(1, actual + paso)));
  const irHoy = () => setDia(inicial);

  const lista = (titulo, items, tono) => (
    <section className="rounded-2xl border border-line bg-surface p-3">
      <h3 className={`text-sm font-bold uppercase tracking-wide ${tono}`}>{titulo} · {items.length}</h3>
      <div className="mt-2 space-y-2">
        {items.length === 0 ? <p className="text-sm text-ink-muted">{t("rolesDia.sinPersonas")}</p> : items.map((fila) => (
          <button
            key={fila.nombre}
            type="button"
            onClick={() => setMenu({ persona: fila.nombre, dia, valor: fila.codigo, esInicio: dia === primerDiaLaboral(year, month, feriados) })}
            className="flex min-h-touch w-full items-center justify-between gap-3 rounded-xl bg-surface-alt px-3 text-left"
          >
            <span className="break-words text-sm font-semibold text-ink">{fila.nombre}</span>
            <Badge className={esRolActivo(fila.codigo) ? "border-ok bg-ok-soft text-ok-fg" : "border-warning bg-warning-soft text-warning-fg"}>{fila.codigo || "—"}</Badge>
          </button>
        ))}
      </div>
    </section>
  );

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-2 rounded-2xl border border-line bg-surface p-2">
        <button type="button" onClick={() => mover(-1)} disabled={dia === 1} className="inline-flex min-h-touch min-w-touch items-center justify-center rounded-xl bg-surface-alt disabled:opacity-40" aria-label={t("rolesDia.anterior")}><Icon name="chevronLeft" size={20} /></button>
        <div className="min-w-0 text-center">
          <p className="capitalize text-sm font-semibold text-ink">{fechaLegible}</p>
          <button type="button" onClick={irHoy} className="mt-1 min-h-touch rounded-lg px-3 text-xs font-bold text-brand">{t("topbar.hoy")}</button>
        </div>
        <button type="button" onClick={() => mover(1)} disabled={dia === max} className="inline-flex min-h-touch min-w-touch items-center justify-center rounded-xl bg-surface-alt disabled:opacity-40" aria-label={t("rolesDia.siguiente")}><Icon name="chevronRight" size={20} /></button>
      </div>

      {lista(t("rolesDia.enTurno"), enTurno, "text-ok-fg")}
      {lista(t("rolesDia.fueraTurno"), fuera, "text-warning-fg")}

      <section className="rounded-2xl border border-line bg-surface p-3">
        <h3 className="text-sm font-bold uppercase tracking-wide text-ink">{t("rolesDia.cobertura")}</h3>
        <div className="mt-2 grid gap-2">
          {cobertura.map((item) => (
            <div key={item.nombre} className="flex items-center justify-between rounded-xl bg-surface-alt px-3 py-2 text-sm">
              <span className="font-semibold text-ink">{item.nombre.replace("Puesto ", "")}</span>
              <span className={item.total > 0 ? "font-bold text-ok-fg" : "font-bold text-critical-fg"}>{item.total > 0 ? item.total : t("rolesDia.critica")}</span>
            </div>
          ))}
        </div>
      </section>

      {menu && <MenuCelda data={menu} cerrar={() => setMenu(null)} seleccionar={seleccionar} />}
    </div>
  );
}
