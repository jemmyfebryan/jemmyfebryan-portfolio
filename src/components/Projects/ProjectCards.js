import React from "react";
// import { Container } from "react-bootstrap"
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  // const githubButton = () => {
  //   if (props.noRef === false && props.isGitHub === true) {
  //     return (
  //       <Button variant="primary" href={props.ghLink} target="_blank">
  //         <BsGithub /> &nbsp;
  //         {props.isBlog ? "Blog" : "GitHub"}
  //       </Button>
  //     )
  //   }
  //   return null
  // }
  const buttons = props.refLink.map((link, index) => (
    <Col key={index}>
      <Button
        
        variant="primary"
        href={link}
        target="_blank"
        style={{
          height: "3em", // Adjust this value as needed
          display: "flex", // Ensures the button height is not influenced by the content
          alignItems: "center", // Vertically center the content
        }}
      >
        <CgWebsite /> &nbsp;
        <span style={{ marginLeft: "1em" }}>{props.refName[index]}</span>
      </Button>
    </Col>
  ));

  return (
    <Card className="project-card-view">
      <div style={{
        height: "200px"
      }}>
        <Card.Img
          variant="top"
          src={props.imgPath ?? "nullCertificate.png"}
          alt="card-img"
          style={{
            width: "100%",
            height: "100%"
          }}
        />
      </div>
      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ height: "75px" }}>
          <Card.Title>{props.title}</Card.Title>
        </div>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* {"\n"}
        {"\n"} */}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
        <div style={{ marginTop: "auto" }}>
          {/* {githubButton()} */}
          {/* {!props.noRef && (
            <Button
              variant="primary"
              href={props.refLink}
              target="_blank"
              style={{ marginRight: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {props.refName}
            </Button>
          )} */}
          <Row>
            {!props.noRef && buttons}
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
