import React, { useState } from 'react'




const NuovoProblema = () => {



    const [ formData, setFormData ] = useState({
        title: "",
        typology: "",
        context: ""

    })




  return (
    <div className='flex flex-col items-center justify-start   shadow-2xl h-screen w-[90%] m-auto mt-9'>
        <h1 className='m-10 font-fredoka text-2xl font-extrabold'>Crea Nuovo Problema</h1>
        <form>
            <div>
                <label htmlFor="title">Titolo </label>
                <input className='bg-blue-700' type="text" maxLength={70} name='title'  value={formData.title} id='title' required placeholder='scrivi qua...'/>
            </div>
            <div>
                <label htmlFor="typology">Tpologia </label>
                <select id='typology' name='typology' value={formData.typology}>
                    <option value="someOption">Some option</option>
                    <option value="otherOption">Other option</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Descrivi la Problema</label>
                <textarea name="context" value={formData.context} className='text-black'  minLength={150} maxLength={250} required></textarea>
            </div>
        </form>
    </div>
  )
}

export default NuovoProblema
