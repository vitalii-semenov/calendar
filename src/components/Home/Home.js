import React from 'react';
import Header from '../Header';
import BigCalendar from '../BigCalendar';
import Menu from '../Menu';
import styles from './Home.module.scss'
import Routes from '../../constants/routes'


const Home = ({history}) => {
  const handleHome = () => {
    history.push(Routes.HOME)
  }
  return (
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <Menu handleHome={handleHome}/>
        </div>

        <div className={styles.rightSide}>
          <Header/>
          <BigCalendar />
        </div>
      </div>
  );
};

export default Home;
