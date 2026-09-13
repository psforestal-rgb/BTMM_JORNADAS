import { useCallback, useEffect, useState } from "react";
import Icon from "../../ui/Icon.jsx";
import { useT } from "../../i18n/useT.js";
import { useToast } from "../../context/ToastContext.jsx";
import { formatBuildTime } from "../../lib/appVersion.js";
import { descargarArchivo } from "../../lib/descargas.js";
import { archivoDeRespaldoDeMigracion } from "../../lib/respaldo.js";
import {
  listarRespaldosDeMigracion,
  obtenerRespaldoDeMigracion,
  eliminarRespaldoDeMigracion,
  restaurarRespaldoDeMigracion,
  RESPALDOS_MAX,
} from "../../lib/storage.js";

/**
 * Respaldos automáticos de migración (A2).
 *
 * Los crea la capa de persistencia sola, sin pedir nada, cuando cambia el
 * formato de lo guardado (ver «Respaldo automático en migraciones» en
 * `src/lib/db.js`). Esta vista existe porque un respaldo que nadie puede
 * encontrar ni sacar del aparato no es un respaldo: aquí se ven, se descargan
 * y se borran.
 *
 * No hay botón de «restaurar»: un respaldo apartado por incompatible tiene,
 * por definición, un formato que esta versión ya no entiende, y
 * `parseSnapshot()` lo rechazaría. El camino honesto es descargarlo y
 * guardarlo fuera del aparato.
 *
 * El borrado es reversible con «Deshacer», como los otros cinco puntos de
 * borrado de la aplicación (F-P12): no se pierde de un toque accidental algo
 * que por definición ya no se puede volver a generar.
 */
export default function RespaldosAutomaticos() {
  const t = useT();
  const toast = useToast();
  const [filas, setFilas] = useState([]);
  const [cargando, setCargando] = useState(true);

  const cargarLista = useCallback(async (sigueVivo = () => true) => {
    const lista = await listarRespaldosDeMigracion();
    if (!sigueVivo()) return;
    setFilas(lista);
    setCargando(false);
  }, []);

  useEffect(() => {
    let vivo = true;
    cargarLista(() => vivo);
    return () => {
      vivo = false;
    };
  }, [cargarLista]);

  const onDescargar = async (id) => {
    const fila = await obtenerRespaldoDeMigracion(id);
    const archivo = fila ? archivoDeRespaldoDeMigracion(fila) : null;
    if (!archivo) {
      toast.error(t("datos.respaldosAuto.noDisponible"));
      return;
    }
    if (!descargarArchivo(archivo.name, archivo.text)) {
      toast.error(t("datos.descargaFallo"));
    }
  };

  const onEliminar = async (id) => {
    // Se lee ENTERO antes de borrar: sin el payload no habría nada que
    // devolver al pulsar «Deshacer».
    const completo = await obtenerRespaldoDeMigracion(id);
    const ok = await eliminarRespaldoDeMigracion(id);
    if (!ok) {
      toast.error(t("datos.respaldosAuto.noDisponible"));
      return;
    }
    await cargarLista();
    if (!completo) {
      toast.exito(t("datos.respaldosAuto.eliminado"));
      return;
    }
    toast.conDeshacer(t("datos.respaldosAuto.eliminado"), async () => {
      await restaurarRespaldoDeMigracion(completo);
      await cargarLista();
    });
  };

  const fechaDe = (iso) => (iso ? formatBuildTime(iso) : t("datos.respaldosAuto.sinFecha"));
  const esquemaDe = (n) =>
    n === null || n === undefined
      ? t("datos.respaldosAuto.esquemaDesconocido")
      : t("datos.respaldosAuto.esquema", { n });
  const pesoDe = (bytes) =>
    t("datos.respaldosAuto.peso", { kb: Math.max(1, Math.round((bytes || 0) / 1024)) });

  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-600">{t("datos.respaldosAuto.sub", { max: RESPALDOS_MAX })}</p>

      {cargando ? (
        <p className="text-sm text-slate-600">{t("datos.respaldosAuto.cargando")}</p>
      ) : filas.length === 0 ? (
        <p className="text-sm text-slate-600">{t("datos.respaldosAuto.vacio")}</p>
      ) : (
        <>
          <p className="rounded-xl border border-amber-300 bg-amber-50 p-3 text-xs text-amber-950">
            {t("datos.respaldosAuto.aviso")}
          </p>
          <ul className="space-y-2">
            {filas.map((fila) => (
              <li key={fila.id} className="rounded-xl border border-slate-300 bg-white p-3">
                <p className="text-sm font-semibold text-slate-900">
                  {t(`datos.respaldosAuto.motivo.${fila.motivo}`)}
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  {t("datos.respaldosAuto.creado", { fecha: fechaDe(fila.creadoEn) })}
                </p>
                <p className="text-xs text-slate-600">
                  {t("datos.respaldosAuto.original", { fecha: fechaDe(fila.savedAt) })}
                  {" · "}
                  {esquemaDe(fila.schemaVersion)}
                  {" · "}
                  {pesoDe(fila.bytes)}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => onDescargar(fila.id)}
                    className="inline-flex min-h-touch items-center justify-center gap-2 rounded-xl border border-emerald-700 bg-white px-4 text-sm font-semibold text-emerald-900 hover:bg-emerald-50"
                  >
                    <Icon name="banknote" size={16} />
                    {t("datos.respaldosAuto.descargar")}
                  </button>
                  <button
                    type="button"
                    onClick={() => onEliminar(fila.id)}
                    className="inline-flex min-h-touch items-center justify-center gap-2 rounded-xl border border-red-300 bg-white px-4 text-sm font-semibold text-red-800 hover:bg-red-50"
                  >
                    <Icon name="trash" size={16} />
                    {t("datos.respaldosAuto.eliminar")}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
