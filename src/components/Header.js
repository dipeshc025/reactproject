import React from 'react'

function Header() {
  return (
    <div className='bg-black text-white flex items-baseline px-4 py-2 justify-between'>
      <h1 className='text-2xl'>Demo</h1>
     <nav className='space-x-3'>
     <a href="" className='s-link'>About</a>
     <a href="" className='s-link'>Contact</a>
     </nav>
    </div>
  )
}

export default Header
