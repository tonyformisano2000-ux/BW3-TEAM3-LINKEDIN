import { Col, Dropdown, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <div>
      <Row>
        <Col className="col-4 text-secondary">
          <p className="pointer">Informations</p>
          <p className="pointer">Community guide lines</p>
          <Dropdown className="footer-dropdown">
            <Dropdown.Toggle
              variant="link"
              className="text-secondary text-decoration-none p-0 mb-3"
            >
              Privacy and conditions <i className="bi bi-caret-down-fill"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu className="shadow border-0 p-2 rounded-3">
              <Dropdown.Item className="py-2">
                Privacy Information
              </Dropdown.Item>

              <Dropdown.Item className="py-2">License agreement</Dropdown.Item>

              <Dropdown.Item className="py-2">
                Page terms and conditions
              </Dropdown.Item>

              <Dropdown.Item className="py-2">Cookie policy</Dropdown.Item>

              <Dropdown.Item className="py-2">Copyright policy</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p className="pointer">Sales Solutions</p>
          <p className="pointer">Security center</p>
        </Col>
        <Col className="col-4 text-secondary">
          <p className="pointer">Accesibility</p>
          <p className="pointer">Career</p>
          <p className="pointer">Advertising options</p>
          <p className="pointer">Mobile</p>
        </Col>
        <Col className="col-4 text-secondary">
          <p className="pointer">Talent Solutions</p>
          <p className="pointer">Marketing Solutions</p>
          <p className="pointer">Advertising</p>
          <p className="pointer">Small businesses</p>
        </Col>
      </Row>
      <p className="small mt-3">LinkedIn Corporation &copy; 2026 </p>
      <Row className="mt-5">
        <Col className="col-6">
          <div className="d-flex">
            <i className="bi bi-question-circle-fill fs-3 text-secondary"></i>
            <div className="ms-3 pt-1">
              <p className="m-0 text-secondary fw-bold">Questions?</p>
              <p className="pointer">Visit our Help Center.</p>
            </div>
          </div>
          <div className="d-flex">
            <i className="bi bi-gear-fill fs-3 text-secondary"></i>
            <div className="ms-3 pt-1">
              <p className="m-0 text-secondary fw-bold">
                Manage your account and your privacy
              </p>
              <p className="pointer">Go to settings.</p>
            </div>
          </div>
          <div className="d-flex">
            <i className="bi bi-shield-shaded fs-3 text-secondary"></i>
            <div className="ms-3 pt-1">
              <p className="m-0 text-secondary fw-bold">
                Transparency about recommended content
              </p>
              <p className="pointer">Learn more about recommended content.</p>
            </div>
          </div>
        </Col>
        <Col className="col-6">
          <label className="form-label text-secondary">Select language</label>
          <select className="form-select">
            <option value="Italiano">Italian &#40;Italiano&#41;</option>
            <option value="Inglese">English &#40;Inglese&#41;</option>
            <option value="Spagnolo">Spanish &#40;Spagnolo&#41;</option>
          </select>
        </Col>
      </Row>
    </div>
  );
};
