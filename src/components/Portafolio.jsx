import { FaGithub, FaPlayCircle } from 'react-icons/fa';
import project01 from '../public/html-css.png';
import project02 from '../public/bootstrapPage.png';
import project03 from '../public/js-bootstrap.png';
import project04 from '../public/Crypto.png';
import project05 from '../public/react-tailwindcss.png';
import project06 from '../public/barber.png';

const projects = [
  {
    title: "Blog de café",
    description: "Utilizando únicamente HTML y CSS, este proyecto fue una oportunidad para aplicar y ampliar mis conocimientos en estas tecnologías fundamentales.",
    githubLink: "https://github.com/Nero1960/BlogCafe",
    demoLink: "https://vigilant-coffee-b2cc9f.netlify.app/",
    image: project01
  },
  {
    title: "Podcast App",
    description: "Desarrollo de habilidades en HTML, CSS, Bootstrap y Sass. Aprendí a crear diseños responsivos con Bootstrap y a manipular sus variables utilizando Sass.",
    githubLink: "https://github.com/Nero1960/Podcast-App",
    demoLink: "https://podcast-app-bootstrap.netlify.app/",
    image: project02
  },
  {
    title: "Rick And Morty API",
    description: "Con este proyecto, desarrollé una comprensión de JavaScript, incluyendo el uso de localStorage, APIS, fetch API, y el manejo de eventos. Además, utilicé Bootstrap con Sass para mejorar la estética.",
    githubLink: "https://github.com/Nero1960/RickAndMortyAPI",
    demoLink: "https://spontaneous-sopapillas-e355e7.netlify.app/",
    image: project03
  },
  {
    title: "Cotizador de Crypto Monedas",
    description: "Aplicación desarrollada en REACT, he obtenido los conocimientos básicos acerca de esta librería de javascript, Hooks, Props, Styled Components para los estilos State entre otros temas.",
    githubLink: "https://github.com/Nero1960/Cotizador-Crypto",
    demoLink: "https://cotizador-cryptoreact.netlify.app/",
    image: project04
  },
  {
    title: "Cotizador de Prestamos",
    description: "Tecnologías aprendidas en este proyecto, React, eventos, UseState, UseEffect y para los estilos, tailwindcss.",
    githubLink: "https://github.com/Nero1960/Cotizador-prestamos",
    demoLink: "https://unrivaled-heliotrope-03fa84.netlify.app/",
    image: project05
  },
  {
    title: "Reservas de Citas Barbería (en desarrollo)",
    description: "El Proyecto más complejo en el que estoy trabajando, Contiene un inicio de sesión, ContextAPI, TypeScript, react-router-dom, react-hook-form, Mysql con Sequelize, Node JS, Express, JWT entre otras librerías.",
    githubLink: "https://github.com/Nero1960/App-Barberia",
    demoLink: "",
    image: project06
  }
];

function ProjectCard({ title, description, githubLink, demoLink, image }) {
  return (
    <div className="card bg-darkCustom-500 rounded-lg shadow pb-16 md:pb-0">
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img className="rounded-t-lg w-full h-1/2 object-cover" src={image} alt={title} />
      </a>
      <div className="px-5 py-6 space-y-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-sm text-grayCustom-500 leading-6">{description}</p>
        <div className='flex items-center gap-x-3'>
          <a href={githubLink} target='_blank' rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-greenCustom-500 hover:bg-greenCustom-600 duration-200  gap-x-2">
            <FaGithub />
            Github Code
          </a>
          <a href={demoLink} target='_blank' rel="noopener noreferrer" className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white gap-x-2 ${demoLink ? "" : "cursor-not-allowed"}`} disabled={!demoLink}>
            <FaPlayCircle />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}

function Portafolio() {
  return (
    <section className="mx-5 md:mx-20 my-10 pb-10" id="portafolio">
      <h2 className="-z-10 relative inline-block text-white font-bold text-5xl before:content-[''] before:h-3 before:w-1/2 before:ms-1 before:absolute before:bg-greenCustom-500 before:bottom-1 before:-z-10 before:shadow before:left-0">Portafolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portafolio;
