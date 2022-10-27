import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import CardDetails from './CradDetails/CardDetails';

const Courses = () => {
    const data=useLoaderData();
    return (
        <Container className='mb-5'>
            <Row>
                <Col lg={3} md={4}>
                    <h3 className='fw-bold py-2 ps-4'>All Courses</h3>
                    {
                        data.map(data=><LeftSideNav data={data} key={data.id}></LeftSideNav>)
                    }
                </Col>
                <Col lg={9} md={8}>
                    <Row className='py-3'>
                    {
                        data.map(data=><CardDetails data={data} key={data.id}></CardDetails>)
                    }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;