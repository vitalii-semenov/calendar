import React from 'react';
import styles from './Header.module.scss';
import supportImg from '../../assets/pictures/Support Iocn.svg';
import messageImg from '../../assets/pictures/Path 9.svg';
import bellImg from '../../assets/pictures/Path 3.svg';
import avatarImg from '../../assets/pictures/Avatar.png';
import searchImg from '../../assets/pictures/icon_search.svg'
const Header = () => {
  return (
      <div className={styles.container}>
        <div className={styles.search}>
          <img src={searchImg} alt="searchIcon"/>
          <div>Search transactions, invoices or help</div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.icons}>
            <img src={supportImg} alt=""/>
            <img src={messageImg} alt=""/>
            <span className={styles.notification}/>
            <img src={bellImg} alt=""/>
            <span className={styles.verticalLine} />
          </div>
          <div className={styles.user}>
            <div className={styles.userName}>John Doe</div>
            <img src={avatarImg} alt="avatar"/>
          </div>
        </div>
      </div>
  );
};

export default Header;
