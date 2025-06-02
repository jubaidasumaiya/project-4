import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We build beautiful, functional, and fast web experiences using modern technologies.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +880 1234 567890</p>
          </Col>
        </Row>
        <hr />
        <p className="text-center copyright">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;