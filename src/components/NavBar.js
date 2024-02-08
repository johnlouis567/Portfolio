import { Container, Navbar, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assets/img/logo.png';
import linkedInIcon from '../assets/img/linkedInIcon.svg';
import githubIcon from '../assets/img/githubIcon.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const updateActiveLink = (link) => {
    setActiveLink(link);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
    <Container>
      <Navbar.Brand href="#home">
        <img alt="Logo" src={logo} height="75px" width="205px"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('projects')}>Projects</Nav.Link>
        </Nav>
        <span className="navbar-text">
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/john-louis-ingram/" target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="LinkedIn" height="75px" width="75px"/></a>
            <a href="https://github.com/johnlouis567" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub" height="75px" width="75px" target="_blank"/></a>
          </div>
          <button className="wwd" onClick={() => alert("This site is still under construction. This functionality is not yet working. Sorry for the inconvenience!")}><span>Contact Me</span></button>
        </span>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}
