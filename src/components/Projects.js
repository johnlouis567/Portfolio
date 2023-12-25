import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  
  const projects = [
    {
      title: 'Project 1',
      description: 'This is my description for project 1',
      imgURL: 'https://via.placeholder.com/150',
    },
    {
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nisl ut nisi',
      imgURL: 'https://via.placeholder.com/150',
    },
    {
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nisl ut nisi',
      imgURL: 'https://via.placeholder.com/150',
    },
  ]

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nisl ut nisi</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item id="projects-tabs-tab-first">
                <Nav.Link eventKey="first">Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab Three</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
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
              <Tab.Pane eventKey="second">Project Name2</Tab.Pane>
              <Tab.Pane eventKey="third">Figure out where3</Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
