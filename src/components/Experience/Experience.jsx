import React from 'react'
import { Heading } from '..'
import AboutImage from '../../assets/aboutimage.png'
import { BsFillCaretRightFill } from 'react-icons/bs'
import contactImage from '../../assets/contactimage.png'

function Experience() {
  return (
    <div className="app__about" id="about">
      <Heading sub="Who am I?" title="Experience" />
      <div className="app__about-content">
        <div className="app__about-content-text">
          <p>
          <h2>Software Developer Intern</h2><h4>June 2024 – Present </h4>
          <p>LG Soft Ltd.<br/>Bangalore , IN</p>
          <ul>
          <li>
              <span>
                <BsFillCaretRightFill />
              </span>
              <span className="tech__name">
                Developed a project individually for the automation of Autosar log analysis.
              </span>
            </li>
            <li>
              <span>
                <BsFillCaretRightFill />
              </span>
              <span className="tech__heading">Automated Log Analysis: </span>
              <span className="tech__name">
              Designed and developed a log analyzer tool to automate the analysis of Autosar DLT logs, significantly improving the
              efficiency of log processing for the development team.
              </span>
            </li>
            <li>
              <span>
                <BsFillCaretRightFill />
              </span>
              <span className="tech__heading">UI Representation: </span>
              <span className="tech__name">
              Implemented advanced filtering functionalities to allow developers to sift through logs more effectively. The tool visually
              represents the logs, making it easier to identify patterns, track issues, and debug crashes.
              </span>
            </li>
            <li>
              <span>
                <BsFillCaretRightFill />
              </span>
              <span className="tech__heading">Performance Optimization: </span>
              <span className="tech__name">
              Focused on optimizing the tool's performance to handle large-scale logs efficiently, ensuring smooth user interaction
              and quick data processing.
              </span>
            </li>
            <li>
              <span>
                <BsFillCaretRightFill />
              </span>
              <span className="tech__heading">Integration with Development Workflow: </span>
              <span className="tech__name">
              Integrated the log analyzer seamlessly into the existing development workflow, reducing manual effort
              and minimizing the time spent on debugging the logs.
              </span>
            </li>
            <li>
              <span>
                <BsFillCaretRightFill />
              </span>
              <span className="tech__heading">Collaboration and Feedback: </span>
              <span className="tech__name">
              Worked closely with cross-functional teams, gathering feedback from developers to iteratively improve the tool's
              usability and effectiveness.
              </span>
            </li>
            <li>
              <span>
                <BsFillCaretRightFill />
              </span>
              <span className="tech__heading">Tools & Technologies: </span>
              <span className="tech__name">
              Python, QT for UI development
              </span>
            </li>
          </ul>
          </p>
        </div>
          <div className="app__contact-img">
            <img src={contactImage} alt=" "/>
          </div>
      </div>
    </div>
  )
}

export default Experience
