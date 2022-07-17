import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  SplineAreaSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";

import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";
import HeaderFooterPage from "../../layout/pages";

const Area = () => {
  const { theme } = useStateContext();

  return (
    <HeaderFooterPage
      category="chart"
      title="Area"
      subtitle="Inflation Rate in percentage"
    >
      <ChartComponent
        id="area-chart"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={theme.currentMode === "dark" ? "#33373E" : "#fff"}
        legendSettings={{ background: "white" }}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </HeaderFooterPage>
  );
};

export default Area;
