import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setcounter] = useState(15) //usestate is hook it returns statefull value and a function to update that state
//  let counter=15
const addvalue=()=>{
  // console.log("clicked" ,counter)
  // counter =counter+1
  // setcounter(counter+1)
  // setcounter(counter+1)
  // setcounter(counter+1)//here only one is added 
  setcounter(counter=>counter+1)
  // setcounter(counter=>counter+1)
  // setcounter(counter=>counter+1)//interview question here 3 times added

  // console.log("valued added ",Math.random());
}
const removevalue =()=>{
  if (counter > 0) {
    setcounter(counter - 1);
  }
}
  return (
    <>
      <h1>Counter</h1>
      <h2>counter value:{counter}</h2>
      <button
      onClick={addvalue}>Add value{counter}</button>
      <br/>
      <button onClick={removevalue}>remove value{counter}</button>
    
    </>
  )
}

export default App
