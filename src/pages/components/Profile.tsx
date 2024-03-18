import "react-multi-carousel/lib/styles.css";
import Navbar from "../../ui/components/Navbar";
import { Input } from "@material-tailwind/react";

function Profile() {
  return (
    <div className="background bg-background">
      <Navbar />
      <div className="px-4 flex w-72 flex-col gap-6 text-white">
        <h1 className="h-8">Perfil de Usuario</h1>
        <Input
          variant="static"
          label="Nombre y Apellidos"
          placeholder="Nombre y Apellidos"
          crossOrigin=""
        />
        <Input
          variant="static"
          label="Correo"
          placeholder="Correo"
          crossOrigin=""
        />
        <Input
          variant="static"
          label="Username"
          placeholder="Username"
          crossOrigin=""
        />
        <Input
          variant="static"
          label="Contraseña"
          placeholder="Contraseña"
          crossOrigin=""
        />
      </div>
    </div>
  );
}

export default Profile;
