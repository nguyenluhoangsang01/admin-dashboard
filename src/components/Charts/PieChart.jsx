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

const PieChart = ({ id, legendSettings, data, xName, yName, dataLabel }) => {
  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={legendSettings}
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
          dataSource={data}
          xName={xName}
          yName={yName}
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode={true}
          explodeOffset="10%"
          explodeIndex={3}
          dataLabel={dataLabel}
        ></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PieChart;
