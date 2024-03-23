import React, { useState } from "react";
import { BsChatDots } from "react-icons/bs";

function Chat() {

    const [showChat, setShowChat] = useState(false);

    const toggleChat = () => setShowChat(!showChat);
  return (
    <>
    <button
        onClick={toggleChat}
        className="fixed bottom-8 right-8 p-3 rounded-full text-white hover:bg-black hover:bg-opacity-50 transition ease-in-out duration-200"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }} // Negro con 10% de opacidad
      >
        <BsChatDots size="24" />
      </button>

      {/* Chat (Simulado) */}
      {showChat && (
        <div className="fixed bottom-20 right-8 bg-white p-4 rounded-lg shadow-lg w-64 text-black">
          <p>¡Hola! ¿Cómo podemos ayudarte?</p>
          {/* Contenido del chat */}
        </div>
      )}
    </>
  )
}

export default Chat