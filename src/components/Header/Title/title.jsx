import React, {useState, useEffect} from 'react'
import moment from 'moment';
import 'moment/locale/ko';
import styles from './title.module.css';

export default function Title() {
  const moment = require('moment-timezone');

  const nowTime = moment().format('LLLL');
  
  return (
    <div className={styles.container}>
      <div>
        <moment>{nowTime}</moment>
      </div>
    </div>
  )
}
