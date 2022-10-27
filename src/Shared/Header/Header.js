import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import React, { useContext,useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Utilities/Context/UserContext';
import './Header.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const {user,logOut}= useContext(AuthContext)
    const [userName,setUserName]=useState(false)
    const navigate=useNavigate();
    const handleLogOut=()=>{
        logOut()
        .then(()=>{
            toast("Log Out Successfully!");
            navigate('/login')
        })
        .catch(error=>console.error(error))
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className='fw-bold'><Link to='/'><img className='me-4' src="images/logo.png" alt="" /></Link>LearnWithFun</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className='navLink pe-4 py-3' to='/home' style={({ isActive }) => isActive ? { color: 'rgb(8, 121, 250)', textDecorationColor: 'rgb(8, 121, 250)', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'white', textDecoration: 'none' }}>Home</NavLink>
                        <NavLink className='navLink pe-4 py-3' to='/courses' style={({ isActive }) => isActive ? { color: 'rgb(8, 121, 250)', textDecorationColor: 'rgb(8, 121, 250)', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'white', textDecoration: 'none' }}>Courses</NavLink>
                        <NavLink className='navLink pe-4 py-3' to='/blog' style={({ isActive }) => isActive ? { color: 'rgb(8, 121, 250)', textDecorationColor: 'rgb(8, 121, 250)', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'white', textDecoration: 'none' }}>Blog</NavLink>
                        <NavLink className='navLink pe-4 py-3' to='/Faq' style={({ isActive }) => isActive ? { color: 'rgb(8, 121, 250)', textDecorationColor: 'rgb(8, 121, 250)', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'white', textDecoration: 'none' }}>FAQ</NavLink>
                        {
                            user?.email?<div className='pt-2'><img onMouseEnter={()=>setUserName(true)} onMouseLeave={()=>setUserName(false)} style={{height:'40px',width:'40px',marginRight:'10px',borderRadius:'50%',objectFit:'cover'}} src={user.photoURL} alt="" />
                            <p className={userName?"visible showName" : "visible hideName"}>{user?.displayName}</p>
                            <NavLink onClick={handleLogOut} className='navLink pe-4 py-3'  style={({ isActive }) => isActive ? { color: 'rgb(8, 121, 250)', textDecorationColor: 'rgb(8, 121, 250)', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'white', textDecoration: 'none' }}>LogOut</NavLink></div>
                            :<NavLink className='navLink pe-4 py-3' to='/login' style={({ isActive }) => isActive ? { color: 'rgb(8, 121, 250)', textDecorationColor: 'rgb(8, 121, 250)', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'white', textDecoration: 'none' }}>Login</NavLink>
                        }
                        <BootstrapSwitchButton checked={true} onstyle="primary" offstyle="light"  width={50}  />
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <ToastContainer />
        </Navbar>
    );
};

export default Header;