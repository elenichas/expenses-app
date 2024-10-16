import { FC, useState } from "react";
import { Expense } from "../../types";
import ExpenseTable from "./ExpenseTable";

interface ExpenseListProps {
  isLoading: boolean;
  expenses: Expense[];
  errorMsg: string;
}

const ExpenseList: FC<ExpenseListProps> = ({
  isLoading,
  expenses: initialExpenses,
  errorMsg,
}) => {
  // Manage the expenses state locally
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);

  // Handle deleting an expense
  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Handle editing an expense amount
  const handleEdit = (id: number, newAmount: number) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === id ? { ...expense, expense_amount: newAmount } : expense
      )
    );
  };

  return (
    <div className="main-content">
      <h2 className="my-3 text-center">Expense List</h2>
      {isLoading && <p className="loading">Loading...</p>}
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
      {/* Pass onDelete and onEdit to ExpenseTable */}
      <ExpenseTable
        expenses={expenses}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default ExpenseList;
