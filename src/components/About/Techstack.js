import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  GiArtificialIntelligence,
  GiHumanPyramid
} from "react-icons/gi"
import { IoLanguage } from "react-icons/io5";
import {
  TbPresentationAnalytics,
  TbSql
} from "react-icons/tb"
import {
  SiMysql,
  SiRstudio,
  SiTensorflow,
  SiFlask,
  SiScikitlearn,
  SiNextdotjs,
  SiTableau,
  SiPytorch,
  SiRedis,
  SiFirebase,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si"
import { RiZhihuFill } from "react-icons/ri"
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  const navigate = useNavigate();

  const handleColumnClick = (link) => {
    // Redirect to the specified route when the column is clicked
    navigate(link);
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="green tech-icons" onClick={() => handleColumnClick("/journey?q=AI/ML")}>
        <GiArtificialIntelligence />
        <br/><p style={{fontSize: "1rem"}}>AI & ML Developer</p>
      </Col>
      <Col xs={4} md={2} className="green tech-icons" onClick={() => handleColumnClick("/journey?q=HR")}>
        <GiHumanPyramid />
        <br/><p style={{fontSize: "1rem"}}>Human Resources</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbPresentationAnalytics />
        <br/><p style={{fontSize: "1rem"}}>Data Analytics</p>
      </Col>
      <Col xs={4} md={2} className="green tech-icons" onClick={() => handleColumnClick("/journey?q=Python")}>
        <DiPython />
        <br/><p style={{fontSize: "1rem"}}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
        <br/><p style={{fontSize: "1rem"}}>PyTorch</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <br/><p style={{fontSize: "1rem"}}>Tensorflow</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
        <br/><p style={{fontSize: "1rem"}}>Scikit-learn</p>
      </Col>
      <Col xs={4} md={2} className="green tech-icons" onClick={() => handleColumnClick("/journey?q=JavaScript")}>
        <DiJavascript1 />
        <br/><p style={{fontSize: "1rem"}}>JavaScript</p>
      </Col>

      {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <br/><p style={{fontSize: "1rem"}}>Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <br/><p style={{fontSize: "1rem"}}>React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
        <br/><p style={{fontSize: "1rem"}}>Tableau</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <br/><p style={{fontSize: "1rem"}}>Node.js</p>
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
        <SiFlask />
        <br/><p style={{fontSize: "1rem"}}>Flask</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRstudio />
        <br/><p style={{fontSize: "1rem"}}>RStudio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <br/><p style={{fontSize: "1rem"}}>C++</p>
      </Col>
      {/* <Col xs={4} md={2} className="green tech-icons" onClick={() => handleColumnClick("/journey?q=Mandarin")}> */}
        {/* <IoLanguage /> */}
        {/* <img src={mandarinIcon} width="100rem" style={{fill: "green", filter: "invert(1)"}}/> */}
        {/* <br/><p style={{fontSize: "1rem"}}>Mandarin</p> */}
      {/* </Col> */}
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
