import { FC, useState, useEffect } from "react";
import { Expense } from "../types";
import ExpenseTable from "../components/expense-dashboard/ExpenseTable";
import AddExpense from "../components/expense-dashboard/AddExpense";
import SearchBar from "../components/expense-search/SearchBar";
import React from "react";

interface HomePageProps {
  isLoading: boolean;
  expenses: Expense[];
  errorMsg: string;
}

const HomePage: FC<HomePageProps> = ({
  isLoading,
  expenses: initialExpenses,
  errorMsg,
}) => {
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Sync local expenses state with initialExpenses prop whenever it changes
  useEffect(() => {
    setExpenses(initialExpenses);
  }, [initialExpenses]);

  // Handle adding a new expense
  const handleAddExpense = (newExpense: Expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

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

  // Handle searching/filtering expenses by description
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Filter expenses based on the search query
  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main-content">
      <h2 className="my-3 text-center">Budget App - Home</h2>
      {isLoading && <p className="loading">Loading...</p>}
      {errorMsg && <p className="error-msg">{errorMsg}</p>}

      {/* AddExpense component to allow users to add new expenses */}
      <AddExpense onAddExpense={handleAddExpense} />

      {/* SearchBar component to filter expenses by description */}
      <SearchBar onSearch={handleSearch} />

      {/* Pass the filtered expenses to ExpenseTable */}
      <ExpenseTable
        expenses={filteredExpenses}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default HomePage;
