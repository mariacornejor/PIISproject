import "react-multi-carousel/lib/styles.css";
import Navbar from "../../ui/components/Navbar";
import Input from "../../ui/components/Input";
import fotoPerfil from "../../assets/images/perroHuman.webp";

function EditProfile() {
  return (
    <div className="background bg-background">
      <Navbar />
      <div className="grid gap-1 mb-1 md:grid-cols-2">
        {/** Parte de la info privada */}
        <div className="relative py-10 m-3 mt-10 ml-8 bg-leaderboard rounded-lg content-center">
          <h1 className="h-8 text-3xl px-12 flex max-w-50 flex-col my-4 text-white">
            Perfil de Usuario
          </h1>
          <button className="absolute top-12 left-13 right-10 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
            Enviar
          </button>
          <div className="px-12 flex max-w-96 flex-col gap-2 text-white">
            <Input
              titulo="Username"
              valorPredefinido="Coco loco"
              blocked={true}
            ></Input>
            <Input
              titulo="Email"
              valorPredefinido="cocoloco@gmail.com"
              blocked={true}
            ></Input>
            <Input
              titulo="Fecha de Nacimiento"
              valorPredefinido="23/05/1995"
              blocked={true}
            ></Input>
          </div>
          <p className="text-white h-8  px-12 flex max-w-50 flex-col my-4">
            Guardamos los siguientes datos privados relacionados con tu cuenta.
            <br />
            Sólo tú, el dueño de la cuenta, puedes verlos
          </p>
        </div>

        {/** Parte de la imagen */}
        <div className="relative py-10 m-3 mt-10 mr-8 rounded-lg items-center flex justify-center">
          <h3 className="px-12 h-8 text-3xl absolute top-0 left-0 right-0 text-white text-center py-2 text-gray-900 font-semibold">
            COCO LOCO
          </h3>
          <div className="w-96 h-96 overflow-hidden rounded-xl border-2 border-gray-300 shadow-lg relative">
            <img src={fotoPerfil} alt="" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
