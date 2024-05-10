import { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'
import React from 'react';

import { Modal } from '..'
import './Project.css'

const Project = props => {
  const [showModal, setShowModal] = useState(false)

  const showModalHandler = () => {
    setShowModal(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModalHandler = () => {
    setShowModal(false)
    document.body.style.overflow = 'unset'
  }




  return (
    <Fragment>
      <div className="app__project" >
        <div className="app__project-img">
          <div className="app__project-img-overlay" />
          <img src={props.thumbnail} alt="project" />
        </div>
        <div className="app__project-title">
          <p>{props.title}</p>
          <p>❯</p>
        </div>
      </div>
      {showModal &&
        ReactDOM.createPortal(
          <Modal
            onClose={closeModalHandler}
            title={props.title}
            type={props.type}
            image={props.image}
            thumbnail={props.thumbnail}
            description={props.description}
            tech={props.tech}
            github={props.github}
          />,
          document.getElementById('modal')
        )}
    </Fragment>
  )
}

export default Project
