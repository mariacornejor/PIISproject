import "react-multi-carousel/lib/styles.css";
import Navbar from "../../ui/components/Navbar";
import Input from "../../ui/components/Input";
import { Link } from "react-router-dom";
import foto from "../../assets/images/perroHuman.webp";
import { Typography } from "@material-tailwind/react";

function Profile() {
  const TABLE_HEAD = ["Juego", "Puntos", "Liga"];

  const TABLE_ROWS = [
    {
      juego: "Parchis",
      puntos: "10918322",
      liga: "Nosferatus",
    },
    {
      juego: "Ajedres",
      puntos: "642173",
      liga: "Goul",
    },
    {
      juego: "Tic Tac Toe",
      puntos: "1844327",
      liga: "Barón",
    },
    {
      juego: "Snow Fight",
      puntos: "15",
      liga: "Vampiro Menor",
    },
  ];
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
            <Link to="/edit" className="block w-full text-background h-full">
              Editar
            </Link>
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
            <Input
              titulo="Ultima Ip de Acceso"
              valorPredefinido="196.168.0.10"
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
            <img src={foto} alt="" className="w-full h-auto" />
          </div>
        </div>
        {/** Parte de las estadisticas */}
        <div className="relative py-10 m-3 ml-8 bg-leaderboard rounded-lg content-center">
          <h1 className="h-8 text-3xl px-12 flex max-w-50 flex-col my-4 text-white">
            Estadísticas de Coco Loco
          </h1>
          <div className="px-12 flex max-w-96 flex-col gap-2 text-white">
            <Input
              titulo="Registrado"
              valorPredefinido="hace 9 años"
              blocked={true}
            ></Input>
            <Input
              titulo="Ultima conexión"
              valorPredefinido="hace 1 minuto"
              blocked={true}
            ></Input>
            <Input
              titulo="Experiencia"
              valorPredefinido="74739 XP"
              blocked={true}
            ></Input>
            <Input
              titulo="Juego mas jugado"
              valorPredefinido="Parchis"
              blocked={true}
            ></Input>
            <Input
              titulo="Liga mas alta"
              valorPredefinido="Amateur"
              blocked={true}
            ></Input>
            <Input titulo="Amigos" valorPredefinido="25" blocked={true}></Input>
          </div>
        </div>

        {/** Parte del historial de plataforma */}
        <div className="content-center text-center">
          <h1 className="text-2xl px-12 flex max-w-50 flex-col my-4 text-white align-middle">
            Historial de la plataforma
          </h1>
          <div className=" w-full overflow-scroll text-white relative  py-10 m-3 mr-8 bg-leaderboard rounded-lg content-center">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                        placeholder={""}
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({ juego, puntos, liga }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={juego}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                          placeholder={""}
                        >
                          {juego}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                          placeholder={""}
                        >
                          {puntos}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                          placeholder={""}
                        >
                          {liga}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/** Parte del historial de plataforma */}
        <div className="content-center text-center">
          <h1 className="text-2xl px-12 flex max-w-50 flex-col my-4 text-white align-middle">
            Logros
          </h1>
          <div className=" w-full overflow-scroll text-white relative  py-10 m-3 mr-8 bg-leaderboard rounded-lg content-center"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
