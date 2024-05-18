import { useMemo } from 'react';
import Ilustre from '../public/imageGIF.gif';

const About = () => {

  const edad = useMemo(() => new Date().getFullYear() - 2001, []);

  return (
    <div id='about' className="flex flex-col justify-center items-center md:flex-row md:gap-x-5 gap-y-10 md:gap-y-0">
      <div className='mx-auto md:w-[40%]'>
        <img
          className='block rounded-full h-60 w-60 mx-auto md:mx-0 object-cover md:h-96 md:w-96'
          src={Ilustre}
          alt="imagen persona"
          loading='lazy'
        />
      </div>

      <div className='space-y-8 flex flex-col justify-center md:w-[60%]'>
        <div className='flex flex-col space-y-5 border-b-[1px] border-grayCustom-500 pb-8'>
          <p className='text-greenCustom-500 font-black text-xl'>¿Quien Soy?</p>
          <h2 className='text-3xl text-white font-bold leading-relaxed'>Soy Andy Mena. Desarrollador Web Frontend.</h2>
          <p className='text-grayCustom-500 text-sm leading-relaxed'>Un entusiasta desarrollador web estudiante de ingeniería informática. Mi fascinación por la tecnología me ha guiado hacia el emocionante mundo del desarrollo web, donde disfruto creando experiencias digitales. Mi enfoque se centra en la innovación y la creatividad para dar vida a proyectos únicos.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-0 space-y-4 md:space-y-0'>
          <div className='flex flex-col space-y-4 md:space-y-8'>
            <div className='flex space-x-5'>
              <p className='text-grayCustom-500'>Nombre: </p>
              <p className='text-white'>Andy Mena</p>
            </div>
            <div className='flex space-x-5'>
              <p className='text-grayCustom-500'>Edad:</p>
              <p className='text-white'>{edad}</p>
            </div>
          </div>
          <div className='flex flex-col mx-0 md:-mx-10 space-y-4 md:space-y-8'>
            <div className='flex space-x-5'>
              <p className='text-grayCustom-500'>Teléfono: </p>
              <p className='text-white'>+505 75422545</p>
            </div>
            <div className='flex space-x-5'>
              <p className='text-grayCustom-500'>Correo: </p>
              <p className='text-white'>menaandy198@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="inline-block">
          <a  href='/CV.pdf' download className="bg-greenCustom-500 -text-greenCustom-500 px-6 py-3 text-white hover:bg-greenCustom-600 duration-300">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
