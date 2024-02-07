import { assign } from "nodemailer/lib/shared";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
//import contactImg from "../assets/img/";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [staus, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value});
  };

  const handleSubmit = async (e) => {
    e.protectDefault();
    setButtonText("Sending...");
    let response = await fetch("/api/contact", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(formDetails),
    });
    let result = await response.json();
    setButtonText("Send");
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({
      success: true,
      message: "Message Sent."
      })
    } else {
      setStatus({
      success: false,
      message: "Something went wrong. Please try again later."
      })
    }
  }

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src="https://via.placeholder.com/150" alt="Contact Me!"/>
          </Col>
          <Col md={6}>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
            <Row>
            <Col sm={6} className="px-1">
              <input type="text" vaue={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
            </Col>
            <Col sm={6} className="px-1">
              <input type="text" vaue={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
            </Col>
            <Col sm={6} className="px-1">
              <input type="email" vaue={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)}/>
            </Col>
            <Col sm={6} className="px-1">
              <input type="tel" vaue={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
            </Col>
            <Col>
                <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}/>
                <button type="submit"><span>{buttonText}</span></button>
            </Col>
              {
                status.message &&
                <Col>
                  <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                </Col>
              }
            </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
    
  )
}
