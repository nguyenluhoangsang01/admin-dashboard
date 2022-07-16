import {
  Category,
  ChartComponent,
  ColumnSeries,
  DataLabel,
  Inject,
  Legend,
  RangeColorSettingDirective,
  RangeColorSettingsDirective,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import React from "react";

import {
  colorMappingData,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
  rangeColorMapping,
} from "../../data/dummy";
import HeaderFooterPage from "../../layout/pages";

const ColorMapping = () => {
  return (
    <HeaderFooterPage
      category="chart"
      title="Color Mapping"
      subtitle="USA CLIMATE - WEATHER BY MONTH"
    >
      <ChartComponent
        id="color-mapping-chart"
        primaryXAxis={ColorMappingPrimaryXAxis}
        primaryYAxis={ColorMappingPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        legendSettings={{
          mode: "Range",
          visible: true,
          toggleVisibility: false,
          background: "white",
        }}
        tooltip={{ enable: true }}
      >
        <Inject
          services={[ColumnSeries, DataLabel, Tooltip, Category, Legend]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={colorMappingData[0]}
            name="USA"
            xName="x"
            yName="y"
            type="Column"
            cornerRadius={{
              topLeft: 10,
              topRight: 10,
            }}
            marker={{
              dataLabel: { visible: true, position: "Inner" },
            }}
          ></SeriesDirective>
        </SeriesCollectionDirective>
        <RangeColorSettingsDirective>
          {rangeColorMapping.map((item, index) => (
            <RangeColorSettingDirective
              key={index}
              {...item}
            ></RangeColorSettingDirective>
          ))}
        </RangeColorSettingsDirective>
      </ChartComponent>
    </HeaderFooterPage>
  );
};

export default ColorMapping;
