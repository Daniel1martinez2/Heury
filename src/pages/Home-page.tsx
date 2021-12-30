import React, {Fragment, useContext} from 'react'; 
import Header from '../components/Header/Header'; 
import styles from '../components/Project/Project.module.css';
import ProjectThumb from '../components/ProjectThumb/ProjectThumb';
import ProjectContext from '../store/project-context';
import Loader from '../components/Loader/Loader'; 


const HomePage = () => {
  const ctx = useContext(ProjectContext);
  const {userProjects, loading} = ctx
  
  return (
    <Fragment>
      {loading && <Loader/>}
      <Header type="home"/>
      <div className={styles['projects-container']}>
        <div className={styles['projects-title']}>
          <h1>All Reports</h1>
          <span>( {userProjects.length} )</span>
        </div>
        <div className={styles['thumb-container']}>
          {userProjects.map(project => <ProjectThumb data={project} key={project.id} />)}
        </div>
      </div>
    </Fragment>
  )
}

export default HomePage
