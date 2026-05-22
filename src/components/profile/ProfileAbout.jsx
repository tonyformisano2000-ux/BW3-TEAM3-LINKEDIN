import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

const ProfileAbout = ({ profile }) => {
  const [expanded, setExpanded] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [bioText, setBioText] = useState(
    profile?.bio ||
      "Sono uno sviluppatore appassionato di tecnologia e innovazione. Amo creare soluzioni digitali che migliorano la vita delle persone.",
  );

  // tronca il testo se è troppo lungo
  const MAX_CHARS = 200;
  const isLong = bioText.length > MAX_CHARS;
  const displayedText =
    expanded || !isLong ? bioText : bioText.slice(0, MAX_CHARS) + "...";

  return (
    <>
      <Card className="rounded-4 shadow-sm border-0 mt-3">
        <Card.Body className="p-4">
          {/* intestazione */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold mb-0">About me</h5>
            <Button
              variant="light"
              className="rounded-circle border-0 p-2"
              onClick={() => setShowEditModal(true)}
            >
              <i className="bi bi-pencil"></i>
            </Button>
          </div>

          {/* testo bio */}
          <p className="mb-1" style={{ whiteSpace: "pre-line" }}>
            {displayedText}
          </p>

          {/* expand/collapse */}
          {isLong && (
            <Button
              variant="link"
              className="p-0 text-decoration-none fw-semibold"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show less" : "Show more"}
            </Button>
          )}
        </Card.Body>
      </Card>

      {/* MODALE MODIFICA BIO */}
      <Modal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Change About me</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <label className="form-label fw-semibold">About me</label>
          <textarea
            className="form-control"
            rows={6}
            maxLength={2600}
            value={bioText}
            onChange={(e) => setBioText(e.target.value)}
          />
          <p className="text-muted small mt-1 text-end">
            {bioText.length} / 2600
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setShowEditModal(false)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfileAbout;
