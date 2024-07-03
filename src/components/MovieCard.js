import React from 'react'

export default function MovieCard({ title, image, para }) {
  return (
    <>
      <div className='inline-grid p-5 justify-center items-center'>

        <div className='w-[300px] shadow-xl p-5 h-[800px] rounded-lg'>
          <img className='h-[300px] object-fill rounded-lg' src={image} alt="Photo here" />
          <div className='p-8'>
            <h1 className='bg-blue-500 px-6 py-7 rounded text-center'>{title}</h1>
            <p className='pt-3'>{para}</p>
          </div>
        </div>

      </div>
    </>
  )
}
