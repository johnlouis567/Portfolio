import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = useMemo(() => ["Software Engineer", "Full-Stack Dev", "Freelancer"], []);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setDelta(period);
      setIsDeleting(true);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, toRotate, text, period]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>{`Hi I'm John Ingram`}<br/><span className="wrap">{text}</span></h1>
            <p id="aboutMe">Hello, my name is John Ingram. I have a Master's degree with a focus on Machine Learning from Colorado School of Mines in the field of Computer Science. I have an enthusiasm for making projects which challenge myself and facilitate learning about technology and people. Check out some of my passion projects and please reach out to me with any questions, I would love to work with you. Cheers!</p>
            <button onClick={() => alert('This site is still under construction. This functionality is not yet working. Sorry for the inconvenience!')}>Contact Me<ArrowRightCircle size={25}/></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Headder Img" height="400px" width="400px"/>
          </Col>

        </Row>
      </Container>
    </section>
  )
}
