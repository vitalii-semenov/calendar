import React from 'react';
import styles from './Menu.module.scss'
import logo from '../../assets/pictures/Logo.svg'
import { useRouteMatch } from "react-router-dom";
import messageImg from '../../assets/pictures/Path 358.svg';
import invoicesImg from '../../assets/pictures/Path 102.svg';
import helpImg from '../../assets/pictures/Path 107.svg';
import settingsImg from '../../assets/pictures/Path 108.svg';
import calendarImg from '../../assets/pictures/Path 149.svg';
import homeImg from '../../assets/pictures/Path 357(1).svg';
import someImg from '../../assets/pictures/Path 9.svg'


const Menu = ({handleHome}) => {
  return (
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt=""/>
        </div>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <img src={homeImg} alt=""/>
            <div>Home</div>
          </li>
          <li className={styles.menuItem}>
            <img src={someImg} alt=""/>
            <div>Dashboard</div>
          </li>
          <li className={styles.menuItem}>
            <img src={messageImg} alt=""/>
            <div>Inbox</div>
          </li>
          <li className={styles.menuItem}>
            <img src={someImg} alt=""/>
            <div>Products</div>
          </li>
          <li className={styles.menuItem}>
            <img src={invoicesImg} alt=""/>
            <div>Invoices</div>
          </li>
          <li className={styles.menuItem}>
            <img src={someImg} alt=""/>
            <div>Customers</div>
          </li>
          <li className={styles.menuItem}>
            <img src={someImg} alt=""/>
            <div>Chat Room</div>
          </li>
          <li onClick={handleHome} className={useRouteMatch('/') ?
            `${styles.menuItem} ${styles.activeItem}` : styles.menuItem}>
            <img src={calendarImg} alt=""/>
            <div>Calendar</div>
          </li>
          <li className={styles.menuItem}>
            <img src={helpImg} alt=""/>
            <div>Help Center</div>
          </li>
          <li className={styles.menuItem}>
            <img src={settingsImg} alt=""/>
            <div>Settings</div>
          </li>
        </ul>
      </div>
  );
};

export default Menu;
