import { useState, useEffect } from "react";
import debounce from "lodash";
import Header from "./components/Header";
import Hero from './components/Hero';
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Portafolio from "./components/Portafolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [scrolly, setScrollY] = useState(0);

  useEffect(() => {
    const scrollDetect = debounce(() => {
      setScrollY(window.scrollY);
    }, 100); // Adjust the debounce delay as needed
    window.addEventListener('scroll', scrollDetect);

    return () => {
      window.removeEventListener('scroll', scrollDetect);
    };
  }, []);

  return (
    <>
      <Header scrolly={scrolly} />
      <Hero />
      <main className="mx-5 md:mx-20 my-20">
        <About scrolly={scrolly} />
      </main>
      <Services />
      <Skills />
      <Portafolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App;