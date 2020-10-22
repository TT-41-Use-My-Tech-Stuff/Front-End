import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Use My Tech Stuff</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Home" className="" />
      </Form>
      <Form className="form-center">
        <FormControl type="text" placeholder="SignIn" className="" />
      </Form>
      <Form className="form-center">
        <FormControl type="text" placeholder="SignUp" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/">SignIn</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/">SignUp</Nav.Link></Nav.Item>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)