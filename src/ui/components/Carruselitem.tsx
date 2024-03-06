import { motion } from "framer-motion";

function Carruselitem(props: Props) {
  let imagen = props.imagen;
  let nombre = props.nombre;
  let descrip = props.descrip;

  return (
    <div>
      <section className="bg-neutral-900 px-4 py-12">
        <div className="mx-auto w-fit">
          <Card nombre={nombre} descrip={descrip} imagen={imagen} />
        </div>
      </section>
    </div>
  );
}

type Props = {
  nombre: string;
  imagen: string;
  descrip: string;
};

const Card = (props: Props) => {
  let nombre = props.nombre;
  let imagen = props.imagen;
  let descrip = props.descrip;

  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8"
    >
      <motion.img
        src={imagen}
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover"
        variants={{
          hover: {
            scale: 1.5,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
      />

      <div className="absolute inset-0 z-10 bg-black opacity-50"></div>

      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
          New
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
        >
          {nombre}
        </motion.span>
        <p>{descrip}</p>
      </div>
      <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
        Jugar
      </button>
    </motion.div>
  );
};

export default Carruselitem;
