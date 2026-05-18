import { Button, Form, InputGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="mx-1 d-flex justify-content-between">
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
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex justify-content-start"
        >
          <Nav className="me-auto">
            <Link
              href="#home"
              className="text-center text-decoration-none d-flex flex-column align-items-center text-secondary mx-3 pt-2 p-0"
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
            <Link
              href="#link"
              className="text-center text-decoration-none d-flex flex-column align-items-center text-secondary mx-3 pt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
              </svg>
              <span className="fw-normal">My network</span>
            </Link>
            <Link
              href="#link"
              className="text-center text-decoration-none d-flex flex-column align-items-center text-secondary mx-3 pt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-briefcase-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
              </svg>
              <span className="fw-normal">Work</span>
            </Link>
            <Link
              href="#link"
              className="text-center text-decoration-none d-flex flex-column align-items-center text-secondary mx-3 pt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-chat-dots-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>
              <span className="fw-normal">Messages</span>
            </Link>
            <Link
              href="#link"
              className="text-center text-decoration-none d-flex flex-column align-items-center text-secondary mx-3 pt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
              </svg>
              <span className="fw-normal">Notifications</span>
            </Link>
            <div className="d-flex flex-column align-content-center text-center">
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
              </div>
              <NavDropdown title="You" id="basic-nav-dropdown">
                <div className="px-2">
                  <Button
                    variant="light"
                    className="text-primary fw-bold w-100 border-primary rounded-4 py-0 px-0"
                  >
                    View Profile
                  </Button>
                  <NavDropdown.Divider />
                  <h5>Account</h5>
                  <NavDropdown.Item href="#action/3.1">
                    Settings and privacy
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Guide</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Language
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <h5>Gestici</h5>
                  <NavDropdown.Item href="#action/3.4">
                    Post and Activity
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action/3.5"
                    className="text-truncate"
                  >
                    Account for posting job offers
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
