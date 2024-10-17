import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./PieChart.css"; // Import the custom CSS

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Function to generate random colors
const getRandomColor = () => {
  // Generate a random hue (0-360 degrees on the color wheel)
  const hue = Math.floor(Math.random() * 360);

  // Pastel colors have high lightness (80-90%) and low saturation (50-70%)
  const saturation = Math.floor(Math.random() * 30) + 50; // 50% to 70% saturation
  const lightness = Math.floor(Math.random() * 10) + 80; // 80% to 90% lightness

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
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
        label: "Expenses by Description",
        data: Object.values(expenseByDescription),
        backgroundColor: backgroundColors,
        hoverOffset: 4,
      },
    ],
  };

  // Chart options for positioning the legend under the chart
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Users Gained between 2016-2020",
      },
      legend: {
        position: "bottom", // Position the legend under the chart
        labels: {
          boxWidth: 15, // Adjust the box size for the legend
          padding: 20, // Adjust the spacing between items
        },
      },
    },
    layout: {
      padding: {
        bottom: 30, // Add some padding between the chart and the legend
      },
    },
  };

  return (
    <div className="pie-chart-container">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PieChart;
