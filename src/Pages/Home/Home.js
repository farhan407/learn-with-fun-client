import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <Container className='py-3'>
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousal-image"
                        src='Images/img-1.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-black'>
                        <h3>Best computer science course platform</h3>
                        <p>LearnWithFun is trusted by 12.5K+ companies around the world.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousal-image"
                        src="Images/img-2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className='text-black'>
                        <h3>Learning that gets you</h3>
                        <p>Skills for your present and future. Get started with us.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Row className='py-5 my-3'>
                <Col lg={6} md={6}>
                    <h2>Upskill your team with LearnWithFun</h2>
                    <ul>
                        <li>Unlimited access to 18,000+ top Computer science courses, anytime, anywhere</li>
                        <li>International course collection in 10 languages</li>
                        <li>Top certifications in tech and business</li>
                    </ul>
                    <Button className='my-3 py-2' variant="primary"><Link style={{ textDecoration: "none", color: "white" }} to='/courses'>Enroll Our Courses</Link></Button>
                </Col>
                <Col lg={6} md={6}>
                    <img className='w-100 h-75' src="Images/img-grid.jpg" alt="" />
                </Col>
            </Row>
            <Row className='py-3'>
                <Col lg={6} md={6} style={{ marginTop: '-50px' }}>
                    <img className='w-100 h-75' src="Images/teacher.jpg" alt="" />
                </Col>
                <Col lg={6} md={6} >
                    <h2>Become an instructor</h2>
                    <p>
                        Instructors from around the world teach millions of students on LearnWithFun. We provide the tools and skills to teach what you love.
                    </p>
                    <Button className='my-3 py-2 ' variant="primary"><Link style={{ textDecoration: "none", color: "white" }} to='/courses'>Start teaching today</Link></Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;