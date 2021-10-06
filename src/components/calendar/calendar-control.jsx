import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styles from './calendar-control.module.css';
import 'react-calendar/dist/Calendar.css'

export default function CalendarControl() {
    const [Dated,setdate] =useState(new Date());
    const onchange = date=>setdate(date);

  return (
    <div className={styles.container}>
      <Calendar
        className={styles.Calendar}
        onChange={onchange} 
        value={Dated}/>
    </div>
  )
}
