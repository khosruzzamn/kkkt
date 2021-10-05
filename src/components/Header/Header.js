import './Header.css'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar className='fixed-top shadow-sm' bg="light" variant="light">
                <Container>
                    <Navbar.Brand to="/"><b>KHOSHRU<span className='text-danger'>B</span>OOK</b></Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink className='nav-link'
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to='/home'><b>Home</b></NavLink>
                        <NavLink className='nav-link'
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to='/about'><b>About us</b></NavLink>
                        <NavLink className='nav-link'
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to='/service'><b>Services</b></NavLink>
                        <NavLink className='nav-link'
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to='/contact'><b>Contact</b></NavLink>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;