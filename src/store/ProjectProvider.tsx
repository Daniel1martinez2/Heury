import React, {useCallback, useEffect, useState} from 'react'
import {
  ObservationType, 
  ProjectType, 
  ProjectUserType, 
  UserFirebase 
} from '../library/common/types'; 
// import { addNewProject, deleteServerProject, getProjects } from '../utils/api';
import ProjectContext from "./project-context";
import { 
  postProjectToFirebase, 
  changeProjectId, 
  changeProjectName,
  deleteProjectFirebase,
  setObservationFirebase,
  addProjectIdTOUserProjectList,
  findUserByMail,
  getUserProjectsFirebase,
  deleteProjectFromUserRef,
  deleteObservationFirebase
} from '../utils/apiFIrebase'; 
import { retrieveStoredToken } from '../utils/localStorageUtil';

//this is a reference to a timeOut function
let logOutTimer: any; 
let tokenData: any;

const ProjectProvider = (props:any) => {
  const [filters, setFilters] = useState({heuristic:'', severity: ''}); 
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(false);
  
  const [user, setUser] = useState<UserFirebase | null>(null); 
  
  useEffect(() => {
    tokenData = retrieveStoredToken();
  }, []);

  let initialToken: string | null = null;
  if(tokenData){
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState<string | null>(initialToken);
  const userIsLoggedIn = !!token;   
  const setUserHandler = useCallback( (user: UserFirebase) => {
    setUser(user);
  },[])
  
  const loginHandler = (token: string, expirationTime: string, userMail: string) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('userMail', userMail);

    //stored the expiration time
    localStorage.setItem('expirationTime', expirationTime);
  }; 

  const logoutHandler = useCallback(() => {
    setToken(null); 
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userMail');
    localStorage.removeItem('expirationTime');
    if(logOutTimer){
      clearTimeout(logOutTimer); 
    } 
  }, []); 
  
  useEffect(() => {
    
    if(tokenData){
      console.log(tokenData.duration, 'SI HAY');
      const userMailLS = localStorage.getItem('userMail');
      if(!userMailLS) return
      findUserByMail(userMailLS)
      .then( user => {
        if(user) setUserHandler(user)
      }); 
      
      
      logOutTimer = setTimeout(logoutHandler, tokenData.duration); 
    }else{
      console.log('No token data');
    }

  }, [logoutHandler, setUserHandler]);

  useEffect(() => {
    if(!user) return
    console.log('LOADING<<<<<<<<<<<<<<<<');
    setLoading(true); 
    getUserProjectsFirebase(user)
    .then(projects => {
      console.log('LOADING_FINISH>>>>>>>>>>>>');
      setLoading(false); 
      setProjects(projects);
    })
  }, [user])
  
  
  const checkProjectCurrent = (projectId: string) => {
    const projectsCopy = [...projects];
    const currentProject = projectsCopy.find( project => project.id === projectId); 
    return {currentProject, projectsCopy} 
  }

  //Create
  //----------------------------------------------------------------
  //----------------------------------------------------------------
  const createObservation = (observation:ObservationType, projectId: string) => {
    const {currentProject, projectsCopy} = checkProjectCurrent(projectId)
    currentProject?.observations.push(observation); 
    setProjects(projectsCopy);
    // console.log(projectId);
    if(currentProject) setObservationFirebase(projectId, currentProject, currentProject.observations);
  }; 

  const createProject = (project:ProjectType, callback: (newID:string) => void ) => {

    if(!user) return;
    postProjectToFirebase(project)
    .then( dataID => {
      //data.name --> contains the project id
      changeProjectId(dataID.name, project).then(_ => {
        //Wait for project id change
        setUser(prev => {
          if(prev){
            return ({...prev, projectsIds: [...prev.projectsIds || [], dataID.name]})
          }
          return null
        })
        //🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩
        addProjectIdTOUserProjectList(user, dataID.name); 
      })
      //----------------------------------------------------------------
      //----------------------------------------------------------------
      //----------------------------------------------------------------
      getUserProjectsFirebase(user)
      .then(projects => {
        // console.log('sss');
        console.log(projects, '🔥🔥')
        setProjects([...projects, {...project, id: dataID.name}]);
        callback(dataID.name);
      })

    }); 
  };

  const addUsersProject = (projectId: string, users: ProjectUserType[]) => {
    const {currentProject, projectsCopy} = checkProjectCurrent(projectId); 
    if (!!currentProject){
      currentProject.users.push(...users); 
      setProjects(projectsCopy); 
    }
  }

  //Edit
  const editObservation = ({newObservation, id, projectId}:{newObservation:ObservationType, id: string, projectId: string}) => {
    const {currentProject, projectsCopy} = checkProjectCurrent(projectId)
    if (!!currentProject){
      const {observations} = currentProject
      const currentObservation = observations.findIndex(elem => elem.id === id)
      observations[currentObservation] = {...newObservation}; 
      setObservationFirebase(projectId, currentProject, observations)
      setProjects(projectsCopy);
    }
  }; 

  const setProjectName = (projectId: string, name: string) => {
    const {currentProject, projectsCopy} = checkProjectCurrent(projectId);
    if(!!currentProject){
      currentProject.name = name
      setProjects(projectsCopy); 
      changeProjectName(currentProject.id, currentProject, name); 

    }
  };
  const setProjectCover = (projectId:string, img: string) => {
    const {currentProject, projectsCopy} = checkProjectCurrent(projectId);
    if(!!currentProject){
      currentProject.coverImage = img; 
      setProjects(projectsCopy); 
    }
  }

  //DELETE ⚠️
  const deleteObservation = (id:string, projectId: string) => {
    const {currentProject, projectsCopy} = checkProjectCurrent(projectId)
    if (!!currentProject){
      const {observations} = currentProject;
      const newObservations = observations.filter(elem => elem.id !== id);
      currentProject.observations = newObservations; 
      deleteObservationFirebase(projectId, currentProject, newObservations);
      setProjects(projectsCopy);
    }
  }

  const deleteProject = (projectId: string) => {
    deleteProjectFirebase(projectId); 
    setProjects(prev => prev.filter(project => project.id !== projectId));
    //🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩
    setUser(prev => {

      if(prev){
        return ({...prev, projectsIds: prev.projectsIds.filter(currentProjectId => currentProjectId !==  projectId)})
      }
      return null
    }); 

    console.log(projects, 'ssss');
    if(!user) return
    deleteProjectFromUserRef(user, projectId);
  }

  const deleteProjectUsers = (userId: string, projectId: string) => {
    const {currentProject, projectsCopy} = checkProjectCurrent(projectId); 
    if (!!currentProject){
      const {users} = currentProject; 
      currentProject.users = users.filter(elem => elem.id !== userId); 
      setProjects(projectsCopy);
    }
  }

  //Other
  const setHeuristicFilter:React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setFilters(prev => ({...prev, heuristic: event.target.value})); 
  }

  const setSeverityFilter:React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setFilters(prev => ({...prev, severity: event.target.value})); 
  }
  
  const projectContextData = {
    token: token,
    loading,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    user: user,
    setUserHandler,
    userProjects: projects,
    filterData: filters,
    deleteObservation, 
    editObservation, 
    setProjectName,
    createObservation, 
    setHeuristicFilter,
    setSeverityFilter,
    deleteProjectUsers,
    deleteProject,
    createProject,
    setProjectCover,
    addUsersProject
  }; 
  return(
    <ProjectContext.Provider value={projectContextData}>
      {props.children}
    </ProjectContext.Provider>
  )
}

export default React.memo(ProjectProvider);





