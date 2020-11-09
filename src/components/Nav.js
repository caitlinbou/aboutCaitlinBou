import React from 'react'
import "./Nav.css"

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <a className="nav-item nav-link active" href="#home">HOME </a>
            <a className="nav-item nav-link" href="#resume">RESUME </a>
            <a className="nav-item nav-link" href="#projects">PROJECTS </a>
            <a className="nav-item nav-link" data-toggle="modal" data-target="#exampleModalCenter" href="#contact">CONTACT </a>
          </div>
    
        </div>
      </nav>
    )
}
