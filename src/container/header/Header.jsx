import './Header.css'
import HeaderImage from '../../assets/headerimage.png'
import resume from '../../assets/resume.pdf'

const Header = () => {
  return (
    <div className="app__header" id="home">
      <div className="app__header-content">
        <p className="subtext">Hi, my name is</p>
        <h1>Abhijeet .</h1>
        <h3>I design things for the web.</h3>
        <p className="app__header-content-p">
          I'm a Final Year student and a Full stack Developer 
          Currently, I'm
          <span className="blue-text"> looking for new opportunities </span> to put my skills to best use. 
        </p>
        <div className="app__header-content-cta">
          <a href={resume} download="Abhijeet-Resume">
            <button className="border__button">Resume</button>
          </a>
          <a href="mailto:abhijeet.goswami78@gmail.com">
            <button className="color__button">Hire me</button>
          </a>
        </div>
      </div>
      <div className="app__header-img">
        <img src={HeaderImage} alt="Header" />
      </div>
    </div>
  )
}

export default Header
