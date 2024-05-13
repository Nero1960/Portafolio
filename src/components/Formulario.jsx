import { useEffect, useState, useRef} from "react";
import Spinner from "./Spinner";
import Mensaje from "./Mensaje";
import MensajeCorrecto from "./MensajeCorrecto";
import emailjs from '@emailjs/browser';

function Formulario() {

  const form = useRef();

  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: '',
  });

  const [errores, setErrores] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  })


  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false)
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
  }, [errores])



  const handleBlur = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,

    })

    if (e.target.value === '') {
      setErrores({
        ...errores,
        [e.target.name]: `El Campo ${e.target.name} es obligatorio *`
      })
    } else {
      setErrores({
        ...errores,
        [e.target.name]: ``
      })

    }
  }


  const handleSubmits = (e) => {
    e.preventDefault();

    if (Object.values(formData).includes('')) {
      setError(true);
      return;
    }


    setError(false);
    setCargando(true);

    setTimeout(() => {

      setCargando(false);
      setSent(true);

      setTimeout(() => {
        setSent(false);

      }, 6000)
      setFormData({
        nombre: '',
        correo: '',
        asunto: '',
        mensaje: ''
      })


    }, 3000)

    //enviar email
    emailjs
      .sendForm('service_j71v7vk', 'template_4reqgbe', form.current, {
        publicKey: 'v5mv0IXfsul2CfDcd',
      }).then(() => console.log('Ok')).catch(() => console.log('Error'))

  }

  return (
    <form ref={form} action="https://formsubmit.co/menaandy198@gmail.com" method="POST"  className="w-full space-y-10" onSubmit={handleSubmits}>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 md:gap-y-0">
        <div>
          <input
            type="text"
            className="w-full bg-darkCustom-500 placeholder-grayCustom-600 border-b-[1px]  border-grayCustom-600 outline-none text-grayCustom-600 px-4 py-3 rounded-sm"
            placeholder="Tu Nombre *"
            name="nombre"
            value={formData.nombre}
            onBlur={handleBlur}
            onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}

          />
          {errores?.nombre && (<span className="text-redCustom-500 text-sm">{errores.nombre}</span>)}
        </div>
        <div>
          <input
            type="email"
            className="w-full bg-darkCustom-500 placeholder-grayCustom-600 border-b-[1px] border-grayCustom-600 outline-none text-grayCustom-600 px-4 py-3 rounded-sm"
            placeholder="Tu Correo Electrónico *"
            name="correo"
            onBlur={handleBlur}
            value={formData.correo}
            onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}


          />
          {errores?.correo && (<span className="text-redCustom-500 text-sm">{errores.correo}</span>)}

        </div>
      </div>
      <div className="">
        <input
          type="text"
          className="bg-darkCustom-500 placeholder-grayCustom-600 border-b-[1px] border-grayCustom-600 outline-none w-full text-grayCustom-600 px-4 py-3 rounded-sm"
          placeholder="Asunto *"
          name="asunto"
          onBlur={handleBlur}
          value={formData.asunto}
          onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}

        />
        {errores?.asunto && (<span className="text-redCustom-500 text-sm">{errores.asunto}</span>)}

      </div>
      <div className="">
        <textarea
          name="mensaje"
          id="mensaje"
          cols="30"
          rows="10"
          className={`bg-darkCustom-500 placeholder-grayCustom-600 border-b-[1px]  border-grayCustom-600 outline-none w-full text-grayCustom-600 px-4 py-3 rounded-sm resize-none`}
          placeholder="Mensaje *"
          onBlur={handleBlur}
          value={formData.mensaje}
          onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}

        ></textarea>
        {errores?.mensaje && (<span className="text-redCustom-500 text-sm">{errores.mensaje}</span>)}

      </div>

      <input type="hidden" name="_next" value="http://localhost:5173/" />
      <input type="hidden" name="_captcha" value="false" />
      <div className="flex gap-x-8">
        <button
          type="submit"
          className="bg-greenCustom-500 px-6 py-3 text-white hover:bg-greenCustom-600 duration-300"
        >
        {cargando ? 'Enviando..' : 'Enviar Mensaje'}
        </button>
        {cargando && <Spinner />}

      </div>

      {sent && <MensajeCorrecto />}
      {error && <Mensaje /> }




    </form>
  )

};

export default Formulario;