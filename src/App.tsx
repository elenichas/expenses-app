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
import axios from "axios";
import { useEffect, useState } from 'react';
import "./index.css"


function App() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const getExpenses = async () => {
      try {
        setIsLoading(true);
        setErrorMsg("");
        const result = await axios.get('http://localhost:4000/expenses');
        console.log(result);
        const { data } = result;
        setExpenses(data);
      } catch (error) {
        console.log(error);
        setErrorMsg("something went wrong");
      } finally {
        setIsLoading(false);
      }
    }
    getExpenses();
  }, []);


  return (
    < BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ExpenseList
           isLoading={isLoading} 
           expenses={expenses}
            errorMsg={errorMsg} 
            />} />
          <Route path="/add" element={<AddExpense />} />
          <Route path="/search" element={<ExpenseSearch />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Navigate to="/" />} />
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
