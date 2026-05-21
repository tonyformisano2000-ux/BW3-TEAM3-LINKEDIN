import { Col, Row } from "react-bootstrap";

// card singola conversazione 
export const TextCard = ({ name, time, message, color, unread }) => {
  // iniziale per l'avatar colorato
  const initial = name ? name[0].toUpperCase() : "?";

  return (
    <Row className="mt-3 align-items-start" role="button">
      {/* avatar con iniziale colorata */}
      <Col className="col-2 d-flex justify-content-center">
        <div
          className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
          style={{ width: 42, height: 42, backgroundColor: color, fontSize: 16, flexShrink: 0 }}
        >
          {initial}
        </div>
      </Col>

      {/* contenuto */}
      <Col className="col-10 ps-1">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center">
            <p className={`mb-0 ${unread ? "fw-semibold" : ""}`} style={{ fontSize: 14 }}>
              {name}
            </p>
            <p className="text-secondary mb-0" style={{ fontSize: 12, whiteSpace: "nowrap" }}>
              {time}
            </p>
          </div>

          <div className="d-flex align-items-center gap-1">
            {/* pallino unread */}
            {unread && (
              <span
                className="rounded-circle bg-primary d-inline-block"
                style={{ width: 8, height: 8, flexShrink: 0 }}
              />
            )}
            <p
              className="text-secondary mb-0"
              style={{
                fontSize: 13,
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                maxWidth: 220,
              }}
            >
              {message}
            </p>
          </div>

          <hr className="m-0 mt-2 text-secondary" />
        </div>
      </Col>
    </Row>
  );
};
