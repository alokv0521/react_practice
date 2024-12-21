import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'


function App() {

  let value=15

  function increase(){
    value+=1;
  }
  
  const[count, increment]=useState(15)
  
  const myfunction=()=>{
    // increase();
    if(count<20){
      increment(count+1)
    }
    else{
      increment(count)
    }
  
  console.log("the value is ", count)
  
  }
  
  const mydecfucntion = ()=>{
    
    if(count>10){
      increment(count-1)
    }
    else
    increment(count)

    console.log("clicked: ", count)
  }



  return (
    <>
     <h1> working for the project{count} </h1>
     <button
     onClick={myfunction}
     >add value</button>

     <button
     onClick={mydecfucntion}
     >remove value</button>
    </>
  )
}

export default App
