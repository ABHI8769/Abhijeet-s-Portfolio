import { Heading } from '../../components'
import AboutImage from '../../assets/aboutimage.png'
import { BsFillCaretRightFill } from 'react-icons/bs'
import './About.css'

const About = () => {
  return (
    <div className="app__about" id="about">
      <Heading sub="Who am I?" title="About Me" />
      <div className="app__about-content">
        <div className="app__about-content-text">
          <p>
          Hello! I'm Abhijeet Goswami, a pre-final year student pursuing a Bachelor's in Computer Science and Engineering. My journey with web development began years ago 
          when I first envisioned the potential of creating impactful websites accessible to everyone on the internet.
          Driven by my passion for innovation, I've delved into the world of coding to craft visually stunning and user-centric websites. Currently, 
          my focus lies in mastering Data Structures and Algorithms (DSA) alongside honing my skills in Full Stack Development (FSD).

          </p>
          <p>
          In terms of languages, I'm proficient in Java, specializing in Object-Oriented Programming (OOPs), and JavaScript. 
          Additionally, I have hands-on experience with frameworks and libraries such as React, Node, and Express, enabling me to build dynamic web applications.
          Equipped with tools like Git, GitHub, and Visual Studio Code, I ensure efficient collaboration and streamlined development processes. 
          Moreover, my familiarity with databases including MySQL and MongoDB empowers me to design robust and scalable backend solutions.
          As I gear up for the next phase of my career, my primary objective is to contribute my expertise to a startup that shares my vision for innovation and growth, 
          thereby catalyzing its journey to unprecedented success.
          </p>
          <p>Here are a few technologies I'm familiar with:</p>
          <ul>
            <li>
              <span>
                <BsFillCaretRightFill />
              </span>
              <span className="tech__heading">Key Skills : </span>
              <span className="tech__name">Data Structures and Algorithm (DSA) , Full Stack Development (FSD) </span>
            </li>
            <li>
              <span>
                <BsFillCaretRightFill />
              </span>
              <span className="tech__heading">Languages : </span>
              <span className="tech__name">Java (OOPs) , JavaScript </span>
            </li>
            <li>
              <span>
                <BsFillCaretRightFill />
              </span>
              <span className="tech__heading">Frameworks / Libraries : </span>
              <span className="tech__name">React , Node , Express</span>
            </li>
            <li>
              <span>
                <BsFillCaretRightFill />
              </span>
              <span className="tech__heading">Tools : </span>
              <span className="tech__name">
                Git, GitHub, Visual Studio Code 
              </span>
            </li>
            <li>
              <span>
                <BsFillCaretRightFill />
              </span>
              <span className="tech__heading">Databases : </span>
              <span className="tech__name">MYSQL (Structured Query Language) , MongoDB (NoSQL)</span>
            </li>
          </ul>
        </div>
        <div className="app__about-img">
          <img src={AboutImage} alt="About" />
        </div>
      </div>
    </div>
  )
}

export default About
