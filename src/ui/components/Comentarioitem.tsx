import React, { useState, useEffect } from "react";

type Props = {
  comentario?: string;
  onSubmitComentario: (comentario: string) => void;
};

function Comentarioitem({
  comentario: comentarioInicial,
  onSubmitComentario,
}: Props) {
  const [comentario, setComentario] = useState(comentarioInicial || "");

  const enviarComentario = () => {
    onSubmitComentario(comentario);
  };

  return (
    <div className="bg-leaderboard text-white p-3 rounded-lg shadow-md mt-4">
      <textarea
        className="w-full h-24 p-2 rounded-lg bg-background text-white placeholder-gray-400 border"
        placeholder="Escribe tu comentario o frase aquí..."
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
      ></textarea>
      <button
        className="mt-2 bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-150"
        onClick={enviarComentario}
      >
        Modificar
      </button>
    </div>
  );
}

export default Comentarioitem;
