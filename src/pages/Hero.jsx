// Hero.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h1 className="hero-heading">
              Welcome to{' '}
              <span className="typewriter-text">
                <Typewriter
                  words={['My Website', 'Your Future', 'React Bootstrap World']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>
            <p className="hero-subheading">Build responsive UI with ease using React Bootstrap!</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;