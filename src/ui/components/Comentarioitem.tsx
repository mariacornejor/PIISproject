import { useState } from "react";

type Props = {
  comentario?: string;
};

function Comentarioitem(props: Props) {
  const comentarios =
    props.comentario !== undefined
      ? props.comentario
      : "¡Bienvenido a mi perfil!";
  const [comentario, setComentario] = useState(comentarios);

  const enviarComentario = () => {
    // Aquí puedes agregar la lógica para manejar el envío del comentario,
    // como actualizar el estado de la aplicación o enviarlo a una base de datos.
    console.log(comentario); // Ejemplo de acción al enviar el comentario
    // Limpiar el área de texto después del envío
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
