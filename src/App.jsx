import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSnapshot } from 'valtio'
import {store,inc} from './store'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {[0,0,0,0,0].map(x=>(
<>
      <Test/>
      <Test2/>
      </>
    ))}
    </>
  )
}


const Test=()=>{
  const snap = useSnapshot(store)
  return(
    <>
    {snap.age}
    </>
  )
}

const Test2=()=>{
  return(
    <>
    <button onClick={inc}>+</button>
    </>
  )
}
export default App
