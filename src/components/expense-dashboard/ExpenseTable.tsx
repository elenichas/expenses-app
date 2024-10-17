import { FC, useState } from "react";
import { Expense } from "../../types";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./ExpenseTable.css";
import React from "react";

interface ExpenseTableProps {
  expenses: Expense[];
  onDelete: (id: number) => void;
  onEdit: (id: number, newAmount: number) => void;
}

const ExpenseTable: FC<ExpenseTableProps> = ({
  expenses,
  onDelete,
  onEdit,
}) => {
  const [editingId, setEditingId] = useState<number | null>(null); // Track which expense is being edited
  const [editedAmount, setEditedAmount] = useState<string>(""); // Track the edited value

  // Start editing
  const handleEditClick = (id: number, currentAmount: number) => {
    setEditingId(id);
    setEditedAmount(currentAmount.toString());
  };

  // Handle input change
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedAmount(e.target.value);
  };

  // Handle saving the new amount (on Enter key or blur)
  const handleSaveAmount = (id: number) => {
    if (!isNaN(parseFloat(editedAmount))) {
      onEdit(id, parseFloat(editedAmount));
      setEditingId(null); // Exit editing mode
    } else {
      alert("Please enter a valid number.");
    }
  };

  return (
    <div>
      <h3 className="my-3">Existing Expenses</h3>
      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="heading">#</th>
              <th className="heading">Expense Type</th>
              <th className="heading">Expense Date</th>
              <th className="heading">Expense Amount</th>
              <th className="heading">Description</th>
              <th className="heading">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={expense.id}>
                <td className="heading">{index + 1}</td>
                <td className="heading">{expense.expense_type}</td>
                <td className="heading">{expense.expense_date}</td>
                <td className="heading">
                  {editingId === expense.id ? (
                    <input
                      type="text"
                      value={editedAmount}
                      onChange={handleAmountChange}
                      onBlur={() => handleSaveAmount(expense.id)} // Save on blur
                      onKeyPress={(e) => {
                        if (e.key === "Enter") handleSaveAmount(expense.id); // Save on Enter key
                      }}
                      autoFocus
                    />
                  ) : (
                    expense.expense_amount
                  )}
                </td>
                <td className="heading">{expense.description}</td>
                <td>
                  {editingId === expense.id ? (
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => handleSaveAmount(expense.id)}
                    >
                      Save
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="info"
                        size="sm"
                        onClick={() =>
                          handleEditClick(expense.id, expense.expense_amount)
                        }
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => onDelete(expense.id)}
                      >
                        Delete
                      </Button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ExpenseTable;
