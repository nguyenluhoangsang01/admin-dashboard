import React from "react";
import { LineChart } from "../../components";
import HeaderFooterPage from "../../layout/pages";

const Line = () => {
  return (
    <HeaderFooterPage category="chart" title="line" subtitle="Inflation Rate">
      <LineChart />
    </HeaderFooterPage>
  );
};

export default Line;
