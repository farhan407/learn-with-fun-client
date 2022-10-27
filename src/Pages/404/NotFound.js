import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <Container className='text-center'>
            <div className='text-center py-3'>
                <img className='notfound' src="Images/404.png" alt="" />
            </div>
            <h3 className='py-2'>404- Page Not Found</h3>
            <p>
                The page you are looking for might have been removed or temporary unavailable!
            </p>
            <Button className='rounded'><Link className='text-white' to='/'>Go Back Home</Link></Button>
        </Container>
    );
};

export default NotFound;