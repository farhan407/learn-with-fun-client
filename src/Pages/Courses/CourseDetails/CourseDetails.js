import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import {FaCrown,FaDownload} from "react-icons/fa";

const CourseDetails = () => {
    const data=useLoaderData();
    const {name,description,img,code,id}=data;
    return (
        <Container className='w-75'>
            <div className='d-flex justify-content-between'>
                <h1 className='py-3 fw-bold'>{name}</h1>
                <Button className='my-3' variant="primary" style={{height:'50px'}}><FaDownload></FaDownload></Button>
            </div>
            <Card className='my-3'>
                    <Card.Img variant="top" className='h-50' src={img} />
                    <Card.Body>
                        <p className='fw-bold py-3'>Course Code : {code}</p>
                        <Card.Title><h3 className='fw-bold'>Course Outline</h3></Card.Title>
                        <Card.Text>
                            <div>
                                {description}
                            </div>
                        </Card.Text>
                        <Button variant="primary"><Link style={{color:'white',textDecoration:'none'}} to={`/courses/${id}/checkout`}><span className='pe-3'>Get Premium Access</span><FaCrown ></FaCrown></Link></Button>
                    </Card.Body>
                </Card>
        </Container>
    );
};

export default CourseDetails;