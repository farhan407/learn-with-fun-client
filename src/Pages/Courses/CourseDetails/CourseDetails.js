import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCrown, FaDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const CourseDetails = () => {
    const data = useLoaderData();
    const { name, description, img, code, id } = data;
    return (
        <Container className='w-75' ref={ref}>
            <div className='d-flex justify-content-between'>
                <h1 className='py-3 fw-bold'>{name}</h1>
                <Pdf targetRef={ref} filename={`${name}.pdf`}>
                    {({ toPdf }) => (
                        <Button className='my-3' onClick={toPdf} variant="primary" style={{ height: '50px' }}><FaDownload></FaDownload></Button>
                    )}
                </Pdf>
            </div>
            <Card className='my-3'>
                <Card.Img variant="top" className='h-50' src={img} />
                <Card.Body>
                    <p className='fw-bold py-3'>Course Code : </p>
                    <Card.Title><h3 className='fw-bold'>Course Outline</h3></Card.Title>
                    <Card.Text>
                        <div>
                            {description}
                        </div>
                    </Card.Text>
                    <Button variant="primary"><Link style={{ color: 'white', textDecoration: 'none' }} to={`/courses/${id}/checkout`}><span className='pe-3'>Get Premium Access</span><FaCrown ></FaCrown></Link></Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CourseDetails;