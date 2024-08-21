// Navbar with logo(?) and labels for Home, Pets (or Search, something of the sort) on the left, user icon (or picture?) and cart on the right

// Should be able to collapse on smaller devices -- working!

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//Aded by RM
import { useAPI } from '../pages/Context/Context';
import { useNavigate } from 'react-router-dom';


let userIcon = <i className="fa-solid fa-user me-3" />

function NavigationBar() {

  const { logoutUser } = useAPI(); // Get logout function from context
  /* const navigate = useNavigate(); */ // Hook for redirection

  const handleLogout = async () => {
    try {
      await logoutUser(); // Perform logout
      /* navigate('/'); */ // Redirect to home after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky='top' style={{ "alignItems": "flex-end" }}>
      <Container>
        <Navbar.Brand href="/">
          <i className="fa-solid fa-paw" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/ourpets">Our Pets</Nav.Link>
            <Nav.Link href="/paymentplan">Payment Plans</Nav.Link>
          </Nav>

          <Nav>
            <NavDropdown title={userIcon} id="basic-nav-dropdown">
              <NavDropdown.Item href="/userprofile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/personaldata">Personal data</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}> {/* Trigger logout */}
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="/cart">
              <i className="fa-solid fa-cart-shopping" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;