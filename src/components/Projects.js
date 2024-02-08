import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from '../assets/img/ProjectImgs/comingSoon.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  
  const projects = [
    {
      title: 'Sign Language Interpreter',
      description: 'I am currently building a sign language interpreter which uses computer vision and machine learning to interpret sign language into english in real time.',
      imgUrl: projImg1,
    },
    {
      title: 'Event Finder',
      description: "This project is currently in beta and available on my github. It is a macOS application which allows the user to easily find upcoming events which matches the user's interests using the Ticketmaster API.",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadIn" : ""}>
                <h2>Projects</h2>
                <p>A list of larger scale passion projects which represent the work that I am most proud of. The first tab contains a brief overview of every project. Each project then has its own tab with more detail on the project.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item id="projects-tabs-tab-first">
                    <Nav.Link eventKey="first">Brief Projects Overview</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Sign Language Interpreter</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Event Finder</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">I am currently in the process of creating a custom dataset to train the Machine Learning Model on. More detailed explanation and pictures coming soon.</Tab.Pane>
                  <Tab.Pane eventKey="third">A Prototype of this project is available on my github. A more in depth description of the project is coming soon.</Tab.Pane>
                </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
