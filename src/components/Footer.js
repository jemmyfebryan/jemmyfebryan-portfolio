import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

import { FirstRandText, SecondRandText } from './JFtext.js'
// import { First } from 'react-bootstrap/esm/PageItem.js';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  const randomTextFunc = () => {
    const randomIndex1 = Math.floor(Math.random() * FirstRandText.length);
    const randomIndex2 = Math.floor(Math.random() * SecondRandText.length);
    return FirstRandText[randomIndex1] + " " + SecondRandText[randomIndex2]
  }
  
  const [randomText, setRandomText] = useState(randomTextFunc());

  const handleTextChange = () => {
    // Pick a random text from the list
    setRandomText(randomTextFunc());
  };

  return (
    <Container onClick={handleTextChange} fluid className="footer">
      <Row>
        <Col md="6" className="footer-copywright">
          <h3>{randomText}</h3>
        </Col>
        <Col md="6" className="footer-copywright">
          <h3>© Copyright {year} Jemmy Febryan</h3>
        </Col>
        {/* <Col md="4" className="footer-body"> */}
          {/* <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul> */}
        {/* </Col> */}
      </Row>
    </Container>
  );
}

export default Footer;
