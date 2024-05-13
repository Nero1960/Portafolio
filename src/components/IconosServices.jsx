import { FaHtml5, FaMobile, FaUsers, FaDatabase } from 'react-icons/fa';
import { GrDocumentPerformance } from "react-icons/gr";
import { IoMdPhotos } from "react-icons/io";

const IconosServices = () => {
    return (
        <>
            <div className="bg-darkCustom-500 py-10 px-8 rounded-sm space-y-5">
                <div className='text-6xl text-greenCustom-500'>
                    <FaHtml5 />
                </div>
                <div className="space-y-4">
                    <h3 className="text-white font-bold text-2xl">Frontend</h3>
                    <p className="text-grayCustom-500">Desarrollo de interfaces de usuarios atractivas y funcionales.</p>

                </div>
            </div>

            <div className="bg-darkCustom-500 py-10 px-8 rounded-sm space-y-5">
                <div className='text-6xl text-greenCustom-500'>
                    <FaMobile />
                </div>
                <div className="space-y-4">
                    <h3 className="text-white font-bold text-2xl">Responsive Design</h3>
                    <p className="text-grayCustom-500">Experiencia perfecta en una variedad de dispositivos </p>

                </div>
            </div>

            <div className="bg-darkCustom-500 py-10 px-8 rounded-sm space-y-5">
                <div className='text-6xl text-greenCustom-500'>
                    <GrDocumentPerformance />
                </div>

                <div className="space-y-4">
                    <h3 className="text-white font-bold text-2xl">Rendimiento</h3>
                    <p className="text-grayCustom-500">Desarrollo de sitios web que ofrecen un rendimiento excepcional</p>

                </div>
            </div>

            <div className="bg-darkCustom-500 py-10 px-8 rounded-sm space-y-5">
                <div className='text-6xl text-greenCustom-500'>
                    <IoMdPhotos />
                </div>

                <div className="space-y-4">
                    <h3 className="text-white font-bold text-2xl">Diseño UI</h3>
                    <p className="text-grayCustom-500">Diseño de interfaces atractivas y funcionales para tu proyecto.</p>

                </div>
            </div>

            <div className="bg-darkCustom-500 py-10 px-8 rounded-sm space-y-5">
                <div className='text-6xl text-greenCustom-500'>
                    <FaUsers />
                </div>

                <div className="space-y-4">
                    <h3 className="text-white font-bold text-2xl">Trabajo en Equipo</h3>
                    <p className="text-grayCustom-500">Fomentando la colaboración y el éxito conjunto en cada proyecto.</p>
                </div>
            </div>

            <div className="bg-darkCustom-500 py-10 px-8 rounded-sm space-y-5">
                <div className='text-6xl text-greenCustom-500'>
                    <FaDatabase />
                </div>

                <div className="space-y-4">
                    <h3 className="text-white font-bold text-2xl">Backend</h3>
                    <p className="text-grayCustom-500">Backend sólido para tus aplicaciones web</p>
                </div>
            </div></>
    )
}

export default IconosServices