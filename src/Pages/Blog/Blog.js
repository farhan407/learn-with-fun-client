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
                <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                <Accordion.Body>
                    The Firebase Realtime Database lets us build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                    It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>How does the private route work?</Accordion.Header>
                <Accordion.Body>
                    Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                <Accordion.Body>
                If you find you have a question about a paid course while you’re taking it, you can search for answers to your question in the Q&A or ask the instructor. 
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </Container>
    );
};

export default Blog;