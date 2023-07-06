import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

function Header() {
  return (
    <header className="headerSection" id="header">
      <Navbar expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/image/logo.svg" alt="logo" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">How to</Nav.Link>
              <Nav.Link href="#link">Pricing</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
            <a href="#" className="cta">
              sign up
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
