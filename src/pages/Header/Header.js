import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png'

const Header = (props) => {

    const getSearchTerm = event => {
        props.searchHandler(event.target.value);
    }


    return (
        <div className='pt-5'>
            <Navbar collapseOnSelect expand="lg" fixed='top' bg="dark" variant="dark">
                <Container>
                    <Link to='/home' style={{ textDecoration: 'none' }}> <Navbar.Brand ><img style={{ width: '100px', borderRadius: "50px", backgroundColor: 'white', padding: '5px' }} src={logo} alt="" /></Navbar.Brand></Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" style={{
                            display: (
                                (props.show === 'show' && 'none')
                            )
                        }}>
                            <Form className="w-100 p-1 media">
                                <FormControl
                                    type="search"
                                    placeholder="Search by category exp: mobile/camera/laptop "
                                    className="me-2"
                                    aria-label="Search"

                                    onChange={getSearchTerm}
                                />
                            </Form>
                        </Nav>

                        <Nav.Link className="text-white" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/add-product">Add New Product</Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/action">Action</Nav.Link>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;