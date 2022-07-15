import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Page,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import React from "react";
import { employeesData, employeesGrid } from "../data/dummy";
import HeaderFooterPage from "../layout/pages";

const Employees = () => {
  return (
    <HeaderFooterPage category="page" title="employees">
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>{" "}
    </HeaderFooterPage>
  );
};

export default Employees;
