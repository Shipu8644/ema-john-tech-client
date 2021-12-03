import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = (props) => {
    const getSearchTerm = event => {
        const searchText = event.target.value;
        props.searchHandler(searchText);
    }

    return (
        <div className='pt-5'>
            <Navbar collapseOnSelect expand="lg" fixed='top' bg="dark" variant="dark">
                <Container>
                    <Link to='/home' style={{ textDecoration: 'none' }}> <Navbar.Brand >Ema-John</Navbar.Brand></Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto search">
                            <Form className="w-100 p-1 media">
                                <FormControl
                                    type="search"
                                    placeholder="Search by category exp: mobile/camera/laptop "
                                    className="me-2"
                                    aria-label="Search"
                                    value={props.term}
                                    onChange={getSearchTerm}
                                />
                            </Form>
                        </Nav>

                        <Nav.Link className="text-white" as={Link} to="/add-product">Add New Product</Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/action">Action</Nav.Link>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;