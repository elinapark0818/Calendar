import React from 'react';
import styles from './todolist.module.css';

export default function Todolist() {
  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>
        <input type="text" />
        <button>Enter</button>
      </div>
      
    </div>
  )
}
