import React from "react";
import "./Header.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Header() {
  return (
    <Container>
      <Row>
        <Col sm={12}>
        <div className="header">
          <h1>Caitlin Bouroncle</h1>
          <p id="about-me">
            <i>
              "In my current role of{" "}
              <em className="role">VP, Financial Manager</em>, I have cultivated
              skills of leadership, coaching, and communication. Now as a{" "}
              <em className="role">Full Stack Developer</em>, I bring that
              expertise and passion along. I love helping get stuff done. Click
              around and get to know me!"
            </i>
          </p>
          <br />
          <br />
          <br />
          <a
            className="links"
            id="git"
            href="https://github.com/caitlinbou"
            target="_blank"
          >
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <a
            className="links"
            id="linked"
            href="https://linkedin.com/in/caitlin-bouroncle"
            target="_blank"
          >
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
        </div>
        </Col>
      </Row>
    </Container>
  );
}
