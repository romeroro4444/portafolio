import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#222831]/95 text-[#EEEEEE] border-b border-[#393E46]">
      <nav className="container mx-auto flex justify-between items-center py-3 px-4 md:px-20 lg:px-32 bg-transparent">
        <h1 className="text-lg font-bold text-accent text-[#EEEEEE]">
          Rodrigo Romero · Software Developer
        </h1>
        <ul className="hidden md:flex gap-6 text-sm text-[#EEEEEE]">
          <li>
            <a href="#about">Perfil</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
        <MobileMenu />
      </nav>
    </header>
  );
};

function MobileMenu() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <div className="md:hidden flex items-center">
      <button
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((v) => !v)}
        className="p-2 text-[#EEEEEE] hover:text-[#00ADB5]"
      >
        {open ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      <div
        className={`absolute left-0 right-0 top-full bg-[#222831] border-b border-[#393E46] shadow-md transition-transform origin-top ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-sm text-[#EEEEEE]">
          <li>
            <a href="#about" onClick={handleClose}>
              Perfil
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleClose}>
              Habilidades
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleClose}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleClose}>
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
