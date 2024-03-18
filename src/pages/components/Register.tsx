import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import icon from "../../assets/images/icono.png";
import nosesion from "../../assets/images/noSesion.png";
import { VscCircleLarge } from "react-icons/vsc";

function Navbar() {
  // Lógica del Navbar aquí
}

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="background bg-background h-screen flex flex-col justify-between">
      <Link to="/">
        <img src={icon} className="h-12 mx-4 mt-4" alt="Flowbite Logo" />
      </Link>

      {/* Formulario de registro */}
      <div className="mx-auto my-auto">
        <h2 className="text-white text-3xl mb-4">Registro</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="username" className="text-white">Nombre de usuario:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-navground p-2 text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-white">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-navground p-2 text-white"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-white">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-navground p-2 text-white"
            />
          </div>
          <button type="submit" className="bg-gray-800 rounded-full py-2 px-4 text-white">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default Register;