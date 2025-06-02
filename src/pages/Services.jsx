import React from 'react';
import './Services.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  return (
    <div className="services-section" id="services">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <Row>
          <Col md={4}>
            <Card className="service-card">
              <Card.Body>
                <Card.Title>Web Design</Card.Title>
                <Card.Text>
                  We craft responsive and engaging websites tailored to your needs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="service-card">
              <Card.Body>
                <Card.Title>Development</Card.Title>
                <Card.Text>
                  Our team builds powerful apps using modern technologies like React, Node.js, and more.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="service-card">
              <Card.Body>
                <Card.Title>SEO Optimization</Card.Title>
                <Card.Text>
                  Get ranked on Google with our expert search engine optimization services.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;