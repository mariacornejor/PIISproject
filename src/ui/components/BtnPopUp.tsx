// <BtnPopUp nombre_boton="Boton" titulo_popup = "Este es el titulo del PopUp" descripcion_popup="Esta es la descripcion del popup"/>


import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";

type props_btn = {
    nombre_boton: string,
    titulo_popup: string,
    descripcion_popup: string

}

type props_popup = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    titulo_popup: string,
    descripcion_popup: string
  };

const BtnPopUp = (Props: props_btn ) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-4 py-3 grid place-content-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-light_red to-red text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
      >
        {Props.nombre_boton}
      </button>
      <PopUp isOpen={isOpen} setIsOpen={setIsOpen} titulo_popup = {Props.titulo_popup} descripcion_popup={Props.descripcion_popup} />
    </div>
  );
};

const PopUp = (Props : props_popup) => {
  return (
    <AnimatePresence>
      {Props.isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => Props.setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-light_red to-red text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-red grid place-items-center mx-auto">
                <FiAlertCircle />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                {Props.titulo_popup}
              </h3>
              <p className="text-center mb-6">
                {Props.descripcion_popup}
              </p>
              <div className="flex gap-2">

                <button
                  onClick={() => Props.setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-red font-semibold w-full py-2 rounded"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BtnPopUp;