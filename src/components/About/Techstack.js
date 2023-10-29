import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import mandarinIcon from "../../Assets/mandarin.svg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { GiArtificialIntelligence } from "react-icons/gi"
import {
  TbPresentationAnalytics,
  TbSql
} from "react-icons/tb"
import {
  SiMysql,
  SiRstudio,
  SiTensorflow
} from "react-icons/si"
import { RiZhihuFill } from "react-icons/ri"
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <GiArtificialIntelligence />
        <br/><p style={{fontSize: "1rem"}}>AI & ML Developer</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbPresentationAnalytics />
        <br/><p style={{fontSize: "1rem"}}>Data Analytics</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <br/><p style={{fontSize: "1rem"}}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <br/><p style={{fontSize: "1rem"}}>Tensorflow</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <br/><p style={{fontSize: "1rem"}}>Javascript</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <br/><p style={{fontSize: "1rem"}}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <br/><p style={{fontSize: "1rem"}}>React.js</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <br/><p style={{fontSize: "1rem"}}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <br/><p style={{fontSize: "1rem"}}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRstudio />
        <br/><p style={{fontSize: "1rem"}}>RStudio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <br/><p style={{fontSize: "1rem"}}>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={mandarinIcon} width="100rem" style={{filter: "invert(1)"}}/>
        <br/><p style={{fontSize: "1rem"}}>Mandarin</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col> */}
    </Row>
  );
}

export default Techstack;
