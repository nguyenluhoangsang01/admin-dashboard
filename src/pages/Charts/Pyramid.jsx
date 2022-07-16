import {
  AccumulationChartComponent,
  AccumulationDataLabel,
  AccumulationLegend,
  AccumulationSelection,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationTooltip,
  Inject,
  PieSeries,
  PyramidSeries,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import { PyramidData } from "../../data/dummy";

import HeaderFooterPage from "../../layout/pages";

const Pyramid = () => {
  return (
    <HeaderFooterPage
      category="chart"
      title="Pyramid"
      subtitle="Food Comparison Chart"
    >
      <AccumulationChartComponent
        id="pyramid-chart"
        legendSettings={{
          background: "white",
          visible: true,
          position: "Top",
        }}
        tooltip={{ enable: true }}
      >
        <Inject
          services={[
            AccumulationTooltip,
            AccumulationLegend,
            PieSeries,
            AccumulationDataLabel,
            PyramidSeries,
            AccumulationSelection,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            name="Food"
            dataSource={PyramidData}
            xName="x"
            yName="y"
            type="Pyramid"
            width="45%"
            height="80%"
            neckWidth="15%"
            gapRatio={0.03}
            explode={true}
            emptyPointSettings={{ mode: "Drop", fill: "red" }}
            dataLabel={{
              visible: true,
              position: "Inside",
              name: "text",
            }}
          ></AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </HeaderFooterPage>
  );
};

export default Pyramid;
