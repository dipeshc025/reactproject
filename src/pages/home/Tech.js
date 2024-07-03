import React from 'react'
import { DiAndroid, DiCss3Full, DiJava, DiPython, DiReact, DiSwift } from "react-icons/di";
import { FaVuejs } from 'react-icons/fa6';
const Tech = () => {
  return (
    <div className='space-y-5'>

      <h1 className='text-4xl font-bold text-center' >Technologies I use</h1>
      <div className=' grid grid-cols-4 p-10 justify-items-center gap-y-9'>
        <DiReact className='hover:text-red-700 hover:size-[280px]' size={200} />
        <DiJava size={200}/>
        <FaVuejs size={200}/>
        <DiCss3Full size={200} className='animate-bounce'/>
        <DiPython size={200}/>
        <DiSwift size={200}/>
      </div>
    </div>

   
  )
}

export default Tech
