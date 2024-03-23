import Navbar from "../../ui/components/Navbar";
import Secondbar from "../../ui/components/Secondbar";
import TorneosDisponibles from "../../ui/components/TorneosDisponibles";

function Torneos() {
  return (
    <div>
      <section className="relative bg-background body-font">
        <Navbar />
        <Secondbar />
        <div className="text-left items-center">
            <div className="text-white font-bold underline font-spartan ml-24 pt-5">
            Torneos
            </div>
        
        <TorneosDisponibles />
        </div>
      </section>
    </div>
  );
}

export default Torneos;
