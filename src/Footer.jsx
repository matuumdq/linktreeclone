import { FaCopyright } from 'react-icons/fa'
import { formatearFecha } from './helpers'

const Footer = () => {

    const fecha = Date.now()

  return (
    <div className='h-[5vh] cursor-default flex justify-center items-center gap-3 bg-sky-300 hover:bg-sky-400 duration-1000'> 
        <FaCopyright /> 
        <p className='ml-1 '> All Rights Reserved </p> 
        {formatearFecha(fecha)}
    </div>
  )
}

export default Footer