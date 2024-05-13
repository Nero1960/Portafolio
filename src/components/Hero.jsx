import React, { useMemo } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Iconos from './Iconos';

const Hero = () => {
  const typewriterWords = useMemo(() => ['Andy Mena', 'Desarrollador Web', 'Desarrollador Frontend'], []);

  return (
    <div className="bg-darkCustom-500 h-screen">
      <div className="mx-5 md:mx-20 text-white flex flex-col justify-around md:justify-between h-full">
        <div className="space-y-8 md:pt-52">
          <div className="space-y-4">
            <p className="text-2xl md:text-4xl font-light">Hola a Todos!</p>
            <h1 className="text-4xl md:text-6xl font-bold">
              Soy{" "}
              <span className="text-white">
                <Typewriter
                  words={typewriterWords}
                  loop={120}
                  cursor
                  cursorColor='#ffffff'
                />
              </span>
            </h1>
            <p className="text-2xl font-light">Simplificando la complejidad digital.</p>
          </div>

          <div className="inline-block">
            <button className="bg-greenCustom-500 px-6 py-3 text-whiteMe hover:bg-greenCustom-600 duration-300">
              Contáctame
            </button>
          </div>
        </div>

        <div className="md:grid grid-cols-3 w-2/3 md:space-x-8 space-y-8 md:space-y-0 md:pb-8">
          <div className="space-y-3 border-l-2 md:border-r-2 md:border-l-0 border-white ps-4 md:ps-0">
            <p className="font-bold text-xl text-white">Correo Electrónico</p>
            <p className="text-grayCustom-500 text-sm">menaandy198@gmail.com</p>
          </div>

          <div className="space-y-3 border-l-2 md:border-r-2 md:border-l-0 border-white ps-4 md:ps-0">
            <p className="font-bold text-xl text-white">Teléfono</p>
            <p className="text-grayCustom-500 text-sm">+505 75422545</p>
          </div>

          <div className="space-y-3 border-l-2 md:border-l-0 border-white ps-4 md:ps-0">
            <p className="font-bold text-xl text-white">Ubicación</p>
            <p className="text-grayCustom-500 text-sm">Masaya - Nicaragua</p>
          </div>
        </div>
      </div>

      <Iconos />
    </div>
  );
}

export default Hero;
