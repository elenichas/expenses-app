import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Function to generate random colors
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Function to generate unique colors based on number of data points
const generateColors = (count: number) => {
  return Array.from({ length: count }, () => getRandomColor());
};

interface Expense {
  id: number;
  expense_type: string;
  expense_date: string;
  expense_amount: number;
  description: string;
}

interface PieChartProps {
  expenses: Expense[];
}

const PieChart: React.FC<PieChartProps> = ({ expenses }) => {
  // Group expenses by description and calculate total amounts for each description
  const expenseByDescription = expenses.reduce(
    (acc: Record<string, number>, expense) => {
      if (!acc[expense.description]) {
        acc[expense.description] = 0;
      }
      acc[expense.description] += expense.expense_amount;
      return acc;
    },
    {}
  );

  // Labels (Unique Descriptions)
  const labels = Object.keys(expenseByDescription);

  // Dynamically generate colors for each unique description
  const backgroundColors = generateColors(labels.length);

  // Data (Total Amounts)
  const data = {
    labels,
    datasets: [
      {
        label: "total amount:",
        data: Object.values(expenseByDescription),
        backgroundColor: backgroundColors,
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
