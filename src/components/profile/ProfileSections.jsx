import { useState } from "react";
import { Modal } from "react-bootstrap";

const ProfileSections = ({ show, onHide }) => {
  const [showMainSections, setShowMainSections] = useState(true);
  const [showSuggestedSections, setShowSuggestedSections] = useState(false);
  const [showOtherSections, setShowOtherSections] = useState(false);

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Aggiungi al profilo</Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0">
        {/* SEZIONI PRINCIPALI */}
        <div className="p-4 border-bottom">
          <div
            className="d-flex justify-content-between align-items-center mb-3"
            style={{ cursor: "pointer" }}
            onClick={() => setShowMainSections(!showMainSections)}
          >
            <h4 className="fw-bold mb-0">Sezioni principali</h4>

            <i
              className={`bi ${
                showMainSections ? "bi-chevron-up" : "bi-chevron-down"
              } fs-4`}
            ></i>
          </div>

          {showMainSections && (
            <>
              <p className="text-muted fs-4">
                Completa queste sezioni principali per migliorare la visibilità
                del tuo profilo fra recruiter e collegamenti.
              </p>

              <div className="d-flex flex-column">
                <button className="btn text-start py-3 border-top">
                  Aggiungi informazioni
                </button>
                <button className="btn text-start py-3 border-top">
                  Aggiungi formazione
                </button>
                <button className="btn text-start py-3 border-top">
                  Aggiungi posizione lavorativa
                </button>
                <button className="btn text-start py-3 border-top">
                  Aggiungi servizi
                </button>
                <button className="btn text-start py-3 border-top">
                  Aggiungi pausa lavorativa
                </button>
                <button className="btn text-start py-3 border-top border-bottom">
                  Aggiungi competenze
                </button>
              </div>
            </>
          )}
        </div>

        {/* SEZIONI CONSIGLIATE */}
        <div className="p-4 border-bottom">
          <div
            className="d-flex justify-content-between align-items-center mb-3"
            style={{ cursor: "pointer" }}
            onClick={() => setShowSuggestedSections(!showSuggestedSections)}
          >
            <h4 className="fw-bold mb-0">Sezioni consigliate</h4>

            <i
              className={`bi ${
                showSuggestedSections ? "bi-chevron-up" : "bi-chevron-down"
              } fs-4`}
            ></i>
          </div>

          {showSuggestedSections && (
            <>
              <p className="text-muted fs-4">
                Completando queste sezioni aumenterai la tua credibilità e
                potrai accedere a più opportunità.
              </p>

              <div className="d-flex flex-column">
                <button className="btn text-start py-3 border-top">
                  Aggiungi elementi in primo piano
                </button>
                <button className="btn text-start py-3 border-top">
                  Aggiungi licenze e certificazioni
                </button>
                <button className="btn text-start py-3 border-top">
                  Aggiungi progetti
                </button>
                <button className="btn text-start py-3 border-top">
                  Aggiungi corsi
                </button>
                <button className="btn text-start py-3 border-top border-bottom">
                  Aggiungi referenze
                </button>
              </div>
            </>
          )}
        </div>

        {/* ALTRO */}
        <div className="p-4">
          <div
            className="d-flex justify-content-between align-items-center mb-3"
            style={{ cursor: "pointer" }}
            onClick={() => setShowOtherSections(!showOtherSections)}
          >
            <h4 className="fw-bold mb-0">Altro</h4>

            <i
              className={`bi ${
                showOtherSections ? "bi-chevron-up" : "bi-chevron-down"
              } fs-4`}
            ></i>
          </div>

          {showOtherSections && (
            <>
              <p className="text-muted fs-4">
                Conferisci ancora più personalità al tuo profilo. Queste
                sezioni ti aiuteranno a espandere la tua rete e a instaurare
                più relazioni lavorative.
              </p>

              <div className="d-flex flex-column">
                <button className="btn text-start py-3 border-top">
                  Aggiungi esperienze di volontariato
                </button>
                <button className="btn text-start py-3 border-top">
                  Aggiungi pubblicazioni
                </button>
                <button className="btn text-start py-3 border-top">
                  Aggiungi brevetti
                </button>
                <button className="btn text-start py-3 border-top">
                  Aggiungi riconoscimenti e premi
                </button>
                <button className="btn text-start py-3 border-top">
                  Aggiungi votazioni esame
                </button>
                <button className="btn text-start py-3 border-top">
                  Aggiungi lingue
                </button>
                <button className="btn text-start py-3 border-top">
                  Aggiungi organizzazioni
                </button>
                <button className="btn text-start py-3 border-top border-bottom">
                  Aggiungi cause
                </button>
              </div>
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProfileSections;