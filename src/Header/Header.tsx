import React, {Fragment} from 'react'
import styles from './Header.module.css'; 
import plusSvg from '../img/plus.svg'; 
import Nav from './Nav/Nav'; 
import UsersProject from './Users/UsersProject';
import Visualization from './Visualization/Visualization'; 

interface HeaderInterface {
  type: 'project' | 'home'
}

const Header: React.FC<HeaderInterface> = ({type}) => {

  const renderNav = () => {
    switch (type) {
      case 'project':
        return (
          <Fragment>
            <Nav/>
            <Visualization/>
            <UsersProject type="project"/>
          </Fragment>
        ); 
      case 'home':
        return (
          <Fragment>
            <h1 className={styles['logo']}>Heury</h1>
            <div className={styles['right-content']}>
              <button className={`reset-btn ${styles['button']}`}>
                <img src={plusSvg} alt="sss" />
                New Report
              </button>
              <UsersProject type="home"/>
            </div>
          </Fragment>
        ); 
    }
  
  }

  return(
      <div className={styles['page-header']}>
        {renderNav()}
      </div>
  ); 
}

export default Header;