/* eslint-disable no-template-curly-in-string */
import {
  Inject,
  SparklineComponent,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
import React from "react";

const SparkLine = ({ id, type, color, currentColor, width, height, data }) => {
  return (
    <SparklineComponent
      id={id}
      type={type}
      fill={color}
      border={{ color: currentColor, width: 2 }}
      width={width}
      height={height}
      lineWidth={1}
      dataSource={data}
      xName="x"
      yName="yval"
      tooltipSettings={{
        visible: true,
        format: "${x}: data ${yval}",
        trackLineSettings: {
          visible: true,
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
