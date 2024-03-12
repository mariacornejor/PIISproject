import React, { useState } from "react";

import nosesion from "../../assets/images/noSesion.png";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { Link } from "react-router-dom";
import icon from "../../assets/images/icono.png";
import { VscCircleLarge } from "react-icons/vsc";

export function SidebarWithBurgerMenu() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Función para alternar la visibilidad del menú desplegable
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const [nav, setNav] = useState(false);

  const menuItems = [
    { icon: <VscCircleLarge size={25} className="mr-4" />, text: "Torneos" },
    { icon: <VscCircleLarge size={25} className="mr-4" />, text: "Mesa" },
    { icon: <VscCircleLarge size={25} className="mr-4" />, text: "Arcade" },
    { icon: <VscCircleLarge size={25} className="mr-4" />, text: "Help" },
  ];

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between bg-navground items-center p-4 shadow-sm">
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
          placeholder="Search foods"
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
