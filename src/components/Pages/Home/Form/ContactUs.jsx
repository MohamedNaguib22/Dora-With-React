import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Form.css"

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bq7kbz4",
        "template_qkm5h26",
        form.current,
        "VLqRVlsYae4cM4ONc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="FormSection">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="Connect">
              <h2>Let's Connect</h2>
              <p className="text-black-50">
                Please fill out the form on this section to contact with me. Or
                call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
              </p>
              <div className="icons d-flex align-items-center">
                <FaFacebook className="text-black-50 icon" />
                <FaLinkedin className="text-black-50 icon" />
                <FaTwitter className="text-black-50 icon" />
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="FormInput d-flex flex-column">
              <form ref={form} onSubmit={sendEmail}>
                <div>
                <label>Name</label><br/>
                <input type="text" name="user_name" className="w-100" />
                </div>
                <div>
                <label>Email</label><br/>
                <input type="email" name="user_email" className="w-100"/>
                </div>
                <div>
                <label>Phone</label><br/>
                <input type="tel" name="phone" className="w-100"/>
                </div>
                <div>
                <label>Message</label><br/>
                <textarea name="message" className="w-100"/>
                </div>
                <input type="submit" value="Send" className="submit" />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ContactUs;
