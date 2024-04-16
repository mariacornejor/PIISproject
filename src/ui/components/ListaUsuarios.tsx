import React from "react";

type Usuario = {
  fotoperfil: string;
  username: string;
  email: string;
  nivel: string;
}

type Props = {
  nombreLista: string;
  usuarios: Usuario[];
}

const ListaDeUsuarios: React.FC<Props> = ({ nombreLista, usuarios }) => {
  return (
    <div className="lista-de-usuarios">
      <h2>{nombreLista}</h2>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.username}>{usuario.fotoperfil}{usuario.email}{usuario.nivel}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeUsuarios;
