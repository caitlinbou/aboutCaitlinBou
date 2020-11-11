import React from 'react'
import { Container, Row, Col, Button, NavDropdown } from "react-bootstrap";
import "./Nav.css"
import Navbar from 'react-bootstrap/Navbar'

export default function Nav() {
    return (
        <Navbar className="navbar-expand-lg navbar-dark fixed-top">
        <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavBar"
          aria-controls="myNavBar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </Button>
        <NavDropdown className="collapse navbar-collapse" id="myNavBar">
          <div className="navbar-nav mx-auto">
            <NavDropdown.Item className="nav-item nav-link" href="#home">HOME </NavDropdown.Item>
            <NavDropdown.Item className="nav-item nav-link" href="#resume">RESUME </NavDropdown.Item>
            <NavDropdown.Item className="nav-item nav-link" href="#projects">PROJECTS </NavDropdown.Item>
            <NavDropdown.Item className="nav-item nav-link" href="#contact">CONTACT </NavDropdown.Item>
          </div>
    
        </NavDropdown>
      </Navbar>
    )
}
