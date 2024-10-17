import { FC, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Expense } from "../../types";
import "./AddExpense.css";
import React from "react";

interface AddExpenseProps {
  onAddExpense: (newExpense: Expense) => void; // Prop to pass the new expense back to the dashboard
}

const AddExpense: FC<AddExpenseProps> = ({ onAddExpense }) => {
  const [expenseType, setExpenseType] = useState<string>("");
  const [expenseDate, setExpenseDate] = useState<string>("");
  const [expenseAmount, setExpenseAmount] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the input fields (you can add more validation as needed)
    if (!expenseType || !expenseDate || !expenseAmount || !description) {
      alert("Please fill in all fields.");
      return;
    }

    // Create a new expense object
    const newExpense: Expense = {
      id: Date.now(), // Using Date.now() for a unique ID (in a real app, the server would handle this)
      expense_type: expenseType,
      expense_date: expenseDate,
      expense_amount: parseFloat(expenseAmount),
      description: description,
    };

    // Call the callback function to add the new expense to the dashboard
    onAddExpense(newExpense);

    // Clear the form after submission
    setExpenseType("");
    setExpenseDate("");
    setExpenseAmount("");
    setDescription("");
  };

  return (
    <Form onSubmit={handleSubmit} className="add-expense-form">
      <h3 className="my-3">Add Expense</h3>
      <Form.Group controlId="expenseType">
        <Form.Label>Expense Type</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter expense type (e.g., card, cash)"
          value={expenseType}
          onChange={(e) => setExpenseType(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="expenseDate">
        <Form.Label>Expense Date</Form.Label>
        <Form.Control
          type="date"
          value={expenseDate}
          onChange={(e) => setExpenseDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="expenseAmount">
        <Form.Label>Expense Amount</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter expense amount"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Add Expense
      </Button>
    </Form>
  );
};

export default AddExpense;
