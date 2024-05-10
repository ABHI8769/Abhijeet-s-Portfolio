import { Heading, Project } from '../../components'
import codeWithAJ from '../../assets/Code-with-AJ.png'
import EmployeeD from '../../assets/EmplyeeD.png'
import './Projects.css'



const Projects = () => {

  return (
    <div className="app__projects" id='projects'>
      <Heading sub="What have I done?" title="Projects" />
      <div className="app__projects-figma_designs">
        <div className="app__project">
          <a
            href="https://github.com/ABHI8769/Code-With-AJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="app__project-img">
              <img src={codeWithAJ} alt="Project 1" />
            </div>
            <div className="app__project-title">
              <p style={{ color: 'white' }}>Code with AJ</p>
            </div>
          </a>
        </div>
        <div className="app__project">
          <a
            href="https://github.com/ABHI8769/Employee-Performance-Managment-System"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="app__project-img">
              <img src={EmployeeD} alt="Project 2" />
            </div>
            <div className="app__project-title">
              <p style={{ color: 'white' }}>EmployeeD</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
