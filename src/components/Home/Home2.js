import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"
import Nav from "react-bootstrap/Nav";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <hr
          className="horizontal-line"
          style={{
            marginTop: "100px",
            marginBottom: "100px"
          }}
        />
        <Row
          className="home-about-description"
          style={{
            marginLeft: "10%",
            marginRight: "10%"
          }}
        >
          <Col md={12}>
            <h1 style={{ fontSize: "2.6em", paddingBottom: "50px"}}>
              CHECK OUT MY <Link to="/journey" className="purple" style={{textDecoration: 'none'}}>JOURNEY</Link>
            </h1>
            <p className="mobile-font" style={{textAlign: "justify"}}>
              I've got plenty of stories to share about my journey. You can check out the work I've done and what I'm currently working on. Feel free to take a look at my <Link to="/journey" className="purple" style={{textDecoration: 'none'}}>Journey</Link>
            </p>
          </Col>
        </Row>
        <hr
          className="horizontal-line"
          style={{
            marginTop: "100px",
            marginBottom: "100px"
          }}
        />
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TO GET IN CONTACT</h1>
            <p>
              You're welcome to <span className="purple">contact </span>me through
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  // href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  // href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jemmyfebryan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/djie.jemmy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
