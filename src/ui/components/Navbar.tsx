import nosesion from "../../assets/images/noSesion.png";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/images/icono.png";
import { VscCircleLarge } from "react-icons/vsc";

function Navbar() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

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

  return (
    <div className=" mx-auto flex justify-between bg-navground items-center p-4 shadow-sm">
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
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
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
            {menuItems.map(({ icon, text }, index) => {
              return (
                <div key={index} className=" py-4">
                  <li className="text-xl flex cursor-pointer  w-[50%] rounded-full mx-auto p-2 hover:text-white hover:bg-background">
                    {icon} {text}
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
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
        <div
          className={`z-50 my-4 text-base list-none bg-navground divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
            isDropdownOpen ? "block" : "hidden"
          }`}
          id="user-dropdown"
        >
          {/* Información del usuario */}
          <div className="px-4 py-3">
            <span className="block text-sm text-white">Bonnie Green</span>
            <span className="block text-sm text-white truncate">
              name@flowbite.com
            </span>
          </div>
          {/* Elementos del menú */}
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <Link
                to="#"
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
              <Link
                to="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Cerrar Sesion
              </Link>
            </li>
            {/* Más elementos del menú... */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
/*

<div className="flex md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

<nav className="sticky">
      <div className="nav-inner">
        <div className="icono">
          <img className="logo" src={icon} />
          <h1>Bat Bite Battleground</h1>
        </div>
        <div className="elemento-nav">
          <button>...</button>
        </div>
        <div className="elemento-nav">
          <input type="text" />
        </div>

        <div className="links">
          <div className="elemento-nav">
            <a href="#">Informacion</a>
          </div>
          <div className="elemento-nav">
            <img className="logo" src={nosesion} />
            <a href="#">Iniciar Sesion</a>
          </div>
        </div>
      </div>
    </nav>

*/
