import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControl from 'react-bootstrap/FormControl';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import '../App.css';
import { Content } from "../components/Content.js";
import { Footer } from '../components/Footer.js';

export function Header() {
    const [searchRecipe, setSearch] = useState("");

    return (
        <div>
            <Navbar className="navigatebar" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">The Spice Box</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">Recipe</Nav.Link> */}
                            {/* <NavDropdown title="Shop" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">Popular Items</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">New Arrival</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <Button variant="outline-dark" onClick={(e) => setSearch(e.target.value)}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div>
            <header className="contentbg py-3">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center">
                        <h1 className="display-4 fw-bolder text-light">Your Proper Chef</h1>
                        <p className="lead fw-normal text-white-50 mb-0">Cooking is not for everyone</p>
                    </div>
                </div>
            </header>
            </div>
            
            <Content searchRecipe={searchRecipe} />

            <Footer />

        </div>
    )
}