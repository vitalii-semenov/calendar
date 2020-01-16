import React from 'react';
import Header from '../Header';
import BigCalendar from '../BigCalendar';
import Menu from '../Menu';
import styles from './Home.module.scss'


const Home = () => {
  return (
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <Menu/>
        </div>

        <div className={styles.rightSide}>
          <Header/>
          <BigCalendar />
        </div>
      </div>
  );
};

export default Home;