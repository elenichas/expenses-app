import React, { useState, useEffect } from "react";
import PieChart from "../components/pie-chart/PieChart";
import BudgetPieChart from "../components/pie-chart/BudgetPieChart"; // New pie chart for budget tracking

const AnalyticsPage = ({ expenses }) => {
  const [budget, setBudget] = useState(80000); // Budget state
  const [totalExpenses, setTotalExpenses] = useState(0); // Total expenses state

  // Calculate the total expenses
  useEffect(() => {
    const total = expenses.reduce(
      (sum, expense) => sum + expense.expense_amount,
      0
    );
    setTotalExpenses(total);
  }, [expenses]);

  // Handle budget input change
  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(e.target.value));
  };

  return (
    <div>
      {/* Budget input */}
      <div style={{ margin: "20px 0" }}>
        <label htmlFor="budget">Set Budget $ </label>
        <input
          type="number"
          id="budget"
          value={budget}
          onChange={handleBudgetChange}
          placeholder="Enter your budget"
        />
      </div>
      {/* Display the expenses pie chart */}
      <PieChart expenses={expenses} />

      {/* Display the budget pie chart */}
      <BudgetPieChart totalExpenses={totalExpenses} budget={budget} />
    </div>
  );
};

export default AnalyticsPage;
