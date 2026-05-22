// importiamo i componenti Bootstrap
import { Button, Modal } from "react-bootstrap";

// componente modale "Migliora profilo"
const ImproveProfileModal = ({ show, onHide }) => {
  return (
    // modale Bootstrap
    <Modal show={show} onHide={onHide} centered size="lg">
      {/* header senza bordo */}
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="fw-bold">
          Improve your profile and get noticed
        </Modal.Title>
      </Modal.Header>

      {/* contenuto modale */}
      <Modal.Body className="pt-2">
        {/* lista vantaggi */}
        <div className="d-flex flex-column gap-3 mb-3">
          <div className="d-flex gap-3">
            <span className="text-warning fw-bold">✓</span>
            <span>Unlock all your profile views</span>
          </div>

          <div className="d-flex gap-3">
            <span className="text-warning fw-bold">✓</span>
            <span>
              Use the AI profile writing assistant to make your profile stand
              out
            </span>
          </div>

          <div className="d-flex gap-3">
            <i className="bi bi-bullseye text-primary"></i>
            <span>
              Add a custom button to schedule meetings with Calendly
            </span>
          </div>
        </div>

        {/* social proof finto */}
        <p className="text-muted small mb-3">
          👩🏻‍💼 👨🏻‍💼 👩🏽‍💼 Millions of users use Premium
        </p>

        {/* bottone premium */}
        <Button variant="warning" className="rounded-pill fw-semibold mb-3">
          Try Premium for €0
        </Button>

        {/* testo piccolo finale */}
        <p className="text-muted small mb-0">
          1-month free trial with 24/7 support. Easy to cancel. We’ll send you
          a reminder 7 days before the end of your trial period.
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default ImproveProfileModal;