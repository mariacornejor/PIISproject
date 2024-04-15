//1. Importar  import React, { useEffect, useState } from 'react';
//  const [isOpen, setIsOpen] = useState(false);
/*3.   useEffect(() => {
    setShowPopup(true); // Hace que se muestre el popup despues de montarse
}, []);*/
// <OnLoadPopUP isOpen = {isOpen} setIsOpen={setIsOpen} title_p = "NUEVO RETO" description_p="Te ha retado PacoArcas79"/>

//El componente esta montado en GamePage, para la opcion de tictactoe, ver como esta montado y eliminar de ahí. 
//Si se pulsa en Vamos a jugar, te lleva a la pagina de juego de TicTacToe

import React from "react";

type props_popup = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title_p: string;
  description_p: string;
};

function OnLoadPopUP(Props: props_popup) {
  return (
    <>
      {Props.isOpen && (
        <div
          id="toast-interactive"
          className=" w-full max-w-xs p-4 text-gray-500 bg-gold rounded-lg shadow "
          role="alert"
        >
          <div className="flex">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:text-blue-300 dark:bg-blue-900">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"
                />
              </svg>
              <span className="sr-only">Refresh icon</span>
            </div>
            <div className="ms-3 text-sm font-normal">
              <span className="mb-1 text-sm font-semibold text-gray-900 ">
                {Props.title_p}
              </span>
              <div className="mb-2 text-sm font-normal text-gray-900">
                {Props.description_p}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <button
                    onClick={() => Props.setIsOpen(false)}
                    className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                  >
                    Más tarde
                  </button>
                </div>
                <div>
                  <a
                    href="/game/tic-tac-toe"
                    className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-gray-900 bg-slate-300  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 "
                    onClick={() => Props.setIsOpen(false)}
                  >
                    ¡Vamos a jugar!
                  </a>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 items-center justify-center flex-shrink-0 text-black hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-interactive"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                onClick={() => Props.setIsOpen(false)}
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default OnLoadPopUP;
