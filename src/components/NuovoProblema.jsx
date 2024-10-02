import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-regular-svg-icons';



<FontAwesomeIcon icon="fa-regular fa-face-smile" />
const NuovoProblema = () => {
    
    
    
    const [isHovered, setIsHovered] = useState(false);
    const [ formData, setFormData ] = useState({
        title: "",
        typology: "",
        context: ""

    })




  return (
    <div className='flex flex-col items-center justify-start bg-slate-100 rounded-xl  shadow-2xl h-screen w-[90%] m-auto mt-9'>
        <h1
            className=' cursor-pointer m-10 font-fredoka text-2xl font-extrabold'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            {isHovered ? <FontAwesomeIcon icon={faSmile} /> : 'Crea Un Nuovo Problema'}
        </h1>


        <form  className='p-10 h-full font-fredoka font-bold text-l  rounded-xl w-[90%]'>
            <div className='m-10 mb-20 flex flex-col'>
                <label htmlFor="title">Titolo: </label>
                <input className='p-2 rounded-xl outline-none' type="text" maxLength={70} name='title'  value={formData.title} id='title' required placeholder='scrivi qua...'/>
            </div>

            <div className='m-10 mb-20 flex flex-col'>
                <label htmlFor="typology">Tpologia: </label>
                <select className='p-2 rounded-xl' id='typology' name='typology' value={formData.typology}>
                    <option value="someOption">Some option</option>
                    <option value="otherOption">Other option</option>
                </select>
            </div>

            <div className='m-10 flex flex-col'>
                <label htmlFor="">Descrivi la Problema: </label>
                <textarea  size='lg'  name="context" value={formData.context} className='outline-none text-black rounded-xl p-2'  minLength={150} maxLength={250} placeholder='scrivi qua...' required></textarea>
            </div>

            <div className='flex justify-end m-10'>
                <button class='py-2.5 px-6 text-xl bg-indigo-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700'>Invia <i className="fa fa-send-o"></i></button>
            </div>
        </form>
    </div>
  )
}

export default NuovoProblema
