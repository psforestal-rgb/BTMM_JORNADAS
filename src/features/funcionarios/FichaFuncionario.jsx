import { useMemo, useState } from "react";
import Avatar from "../../ui/Avatar.jsx";
import Badge from "../../ui/Badge.jsx";
import Card from "../../ui/Card.jsx";
import EmptyState from "../../ui/EmptyState.jsx";
import Icon from "../../ui/Icon.jsx";
import { codigoCls, estadoCls } from "../../ui/styles.js";
import { fecha, toLocalISODate } from "../../domain/fechas.js";
import { alertasDeFuncionario } from "../../domain/alertas.js";
import {
  actividadesDeFuncionario,
  conteoActividadesPorTiempo,
  esActividadPasada,
  filtrarActividadesPorTiempo,
  finDeActividad,
  FILTROS_TIEMPO,
} from "../../domain/actividades.js";
import {
  bancoDeTiempo,
  CATEGORIAS_RESUMEN,
  etiquetaCategoria,
  resumenRolesMes,
  resumenTeletrabajoActividad,
  rolDelDia,
} from "../../domain/fichaFuncionario.js";
import {
  estadoReposicion,
  horasRepuestas,
  horasTrabajadas,
  saldoHoras,
  textoSaldoCorto,
  HORAS_JORNADA_DEFAULT,
} from "../../domain/reposicion.js";
import { buildFeriadosSet } from "../../domain/feriados.js";
import { useFeriadosDelAno } from "../../lib/useFeriadosDelAno.js";
import { useT } from "../../i18n/useT.js";
import { useApp } from "../../context/AppContext.jsx";
import ModalFuncionario from "./ModalFuncionario.jsx";
import { useGuardarFuncionario } from "./useGuardarFuncionario.js";

const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "setiembre", "octubre", "noviembre", "diciembre",
];

const ESTADO_REPOSICION_CLS = {
  Pendiente: "border-amber-300 bg-amber-100 text-amber-900",
  Parcial: "border-indigo-300 bg-indigo-100 text-indigo-900",
  Repuesto: "border-emerald-200 bg-emerald-100 text-emerald-900",
};

const TONO_ALERTA = {
  danger: "border-danger-soft bg-danger-soft/50 text-danger-fg",
  warn: "border-warning-soft bg-warning-soft/50 text-warning-fg",
  ok: "border-ok-soft bg-ok-soft/50 text-ok-fg",
};

function Dato({ etiqueta, children }) {
  const t = useT();
  return (
    <div className="min-w-0">
      <dt className="text-[10px] font-bold uppercase tracking-wide text-ink-muted">{etiqueta}</dt>
      <dd className="mt-0.5 break-words text-sm font-semibold text-ink">
        {children || t("ficha.datos.sinDato")}
      </dd>
    </div>
  );
}

/**
 * Ficha individual del funcionario (VF1–VF8).
 *
 * Es una vista de LECTURA construida sobre el dominio: no calcula saldos ni
 * roles por su cuenta, los pide a `fichaFuncionario.js`, que a su vez compone
 * `reposicion.js`, `roles.js` y `alertas.js`. La única escritura es la edición
 * de la ficha, y usa el mismo hook que la lista de Funcionarios.
 */
