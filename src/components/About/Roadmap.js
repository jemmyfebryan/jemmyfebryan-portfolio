import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import Map from "../../Assets/JemmyRoadMap.drawio.svg";

function Roadmap() {
  return (
    <Container fluid className="about-section" style={{ overflowY: "auto" }}>
      <Particle />
      <h1 style={{ fontSize: "2.1em", paddingBottom: "50px" }}>
        Welcome to My Learning Roadmap!
      </h1>
      
      <img
        src={Map}
        alt="Roadmap"
        // className="img-thumbnail"
        style={{marginBottom:"50px", borderWidth:"5px", borderStyle:"ridge", opacity:"100%"}}
        // style={{ backgroundColor: '#28112B' }}
      />
    </Container>
  );
}

export default Roadmap;
