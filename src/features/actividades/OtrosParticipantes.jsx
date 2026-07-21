export default function OtrosParticipantes({ participantes = [], onChange, inputClass }) {
  const actualizar = (indice, campo, valor) => {
    onChange(participantes.map((participante, i) => (i === indice ? { ...participante, [campo]: valor } : participante)));
  };
  const agregar = () => onChange([...participantes, { nombre: "", contacto: "" }]);
  const eliminar = (indice) => onChange(participantes.filter((_, i) => i !== indice));

  return (
    <section className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-3">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">Otros participantes</h4>
          <p className="mt-1 text-xs text-slate-500">Personas, organizaciones o grupos que no figuran en el rol institucional.</p>
        </div>
        <button type="button" onClick={agregar} className="shrink-0 rounded-xl border border-emerald-700 bg-white px-3 py-2 text-xs font-bold text-emerald-800 hover:bg-emerald-50">
          + Agregar
        </button>
      </div>

      {participantes.length === 0 ? (
        <p className="mt-3 text-xs text-slate-500">Sin participantes externos registrados.</p>
      ) : (
        <div className="mt-3 space-y-2">
          {participantes.map((participante, indice) => (
            <div key={`${indice}-${participante.nombre}`} className="grid gap-2 rounded-xl border border-slate-200 bg-white p-2 md:grid-cols-[1fr_1fr_auto]">
              <input
                className={inputClass}
                value={participante.nombre || ""}
                onChange={(e) => actualizar(indice, "nombre", e.target.value)}
                placeholder="Nombre, sigla o grupo"
                aria-label={`Nombre de otro participante ${indice + 1}`}
              />
              <input
                className={inputClass}
                value={participante.contacto || ""}
                onChange={(e) => actualizar(indice, "contacto", e.target.value)}
                placeholder="Contacto: teléfono o correo"
                aria-label={`Contacto de otro participante ${indice + 1}`}
              />
              <button type="button" onClick={() => eliminar(indice)} className="rounded-xl border border-red-300 px-3 py-2 text-xs font-bold text-red-800 hover:bg-red-50">
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
