import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { journeyData } from "./journey.js";
// import { FirstRandText, SecondRandText } from './JFtext.js'

function Projects() {

  // Checking Query
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search).get('q')

  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedTag, setSelectedTag] = useState(searchParams ? [searchParams] : []);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      const fetchProjectsData = async () => {
        try {
          // const response = await fetch(journeyJSON);
          // const jsonText = response.text(); // Get the raw JSON text
          // const data = JSON.parse(jsonText);
          // const data = await response.json();
          const data = journeyData
          setAllProjects(data);
          const filtered = data.filter((project) =>
            selectedTag.every((tag) => project.tags.includes(tag))
          );
          setFilteredProjects(filtered);
          // if (selectedTag.length === 0) {
          // } else {
          //   setFilteredProjects(data);
          // }
        } catch (error) {
          console.error("Error fetching projects data:", error);
        }
      };

      fetchProjectsData();
      hasMounted.current = true;
    }
  }, [selectedTag]);

  const getUniqueTags = () => {
    const tagsSet = new Set();
    allProjects.forEach((project) => {
      project.tags.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  };

  const handleTagFilter = (tag) => {
    if (selectedTag.includes(tag) || tag === "All") {
      // Deselect the tag if it's already selected
      if (tag !== "All") {  // When it deselect button other than "All"
        const newSelectedTag = selectedTag.filter(item => item !== tag)
        setSelectedTag(newSelectedTag)
        const filtered = allProjects.filter((project) =>
          // project.tags.some((tag) => selectedTag.includes(tag))
          newSelectedTag.every((tag) => project.tags.includes(tag))
        );
        setFilteredProjects(filtered);
      } else {
        setSelectedTag([]);
        setFilteredProjects(allProjects);
      }
    } else {
      // Filter projects based on the selected tag
      const newSelectedTag = [...selectedTag, tag]
      setSelectedTag(newSelectedTag)
      // console.log(newSelectedTag)
      const filtered = allProjects.filter((project) =>
        // project.tags.includes(tag)
        // project.tags.some((tag) => newSelectedTag.includes(tag))
        newSelectedTag.every((tag) => project.tags.includes(tag))
      );
      // console.log(filtered)
      setFilteredProjects(filtered);
    }
  };

  return (
    <Container fluid className="project-section">
      <Particle/>
      <Container style={{position: "relative"}}>
        <h1 className="project-heading">
          My Latest <strong className="green">Journey</strong>
        </h1>
        <p style={{ color: "white" }}>
          I'd like to share recent journey I've been working on.
        </p>

        {/* Filter buttons dynamically generated based on unique tags */}
        <div style={{ marginBottom: "10px" }}>
          <Button
            variant={selectedTag.length === 0 ? "primary" : "outline-primary"}
            onClick={() => handleTagFilter("All")}
          >
            Show All
          </Button>{" "}
          {getUniqueTags().map((tag) => (
            <Button
              key={tag}
              variant={selectedTag.includes(tag) ? "primary" : "outline-primary"}
              onClick={() => handleTagFilter(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((project) => (
            <Col key={project.id} md={4} className="project-card">
              <ProjectCard
                // imgPath={`https://picsum.photos/seed/${Math.floor(
                //   Math.random() * 1000
                // ).toString()}/1080/686`}
                imgPath={project.imgPath}
                isBlog={false}
                noRef={true}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            </Col>
          ))}
        </Row>

        {/* When there is no journey to show */}
        {
          filteredProjects.length === 0 ? (
            <p style={{ color: "white", paddingTop: "40px", paddingBottom: "250px" }}>
              Sorry, there is no journey that I can show you.
            </p>
          ) : null
        }
      </Container>
    </Container>
  );
}

export default Projects;
