import { Col, Row } from "react-bootstrap";
import avatar from "../assets/avatar.png";

export const TextCard = () => {
  return (
    <Row className="mt-3">
      <Col className="rounded-circle col-2">
        <img src={avatar} alt="avatar" style={{ width: "50px" }} />
      </Col>
      <Col className="col-10">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <p className="mb-0">Username</p>
            <p className="text-secondary mb-0">Date</p>
          </div>
          <div>
            <p className="text-secondary mb-0">Message content preview</p>
          </div>
          <hr className="m-0 text-secondary" />
        </div>
      </Col>
    </Row>
  );
};
