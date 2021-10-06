import React from 'react';
import styles from './header.module.css';
import Title from './Title/title';
import UserIcon from './userIcon/userIcon';

export default function Header() {
  return (
    <div className={styles.headerWrap}>
      <Title/>
      <UserIcon/>
    </div>
  )
}
