import React from 'react';
import './About.css';
import { Container, Row, Col } from 'react-bootstrap';
import about from '../assets/about.png'

const About = () => {
  return (
    <div className="about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={about} alt='about'></img>
          </Col>
          <Col md={6}>
            <h2>About Us</h2>
            <p>
              Welcome to our website! We are passionate about delivering quality and value. Whether you're here for products, services, or just exploring — we hope you enjoy the experience.
            </p>
            <p>
              Our team is focused on innovation, support, and satisfaction. Thank you for visiting us!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;