import React from "react";
import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Contact() {
  return (
    <Container>
    <Row className="justify-content-center" id="contact">
      <Col sm={12} className="text-right">
        <h2>Caitlin Bouroncle</h2>
        <p>VP Financial Manager && Full Stack Developer</p>
        <a href="mailto:caitlin.bouroncle@gmail.com" id="email" target="_blank">
          caitlin.bouroncle@gmail.com
        </a>{" "}
        <br />
        phone: 206.999.2038
      </Col>
    </Row>
    </Container>
  );
}
