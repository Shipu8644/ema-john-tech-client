import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const handleSearch = event => {
        const searchText = event.target.value;
        console.log(searchText);
    }
    return (
        <div className='pt-5'>
            <Navbar collapseOnSelect expand="lg" fixed='top' bg="dark" variant="dark">
                <Container>
                    <Link to='/home'> <Navbar.Brand >Ema-John</Navbar.Brand></Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Form className="w-100 p-1 ">
                                <FormControl
                                    type="search"
                                    placeholder="Search by category "
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={handleSearch}
                                />
                            </Form>
                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;