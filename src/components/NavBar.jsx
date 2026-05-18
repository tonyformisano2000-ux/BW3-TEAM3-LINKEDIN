import { Form, InputGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="mx-1">
        <Navbar.Brand href="./home">
          <img
            src="./src/assets/LinkedIn_icon.svg.png"
            alt="linkedin-logo"
            style={{ width: "40px" }}
          />
        </Navbar.Brand>

        <InputGroup
          className="rounded-pill overflow-hidden"
          style={{
            maxWidth: "260px",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
          }}
        >
          <InputGroup.Text className="bg-white border-0">
            <i className="bi bi-search text-secondary"></i>
          </InputGroup.Text>

          <Form.Control
            type="text"
            placeholder="Search"
            className="border-0 shadow-none"
          />
        </InputGroup>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              href="#home"
              className="text-center text-decoration-none d-flex flex-column align-items-center text-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-house-door-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
              </svg>

              <span className="fw-normal">Home</span>
            </Link>
            <Nav.Link href="#link">My ne</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
