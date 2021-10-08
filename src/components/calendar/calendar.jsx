import React from 'react';
// import styles from './calendar.module.css';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

export default function CalendarControl() {

  return (
    <div>
      <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      
      events={[
        { title: "event 1", date: "2021-10-08" },
        { title: "event 2", date: "2020-09-08" }
      ]}/>
    </div>
  )
}
