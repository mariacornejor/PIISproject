import React, { useState, useEffect } from "react";

// Definir props para el componente
interface TimerProps {
  isActive: boolean;
}

async function obtenerTemporizador() {
  try {
    const cookies = document.cookie;
    let token = cookies.split("=")[1];
    if (!token) {
      throw new Error("No se encontró el token del usuario");
    }

    const response = await fetch("http://localhost:3000/api/profile", {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();
    if (response.ok) {
      console.log(data.timer);
      return data.timer;
    } else {
      throw new Error(
        data.message || "Error al obtener la información del usuario"
      );
    }
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Error desconocido";
    console.error(message);
    throw error; // Re-lanza el error para un manejo exterior
  }
}

const TimerComponent: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const timerActive = await obtenerTemporizador();
        setIsActive(timerActive);
      } catch (error) {
        console.error("Error al establecer el estado del temporizador", error);
        setIsActive(false); // Asegura que el temporizador se detenga si hay un error
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-6">
      <h1 className="text-center">Tiempo Restante</h1>
      <Timer isActive={isActive} />
      <div className="bg-white h-px mt-3"></div>
      {/* Asegúrate de que este prop está correctamente pasado */}
    </div>
  );
};

const Timer: React.FC<TimerProps> = ({ isActive }) => {
  const [seconds, setSeconds] = useState<number>(64);

  useEffect(() => {
    let interval: number | undefined;

    if (isActive) {
      interval = window.setInterval(() => {
        setSeconds((seconds) => {
          // Verificar si el contador llegó a cero para detener el intervalo
          if (seconds <= 1) {
            clearInterval(interval);
            return 0; // Asegura que el contador no vaya a números negativos
          }
          return seconds - 1;
        });
      }, 1000);
    } else {
      if (interval !== undefined) {
        clearInterval(interval);
      }
    }

    return () => {
      if (interval !== undefined) {
        clearInterval(interval);
      }
    };
  }, [isActive]);

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <span className="text-lg font-semibold">Tiempo: {seconds} Segundos</span>
    </div>
  );
};

export default TimerComponent;
