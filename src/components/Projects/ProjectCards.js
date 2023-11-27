import React from "react";
import { Container } from "react-bootstrap"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const projectButton = () => {
    if (props.noRef === false) {
      return (
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
      )
    }
    return null
  }
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
      <Card.Body>
        <div style={{ height: "75px" }}>
          <Card.Title>{props.title}</Card.Title>
        </div>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {projectButton()}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
