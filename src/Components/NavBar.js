import { Button } from 'react-bootstrap';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import StarsRating from 'stars-rating';

const NavBar = ({searchMovie,nejma}) => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Container fluid >
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>searchMovie(e)}
              
            />
          </Form>
          <StarsRating count={5} size={30} onChange={(e)=>nejma(e)}/>
        </Navbar.Collapse>
        <LinkContainer to="/">
        <Button >Home</Button>
        </LinkContainer>
        <LinkContainer to="/trailers">
        <Button >Trailers</Button>
        </LinkContainer>
        
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar