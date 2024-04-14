import Navbar from "../../ui/components/Navbar";
import Secondbar from "../../ui/components/Secondbar";
import ajedrez from "../../assets/images/torneo-ajedrez.png";
import { FaTrophy, FaUsers, FaCalendarAlt } from "react-icons/fa";
import Chat from "../../ui/components/Chat.tsx";

function TorneoIniciado() {
  return (
    <section className=" bg-background text-white body-font ">
      <Navbar />
      <Secondbar />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mt-10 justify-center items-center space-x-20">
          <img
            src={ajedrez}
            alt="Torneo de Ajedrez"
            className="object-cover object-center w-[188px] h-[77px] size-81 rounded-lg"
            style={{ objectPosition: "center 0%" }}
          />

          <span className="font-bold text-lg">Ajedrez - Correketecomo </span>

          <div className="flex items-center mx-auto bg-black rounded-md p-4 ">
            <div className="mr-2">
              <FaTrophy
                style={{
                  color: "#EABE3F",
                }}
              />
            </div>
            <span className="text-gold">Prize 500,000BBs</span>
          </div>

          <div className="flex items-center mx-auto bg-black rounded-md p-4 space-x-1">
            <FaUsers />
            <span className="text-gray-400">Players </span>
            <span className="text-white">8 </span>
          </div>

          <div className="flex items-center mx-auto bg-black rounded-md p-4 space-x-1">
            <FaCalendarAlt />
            <span className="text-gray-400">Date </span>
            <span className="text-white">Feb 20–Mar 06, 2023 </span>
          </div>
        </div>
        <div className="flex flex-wrap py-20 ">
          <div className="flex justify-center py-8 px-4 lg:w-1/3 border-r-2 border-white ">
            <div className="flex flex-col space-y-3 ">
              <div className="w-[338px] h-[60px] bg-background flex items-center justify-center">
                <span className="text-white">Pedro</span>
              </div>
              <div className="w-[338px] h-[60px] bg-background flex items-center justify-center">
                <span className="text-white">Juan</span>
              </div>
              <br></br>
              <div className="w-[338px] h-[60px] bg-background flex items-center justify-center">
                <span className="text-white">Carlos</span>
              </div>
              <div className="w-[338px] h-[60px] bg-background flex items-center justify-center">
                <span className="text-white">Antonia</span>
              </div>
              <br></br>
              <div className="w-[338px] h-[60px] bg-background flex items-center justify-center">
                <span className="text-white">Maria</span>
              </div>
              <div className="w-[338px] h-[60px] bg-background flex items-center justify-center">
                <span className="text-white">Víctor</span>
              </div>
              <br></br>
              <div className="w-[338px] h-[60px] bg-background flex items-center justify-center">
                <span className="text-white">Raul </span>
              </div>
              <div className="w-[338px] h-[60px] bg-background flex items-center justify-center">
                <span className="text-white">Aitor</span>
              </div>
              <span className="flex justify-center font-bold text-lg pt-10 underline underline-offset-1	">
                Cuartos de final
              </span>
            </div>
          </div>
          <div className="flex justify-center py-8 px-4 lg:w-1/3 border-r-2 border-white ">
            <div className="flex flex-col space-y-3 mt-40">
              <div className="w-[338px] h-[60px] bg-background flex items-center justify-center">
                <span className="text-white"></span>
              </div>
              <div className="w-[338px] h-[60px] bg-background flex items-center justify-center">
                <span className="text-white"></span>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div className="w-[338px] h-[60px] bg-background flex items-center justify-center ">
                <span className="text-white "></span>
              </div>
              <div className="w-[338px] h-[60px] bg-background flex items-center justify-center">
                <span className="text-white"></span>
              </div>
              <span className="flex justify-center font-bold text-lg pt-10 underline underline-offset-1	">
                Semifinal
              </span>
            </div>
          </div>
          <div className="flex justify-center py-8 px-4 lg:w-1/3">
            <div className="flex flex-col space-y-3 mt-72">
              <div className="w-[338px] h-[60px] bg-background flex items-center justify-center">
                <span className="text-white"></span>
              </div>
              <div className="w-[338px] h-[60px] bg-background flex items-center justify-center">
                <span className="text-white"></span>
              </div>
              <span className="flex justify-center font-bold text-lg pt-10 underline underline-offset-1">
                <a href="torneo-finalizado">Final</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Chat />
    </section>
  );
}

export default TorneoIniciado;
