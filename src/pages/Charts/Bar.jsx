import {
  Category,
  ChartComponent,
  ColumnSeries,
  DataLabel,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";

import {
  barChartData,
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";
import HeaderFooterPage from "../../layout/pages";

const Bar = () => {
  const { theme } = useStateContext();

  return (
    <HeaderFooterPage
      category="chart"
      title="Bar"
      subtitle="Olympic Medal Counts - RIO"
    >
      <ChartComponent
        id="bar-chart"
        height="420px"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={theme.currentMode === "dark" ? "#33373E" : "#fff"}
        legendSettings={{ background: "white" }}
        dataSource={barChartData}
      >
        <Inject
          services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
        />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>{" "}
    </HeaderFooterPage>
  );
};

export default Bar;
