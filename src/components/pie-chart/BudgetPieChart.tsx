import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

interface BudgetPieChartProps {
  totalExpenses: number;
  budget: number;
}

const BudgetPieChart: React.FC<BudgetPieChartProps> = ({
  totalExpenses,
  budget,
}) => {
  const spent = totalExpenses;
  const remaining = Math.max(budget - spent, 0); // Ensure the remaining budget doesn't go negative

  // Data for the budget pie chart
  const data = {
    labels: ["Spent", "Remaining"],
    datasets: [
      {
        label: "Budget Usage",
        data: [spent, remaining],
        backgroundColor: ["#ffc8a4", "#a4ffc5"], // Red for spent, green for remaining
        hoverOffset: 4,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div style={{ width: "30%", margin: "0 auto", paddingTop: "20px" }}>
      <h2 className="my-3 text-center">Remaining Budget</h2>
      {budget > 0 ? (
        <Pie data={data} options={options} />
      ) : (
        <p>Please set a budget to view the chart.</p>
      )}
    </div>
  );
};

export default BudgetPieChart;
