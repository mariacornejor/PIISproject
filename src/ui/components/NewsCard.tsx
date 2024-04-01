{
  /*cardbg*/
}

function NewsCard(props: Props) {
  let imagen = props.imagen;
  let nombre = props.nombre;
  let descrip = props.descrip;
  let tags = props.tags;

  return (
    <div>
      <section className="px-4 py-12">
        <div className="mx-auto flex flex-wrap justify-center gap-4">
          {/* Iterar sobre tus tarjetas aquí */}
          <NCard
            nombre={nombre}
            descrip={descrip}
            imagen={imagen}
            tags={tags}
          />
        </div>
      </section>
    </div>
  );
}

type Props = {
  nombre: string;
  imagen: string;
  descrip: string;
  tags: string[];
};
const NCard = (props: Props) => {
  let nombre = props.nombre;
  let imagen = props.imagen;
  let descrip = props.descrip;
  let tags = props.tags;
  return (
    <div className="bg-cardbg max-w-sm rounded overflow-hidden shadow-lg min-w-full flex flex-col ">
      <img className="w-full" src={imagen} alt="Sunset in the mountains" />
      <div className="px-6 py-4 min-h-[180px] max-h-[180px]">
        {/* Ajusta el valor de min-h según sea necesario */}
        <div className="font-bold text-xl mb-2 text-white">{nombre}</div>
        <p className="text-white text-base">{descrip}</p>
      </div>
      <div className="px-6 pt-4 pb-2 min-h-[90PX] max-h-[90PX]" >
        {/* Itera sobre las tags para mostrarlas */}
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
