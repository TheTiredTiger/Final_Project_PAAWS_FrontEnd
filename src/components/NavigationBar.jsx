import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAPI } from '../pages/Context/Context';
import { useNavigate } from 'react-router-dom';

let userIcon = <i className="fa-solid fa-user me-3" />;

function NavigationBar() {
  const { logoutUser, user } = useAPI(); // Get logout function and user information from context
  const navigate = useNavigate(); // Hook for redirection

  const handleLogout = async () => {
    try {
      await logoutUser(); // Perform logout
      navigate('/'); // Redirect to home after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky="top" style={{ alignItems: 'flex-end' }}>
      <Container>
        <Navbar.Brand href="/">
          <i className="fa-solid fa-paw" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/ourpets">Our Pets</Nav.Link>
          </Nav>

          <Nav>
            {user ? (
              // If user is logged in
              <>
                <NavDropdown title={userIcon} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/userprofile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/personaldata">Personal Data</NavDropdown.Item>
                  <NavDropdown.Item href="/adminpage">Admin</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item> {/* Trigger logout */}
                </NavDropdown>
              </>
            ) : (
              // If user is not logged in
              <Nav.Link href="/login">Log In</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;