import React from "react";
import "./Nav.css";


export default function Nav() {
  return (

    <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
  
      <div className="navbar-nav mx-auto">
        <a className="nav-item nav-link" href="#home">HOME </a>
        <a className="nav-item nav-link" href="#resume">RESUME </a>
        <a className="nav-item nav-link" href="#projects">PROJECTS </a>
        <a className="nav-item nav-link" data-toggle="modal" data-target="#exampleModalCenter" href="#contact">CONTACT </a>
      </div>

  </nav>

  );
}
