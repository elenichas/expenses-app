import { useState } from 'react'
import './App.css'
// import { useSnapshot } from 'valtio'
// import { store, inc } from './store'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    < BrowserRouter>
      <Routes>
        <Route>

        </Route>
      </Routes>
    </BrowserRouter>

    // <>
    //   <Test />
    //   <Test2 />

    // </>
  )
}


// const Test = () => {
//   const snap = useSnapshot(store)
//   return (
//     <>
//       {snap.age}
//     </>
//   )
// }

// const Test2 = () => {
//   return (
//     <>
//       <button onClick={inc}>+</button>
//     </>
//   )
// }
export default App
