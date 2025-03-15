import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { 
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import ClientPartners from "./ClientPartners";

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
            {/* <h1 style={{ fontSize: "2.6em", paddingBottom: "50px"}}>
              JEMMY <Link to="/about" className="purple" style={{textDecoration: 'none'}}>FINANCE</Link>
            </h1> */}
            <h1 style={{ fontSize: "2.6em", paddingBottom: "50px"}}>
              JEMMY <a href="https://finance.jemmyfebryan.com" className="purple" style={{textDecoration: 'none'}}>FINANCE</a>
            </h1>
            <p className="mobile-font"> {/* style={{textAlign: "justify"}} */}
              Explore my expertise in finance, including investment and portfolio management. Visit <a href="https://finance.jemmyfebryan.com" className="purple" style={{textDecoration: 'none'}}>Jemmy Finance</a>.
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
        <Row
          className="home-about-description"
          style={{
            marginLeft: "10%",
            marginRight: "10%"
          }}
        >
          <Col md={12}>
            <h1 style={{ fontSize: "2.6em", paddingBottom: "50px"}}>
              KNOW <Link to="/about" className="purple" style={{textDecoration: 'none'}}>ABOUT</Link> ME
            </h1>
            <p className="mobile-font"> {/* style={{textAlign: "justify"}} */}
              Discover more about me by exploring details on who I am, my interests, and areas of expertise. Learn more <Link to="/about" className="purple" style={{textDecoration: 'none'}}>About</Link> me.
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
            <p className="mobile-font">
              I've got plenty of stories to share about my journey. You can check out the work I've done and what I'm currently working on. Feel free to take a look at my <Link to="/journey" className="purple" style={{textDecoration: 'none'}}>Journey</Link>
            </p>
          </Col>
        </Row>

        <ClientPartners />

        <hr
          className="horizontal-line"
          style={{
            marginTop: "125px",
            marginBottom: "100px"
          }}
        />
        <Row style={{marginBottom: "25px"}}>
          <Col md={12} className="home-about-social">
            <h1>TO GET IN CONTACT</h1>
            <p>
              You're welcome to <span className="purple">contact </span>me through
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jemmyfebryan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Jemmy_AI"
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
              <li className="social-icons">
                <a
                  href="https://wa.me/6285850434383"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaWhatsapp />
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
