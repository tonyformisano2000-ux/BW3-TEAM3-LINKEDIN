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

function NavBar({ collapsed, setCollapsed }) {
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

        <Navbar.Collapse id="basic-navbar-nav" className="mt-3 mt-lg-0">
          <Nav className="ms-auto align-items-start align-items-lg-center">
            <Link
              to="/"
              className="text-decoration-none text-secondary mx-3 py-2 d-flex flex-row flex-lg-column align-items-center gap-2 gap-lg-0 small"
            >
              <i className="bi bi-house-door-fill fs-5"></i>
              <span>Home</span>
            </Link>

            <Link
              to="/network"
              className="text-decoration-none text-secondary mx-3 py-2 d-flex flex-row flex-lg-column align-items-center gap-2 gap-lg-0 small"
            >
              <i className="bi bi-people-fill fs-5"></i>
              <span className="text-nowrap">My Network</span>
            </Link>

            <Link
              to="/jobs"
              className="text-decoration-none text-secondary mx-3 py-2 d-flex flex-row flex-lg-column align-items-center gap-2 gap-lg-0 small"
            >
              <i className="bi bi-briefcase-fill fs-5"></i>
              <span>Jobs</span>
            </Link>

            <div
              onClick={() => setCollapsed(!collapsed)}
              className="text-secondary mx-3 py-2 d-flex flex-row flex-lg-column align-items-center gap-2 gap-lg-0 small"
              role="button"
            >
              <i className="bi bi-chat-dots-fill fs-5"></i>
              <span>Messages</span>
            </div>

            <Link
              to="/notifications"
              className="text-decoration-none text-secondary mx-3 py-2 d-flex flex-row flex-lg-column align-items-center gap-2 gap-lg-0 small"
            >
              <i className="bi bi-bell-fill fs-5"></i>
              <span>Notifications</span>
            </Link>

            <NavDropdown
              align="end"
              id="basic-nav-dropdown"
              className="mx-3 profile-dropdown"
              title={
                <div className="d-flex flex-row flex-lg-column align-items-center gap-2 gap-lg-0 small text-secondary">
                  <i className="bi bi-person-circle fs-5"></i>

                  <div className="d-flex align-items-center">
                    <span>You</span>
                    <i className="bi bi-caret-down-fill ms-1 small"></i>
                  </div>
                </div>
              }
            >
              <div className="px-3 py-2" style={{ width: "250px" }}>
                <Button
                  variant="outline-primary"
                  className="fw-bold w-100 rounded-pill"
                >
                  View Profile
                </Button>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
