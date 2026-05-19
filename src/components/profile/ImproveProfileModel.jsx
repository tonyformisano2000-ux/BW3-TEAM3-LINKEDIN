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
          Migliora il tuo profilo e fatti notare
        </Modal.Title>
      </Modal.Header>

      {/* contenuto modale */}
      <Modal.Body className="pt-2">
        {/* lista vantaggi */}
        <div className="d-flex flex-column gap-3 mb-3">
          <div className="d-flex gap-3">
            <span className="text-warning fw-bold">✓</span>
            <span>Sblocca tutte le visualizzazioni del tuo profilo</span>
          </div>

          <div className="d-flex gap-3">
            <span className="text-warning fw-bold">✓</span>
            <span>
              Usa l’assistente di scrittura del profilo con IA per far risaltare
              il tuo profilo
            </span>
          </div>

          <div className="d-flex gap-3">
            <i className="bi bi-bullseye text-primary"></i>
            <span>
              Aggiungi un pulsante personalizzato per programmare riunioni con
              Calendly
            </span>
          </div>
        </div>

        {/* social proof finto */}
        <p className="text-muted small mb-3">
          👩🏻‍💼 👨🏻‍💼 👩🏽‍💼 Milioni di utenti usano Premium
        </p>

        {/* bottone premium */}
        <Button variant="warning" className="rounded-pill fw-semibold mb-3">
          Prova Premium per 0 €
        </Button>

        {/* testo piccolo finale */}
        <p className="text-muted small mb-0">
          Prova gratuita di 1 mese con assistenza 24/7. Facile da annullare. Ti
          invieremo un promemoria 7 giorni prima della fine del periodo di
          prova.
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default ImproveProfileModal;