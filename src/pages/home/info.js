import React from 'react'

const Info = () => {
  return (

    <div className='grid grid-rows-2-2 justify-center items-center py-2'>

      <h1 className=' text-center text-3xl font-bold'>Who am I</h1>


      <div className="h-[390px] w-[390px] mt-7 border-4 border-green-400 bg-black rounded-full text-white flex  flex-col items-center justify-center ">
        <h3 className='hover:text-yellow-500'>Name : Dipesh katwal</h3>
        <h3 className='hover:text-yellow-500' >Email: dipeshc025@gmail.com</h3>
        <h3 className='hover:text-yellow-500'>Tel:9777777 </h3>
        <h3 className='hover:text-yellow-500'>Age:24</h3>
        <h3 className='hover:text-yellow-500'>Experience:HTML,CSS,Java Script,MERN</h3>
      </div>
    </div >

  )
}

export default Info