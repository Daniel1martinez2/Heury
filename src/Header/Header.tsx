import styles from './Header.module.css'; 

import Nav from './Nav/Nav'; 
import UsersProject from './Users/UsersProject';
import Visualization from './Visualization/Visualization'; 

const Header = () => {
  return(
      <div className={styles['page-header']}>
        <Nav/>
        <Visualization/>
        <UsersProject/>
      </div>
  ); 
}

export default Header;