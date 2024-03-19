type Props = {
  src: string;
  nombre: string;
  descripcion: string;
};

function Logrositem(props: Props) {
  return (
    <div className="bg-leaderboard text-white p-3 rounded-lg shadow-md flex items-center space-x-4 m-4">
      <img
        src={props.src}
        alt={props.nombre}
        className="w-20 h-20 rounded-2xl object-cover"
      />
      <div>
        <div className="text-lg font-bold mr-auto">{props.nombre}</div>
        <div className="text-sm">{props.descripcion}</div>
      </div>
    </div>
  );
}

export default Logrositem;
