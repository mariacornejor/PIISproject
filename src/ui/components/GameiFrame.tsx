
import { BsArrowsFullscreen } from "react-icons/bs";

function GameiFrame() {
  return (
    <div
    className="py-5 lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
    style={{ minHeight: "600px" }} // Añadiendo min-height aquí
  >
    {" "}
    {/* Div modificado para el texto con z-index */}
    <div className="absolute top-0 left-0 right-0 text-left pt-2 z-sm:flex-nowrap flex-wrap10">
      <span className="text-white font-bold underline">
        Nombre del juego
      </span>
    </div>
    <iframe
      width="100%"
      height="100%"
      className="absolute inset-0 mt-10"
      title="map"
      src="http://185.236.248.96:3000/"
      style={{ zIndex: 1 }} // Asegurando que el iframe tenga un z-index menor
    ></iframe>
    <div className=" relative flex flex-wrap py-6 rounded shadow-md">
      <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
        <div
          style={{
            backgroundColor: "#1c1c1c",
          }}
        >
          <BsArrowsFullscreen
            style={{
              color: "#1E1E1EE5",
            }}
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default GameiFrame