import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardDetails = ({data}) => {
    console.log(data);
    const {name,code,img,id}=data;
    return (
        <>
            <Col lg={6} md={6}>
                <Card className='my-3'>
                    <Card.Img variant="top" style={{height:'200px'}} src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Course Code : {code}
                        </Card.Text>
                        <Button variant="primary"><Link style={{color:'white',textDecoration:'none'}} to={`/courses/${id}`}>Show Details</Link></Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
        
    );
};

export default CardDetails;