export default function FichaFuncionario({
  nombre,
  personas,
  setPersonas,
  actividadesPlan,
  roleData,
  reposiciones,
  year,
  month,
  alerts,
  setView,
  setDiaVista,
}) {
  const t = useT();
  const { reglas } = useApp();
  const hj = reglas?.horasJornada ?? HORAS_JORNADA_DEFAULT;
  const feriados = useFeriadosDelAno(year);
  const [filtroActividades, setFiltroActividades] = useState(FILTROS_TIEMPO[0]);
  const [editando, setEditando] = useState(null);
  const guardarFuncionario = useGuardarFuncionario(personas, setPersonas);

  const f = useMemo(() => personas.find((p) => p.nombre === nombre), [personas, nombre]);
  const hoy = toLocalISODate();

  const banco = useMemo(() => bancoDeTiempo(reposiciones, nombre, hj), [reposiciones, nombre, hj]);
  const resumenRoles = useMemo(
    () => resumenRolesMes({ personas, roleData, year, month, nombre, feriados }),
    [personas, roleData, year, month, nombre, feriados],
  );
  const todasLasActividades = useMemo(
    () => actividadesDeFuncionario(actividadesPlan, nombre),
    [actividadesPlan, nombre],
  );
  const conteo = useMemo(
    () => conteoActividadesPorTiempo(todasLasActividades, hoy),
    [todasLasActividades, hoy],
  );
  const actividades = useMemo(() => {
    const lista = filtrarActividadesPorTiempo(todasLasActividades, hoy, filtroActividades);
    // Lo próximo se lee de lo más cercano hacia adelante; lo pasado, de lo más
    // reciente hacia atrás. Es el orden en que se consultan cada una.
    return filtroActividades === "pasadas" ? [...lista].reverse() : lista;
  }, [todasLasActividades, hoy, filtroActividades]);
  const misAlertas = useMemo(() => alertasDeFuncionario(alerts, nombre), [alerts, nombre]);

  /* Las actividades pueden caer en un año distinto al que se está viendo, y el
     conjunto de feriados depende del año. Se construye bajo demanda y se
     memoriza por año para no recalcularlo en cada fila. */
  const feriadosDe = useMemo(() => {
    const cache = new Map();
    return (anio) => {
      if (!cache.has(anio)) cache.set(anio, buildFeriadosSet(anio, reglas));
      return cache.get(anio);
    };
  }, [reglas]);
  const teletrabajoPorActividad = useMemo(() => {
    const mapa = new Map();
    for (const a of actividades) {
      mapa.set(a.id, resumenTeletrabajoActividad({ actividad: a, nombre, personas, roleData, feriadosDe }));
    }
    return mapa;
  }, [actividades, nombre, personas, roleData, feriadosDe]);

  // El rol de hoy solo tiene sentido si el mes que se está viendo es el de hoy.
  const rolHoy = useMemo(() => {
    const [y, m, d] = hoy.split("-").map(Number);
    if (y !== year || m - 1 !== month) return null;
    return rolDelDia({ personas, roleData, year, month, dia: d, nombre, feriados });
  }, [hoy, year, month, personas, roleData, nombre, feriados]);

  if (!f) {
    return (
      <EmptyState
        icon="users"
        tone="warning"
        title={t("ficha.noExiste")}
        description={t("ficha.noExisteDesc", { nombre })}
        action={
          <button
            type="button"
            onClick={() => setView("funcionarios")}
            className="inline-flex min-h-touch items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white"
          >
            <Icon name="chevronLeft" size={16} />
            {t("ficha.volver")}
          </button>
        }
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setView("funcionarios")}
          className="inline-flex min-h-touch items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-sm font-semibold text-ink hover:bg-surface-alt"
        >
          <Icon name="chevronLeft" size={16} />
          {t("ficha.volver")}
        </button>
      </div>

      {/* VF2 — información básica */}
      <Card variant="elevated" className="space-y-4">
        <header className="flex flex-wrap items-start gap-3">
          <Avatar name={f.nombre} />
          <div className="min-w-0 flex-1">
            <h2 className="break-words text-lg font-bold text-ink">{f.nombre}</h2>
            <p className="break-words text-sm font-semibold text-brand">
              {f.puestoOperativo || t("funcionarios.sinPuesto")}
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-1.5">
              <Badge className={estadoCls(f.estado)}>{f.estado}</Badge>
              <Badge className="border-line bg-surface-inset text-ink-soft">{f.condicion}</Badge>
              {f.ong && <Badge className="border-orange-200 bg-orange-100 text-orange-900">{t("funcionarios.filtroOng")}</Badge>}
              {f.policia && <Badge className="border-emerald-200 bg-emerald-50 text-emerald-900">{t("funcionarios.atributoPolicia")}</Badge>}
              {f.brigada && <Badge className="border-orange-200 bg-orange-50 text-orange-900">{t("funcionarios.atributoBrigada")}</Badge>}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setEditando({ ...f })}
              className="inline-flex min-h-touch items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-sm font-semibold text-ink hover:bg-surface-alt"
            >
              <Icon name="pencil" size={14} />
              {t("ficha.editar")}
            </button>
            <button
              type="button"
              onClick={() => setView("roles")}
              className="inline-flex min-h-touch items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-sm font-semibold text-ink hover:bg-surface-alt"
            >
              <Icon name="calendarDays" size={14} />
              {t("ficha.verRoles")}
            </button>
          </div>
        </header>

        <dl className="grid grid-cols-2 gap-3 border-t border-line pt-3 sm:grid-cols-3 lg:grid-cols-4">
          <Dato etiqueta={t("ficha.datos.cedula")}>{f.cedula}</Dato>
          <Dato etiqueta={t("ficha.datos.email")}>{f.email}</Dato>
          <Dato etiqueta={t("ficha.datos.cargo")}>{f.puesto}</Dato>
          <Dato etiqueta={t("ficha.datos.jefatura")}>{f.jefe}</Dato>
          <Dato etiqueta={t("ficha.datos.jornada")}>{f.jornada}</Dato>
          <Dato etiqueta={t("ficha.datos.modalidad")}>{f.modalidad}</Dato>
          <Dato etiqueta={t("ficha.datos.resolucion")}>{f.resolucion}</Dato>
          <Dato etiqueta={t("ficha.datos.ingreso")}>{f.ingreso ? fecha(f.ingreso) : ""}</Dato>
          <Dato etiqueta={t("ficha.datos.disponibilidad")}>
            {f.disponibilidad ? t("funcionarios.si") : t("funcionarios.no")}
          </Dato>
          <Dato etiqueta={t("ficha.datos.contrato")}>{f.contrato}</Dato>
          <Dato etiqueta={t("ficha.datos.vencimiento")}>{f.vencimiento ? fecha(f.vencimiento) : ""}</Dato>
        </dl>

        {f.obs && (
          <div className="rounded-xl bg-surface-inset p-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-ink-muted">
              {t("ficha.datos.observaciones")}
            </p>
            <p className="mt-0.5 whitespace-pre-wrap break-words text-sm text-ink-soft">{f.obs}</p>
          </div>
        )}
      </Card>

      <div className="grid gap-4 xl:grid-cols-2">
        {/* VF3 — banco de tiempo */}
        <Card title={t("ficha.banco.titulo")} icon="refresh" variant="elevated">
          <p className="mb-3 text-xs text-ink-muted">{t("ficha.banco.ayuda")}</p>
          <div className="flex flex-wrap items-center gap-3 rounded-xl bg-surface-inset p-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-ink-muted">
                {t("ficha.banco.saldo")}
              </p>
              <p className="text-2xl font-bold text-ink">{textoSaldoCorto(banco.saldoHoras, hj)}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <Badge className="border-line bg-surface text-ink-soft">
                {t("ficha.banco.registros", { n: banco.total })}
              </Badge>
              <Badge className={ESTADO_REPOSICION_CLS.Pendiente}>
                {t("ficha.banco.pendientes", { n: banco.pendientes })}
              </Badge>
              <Badge className={ESTADO_REPOSICION_CLS.Repuesto}>
                {t("ficha.banco.repuestos", { n: banco.repuestos })}
              </Badge>
            </div>
            <button
              type="button"
              onClick={() => setView("reposicion")}
              className="ml-auto inline-flex min-h-touch items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-sm font-semibold text-ink hover:bg-surface"
            >
              {t("ficha.banco.verDetalle")}
              <Icon name="chevronRight" size={14} />
            </button>
          </div>

          {banco.registros.length === 0 ? (
            <div className="mt-3">
              <EmptyState
                icon="refresh"
                title={t("ficha.banco.sinRegistros")}
                description={t("ficha.banco.sinRegistrosDesc")}
              />
            </div>
          ) : (
            <div className="mt-3 overflow-x-auto rounded-lg border border-line">
              <table className="w-full min-w-[620px] border-collapse text-sm">
                <thead className="bg-surface-inset text-left text-[11px] uppercase tracking-wider text-ink-muted">
                  <tr>
                    <th className="p-2">{t("ficha.banco.thFolio")}</th>
                    <th className="p-2">{t("ficha.banco.thFecha")}</th>
                    <th className="p-2">{t("ficha.banco.thTipo")}</th>
                    <th className="p-2">{t("ficha.banco.thMotivo")}</th>
                    <th className="p-2 text-right">{t("ficha.banco.thTrabajado")}</th>
                    <th className="p-2 text-right">{t("ficha.banco.thRepuesto")}</th>
                    <th className="p-2 text-right">{t("ficha.banco.thSaldo")}</th>
                    <th className="p-2">{t("ficha.banco.thEstado")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {banco.registros.map((r) => {
                    const estado = estadoReposicion(r, hj);
                    return (
                      <tr key={r.id}>
                        <td className="p-2 font-mono text-xs text-ink-soft">{r.folio}</td>
                        <td className="p-2 whitespace-nowrap text-ink">{fecha(r.fecha)}</td>
                        <td className="p-2 text-ink-soft">{r.tipoDia}</td>
                        <td className="p-2 text-ink-soft">{r.motivo}</td>
                        <td className="p-2 text-right tabular-nums text-ink">
                          {t("ficha.banco.horas", { n: horasTrabajadas(r, hj) })}
                        </td>
                        <td className="p-2 text-right tabular-nums text-ink-soft">
                          {t("ficha.banco.horas", { n: horasRepuestas(r, hj) })}
                        </td>
                        <td className="p-2 text-right font-semibold tabular-nums text-ink">
                          {t("ficha.banco.horas", { n: saldoHoras(r, hj) })}
                        </td>
                        <td className="p-2">
                          <Badge className={ESTADO_REPOSICION_CLS[estado]}>{estado}</Badge>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </Card>

        {/* VF5 — resumen de roles del mes */}
        <Card title={t("ficha.roles.titulo")} icon="calendarDays" variant="elevated">
          <p className="mb-3 text-xs text-ink-muted">
            {t("ficha.roles.ayuda", { mes: `${MESES[month]} ${year}` })}
          </p>
          {rolHoy && (
            <p className="mb-3 rounded-xl bg-surface-inset p-3 text-sm font-semibold text-ink">
              {t("ficha.roles.hoy", { etiqueta: rolHoy.etiqueta })}
              {rolHoy.codigo && (
                <span className={`ml-2 inline-flex rounded-md border px-2 py-0.5 text-xs font-bold ${codigoCls(rolHoy.codigo, false)}`}>
                  {rolHoy.codigo}
                </span>
              )}
            </p>
          )}
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {CATEGORIAS_RESUMEN.map((cat) => (
              <li key={cat} className="rounded-xl bg-surface-inset p-3">
                <div className="flex items-center gap-2">
                  <span className={`inline-flex h-6 w-6 items-center justify-center rounded-md border text-xs font-bold ${codigoCls(cat, false)}`}>
                    {cat}
                  </span>
                  <span className="truncate text-xs font-semibold text-ink-soft">{etiquetaCategoria(cat)}</span>
                </div>
                <p className="mt-1 text-lg font-bold tabular-nums text-ink">
                  {t("ficha.roles.dias", { n: resumenRoles.porCategoria[cat] })}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-3 flex flex-wrap gap-2 text-xs text-ink-muted">
            <span>{t("ficha.roles.activos", { n: resumenRoles.activos })}</span>
            <span>·</span>
            <span>{t("ficha.roles.presenciales", { n: resumenRoles.presenciales })}</span>
            {resumenRoles.sinMarcar > 0 && (
              <>
                <span>·</span>
                <span>{t("ficha.roles.sinMarcar", { n: resumenRoles.sinMarcar })}</span>
              </>
            )}
          </p>
        </Card>
      </div>

      {/* VF4 + VF7 — actividades programadas con filtro */}
      <Card title={t("ficha.actividades.titulo")} icon="clipboard" variant="elevated">
        <div role="group" aria-label={t("ficha.actividades.filtro")} className="mb-3 flex flex-wrap gap-1.5">
          {FILTROS_TIEMPO.map((clave) => (
            <button
              key={clave}
              type="button"
              aria-pressed={filtroActividades === clave}
              onClick={() => setFiltroActividades(clave)}
              className={`min-h-touch rounded-lg border px-3 py-2 text-sm font-semibold ${
                filtroActividades === clave
                  ? "border-brand bg-brand text-white"
                  : "border-line text-ink hover:bg-surface-alt"
              }`}
            >
              {t(`ficha.actividades.${clave}`)} ({conteo[clave]})
            </button>
          ))}
        </div>

        {todasLasActividades.length === 0 ? (
          <EmptyState
            icon="clipboard"
            title={t("ficha.actividades.sinNinguna")}
            description={t("ficha.actividades.sinNingunaDesc")}
          />
        ) : actividades.length === 0 ? (
          <EmptyState
            icon="search"
            title={t("ficha.actividades.sinResultados")}
            description={t("ficha.actividades.sinResultadosDesc")}
          />
        ) : (
          <ul className="space-y-2">
            {actividades.map((a) => {
              const fin = finDeActividad(a);
              const enCurso = !esActividadPasada(a, hoy) && a.inicio <= hoy;
              const acompanantes = (a.funcionarios || []).length - 1;
              const tt = teletrabajoPorActividad.get(a.id) || { dias: 0, teletrabajo: 0 };
              return (
                <li key={a.id} className="rounded-xl border border-line bg-surface-inset p-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="break-words text-sm font-bold text-ink">{a.titulo}</p>
                      <p className="mt-0.5 text-xs text-ink-muted">
                        {fin && fin !== a.inicio
                          ? t("ficha.actividades.rango", { inicio: fecha(a.inicio), fin: fecha(fin) })
                          : fecha(a.inicio)}
                        {a.lugar ? ` · ${a.lugar}` : ""}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {enCurso && (
                        <Badge className="border-ok-soft bg-ok-soft text-ok-fg">{t("ficha.actividades.enCurso")}</Badge>
                      )}
                      {tt.teletrabajo > 0 && (
                        <Badge className="border-cyan-300 bg-cyan-100 text-cyan-900">
                          {tt.teletrabajo === tt.dias
                            ? t("ficha.actividades.teletrabajo")
                            : t("ficha.actividades.teletrabajoParcial", { n: tt.teletrabajo, total: tt.dias })}
                        </Badge>
                      )}
                      {acompanantes > 0 && (
                        <Badge className="border-line bg-surface text-ink-soft">
                          {t("ficha.actividades.acompanantes", { n: acompanantes })}
                        </Badge>
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          setDiaVista(a.inicio);
                          setView("dia");
                        }}
                        aria-label={t("ficha.actividades.verEnDia", { fecha: fecha(a.inicio) })}
                        className="inline-flex min-h-touch items-center gap-1 rounded-lg border border-line px-3 py-2 text-xs font-semibold text-ink hover:bg-surface"
                      >
                        <Icon name="calendarDays" size={14} />
                        <Icon name="chevronRight" size={12} />
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </Card>

      {/* VF6 — alertas de la persona */}
      <Card title={t("ficha.alertas.titulo")} icon="bell" variant="elevated">
        {misAlertas.length === 0 ? (
          <EmptyState
            icon="check"
            tone="success"
            title={t("ficha.alertas.sinAlertas")}
            description={t("ficha.alertas.sinAlertasDesc")}
          />
        ) : (
          <>
            <ul className="space-y-2">
              {misAlertas.map((a, i) => (
                <li
                  key={`${a.msg}-${i}`}
                  className={`flex items-start gap-2 rounded-xl border p-3 ${TONO_ALERTA[a.t] || TONO_ALERTA.warn}`}
                >
                  <Icon name={a.icon} size={18} />
                  <div className="min-w-0">
                    <p className="break-words text-sm font-bold">{a.msg}</p>
                    <p className="mt-0.5 break-words text-xs opacity-90">{a.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setView("alertas")}
              className="mt-3 inline-flex min-h-touch items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-sm font-semibold text-ink hover:bg-surface-alt"
            >
              {t("ficha.alertas.verTodas")}
              <Icon name="chevronRight" size={14} />
            </button>
          </>
        )}
      </Card>

      {editando && (
        <ModalFuncionario
          valor={editando}
          cerrar={() => setEditando(null)}
          guardar={(obj) => {
            if (guardarFuncionario(obj)) setEditando(null);
          }}
        />
      )}
    </div>
  );
}
