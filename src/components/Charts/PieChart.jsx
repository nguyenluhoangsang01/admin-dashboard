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

const PieChart = ({ id, legendSettings, data, width, height, name }) => {
  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={legendSettings}
      tooltip={{ enable: true }}
      enableSmartLabels={true}
      width={width}
      height={height}
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
          dataSource={data}
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
          name={name}
        ></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PieChart;
