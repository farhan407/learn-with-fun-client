import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <Container className='my-5 py-2'>
            <h1 className='pb-4 fw-bold text-center'>Learning With LearnWithFun: FAQ</h1>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>How do I take a LearnWithFun course?</Accordion.Header>
                <Accordion.Body>
                LearnWithFun courses are entirely on-demand and they can be accessed from several different devices and platforms, including a desktop, laptop, and our mobile app. After you enroll in a course, you can access it by clicking on the course link you will receive in your confirmation email (provided you’re logged into your LearnWithFun account). You can also begin the course by logging in and navigating to your courses page. 
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

export default Faq;