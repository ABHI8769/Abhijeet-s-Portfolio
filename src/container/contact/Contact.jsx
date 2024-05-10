import { Heading } from '../../components'
import contactImage from '../../assets/contactimage.png'
  import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

import './Contact.css'

const openGithub = () => window.open('https://github.com/ABHI8769/', '_blank')
const openTwitter = () => window.open('https://twitter.com/abhijeet_0955/', '_blank')
const openLinkedin = () => window.open('https://linkedin.com/in/abhijeet-goswami/', '_blank')

const Contact = () => {
  return (
    <div className="app__contact" id="contact">
      <Heading sub="Get in touch" title="Contact Me" />
      <div className="app__contact-content">
        <div className="app__contact-content-text">
          <p>
            I'm
            <span className="blue-text"> looking for new opportunities </span>
            in anything involving Full stack Development. If
            you are a recruiter or if you have any leads, please contact me. My
            inbox is always open.
          </p>
          <p>
            If you have a question or just want to say hi, do message me. I'll
            get back to you.
          </p>
          <div>
            <a href="mailto:abhijeet.goswami78@gmail.com">
              <button className="border__button">Say Hello</button>
            </a>
          </div>
          <div className="mail-group">
            <p
              className="mail"
              onClick={() =>
                navigator.clipboard.writeText('abhijeet.goswami78@gmail.com')
              }
            >
              abhijeet.goswami78@gmail.com
            </p>
          </div>
          <div>
            <FiGithub className="socials" onClick={openGithub} />
            <FiTwitter className="socials" onClick={openTwitter} />
            <FiLinkedin className="socials" onClick={openLinkedin} />
          </div>
        </div>
        <div className="app__contact-img">
          <img src={contactImage} alt=" "/>
        </div>
      </div>
    </div>
  )
}

export default Contact
