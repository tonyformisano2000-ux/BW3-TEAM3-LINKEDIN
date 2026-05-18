import {
  Button,
  Form,
  InputGroup,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import logo from "../assets/LinkedIn_icon.svg.png";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="py-1 border-bottom">
      <Container fluid className="px-4">
        <div className="d-flex align-items-center">
          <Navbar.Brand as={Link} to="/home" className="me-2">
            <img src={logo} alt="linkedin-logo" style={{ width: "38px" }} />
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
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Link
              to="/"
              className="text-center text-decoration-none d-flex flex-column align-items-center text-secondary mx-3 small"
            >
              <i className="bi bi-house-door-fill fs-5"></i>
              <span>Home</span>
            </Link>

            <Link
              to="/network"
              className="text-center text-decoration-none d-flex flex-column align-items-center text-secondary mx-3 small"
            >
              <i className="bi bi-people-fill fs-5"></i>
              <span>My Network</span>
            </Link>

            <Link
              to="/jobs"
              className="text-center text-decoration-none d-flex flex-column align-items-center text-secondary mx-3 small"
            >
              <i className="bi bi-briefcase-fill fs-5"></i>
              <span>Jobs</span>
            </Link>

            <Link
              to="/messages"
              className="text-center text-decoration-none d-flex flex-column align-items-center text-secondary mx-3 small"
            >
              <i className="bi bi-chat-dots-fill fs-5"></i>
              <span>Messages</span>
            </Link>

            <Link
              to="/notifications"
              className="text-center text-decoration-none d-flex flex-column align-items-center text-secondary mx-3 small"
            >
              <i className="bi bi-bell-fill fs-5"></i>
              <span>Notifications</span>
            </Link>

            <NavDropdown
              title={
                <div className="d-flex flex-column align-items-center small">
                  <i className="bi bi-person-circle fs-5"></i>
                  <span>You</span>
                </div>
              }
              id="basic-nav-dropdown"
              align="end"
            >
              <div className="px-3 py-2" style={{ width: "250px" }}>
                <Button
                  variant="outline-primary"
                  className="fw-bold w-100 rounded-pill"
                >
                  View Profile
                </Button>

                <NavDropdown.Divider />

                <h6>Account</h6>

                <NavDropdown.Item>Settings & Privacy</NavDropdown.Item>

                <NavDropdown.Item>Help</NavDropdown.Item>

                <NavDropdown.Item>Language</NavDropdown.Item>

                <NavDropdown.Divider />

                <h6>Manage</h6>

                <NavDropdown.Item>Posts & Activity</NavDropdown.Item>

                <NavDropdown.Item className="text-truncate">
                  Job Posting Account
                </NavDropdown.Item>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
