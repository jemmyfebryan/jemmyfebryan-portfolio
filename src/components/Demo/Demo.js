import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import PemodelanMatematika from "./PemodelanMatematika/PemodelanMatematika";

function Demo() {
  return (
    <Container fluid className="about-section" style={{ overflowY: "auto" }}>
      <Particle/>
      <PemodelanMatematika/>
    </Container>
  );
}

export default Demo;
