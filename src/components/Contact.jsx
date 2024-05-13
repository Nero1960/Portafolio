import Formulario from "./Formulario"

function Contact() {
    return (
        <section id="contacto" className="mx-5 md:mx-20 my-5 md:my-10 ">
            <h2 className="-z-10 relative inline-block text-white font-bold text-5xl before:content-[''] before:h-3 before:w-1/2 before:ms-1 before:absolute before:bg-greenCustom-500 before:bottom-1 before:-z-10 before:shadow before:left-0">Contacto</h2>

            <div className="flex flex-col md:flex-row md:my-10 pb-10 gap-x-10">
                <div className="md:w-2/3 order-2 md:order-1">
                    <Formulario />
                </div>

                <div className="md:w-1/3 mt-10 md:mt-0 order-1 pb-10 md:pb-0">
                    <h3 className="-z-10 relative inline-block text-white font-bold text-2xl before:content-[''] before:h-2 before:w-1/2 before:ms-1 before:absolute before:bg-greenCustom-500 before:bottom-1 before:-z-10 before:shadow before:left-0">Información de Contacto</h3>

                    <p className="mt-5 text-grayCustom-500 text-sm">No dudes en ponerte en contacto conmigo para discutir tus ideas y proyectos. Estoy disponible para colaboraciones  y oportunidades de trabajo.</p>

                    <div className="flex flex-col space-y-8 mt-10 gap-x-8">
                        <div className="space-y-3 border-l-2  border-white ps-4 ">
                            <p className="font-bold text-xl text-white">Correo Electrónico</p>
                            <p className="text-grayCustom-500 text-sm">menaandy198@gmail.com</p>
                        </div>

                        <div className="space-y-3 border-l-2  border-white ps-4">
                            <p className="font-bold text-xl text-white">Teléfono</p>
                            <p className="text-grayCustom-500 text-sm">+505 75422545</p>
                        </div>

                        <div className="space-y-3 border-l-2  border-white ps-4">
                            <p className="font-bold text-xl text-white">Ubicación</p>
                            <p className="text-grayCustom-500 text-sm">Masaya - Nicaragua</p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contact