import React from "react";
// import { Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const linkStyle = {
    textDecoration: 'none',  // Removes the underline
    color: '#2596be'            // Changes the color to red
  };

  const TeenupliveStyle = {
    textDecoration: 'none',  // Removes the underline
    color: '#ff0000'            // Changes the color to red
  };

  // const containerStyle = {
  //   display: 'flex',
  //   justifyContent: 'center',
  // };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote
          className="blockquote mb-0"
          style={{
            marginLeft: "10%",
            marginRight: "10%"
          }}
        >
          <p className="mobile-font" style={{ textAlign: "justify" }}>
            Hi, I am <span className="green">Jemmy Febryan </span>
            <br /> I am an under-graduate student in Mathematics at Brawijaya University.
            <br />
            Additionally, I am currently part of <a href="https://braincore.id/" target="_blank" rel="noreferrer" style={linkStyle}>Braincore.id</a> as a Data Scientist and Content Writer Volunteer at <a href="https://teenuplive.com/" target="_blank" rel="noreferrer" style={TeenupliveStyle}>Teenuplive</a>.
            <br />
            <br />
            These are my area of interests:
          </p>
          <ul className="mobile-font">
            <li className="about-activity">
              - Business Analytics
            </li>
            <li className="about-activity">
              - HR Analytics
            </li>
            <li className="about-activity">
              - Natural Language Processing
            </li>
            <li className="about-activity">
              - Computer Vision
            </li>
          </ul>
          
          <p style={{ color: "#8DAA91", paddingTop: "50px" }}>
            "Don't wait to be taught, be the first to learn."{" "}
          </p>
          <footer className="blockquote-footer">Jemmy Febryan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
