
import { Modal, Button } from 'react-bootstrap'


const EditProfileModal = ({

  
  show,


  onHide,

  
  profile,

}) => {

  return (

    
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
    >

      {/* header */}
      <Modal.Header closeButton>

        {/* titolo */}
        <Modal.Title>
          Modifica presentazione
        </Modal.Title>

      </Modal.Header>

      {/* contenuto */}
      <Modal.Body>

        {/* box premium */}
        <div className="border rounded-3 p-3 mb-4">

          <div className="d-flex justify-content-between align-items-start">

            <div>

              {/* titolo premium */}
              <p className="fw-bold mb-2">

                <span className="text-warning me-1">
                  ◆
                </span>

                Migliora il tuo profilo con Premium

              </p>

              {/* descrizione premium */}
              <p className="small mb-2">
                Sposta in alto le sezioni del profilo
                che vuoi mettere in evidenza,
                aggiungi un pulsante personalizzato,
                sfrutta l’assistente di scrittura con IA
                e tanto altro.
              </p>

              {/* bottone premium */}
              <Button
                variant="warning"
                size="sm"
                className="rounded-pill fw-semibold"
              >
                Prova Premium per 0 €
              </Button>

            </div>

            {/* icona */}
            <i className="bi bi-chevron-down"></i>

          </div>
        </div>

        {/* testo campi obbligatori */}
        <p className="small text-muted">
          * Indica che è obbligatorio
        </p>

        {/* titolo sezione */}
        <h5 className="fw-bold mt-4">
          Informazioni di base
        </h5>

        {/* nome */}
        <div className="mb-3">

          <label className="form-label">
            Nome*
          </label>

          <input
            type="text"
            className="form-control"

            // valore iniziale
            defaultValue={profile.name}
          />

        </div>

        {/* cognome */}
        <div className="mb-3">

          <label className="form-label">
            Cognome*
          </label>

          <input
            type="text"
            className="form-control"
            defaultValue={profile.surname}
          />

        </div>

        {/* bio */}
        <div className="mb-3">

          <label className="form-label">
            Sommario*
          </label>

          <textarea
            className="form-control"
            rows="3"
            defaultValue={profile.bio}
          ></textarea>

        </div>

        {/* posizione */}
        <h5 className="fw-bold mt-4">
          Posizione attuale
        </h5>

        {/* titolo */}
        <div className="mb-3">

          <label className="form-label">
            Titolo*
          </label>

          <input
            type="text"
            className="form-control"
            defaultValue={profile.title}
          />

        </div>

        {/* località */}
        <h5 className="fw-bold mt-4">
          Località
        </h5>

        {/* città */}
        <div className="mb-3">

          <label className="form-label">
            Città*
          </label>

          <input
            type="text"
            className="form-control"
            defaultValue={profile.area}
          />

        </div>

      </Modal.Body>

      {/* footer */}
      <Modal.Footer>

        {/* annulla */}
        <Button
          variant="secondary"
          onClick={onHide}
        >
          Annulla
        </Button>

        {/* salva */}
        <Button
          variant="primary"
          onClick={onHide}
        >
          Salva
        </Button>

      </Modal.Footer>
    </Modal>
  )
}

// esportiamo componente
export default EditProfileModal