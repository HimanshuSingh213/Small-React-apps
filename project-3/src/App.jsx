import { useState } from 'react'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      {/* <div className='flex justify-center items-center h-screen w-screen p-4 bg-gray-950'>
      <h1 className='font-medium text-2xl bg-gray-800 px-4 py-2 rounded-2xl text-white w-max'>Tailwind v4 is Working </h1>
      </div> */}
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
