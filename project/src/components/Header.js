import React from 'react'
import '../index.css'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar  bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="/">LinkedUp</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/jobs">Jobs</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )

}

export default Header