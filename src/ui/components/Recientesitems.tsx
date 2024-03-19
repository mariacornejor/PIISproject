type Props = {
  src: string;
  nombre: string;
  puntos: number;
};

function Recientesitems(props: Props) {
  function obtenerNivel(puntos: number) {
    if (puntos >= 0 && puntos < 5000) {
      return "Vampiro menor";
    } else if (puntos >= 5000 && puntos < 50000) {
      return "Goul";
    } else if (puntos >= 50000 && puntos < 100000) {
      return "Baron";
    } else if (puntos >= 100000) {
      return "Nosferatu";
    }
    return "Vampiro menor"; // Valor por defecto por si los puntos no caen en ningún rango conocido
  }

  // Asignar el nivel a una variable
  const nivel = obtenerNivel(props.puntos);
  return (
    <div className="bg-blue text-white p-3 rounded-lg shadow-md flex items-center space-x-4 m-4 max-w-96">
      <img
        src={props.src}
        alt={props.nombre}
        className="w-20 h-20 rounded-2xl object-cover"
      />
      <div>
        <div className="text-lg font-bold">{props.nombre}</div>
        <div className="text-sm">
          {nivel} - {props.puntos} points
        </div>
      </div>
    </div>
  );
}

export default Recientesitems;
