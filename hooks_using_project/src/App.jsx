import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Card from '../component/card'


function App() {

  // let value=15
  let value =20
 // here we are changing the value to 20 

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
    console.log("the app is working ");
        
     <h1> working for the project{count} </h1>
     <button
     onClick={myfunction}
     >add value</button>

     <button
     onClick={mydecfucntion}
     >remove value</button>

     <H1>a new card component</H1>
    <Card/>
    </>
  )
}

export default App
