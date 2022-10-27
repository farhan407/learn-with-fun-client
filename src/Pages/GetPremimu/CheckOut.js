import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {
    const data = useLoaderData();
    const { name,price,code} = data;
    const confirmed=()=>{
        toast("Order Successfully Confirmed!");
    }
    return (
        <Container>
            <Card className='my-3 w-75 h-50 mx-auto bg-dark text-white rounded'>
                <Card.Body>
                    <h1 className='py-3'>Checkout</h1>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>
                        Course Code:<p className='fw-bold'>{code}</p>
                        </p>
                        <p className='fw-bold'>Price: {price}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={confirmed}>Proceed</Button>
                    <ToastContainer />
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CheckOut;