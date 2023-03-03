import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Button } from 'react-bootstrap'
import "../styles/main.scss"
import Home from './home'


function Main() {
  return (
    <>
      <Container fluid>

        <Navbar bg="light" expand="lg" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#" className='brand'>MusicMuse</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/explore" >Explore</Nav.Link>
                  <NavDropdown
                    title="What's More?"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >

                    <NavDropdown.Item href="#action4">
                      Rate us and leave a comment! 🤩
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Button variant="success" className='mx-2'>Get Started</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <Home />
      </Container>
    </>
  )
}

export default Main