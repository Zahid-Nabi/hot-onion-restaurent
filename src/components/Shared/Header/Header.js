import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../../../images/logo2.png';

import './Header.css';

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand>
                    <Link to='/home'>
                        <img className="logo" src={logo} alt="logo" />
                    </Link>
                </Navbar.Brand>
                <Nav className="nav-link ms-auto d-flex align-items-center">
                    <NavLink to='/cart'><AiOutlineShoppingCart /></NavLink>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/register'>
                        <Button variant="danger">Sign Up</Button>
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;