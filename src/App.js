import React from 'react'
import Header from './components/Header'
import Display from './pages/home/Display'
import Tech from './pages/home/Tech'
import Info from './pages/home/info'
import Footer from './components/Footer'

const App = () => {


  return (
    <div>
      <Header />
      <Display />
      <Tech />
      <Info />
      <Footer />

    </div>
  )
}

export default App