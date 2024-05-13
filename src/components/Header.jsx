import React, { useState } from 'react';
import headerLogo from '../public/CodeBracket.svg';
import menuImg from '../public/menu.svg';
import closeImg from '../public/XMark.svg';



function Header  ({scrolly}) {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (

      <header className={`${scrolly >= 550 ? 'bg-darkCustom-500 md:shadow-md' : 'bg-darkCustom-500 md:opacity-90'} w-full py-5 relative md:fixed`}>
        <div className="mx-5 md:mx-20 flex justify-between items-center">
          <div className="logo flex items-center gap-5">
            <img src={headerLogo} alt="Logotipo" className="w-10" />
            <p className="text-white text-xl uppercase italic font-bold">Developer</p>
          </div>

          <div
            className={`w-10 h-10 cursor-pointer md:hidden transition-transform duration-1000 ease-in-out transform ${showMenu ? 'scale-110' : ''
              }`}
            onClick={handleMenu}
          >
            <img src={showMenu ? closeImg : menuImg} loading='lazy' alt="menu mobile" />
          </div>

          <nav
            className={`${showMenu ? 'flex flex-col absolute left-0 top-20 px-8 space-y-5 py-8 z-10 bg-blackCustom-600 w-full transition-opacity opacity-100' : 'hidden md:flex md:space-x-8'
              }`}
          >
            <a href="/" className="text-white md:text-grayCustom-400 text-base md:hover:text-white duration-200">
              Inicio
            </a>
            <a href="#about" className="text-white md:text-grayCustom-400 text-base md:hover:text-white duration-200">
              Sobre Mi
            </a>
            <a href="#servicios" className="text-white md:text-grayCustom-400 text-base md:hover:text-white duration-200">
              Servicios
            </a>
            <a href="#habilidades" className="text-white md:text-grayCustom-400 text-base md:hover:text-white duration-200">
              Habilidades
            </a>

            <a href="#portafolio" className="text-white md:text-grayCustom-400 text-base md:hover:text-white duration-200">
              Portafolio
            </a>

            <a href="#contacto" className="text-white md:text-grayCustom-400 text-base md:hover:text-white duration-200">
              Contácteme
            </a>
          </nav>
        </div>
      </header>
  );
}

export default Header;
