import React from 'react';
import styles from './aside.module.css';
import Priority from './priority/priority';
import Todo from './todo/todo';
import User from './user/user';

export default function Aside() {
  return (
    <div className={styles.asideWrap}>
      <User/>
      <Todo/>
      <Priority/>
    </div>
  )
}
