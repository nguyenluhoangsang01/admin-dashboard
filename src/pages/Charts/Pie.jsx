import React from "react";
import { PieChart } from "../../components";
import { pieChartData } from "../../data/dummy";

import HeaderFooterPage from "../../layout/pages";

const Pie = () => {
  return (
    <HeaderFooterPage
      category="chart"
      title="Pie"
      subtitle="Project Cost Breakdown"
    >
      <PieChart
        id="pie-chart-page"
        legendSettings={{
          background: "white",
          visible: true,
          position: "Top",
        }}
        data={pieChartData}
        xName="x"
        yName="y"
        dataLabel={{
          visible: true,
          name: "text",
          position: "Inside",
          font: {
            fontWeight: "600",
            color: "#ffffff",
          },
        }}
      />
    </HeaderFooterPage>
  );
};

export default Pie;
