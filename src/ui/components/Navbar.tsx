import nosesion from "../../assets/images/noSesion.png";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/images/icono.png";
import { VscCircleLarge } from "react-icons/vsc";
import { useState, useEffect } from "react";
import axios from "axios";
import mony from "../../assets/images/money.png";

type Props = {
  point?: number;
  type?: string;
  userName?: string;
};

const handleLogout = () => {
  // Elimina el token del localStorage
  document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

  // Redirige al usuario
  //window.location.href = "/login";
};

function Navbar(props: Props) {
  const point = props.point !== undefined ? props.point : 200;
  const [type, setType] = React.useState(
    props.type !== undefined ? props.type : "noSession"
  );
  const [email, setEmail] = React.useState("email@gmail.com");
  const [userName, setUsername] = React.useState(
    props.userName !== undefined ? props.userName : "nombre usuario"
  );
  const [isSticky, setIsSticky] = React.useState(false);
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const cookies = document.cookie;
  const [categories, setCategories] = useState<string[]>([]);

  async function obtenerTipoDeUsuario() {
    try {
      //console.log(token.split("=")[1]);
      let token = cookies.split("=")[1];
      if (!token) {
        throw new Error("No se encontró el token del usuario");
      }

      // Realizar una solicitud al endpoint que retorna la información del usuario basándose en el token
      const response = await fetch("http://localhost:3000/api/profile", {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();
      //console.log("Console log");
      //console.log(data);
      if (response.ok) {
        // Aquí, asumo que 'data' contiene un campo que indica el tipo de usuario, por ejemplo 'tipoUsuario'
        setUsername(data.username);
        setEmail(data.email);
        return data.typeofuser; // O el campo correspondiente que indica el tipo de usuario
      } else {
        throw new Error(
          data.message || "Error al obtener la información del usuario"
        );
      }
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Error al obtener el tipo de usuario";
      console.error(message);
      // Manejo adicional de errores si es necesario (por ejemplo, mostrar un mensaje al usuario)
    }
  }

  // Llamar a la función
  if (cookies != "") {
    obtenerTipoDeUsuario()
      .then((typeofuser) => {
        console.log(typeofuser);
        setType(typeofuser);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  let contenido = null;

  if (type === "admin") {
    contenido = admin(isDropdownOpen, userName, email);
  } else if (type === "user") {
    contenido = user(isDropdownOpen, userName, email);
  } else if (type === "dev") {
    contenido = dev(isDropdownOpen, userName, email);
  } else {
    contenido = no_sesion(isDropdownOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      // Define a partir de qué punto quieres que la barra se vuelva fija
      const sticky = point; // Cambia este valor según tus necesidades

      if (window.scrollY >= sticky) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para alternar la visibilidad del menú desplegable
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const [nav, setNav] = React.useState(false);

  const menuItems = [
    { icon: <VscCircleLarge size={25} className="mr-4" />, text: "Torneos" },
    { icon: <VscCircleLarge size={25} className="mr-4" />, text: "Mesa" },
    { icon: <VscCircleLarge size={25} className="mr-4" />, text: "Arcade" },
    { icon: <VscCircleLarge size={25} className="mr-4" />, text: "Help" },
  ];

  useEffect(() => {
    const obtenerCategorias = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/types");
        // Verifica si los datos recibidos son un array
        if (Array.isArray(response.data)) {
          // Verifica si la respuesta está vacía
          if (response.data.length === 0) {
            console.warn("La respuesta del servidor está vacía.");
          } else {
            setCategories(response.data);
          }
        } else {
          console.error("Los datos recibidos no son un array:", response.data);
        }
      } catch (error) {
        console.error("Error al recuperar las categoias:", error);
      }
    };

    obtenerCategorias();
  }, []);

  return (
    <div
      className={`w-full ${
        isSticky ? "fixed top-0 z-50" : "relative"
      } transition-opacity duration-500  shadow-md mx-auto flex justify-between bg-navground items-center p-4 `}
    >
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} color="white" />
        </div>
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={icon} className="h-12" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Bat Bite Battleground
          </span>
        </Link>
      </div>
      {/* Search Input */}
      <div className=" rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} color="white" />
        <input
          className="bg-navground p-2 w-full focus:outline-none  text-white"
          type="text"
          placeholder="Buscar"
        />
      </div>
      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-background/80 text-white fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-background z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-background z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          color="white"
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 text-white">
          <img src={icon} className="h-12" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <br></br>
            Bat Bite Battleground
          </span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-white">
            {categories.map((cat, index) => {
              return (
                <div key={index} className="py-4">
                  <li className="text-xl flex cursor-pointer  w-[50%] rounded-full mx-auto p-2 hover:text-white hover:bg-background">
                    <VscCircleLarge size={25} className="mr-4" />
                    {cat}
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
      <a href="/tienda" className="flex">
        <div className="ml-24">1200</div>
        <div className="w-8 h-8 pt-1">
          <img src={mony} alt="moni" />
        </div>
      </a>{" "}
      <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        {/* Botón para alternar el menú de usuario */}

        <button
          onClick={toggleDropdown}
          type="button"
          className="text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="w-8 h-8 rounded-full"
            src={nosesion}
            alt="user photo"
          />
        </button>
        {/* Menú desplegable con control de visibilidad */}
        {contenido}
      </div>
    </div>
  );
}

function admin(isDropdownOpen: boolean, name: string, email: string) {
  return (
    <div
      className={`z-50 my-4 text-base list-none bg-navground divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
        isDropdownOpen ? "block" : "hidden"
      }`}
      id="user-dropdown"
    >
      {/* Información del usuario */}
      <div className="px-4 py-3">
        <span className="block text-sm text-white">{name}</span>
        <span className="block text-sm text-white truncate">{email}</span>
      </div>
      {/* Elementos del menú */}
      <ul className="py-2" aria-labelledby="user-menu-button">
        <li>
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Administrar Juegos
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Ajustes
          </Link>
        </li>
        <li>
          <a
            href="/"
            onClick={handleLogout}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Cerrar Sesion
          </a>
        </li>
      </ul>
    </div>
  );
}
function user(isDropdownOpen: boolean, name: string, email: string) {
  return (
    <div
      className={`z-50 my-4 text-base list-none bg-navground divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
        isDropdownOpen ? "block" : "hidden"
      }`}
      id="user-dropdown"
    >
      {/* Información del usuario */}
      <div className="px-4 py-3">
        <span className="block text-sm text-white">{name}</span>
        <span className="block text-sm text-white truncate">{email}</span>
      </div>
      {/* Elementos del menú */}
      <ul className="py-2" aria-labelledby="user-menu-button">
        <li>
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Perfil
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Ajustes
          </Link>
        </li>
        <li>
          <a
            href="/"
            onClick={handleLogout}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Cerrar Sesion
          </a>
        </li>
        {/* Más elementos del menú... */}
      </ul>
    </div>
  );
}
function dev(isDropdownOpen: boolean, name: string, email: string) {
  return (
    <div
      className={`z-50 my-4 text-base list-none bg-navground divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
        isDropdownOpen ? "block" : "hidden"
      }`}
      id="user-dropdown"
    >
      {/* Información del usuario */}
      <div className="px-4 py-3">
        <span className="block text-sm text-white">{name}</span>
        <span className="block text-sm text-white truncate">{email}</span>
      </div>
      {/* Elementos del menú */}
      <ul className="py-2" aria-labelledby="user-menu-button">
        <li>
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Mis juegos
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Ajustes
          </Link>
        </li>
        <li>
          <a
            href="/"
            onClick={handleLogout}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Cerrar Sesion
          </a>
        </li>
        {/* Más elementos del menú... */}
      </ul>
    </div>
  );
}
function no_sesion(isDropdownOpen: boolean) {
  return (
    <div
      className={`z-50 my-4 text-base list-none bg-navground divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
        isDropdownOpen ? "block" : "hidden"
      }`}
      id="user-dropdown"
    >
      {/* Información del usuario */}
      <div className="px-4 py-3">
        <span className="block text-sm text-white">No session</span>
        <span className="block text-sm text-white truncate"></span>
      </div>
      {/* Elementos del menú */}
      <ul className="py-2" aria-labelledby="user-menu-button">
        <li>
          <Link
            to="/register"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Registrar
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Login
          </Link>
        </li>
        {/* Más elementos del menú... */}
      </ul>
    </div>
  );
}
export default Navbar;
