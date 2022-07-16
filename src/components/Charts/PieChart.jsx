import {
  AccumulationChartComponent,
  AccumulationDataLabel,
  AccumulationLegend,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationTooltip,
  Inject,
  PieSeries,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import { pieChartData } from "../../data/dummy";

const PieChart = () => {
  return (
    <AccumulationChartComponent
      id="pie-chart"
      legendSettings={{
        background: "white",
        visible: true,
        position: "Top",
      }}
      tooltip={{ enable: true }}
      enableSmartLabels={true}
    >
      <Inject
        services={[
          AccumulationTooltip,
          AccumulationLegend,
          PieSeries,
          AccumulationDataLabel,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={pieChartData}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode={true}
          explodeOffset="10%"
          explodeIndex={3}
          dataLabel={{
            visible: true,
            name: "text",
            position: "Inside",
            font: {
              fontWeight: "600",
              color: "#ffffff",
            },
          }}
        ></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PieChart;
