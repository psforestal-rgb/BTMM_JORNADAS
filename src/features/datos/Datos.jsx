import { useRef, useState } from "react";
import Card from "../../ui/Card.jsx";
import Badge from "../../ui/Badge.jsx";
import Icon from "../../ui/Icon.jsx";
import { useApp } from "../../context/AppContext.jsx";
import { exportSnapshot, parseSnapshot, SCHEMA_VERSION } from "../../lib/storage.js";
import { formatBuildTime } from "../../lib/appVersion.js";
import { useT } from "../../i18n/useT.js";
import { plural } from "../../i18n/es-CR.js";
import { toLocalFileTimestamp } from "../../domain/fechas.js";
import Modal from "../../ui/Modal.jsx";

// Límite defensivo antes de leer/parsear el archivo importado. El snapshot
// real de producción ronda los 330 KB; 20 MB da margen generoso para
// crecimiento (10-50x) sin permitir que un archivo manipulado o corrupto
// fuerce un JSON.parse desproporcionado en el hilo principal.
const MAX_IMPORT_BYTES = 20 * 1024 * 1024;

function descargarArchivo(nombre, contenido) {
  try {
    const blob = new Blob([contenido], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = nombre;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    return true;
  } catch {
    return false;
  }
}

export default function Datos() {
  const t = useT();
  const ctx = useApp();
  const fileInputRef = useRef(null);
  const [importError, setImportError] = useState(null);
  const [importOk, setImportOk] = useState(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const [pendingImport, setPendingImport] = useState(null);

  const totalPersonas = (ctx.personas || []).length;
  const totalActividades = (ctx.actividadesPlan || []).length;
  const totalRoleEntries = Object.keys(ctx.roleData || {}).length;
  const totalReposiciones = (ctx.reposiciones || []).length;

  const crearRespaldo = () => {
    const snapshot = exportSnapshot({
      personas: ctx.personas,
      actividadesPlan: ctx.actividadesPlan,
      reposiciones: ctx.reposiciones,
      roleData: ctx.roleData,
      reglas: ctx.reglas,
      migraciones: ctx.migraciones,
    });
    return { snapshot, name: `pnlq-snapshot-${toLocalFileTimestamp()}.json`, text: JSON.stringify(snapshot, null, 2) };
  };
  const onExport = () => { const backup = crearRespaldo(); descargarArchivo(backup.name, backup.text); };
  const onShare = async () => {
    const backup = crearRespaldo();
    const file = new File([backup.text], backup.name, { type: "application/json" });
    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      await navigator.share({ title: "Respaldo BTMM Jornadas", files: [file] });
    } else {
      descargarArchivo(backup.name, backup.text);
      setImportOk({ archivo: backup.name, mensaje: "El navegador no permite compartir archivos; se descargó el respaldo." });
    }
  };

  const onPickImport = () => fileInputRef.current?.click();

  const onImportFile = async (e) => {
    setImportError(null);
    setImportOk(null);
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_IMPORT_BYTES) {
      setImportError(`El archivo pesa ${(file.size / (1024 * 1024)).toFixed(1)} MB, más del máximo permitido (${MAX_IMPORT_BYTES / (1024 * 1024)} MB).`);
      e.target.value = "";
      return;
    }
    try {
      const text = await file.text();
      const parsed = parseSnapshot(text);
      if (!parsed.ok) {
        setImportError(parsed.reason);
        return;
      }
      setPendingImport({ parsed, archivo: file.name });
    } catch (err) {
      setImportError(`Error al leer archivo: ${err.message}`);
    } finally {
      e.target.value = "";
    }
  };

  const aplicarImport = () => {
    if (!pendingImport) return;
    const backup = crearRespaldo();
    descargarArchivo(`antes-de-restaurar-${toLocalFileTimestamp()}.json`, backup.text);
    const { parsed, archivo } = pendingImport;
    ctx.replaceState({
      personas: parsed.state.personas ?? ctx.personas,
      actividadesPlan: parsed.state.actividadesPlan ?? ctx.actividadesPlan,
      reposiciones: parsed.state.reposiciones ?? ctx.reposiciones,
      roleData: parsed.state.roleData ?? ctx.roleData,
      reglas: parsed.state.reglas ?? ctx.reglas,
      migraciones: parsed.state.migraciones ?? ctx.migraciones,
    });
    setImportOk({ exportadoEn: parsed.exportadoEn, archivo });
    setPendingImport(null);
  };

  const onReset = () => {
    ctx.resetToSeed();
    setConfirmReset(false);
    setImportOk(null);
    setImportError(null);
  };

  const estado = ctx.pendingChanges > 0
    ? {
        tono: "warning",
        icon: "alert",
        msg: t("datos.estadoPendiente", { n: ctx.pendingChanges, plural: plural(ctx.pendingChanges) }),
      }
    : ctx.lastSavedAt
    ? { tono: "ok", icon: "check", msg: t("datos.estadoOk", { fecha: formatBuildTime(ctx.lastSavedAt) }) }
    : { tono: "info", icon: "info", msg: t("datos.estadoVacio") };

  const porQue = t("datos.porQue").map((m) => m.replace("{n}", SCHEMA_VERSION));

  return (
    <section className="space-y-4">
      <Card
        title={t("datos.titulo")}
        icon="🛡️"
        action={
          <Badge className="border-slate-300 bg-slate-100 text-slate-700">
            {t("datos.esquema", { n: SCHEMA_VERSION })}
          </Badge>
        }
      >
        <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <button type="button" onClick={onExport} className="inline-flex min-h-touch items-center justify-center gap-2 rounded-2xl bg-emerald-800 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"><Icon name="banknote" size={18} />Crear respaldo</button>
          <button type="button" onClick={onShare} className="inline-flex min-h-touch items-center justify-center gap-2 rounded-2xl border border-emerald-700 bg-white px-4 py-3 text-sm font-semibold text-emerald-900"><Icon name="clipboard" size={18} />Compartir respaldo</button>
          <button type="button" onClick={onPickImport} className="inline-flex min-h-touch items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"><Icon name="refresh" size={18} />Restaurar respaldo</button>
          <button type="button" onClick={() => setConfirmReset(true)} className="inline-flex min-h-touch items-center justify-center gap-2 rounded-2xl border border-red-300 bg-white px-4 py-3 text-sm font-semibold text-red-800 shadow-sm hover:bg-red-50"><Icon name="refresh" size={18} />{t("datos.reiniciar")}</button>
          <input ref={fileInputRef} type="file" accept="application/json,.json" onChange={onImportFile} className="hidden" aria-label={t("datos.archivoAria")} />
        </div>

        <details className="mb-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <summary className="min-h-touch cursor-pointer py-3 text-sm font-semibold text-slate-800">Ver información técnica</summary>
        {/* Tarjeta: backend de almacenamiento durable (Fase 5 paso 1). */}
        <div className="mt-2 flex items-start gap-3 rounded-2xl border border-slate-300 bg-white p-4">
          <Icon name="shield" size={20} className="text-slate-700" />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-sm font-semibold text-slate-900">{t("datos.backendTitulo")}</p>
              <Badge
                className={
                  ctx.storageBackend?.kind === "indexeddb"
                    ? "border-emerald-300 bg-emerald-100 text-emerald-900"
                    : ctx.storageBackend?.kind === "localStorage"
                    ? "border-amber-300 bg-amber-100 text-amber-900"
                    : "border-red-300 bg-red-100 text-red-900"
                }
              >
                {ctx.storageBackend?.kind === "indexeddb"
                  ? t("datos.backendBadgeIDB")
                  : ctx.storageBackend?.kind === "localStorage"
                  ? t("datos.backendBadgeLS")
                  : t("datos.backendBadgeNone")}
              </Badge>
            </div>
            <p className="mt-1 text-xs text-slate-600">
              {ctx.storageBackend?.kind === "indexeddb"
                ? t("datos.backendIDB")
                : ctx.storageBackend?.kind === "localStorage"
                ? t("datos.backendLS")
                : t("datos.backendNone")}
            </p>
            {ctx.migracionLs && (
              <p className="mt-2 rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-900">
                {t("datos.migradoLS")}
              </p>
            )}
            <p className="mt-2 text-xs text-slate-500">
              <strong>{t("datos.pendientesTitulo")}:</strong> {t("datos.pendientesCero")} {t("datos.pendientesSub")}
            </p>
          </div>
        </div>
        </details>

        <div
          className={`mb-4 flex items-start gap-3 rounded-2xl border p-4 ${
            estado.tono === "warning"
              ? "border-amber-300 bg-amber-50 text-amber-950"
              : estado.tono === "ok"
              ? "border-emerald-300 bg-emerald-50 text-emerald-950"
              : "border-blue-200 bg-blue-50 text-blue-950"
          }`}
        >
          <Icon name={estado.icon} size={20} />
          <div>
            <p className="text-sm font-semibold">{estado.msg}</p>
            <p className="mt-1 text-xs opacity-80">{t("datos.estadoNota")}</p>
          </div>
        </div>

        <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{t("datos.funcionarios")}</p>
            <p className="mt-1 text-3xl font-semibold text-slate-900">{totalPersonas}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{t("datos.actividadesPlanificadas")}</p>
            <p className="mt-1 text-3xl font-semibold text-slate-900">{totalActividades}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{t("datos.reposiciones")}</p>
            <p className="mt-1 text-3xl font-semibold text-slate-900">{totalReposiciones}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{t("datos.celdasOverride")}</p>
            <p className="mt-1 text-3xl font-semibold text-slate-900">{totalRoleEntries}</p>
          </div>
        </div>

        {importError && (
          <div className="mt-4 rounded-2xl border border-red-300 bg-red-50 p-3 text-sm text-red-950" role="alert">
            <p className="font-semibold">{t("datos.importRechazado")}</p>
            <p className="mt-1 text-xs opacity-90">{importError}</p>
          </div>
        )}
        {importOk && (
          <div className="mt-4 rounded-2xl border border-emerald-300 bg-emerald-50 p-3 text-sm text-emerald-950" role="status">
            <p className="font-semibold">{t("datos.importadoTitulo")}</p>
            <p className="mt-1 text-xs opacity-90">
              {importOk.mensaje || t("datos.importadoDesc", {
                archivo: importOk.archivo,
                exportadoEn: importOk.exportadoEn ? t("datos.importadoExtra", { fecha: formatBuildTime(importOk.exportadoEn) }) : "",
              })}
            </p>
          </div>
        )}

        <Modal open={confirmReset} onClose={() => setConfirmReset(false)} title={t("datos.reiniciarTitulo")} description={t("datos.reiniciarSub")} size="sm" actions={<><button type="button" onClick={() => setConfirmReset(false)} className="min-h-touch rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold">{t("acciones.cancelar")}</button><button type="button" onClick={onReset} className="min-h-touch rounded-xl bg-red-700 px-4 text-sm font-semibold text-white">{t("datos.confirmarReiniciar")}</button></>}><div className="rounded-xl border border-amber-300 bg-amber-50 p-3 text-sm text-amber-950">{t("datos.reiniciarRec")}</div></Modal>
        <Modal open={Boolean(pendingImport)} onClose={() => setPendingImport(null)} title="Confirmar restauración" description="Se validó el archivo. Revisa qué reemplazará antes de continuar." size="md" actions={<><button type="button" onClick={() => setPendingImport(null)} className="min-h-touch rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold">Cancelar</button><button type="button" onClick={aplicarImport} className="min-h-touch rounded-xl bg-red-700 px-4 text-sm font-semibold text-white">Crear respaldo y restaurar</button></>}>
          {pendingImport && <div className="space-y-3 text-sm"><p><strong>Archivo:</strong> {pendingImport.archivo}</p><p><strong>Fecha del respaldo:</strong> {pendingImport.parsed.exportadoEn ? formatBuildTime(pendingImport.parsed.exportadoEn) : "No informada"}</p><dl className="grid grid-cols-2 gap-2 rounded-xl bg-slate-50 p-3"><div><dt>Funcionarios</dt><dd className="text-xl font-bold">{pendingImport.parsed.state.personas?.length ?? 0}</dd></div><div><dt>Actividades</dt><dd className="text-xl font-bold">{pendingImport.parsed.state.actividadesPlan?.length ?? 0}</dd></div><div><dt>Reposiciones</dt><dd className="text-xl font-bold">{pendingImport.parsed.state.reposiciones?.length ?? 0}</dd></div><div><dt>Celdas de roles</dt><dd className="text-xl font-bold">{Object.keys(pendingImport.parsed.state.roleData || {}).length}</dd></div></dl><p className="text-xs text-slate-600">{pendingImport.parsed.state.reglas ? "Este respaldo incluye reglas de negocio configuradas: también se restaurarán." : "Este respaldo no trae reglas de negocio; se mantienen las reglas actuales."}</p><p className="rounded-xl border border-red-300 bg-red-50 p-3 text-red-950">Estos datos reemplazarán los actuales. Antes se descargará automáticamente una copia preventiva.</p></div>}
        </Modal>
      </Card>

      <Card title={t("datos.porQueTitulo")} icon="ℹ️">
        <ul className="list-inside list-disc space-y-1.5 text-sm text-slate-700">
          {porQue.map((m, i) => <li key={i}>{m}</li>)}
        </ul>
      </Card>
    </section>
  );
}
