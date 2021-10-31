import React from 'react';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar bg="light" expand={false}>
                <Container >
                    <Navbar.Brand href="/home">PATHFRIEND TOUR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">PATHFRIEND TOUR</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Link style={{ textDecoration: 'none', }} to="/home" >Home</Link>

                                <Link style={{ textDecoration: 'none', }} to="/package">Package</Link>
                                {
                                    user.email ? <div>
                                        <Link style={{ textDecoration: 'none', marginBottom: "10px" }} to="/allbooking" >Manage All Booking</Link>
                                        <br />

                                        <Link style={{ textDecoration: "none", marginTop: "20px" }} to='/mybooking'>My Booking</Link>
                                        <br />

                                        <Link style={{ textDecoration: "none", marginTop: "10px" }} to="/addnewpackage" >Add New Package</Link>
                                        <br />
                                        <Button style={{ marginTop: "10px " }} onClick={logOut} variant="primary">Log Out</Button>

                                    </div> : <div> <Link style={{ textDecoration: 'none', marginBottom: "10px" }} to="/login" >Sign In</Link></div>
                                }
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">PATHFRIEND TOUR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">


                            {
                                user.email ? <div>

                                    <Link style={{ textDecoration: 'none', marginRight: "10px", color: "white" }} to="/about">My Orders</Link>
                                    <Link style={{ textDecoration: 'none', marginRight: "10px", color: "white" }} to="/about">Manage All Orders</Link>
                                    <Link style={{ textDecoration: 'none', marginRight: "10px", color: "white" }} to="/about">Add A New Service</Link>
                                    <button onClick={logOut}>logOut</button>
                                </div> : <div>
                                    <Link style={{ textDecoration: 'none', marginRight: "10px", color: "white" }} to="/login">Sign In</Link>
                                    <Link style={{ textDecoration: 'none', marginRight: "10px", color: "white" }} to="/about">Register</Link>

                                </div>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}

        </div>
    );
};

export default Header;