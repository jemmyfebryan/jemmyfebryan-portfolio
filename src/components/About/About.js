import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
// import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section" style={{ overflowY: "auto" }}>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <div className="col text-center"
            md={5}
            style={{paddingBottom: "50px" }}
          >
            <div >
              <img
                src={laptopImg}
                alt="about"
                className="profile-img img-fluid img-thumbnail rounded-circle profile-border"
                style={{ backgroundColor: '#28112B' }}
              />
            </div>
          </div>
          <Row
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="green">Me</strong>
            </h1>
            <Aboutcard />
          </Row>
        </Row>
        <h1 className="project-heading">
          My <strong className="green">Expertise </strong>
        </h1>

        <Techstack />

        {/* <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack /> */}

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
