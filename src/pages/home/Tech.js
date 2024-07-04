import React from 'react'
import {  DiCss3Full, DiJava, DiPython, DiReact, DiSwift } from "react-icons/di";
import { FaVuejs } from 'react-icons/fa6';
const Tech = () => {
  return (
    <div className='space-y-12'>

      <h1 className='text-3xl font-semibold text-center' >Technologies I use</h1>
      <div className="tech-icons grid grid-cols-4 justify-items-center gap-y-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <DiReact className='hover:text-red-700 hover:size-[250px]' size={200} />
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
