import React from 'react'
import { Link } from 'react-router-dom'
import Userpic from '../assets/face-portrate.jpg'

const Navbar = () => {
  return (
    <section className='flex flex-row justify-between items-center    p-2  w-[90%] h-24 bg-slate-500 m-auto mt-5 r-5 rounded-md'>
      <div className='w-[40%] flex'>
        <img src={Userpic} alt="user" className='w-20 rounded-md'/>
        <div className='ml-5 font-bold flex flex-col justify-between  text-gray-200'>
          <h1 className='text-3xl'>Username</h1>
          <h3 className='text'>useremail@user.com</h3>
        </div>
      </div>
      <div className='flex'>
        
        
        <Link class="h-[80%] flex  flex-row  justify-center font-bold rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 py-2 px-4 border border-transparent text-center text-l text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" to="problemi"><button  type="button">Problemi</button></Link> 
        <Link class=" ml-2 h-[80%] flex flex-row   justify-center font-bold rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 py-2 px-4 border border-transparent text-center text-l text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" to="NuovoProblema "><button  type="button">Nuovo Problema</button></Link> 
        
      </div>

    </section>
  )
}

export default Navbar
