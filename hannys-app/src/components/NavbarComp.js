import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Register from './Register';
import Home from './Home';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
            <div>
                <Navbar bg="light" variant={"light"} expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Hannys Spot</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                            <Nav.Link as={Link} to={"/Register"}>Register</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-danger">Search</Button>
                        </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Switch>
                    <Route path="/about">
                    <About />
                    </Route>
                    <Route path="/register">
                    <Register />
                    </Route>
                    <Route path="/">
                    <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
        )
    }
}
