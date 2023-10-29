import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Latest <strong className="green">Journey</strong>
        </h1>
        <p style={{ color: "white" }}>
          I'd like to share recent journey I've been working on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://picsum.photos/seed/"+Math.floor(Math.random()*1000).toString()+"/1080/686"}
              isBlog={false}
              noRef={true}
              title="Jemmy Febryan Portfolio website"
              description="I designed and built my own personal website, handling both the front-end and back-end using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. This website serves as a repository for my journey, recent projects, areas of expertise, and more."
              tags={['JavaScript', 'MongoDB', 'Express.js', 'React.js', 'Node.js']}
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://picsum.photos/seed/"+Math.floor(Math.random()*1000).toString()+"/1080/686"}
              isBlog={false}
              noRef={true}
              title="4th National INTELLIGO Data Competition 2023"
              description="I developed a model for Reinforcement Learning Human Feedback (RLHF) to address the challenges associated with shipping e-commerce products in Indonesia. This model comprises three components: Positive Negative Sentiment, Shipping Problem Classification, and a Human Feedback Model, which together form the core of my final RLHF solution."
              tags={['Python', 'NLP', 'AI/ML']}
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://picsum.photos/seed/"+Math.floor(Math.random()*1000).toString()+"/1080/686"}
              isBlog={false}
              noRef={true}
              title="4th National IFEST Data Analytics Competition 2023"
              description="I devised a sentiment analysis model for detecting five emotions – Anger, Fear, Joy, Happiness, and Sadness – in Tweets. I conducted a comparative analysis, pitting my hybrid Transformer+CNN model against alternative models, ultimately achieving an impressive validation accuracy of 85.71%."
              tags={['Python', 'NLP', 'AI/ML']}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://picsum.photos/seed/"+Math.floor(Math.random()*1000).toString()+"/1080/686"}
              isBlog={false}
              noRef={true}
              title="AI Psychological Test for Mahasiswa Wirausaha Staff Recruitment 2023"
              description="I made a set of 30 psychological test questions and a Multi-Layer Perceptron (MLP) to train the model using responses from current staff in relation to their performance. Subsequently, I utilized this model to forecast the performance of potential new staff members."
              tags={['Python', 'AI/ML']}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://picsum.photos/seed/"+Math.floor(Math.random()*1000).toString()+"/1080/686"}
              isBlog={false}
              noRef={true}
              title="20th National Big Data Competition 2023"
              description="I developed a model for license plate number prediction based on images. I used cv2 for preprocessing the image dataset, followed by the construction of the model using a Convolutional Neural Network (CNN) architecture, achieving an accuracy of 97.89%."
              tags={['Python', 'Computer Vision', 'AI/ML']}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://picsum.photos/seed/"+Math.floor(Math.random()*1000).toString()+"/1080/686"}
              isBlog={false}
              noRef={true}
              title="Fingerprint Recognition for Fingerprint Test Automation"
              description="I created a Windows GUI application for fingerprint type recognition as part of automating fingerprint testing at Bimbel Gracia Malang. I utilized a Convolutional Neural Network to develop the model and implemented the program using Python with Tkinter."
              tags={['Python', 'Computer Vision', 'AI/ML']}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
