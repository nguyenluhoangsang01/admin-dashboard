import React from "react";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { kanbanGrid, kanbanData } from "../data/dummy";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Kanban = () => {
  return (
    <div>
      <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="app" title="kanban" />

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
      </div>

      <Footer />
    </div>
  );
};

export default Kanban;
