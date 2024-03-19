type Props = {
  nivel: number; // El nivel actual del usuario
  porcentaje: number; // El porcentaje de la barra de nivel que está lleno
};

function BarraNivel({ nivel, porcentaje }: Props) {
  return (
    <div className="bg-background text-white p-3 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">Nivel {nivel}</span>
        <span className="text-sm font-medium">{porcentaje}%</span>
      </div>
      <div className="w-full bg-grey rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-red to-light_red h-2.5 rounded-full"
          style={{ width: `${porcentaje}%` }}
        ></div>
      </div>
    </div>
  );
}

export default BarraNivel;
