import './App.css'
// import { useSnapshot } from 'valtio'
// import { store, inc } from './store'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from './components/Layout';
import ExpenseList from './components/expense-list/ExpenseList';
import AddExpense from './components/add-expense/AddExpense';
import ExpenseSearch from './components/expense-search/ExpenseSearch';
import Profile from './components/profile/Profile';
import Logout from './components/logout/Logout';

import "./index.css"

function App() {
  // const [count, setCount] = useState(0)

  return (
    < BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element= {<ExpenseList/> } />  
            <Route path="/add" element= {<AddExpense/> } />  
            <Route path="/search" element= {<ExpenseSearch/> } />  
            <Route path="/profile" element= {<Profile/> } />  
            <Route path="/logout" element= {<Logout/> } />  
           <Route path="*" element= {<Navigate to="/"/> } /> 
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
