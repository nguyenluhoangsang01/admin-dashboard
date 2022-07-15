import {
  ColumnDirective,
  ColumnsDirective,
  KanbanComponent,
} from "@syncfusion/ej2-react-kanban";
import React from "react";
import { kanbanData, kanbanGrid } from "../data/dummy";
import HeaderFooterPage from "../layout/pages";

const Kanban = () => {
  return (
    <HeaderFooterPage category="app" title="kanban">
      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </HeaderFooterPage>
  );
};

export default Kanban;
