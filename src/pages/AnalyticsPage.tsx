import React from "react";
import PieChart from "../components/pie-chart/PieChart";

const AnalyticsPage = ({ expenses }) => {
  return (
    <div>
      <h2>Expense Breakdown</h2>
      <PieChart expenses={expenses} />
    </div>
  );
};

export default AnalyticsPage;
