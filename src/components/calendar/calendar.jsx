import React from 'react';
// import styles from './calendar.module.css';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';


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
