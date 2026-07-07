import ReposicionCard from "./ReposicionCard.jsx";

export default function ReposicionListMobile({ registros, hj, onReponer, onEditar, onReabrir, onEliminar }) {
  return (
    <div className="space-y-3 md:hidden">
      {registros.map((registro) => (
        <ReposicionCard
          key={registro.id}
          registro={registro}
          hj={hj}
          onReponer={() => onReponer(registro)}
          onEditar={() => onEditar(registro)}
          onReabrir={() => onReabrir(registro.id)}
          onEliminar={() => onEliminar(registro.id)}
        />
      ))}
    </div>
  );
}
