import React from "react";
import { FaChartPie, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap"; // Importing Bootstrap components
import "./NavBar.css"; // Assuming some custom CSS if needed

const NavBar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      style={{
        paddingLeft: "20px",
        position: "fixed", // Fix the navbar at the top
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000, // Ensure the navbar stays on top of other content
      }}
    >
      <Navbar.Brand href="/">Budget App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" exact>
            <FaHome size={20} style={{ marginRight: "8px" }} />
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/analytics">
            <FaChartPie size={20} style={{ marginRight: "8px" }} />
            Analytics
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
