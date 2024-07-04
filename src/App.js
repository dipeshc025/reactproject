import React from 'react'
import Header from './components/Header'
import Tech from './pages/home/Tech'
import Info from './pages/home/info'
import Footer from './components/Footer'
import DisplaySec from './pages/home/DisplaySec '

const App = () => {


  return (
    <div>
      <Header />
      <DisplaySec />
      <Tech />
      <Info />
      <Footer />

    </div>
  )
}

export default App