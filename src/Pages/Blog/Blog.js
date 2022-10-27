import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='my-5 py-2'>
            <h1 className='pb-4 fw-bold text-center'>Get Some Knowledge</h1>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header> what is cors?</Accordion.Header>
                <Accordion.Body>
                    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>How can I pay for a course?</Accordion.Header>
                <Accordion.Body>
                LearnWithFun supports several different payment methods, depending on your account country and location. 
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>What do LearnWithFun courses include?</Accordion.Header>
                <Accordion.Body>
                    Each course is created, owned and managed by the instructor(s). The foundation of each  course are its lectures, which can include videos, slides, and text. In addition, instructors can add resources and various types of practice activities, as a way to enhance the learning experience of students. 
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Where can I go for help?</Accordion.Header>
                <Accordion.Body>
                If you find you have a question about a paid course while you’re taking it, you can search for answers to your question in the Q&A or ask the instructor. 
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </Container>
    );
};

export default Blog;