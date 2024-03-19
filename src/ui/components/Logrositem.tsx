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
      <div className="text-left">
        <div className="text-xl font-bold">{props.nombre}</div>
        <div className="text-sm">{props.descripcion}</div>
      </div>
    </div>
  );
}

export default Logrositem;
