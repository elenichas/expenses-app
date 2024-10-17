import React from "react";
import PieChart from "../components/pie-chart/PieChart";

const AnalyticsPage = ({ expenses }) => {
  return (
    <div>
      <h2 className="my-3 text-center">Analytics</h2>
      <PieChart expenses={expenses} />
    </div>
  );
};

export default AnalyticsPage;
