import React from 'react';
import styles from './footer.module.css';
import Todolist from './todolist/todolist';

export default function Footer() {
  return (
    <div className={styles.footerWrap}>
      <Todolist/>
    </div>
  )
}
