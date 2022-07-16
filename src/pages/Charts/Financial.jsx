import {
  ChartComponent,
  Crosshair,
  DateTime,
  HiloSeries,
  Inject,
  Logarithmic,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
  Zoom,
} from "@syncfusion/ej2-react-charts";
import React from "react";

import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../data/dummy";
import HeaderFooterPage from "../../layout/pages";

const Financial = () => {
  return (
    <HeaderFooterPage
      category="chart"
      title="Financial"
      subtitle="AAPLE Historical"
    >
      <ChartComponent
        id="financial-chart"
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true, shared: true }}
        crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
      >
        <Inject
          services={[
            HiloSeries,
            Tooltip,
            DateTime,
            Logarithmic,
            Crosshair,
            Zoom,
          ]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={financialChartData}
            xName="x"
            yName="low"
            type="Hilo"
            low="low"
            high="high"
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </HeaderFooterPage>
  );
};

export default Financial;
