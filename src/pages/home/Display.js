import React from 'react'

export default function Display() {
  return (
    <div className='grid grid-cols-2 items-center sm:grid-cols-1 sm:mb-12'>
      <div className='dis-img h-[400px]'>
      <dotlottie-player src="https://lottie.host/24590414-81cb-4e76-9ff9-154aa1cca69d/sUoD2tUtFl.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
      </div>

      <div className='dis-info space-y-3 sm:text-center sm:px-4'>
      <h1 className='text-3xl font-bold '>Hi, I am Dipesh</h1>
      <p >some Dev Freelancer Rounder </p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quam eligendi distinctio, rerum eos beatae ullam hic quo, sapiente suscipit exercitationem? Praesentium dolores adipisci libero amet facilis laboriosam velit modi, eaque delectus sint nisi ipsam natus optio nulla est saepe animi cum. Neque, nisi eum! Corporis beatae harum doloremque a!</p>
      </div>

    </div>
  )
}
