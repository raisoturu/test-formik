import React from "react";
import { Navbar, Button } from "react-bootstrap";
import "./NavBar.css";
const NavBar = () => {
  return (
    <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm px-lg-4">
      <Navbar.Brand href="#home">
        <img
          className="h-100"
          src="https://via.placeholder.com/80x35/bbb/fff?text=Logo"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="ml-auto">
          <Button variant="outline-primary" size="sm">
            Login
          </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
