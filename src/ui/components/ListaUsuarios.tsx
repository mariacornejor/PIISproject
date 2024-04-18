import React from "react";

type Usuario = {
  fotoperfil: string;
  username: string;
  email: string;
  nivel: string;
  rango: string;
};

type Props = {
  nombreLista: string;
  usuarios: Usuario[];
};

const ListaDeUsuarios: React.FC<Props> = ({ nombreLista, usuarios }) => {
  return (
    <div className="lista-de-usuarios">
      <h2>{nombreLista}</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.username}>
            {usuario.fotoperfil}
            {usuario.email}
            {usuario.rango}
            {usuario.nivel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeUsuarios;
