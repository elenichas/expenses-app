import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AnalyticsPage from "./pages/AnalyticsPage";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const getExpenses = async () => {
      try {
        setIsLoading(true);
        setErrorMsg("");
        const result = await axios.get("http://localhost:4000/expenses");
        console.log(result);
        const { data } = result;
        setExpenses(data);
      } catch (error) {
        console.log(error);
        setErrorMsg("something went wrong");
      } finally {
        setIsLoading(false);
      }
    };
    getExpenses();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                isLoading={isLoading}
                expenses={expenses}
                errorMsg={errorMsg}
              />
            }
          />
          <Route
            path="/analytics"
            element={<AnalyticsPage expenses={expenses} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
