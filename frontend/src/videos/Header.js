import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">FaTube</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/new-video/">New Video</Nav.Link>
            <Nav.Link href="/messages/">Messages</Nav.Link>
            <NavDropdown title="My Account" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/my-account/">Admin</NavDropdown.Item>
              <NavDropdown.Item href="/edit-profile/">
                Edit Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout/">
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav><br></br>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;