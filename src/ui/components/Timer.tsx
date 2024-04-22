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
    <div>
      <h1>Control del Temporizador</h1>
      <Timer isActive={isActive} />{" "}
      {/* Asegúrate de que este prop está correctamente pasado */}
    </div>
  );
};

const Timer: React.FC<TimerProps> = ({ isActive }) => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    let interval: number | null = null;

    if (isActive) {
      interval = window.setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      if (interval !== null) clearInterval(interval);
    }
    return () => {
      if (interval !== null) clearInterval(interval);
    };
  }, [isActive]);

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <span className="text-lg font-semibold">Tiempo: {seconds} Segundos</span>
    </div>
  );
};

export default TimerComponent;
