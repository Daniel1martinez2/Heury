import Project from '../Project/Project'; 
import ProjectProvider from '../store/ProjectProvider'; 
function App() {
  return (
    <div className="App">
      <ProjectProvider> 
        <Project/>
      </ProjectProvider>
    </div>
  );
}

export default App;
