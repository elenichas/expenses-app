import React, { useState, useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";
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
      {/* Budget input using React-Bootstrap */}
      <div style={{ margin: "20px" }}>
        <Form.Group controlId="budget">
          <Form.Label>Set Budget $</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              type="number"
              value={budget}
              onChange={handleBudgetChange}
              placeholder="Enter your budget"
              aria-label="Budget"
            />
          </InputGroup>
        </Form.Group>
      </div>

      {/* Display the expenses pie chart */}
      <PieChart expenses={expenses} />

      {/* Display the budget pie chart */}
      <BudgetPieChart totalExpenses={totalExpenses} budget={budget} />
    </div>
  );
};

export default AnalyticsPage;
