import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Card2 from '../component/Card2'
import Card from '../component/card'
import Card2 from '../component/Card2'

function App() {

  return (
    <>
      <h3 className='text-blue-400 '>
      Hello world!
    </h3>

    {/* <h2 className=" bg-green-300  mt-10 text-center text-2xl/9 font-bold tracking-tight text-pink-900">Sign in to your account</h2> */}
      {/* <Card username ="alok"  gender="m" />
      <Card username="alok"  gender="f" /> */}
      <Card2/>
    </>
  )
}

export default App
