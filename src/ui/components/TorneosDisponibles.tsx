import Pagination from "../components/Pagination";
import torneoajedrez from "../../assets/images/torneo-ajedrez.png";
import torneobillar from "../../assets/images/torneo-billar.png";
import torneodomino from "../../assets/images/torneo-domino.png";
import torneoparchis from "../../assets/images/torneo-parchis.png";
import torneopoker from "../../assets/images/torneo-poker.png";
import torneouno from "../../assets/images/torneo-uno.png";

import { FaUsers } from "react-icons/fa";

function TorneosDisponibles() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-2 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4 px-1 flex flex-col items-center">
            <a href="http://localhost:5173/torneo-iniciado" className="text-center">
             
              <div className="relative w-[340px] h-[135px]">
                <img
                  src={torneoajedrez}
                  alt="Torneo de Ajedrez"
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: "center 0%" }}
                />
                <div className="flex flex-wrap items-center absolute bottom-0 right-0 bg-black text-white p-1">
                  <FaUsers />
                  <span className="ml-2">8</span>
                </div>
              </div>
              <h3 className="mt-2 text-white">Ajedrez - Correketekomo</h3>
            </a>

            <div className="w-[340px] flex justify-between">
              <div className="bg-black text-white rounded-lg p-2 px-7">
                Feb 20–Mar 06, 2023
              </div>
              <div className="bg-black text-gold rounded-lg p-2 px-4">
                500,000BBs
              </div>
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4 px-1 flex flex-col items-center">
            <div className="relative w-[340px] h-[135px]">
              <img
                src={torneoparchis}
                alt="Torneo de Ajedrez"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: "center 52%" }}
              />
              <div className="flex flex-wrap items-center absolute bottom-0 right-0 bg-black text-white p-1">
                <FaUsers />
                <span className="ml-2">8</span>
              </div>
            </div>

            <h3 className="text-white mt-2"> Parchís - Correketekomo</h3>

            <div className="w-[340px] flex justify-between">
              <div className="bg-black text-white rounded-lg p-2 px-7">
                Feb 20–Mar 06, 2023
              </div>
              <div className="bg-black text-gold rounded-lg p-2 px-4">
                500,000BBs
              </div>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4 px-1 flex flex-col items-center">
            <div className="relative w-[340px] h-[135px]">
              <img
                src={torneopoker}
                alt="Torneo de Ajedrez"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: "center 50%" }}
              />
              <div className="flex flex-wrap items-center absolute bottom-0 right-0 bg-black text-white p-1">
                <FaUsers />
                <span className="ml-2">8</span>
              </div>
            </div>

            <h3 className="text-white mt-2"> Poker - Correketekomo</h3>

            <div className="w-[340px] flex justify-between">
              <div className="bg-black text-white rounded-lg p-2 px-7">
                Feb 20–Mar 06, 2023
              </div>
              <div className="bg-black text-gold rounded-lg p-2 px-4">
                500,000BBs
              </div>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4 px-1 flex flex-col items-center">
            <div className="relative w-[340px] h-[135px]">
              <img
                src={torneobillar}
                alt="Torneo de Ajedrez"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: "center 60%" }}
              />
              <div className="flex flex-wrap items-center absolute bottom-0 right-0 bg-black text-white p-1">
                <FaUsers />
                <span className="ml-2">8</span>
              </div>
            </div>

            <h3 className="text-white mt-2"> Billar - Correketekomo</h3>

            <div className="w-[340px] flex justify-between">
              <div className="bg-black text-white rounded-lg p-2 px-7">
                Feb 20–Mar 06, 2023
              </div>
              <div className="bg-black text-gold rounded-lg p-2 px-4">
                500,000BBs
              </div>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4 px-1 flex flex-col items-center">
            <div className="relative w-[340px] h-[135px]">
              <img
                src={torneouno}
                alt="Torneo de Ajedrez"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: "center 0%" }}
              />
              <div className="flex flex-wrap items-center absolute bottom-0 right-0 bg-black text-white p-1">
                <FaUsers />
                <span className="ml-2">8</span>
              </div>
            </div>

            <h3 className="text-white mt-2"> Uno - Correketekomo</h3>

            <div className="w-[340px] flex justify-between">
              <div className="bg-black text-white rounded-lg p-2 px-7">
                Feb 20–Mar 06, 2023
              </div>
              <div className="bg-black text-gold rounded-lg p-2 px-4">
                500,000BBs
              </div>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4 px-1 flex flex-col items-center">
            <div className="relative w-[340px] h-[135px]">
              <img
                src={torneodomino}
                alt="Torneo de Ajedrez"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: "center 40%" }}
              />
              <div className="flex flex-wrap items-center absolute bottom-0 right-0 bg-black text-white p-1">
                <FaUsers />
                <span className="ml-2">8</span>
              </div>
            </div>

            <h3 className="text-white mt-2"> Domino - Correketekomo</h3>

            <div className="w-[340px] flex justify-between">
              <div className="bg-black text-white rounded-lg p-2 px-7">
                Feb 20–Mar 06, 2023
              </div>
              <div className="bg-black text-gold rounded-lg p-2 px-4">
                500,000BBs
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 flex justify-end">
          <Pagination />
        </div>
      </div>
    </section>
  );
}

export default TorneosDisponibles;
