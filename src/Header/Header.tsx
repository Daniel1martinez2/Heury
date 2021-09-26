import styles from './Header.module.css'; 

import Nav from './Nav/Nav'; 
import Visualization from './Visualization/Visualization'; 

const Header = () => {
  return(
      <div className={styles['page-header']}>
        <Nav/>
        <Visualization/>
      </div>
  ); 
}

export default Header;