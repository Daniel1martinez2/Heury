import Project from '../../Project/Project'; 
import ProjectProvider from '../../store/ProjectProvider'; 
import {HashRouter} from 'react-router-dom'; 
function App() {
  return (
    <div className="App">
      <ProjectProvider> 
        <HashRouter>
          <Project/>
        </HashRouter>
      </ProjectProvider>
    </div>
  );
}

export default App;
