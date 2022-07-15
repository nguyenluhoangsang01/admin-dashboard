import {
  Agenda,
  Day,
  DragAndDrop,
  Inject,
  Month,
  Resize,
  ScheduleComponent,
  Week,
  WorkWeek,
} from "@syncfusion/ej2-react-schedule";
import React from "react";
import { scheduleData } from "../data/dummy";
import HeaderFooterPage from "../layout/pages";

const Calendar = () => {
  return (
    <HeaderFooterPage category="app" title="calendar">
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </HeaderFooterPage>
  );
};

export default Calendar;
