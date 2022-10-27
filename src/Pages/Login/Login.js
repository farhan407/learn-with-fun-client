import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { useContext,useState } from 'react';
import { AuthContext } from '../../Utilities/Context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const {logIn,logInWithGoogle,logInWithGitHub}= useContext(AuthContext)
    const location=useLocation();
    const from=location.state?.from?.pathname||'/';
    const navigate =useNavigate();
    const [error,setError]=useState('')
    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email,password)
        .then(result=>{
            const user=result.user;
            navigate(from,{replace:true});
            toast("Welecome");
        })
        .catch(error=>{
            const errorMsg=error.message;
            setError(errorMsg)
        })

    }
    const handleLogInWithGoogle=()=>{
        logInWithGoogle()
        .then(result=>{
            const user=result.user;
            navigate(from,{replace:true});
        })
        .catch(error=>{
            const errorMsg=error.message;
            setError(errorMsg)
        })

    }
    const handleLogInWithGitHub=()=>{
        logInWithGitHub()
        .then(result=>{
            const user=result.user;
            navigate(from,{replace:true});
        })
        .catch(error=>{
            const errorMsg=error.message;
            setError(errorMsg)
        })

    }
    return (
        <Container>
            <Row>
                <Col className='mx-auto' lg={5} md={8} sm={9} xs={10} >
                    <Form onSubmit={handleLogIn} className='container rounded formContainer mx-auto text-white bg-dark my-3 pt-2'>
                        <h1 className='py-3'>Please Sign In</h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sign In
                        </Button>
                        <p className='text-center'>Or</p>
                        <div className='text-center mb-2'>
                            <Button onClick={handleLogInWithGoogle} style={{width:'180px'}} >Sign in With <FaGoogle></FaGoogle> </Button>
                        </div>
                        <div className='text-center mb-3'>
                            <Button onClick={handleLogInWithGitHub} style={{width:'180px'}} >Sign in With <FaGithub></FaGithub> </Button>
                        </div>
                        <p className='py-3 text-danger'>{error}</p>
                        <p className='text-center pb-2'>Create New Account?<Link className="text-primary" to='/signup'>Sign Up</Link></p>
                    </Form>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default Login;