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
                <NavDropdown.Divider /> <h6>Account</h6>
                <NavDropdown.Item>Settings & Privacy</NavDropdown.Item>
                <NavDropdown.Item>Help</NavDropdown.Item>
                <NavDropdown.Item>Language</NavDropdown.Item>
                <NavDropdown.Divider /> <h6>Manage</h6>
                <NavDropdown.Item>Posts & Activity</NavDropdown.Item>
                <NavDropdown.Item className="text-truncate">
                  Job Posting Account
                </NavDropdown.Item>
              </div>
            </NavDropdown>
            <div className="d-flex align-content-center d-none d-lg-block">
              <div
                className="vr text-secondary mx-2"
                style={{ height: "40px" }}
              ></div>
            </div>
            <NavDropdown
              align="end"
              id="basic-nav-dropdown"
              className="mx-3 profile-dropdown"
              title={
                <div className="d-flex flex-row flex-lg-column align-items-center gap-2 gap-lg-0 small text-secondary">
                  <i className="bi bi-grid-3x3-gap-fill fs-5"></i>
                  <div className="d-flex align-items-center">
                    <span>For the Companies</span>
                    <i className="bi bi-caret-down-fill ms-1 small"></i>
                  </div>
                </div>
              }
            >
              <div
                className="px-3 py-2 d-flex justify-content-between"
                style={{ width: "500px" }}
              >
                <div className="mx-4">
                  <h5 className="my-4">My apps</h5>
                  <NavDropdown.Item className="d-flex align-content-center p-0 my-2">
                    <i className="bi bi-compass-fill text-primary fs-5 mx-1"></i>
                    <p className="fw-bold small pt-1">Sell</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="d-flex align-content-center p-0 my-2">
                    <i class="bi bi-people-fill text-primary fs-5 mx-1"></i>
                    <p className="fw-bold small pt-1">Groups</p>
                  </NavDropdown.Item>
                  <p className="text-secondary">Talent</p>
                  <NavDropdown.Item className="d-flex align-content-center p-0 my-2">
                    <i class="bi bi-card-heading text-primary fs-5 mx-1"></i>
                    <p className="fw-bold small pt-1">Hire with AI</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="d-flex align-content-center p-0 my-2">
                    <i class="bi bi-file-earmark-bar-graph text-primary fs-5 mx-1"></i>
                    <p className="fw-bold small pt-1">Talent Insights</p>
                  </NavDropdown.Item>
                  <p className="text-secondary">Talent</p>
                  <NavDropdown.Item className="d-flex align-content-center p-0 my-2">
                    <i class="bi bi-person-check-fill text-primary fs-5 mx-1"></i>
                    <p className="fw-bold small pt-1">Services Marketplace</p>
                  </NavDropdown.Item>
                </div>
                <div className="d-flex align-content-center">
                  <div className="vr text-secondary mx-2"></div>
                </div>
                <div>
                  <h5 className="my-4">Find more for the business</h5>
                  <NavDropdown.Item className="p-0 mb-4">
                    <h6>Hire on LinkedIn</h6>
                    <p className="p-0 m-0">Find, attract and hire</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="p-0 mb-4">
                    <h6>Sell on LinkedIn</h6>
                    <p className="p-0 m-0">Unlock new selling opportunities</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="p-0 mb-4">
                    <h6>Publish a free work offer</h6>
                    <p className="p-0 m-0">Find quality candidates</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="p-0 mb-4">
                    <h6>Promote on LinkedIn</h6>
                    <p className="p-0 m-0">Get clients and grow your company</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="p-0 mb-4">
                    <h6>Start with Premium</h6>
                    <p className="p-0 m-0">Grow and leverage your network</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="p-0 mb-4">
                    <h6>Learn with LinkedIn</h6>
                    <p className="p-0 m-0">Courses to form your employees</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="p-0 mb-4">
                    <h6>Admin Center</h6>
                    <p className="p-0 m-0">
                      Manage billing and account details
                    </p>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="d-flex align-content-center my-5 p-0">
                    <h6 className="m-0 pt-1 me-1">Create a company page</h6>
                    <i class="bi bi-plus-lg fs-5"></i>
                  </NavDropdown.Item>
                </div>
              </div>
            </NavDropdown>
            <Link
              to="/premium"
              className="mx-3 py-2 d-flex flex-row flex-lg-column align-items-center gap-2 gap-lg-0 small w-25 text-decoration-none"
            >
              <span
                className="text-wrap"
                style={{
                  color: "#915906",
                  textDecoration: "underline",
                  textDecorationColor: "#915906",
                }}
              >
                Try Premium for 0€
              </span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
