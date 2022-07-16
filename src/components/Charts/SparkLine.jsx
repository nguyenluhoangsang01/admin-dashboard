/* eslint-disable no-template-curly-in-string */
import {
  Inject,
  SparklineComponent,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";

const SparkLine = ({ id, type, width, height, data }) => {
  const { theme } = useStateContext();

  return (
    <SparklineComponent
      id={id}
      type="Line"
      fill={theme.currentColor}
      border={{ color: theme.currentColor, width: 2 }}
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
