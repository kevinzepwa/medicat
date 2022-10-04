import React from "react";
import Stack from 'react-bootstrap/Stack';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
      <Navbar bg="primary" variant="dark" className="stickyNav">
        <Container>
          <Navbar.Brand href="/">Medicat</Navbar.Brand>
          <Nav className="justify-content-end">
          <NavLink
            to="/"
            exact
            className="nav text-center"
            activeStyle={{
              background: "darkblue",
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            exact
            className="nav"
            activeStyle={{
              background: "darkblue",
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/doctors"
            exact
            className="nav"
            activeStyle={{
              background: "darkblue",
            }}
          >
            Doctors
          </NavLink>
         </Nav>
        </Container>
      </Navbar>
    );
}

export default NavBar;






<Stack direction="horizontal" gap={3} style={{  width: '55%' ,  margin: '15px' }}>

</Stack>
