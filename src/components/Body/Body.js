import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "../Nav/Nav";
import hero from "./hero.png";
import "./Body.css";
import Header from "../Header/Header";
import Resume from "../Resume/Resume";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact"

export default function Body() {
  return (
    <div>
      <div id="home"></div>
        <img src={hero} className="bg" alt="background"></img>
      <Container>
        <Row>
          <Nav />
        </Row>
        <Row>
          <Header />
        </Row>
        <Row>
          <Resume />
        </Row>
        <Row>
          <Projects />
        </Row>
        <Row>
          <Contact />
        </Row>
      </Container>
    </div>
  );
}
