import React from "react";
import { PieChart } from "../../components";

import HeaderFooterPage from "../../layout/pages";

const Pie = () => {
  return (
    <HeaderFooterPage
      category="chart"
      title="Pie"
      subtitle="Project Cost Breakdown"
    >
      <PieChart />
    </HeaderFooterPage>
  );
};

export default Pie;
