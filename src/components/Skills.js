import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import cIcon from "../assets/img/SkillsIcons/cIcon.svg";
import cssIcon from "../assets/img/SkillsIcons/cssIcon.svg";
import gitIcon from "../assets/img/SkillsIcons/gitIcon.svg";
import htmlIcon from "../assets/img/SkillsIcons/htmlIcon.svg";
import javaIcon from "../assets/img/SkillsIcons/javaIcon.svg";
import swiftIcon from "../assets/img/SkillsIcons/swiftIcon.svg";
import dockerIcon from "../assets/img/SkillsIcons/dockerIcon.svg";
import pythonIcon from "../assets/img/SkillsIcons/pythonIcon.svg";
import javascriptIcon from "../assets/img/SkillsIcons/javascriptIcon.svg";
import postgresqlIcon from "../assets/img/SkillsIcons/postgresqlIcon.svg";
import "react-multi-carousel/lib/styles.css"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return(
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Contained in this carousel are the technical skills which I am most confident and feel that I can handle a techinal challenge without significant outside assistance.</p>
            </div>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
              <div className="item">
                <img src={pythonIcon} alt="Python Icon" />
                <h5>Python</h5>
              </div>
              <div className="item">
                <img src={javascriptIcon} alt="JavaScript Icon" />
                <h5>JavaScript</h5>
              </div>
              <div className="item">
                <img src={postgresqlIcon} alt="PostgreSQL Icon" />
                <h5>PostqreSQL</h5>
              </div>
              <div className="item">
                <img src={dockerIcon} alt="Docker Icon" />
                <h5>Docker</h5>
              </div>
              <div className="item">
                <img src={gitIcon} alt="Git Icon" />
                <h5>Git</h5>
              </div>
              <div className="item">
                <img src={cIcon} alt="c++ Icon" />
                <h5>c++</h5>
              </div>
              <div className="item">
                <img src={cssIcon} alt="CSS Icon" />
                <h5>CSS</h5>
              </div>
              <div className="item">
                <img src={htmlIcon} alt="HTML Icon" />
                <h5>HTML</h5>
              </div>
              <div className="item">
                <img src={javaIcon} alt="Java Icon" />
                <h5>Java</h5>
              </div>
              <div className="item">
                <img src={swiftIcon} alt="Swift Icon" />
                <h5>Swift</h5>
              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
