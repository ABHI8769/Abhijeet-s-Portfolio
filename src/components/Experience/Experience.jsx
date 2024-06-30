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
              <span className="tech__heading">VOIP and VOLTE Development: </span>
              <span className="tech__name">
                Working on the development and optimization of Voice
                over IP (VOIP) and Voice over LTE (VOLTE) applications using Core C++ Concepts.
              </span>
            </li>
            <li>
              <span>
                <BsFillCaretRightFill />
              </span>
              <span className="tech__heading">Software Development: </span>
              <span className="tech__name">
                Contributing to the development and maintenance of software,
                ensuring seamless communication and data transfer.
              </span>
            </li>
            <li>
              <span>
                <BsFillCaretRightFill />
              </span>
              <span className="tech__heading">Testing & Debugging: </span>
              <span className="tech__name">
                Assisting in testing and debugging VOIP and VOLTE software
                applications, identifying and resolving issues to improve performance and reliability.
              </span>
            </li>
            <li>
              <span>
                <BsFillCaretRightFill />
              </span>
              <span className="tech__heading">Collaboration: </span>
              <span className="tech__name">
                Collaborating with cross-functional teams to integrate connectivity and
                communication solutions.
              </span>
            </li>
            <li>
              <span>
                <BsFillCaretRightFill />
              </span>
              <span className="tech__heading">Project Management: </span>
              <span className="tech__name">
                Attending daily stand-ups and sprint planning sessions to ensure
                timely project completion.
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
