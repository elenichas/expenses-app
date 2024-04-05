import './App.css'
// import { useSnapshot } from 'valtio'
// import { store, inc } from './store'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import ExpenseList from './components/expense-list/ExpenseList';
import AddExpense from './components/add-expense/AddExpense';
import "./index.css"

function App() {
  // const [count, setCount] = useState(0)

  return (
    < BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element= {<ExpenseList/> } />  
            <Route path="/Add" element= {<AddExpense/> } />  
        </Routes>
      </Layout>

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
