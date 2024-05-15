import {FaCopyright} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
        <p className="text-white text-center py-2 flex justify-center items-center gap-x-1 px-5" >Todos los derechos reservados <FaCopyright/> {new Date().getFullYear()} </p>
    </footer>
  )
}

export default Footer