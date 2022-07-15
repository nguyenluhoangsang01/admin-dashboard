import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Resize,
  DragAndDrop,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../data/dummy";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Calendar = () => {
  return (
    <div>
      <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="app" title="calendar" />

        <ScheduleComponent
          height="650px"
          eventSettings={{ dataSource: scheduleData }}
        >
          <Inject
            services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
          />
        </ScheduleComponent>
      </div>

      <Footer />
    </div>
  );
};

export default Calendar;
