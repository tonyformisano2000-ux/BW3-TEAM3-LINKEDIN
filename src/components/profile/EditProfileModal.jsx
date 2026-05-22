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
          Edit introduction
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

                Enhance your profile with Premium

              </p>

              {/* descrizione premium */}
              <p className="small mb-2">
                Move the profile sections you want to highlight
                to the top, add a custom button,
                use the AI writing assistant
                and much more.
              </p>

              {/* bottone premium */}
              <Button
                variant="warning"
                size="sm"
                className="rounded-pill fw-semibold"
              >
                Try Premium for €0
              </Button>

            </div>

            {/* icona */}
            <i className="bi bi-chevron-down"></i>

          </div>
        </div>

        {/* testo campi obbligatori */}
        <p className="small text-muted">
          * Indicates required
        </p>

        {/* titolo sezione */}
        <h5 className="fw-bold mt-4">
          Basic information
        </h5>

        {/* nome */}
        <div className="mb-3">

          <label className="form-label">
            First name*
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
            Last name*
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
            Summary*
          </label>

          <textarea
            className="form-control"
            rows="3"
            defaultValue={profile.bio}
          ></textarea>

        </div>

        {/* posizione */}
        <h5 className="fw-bold mt-4">
          Current position
        </h5>

        {/* titolo */}
        <div className="mb-3">

          <label className="form-label">
            Headline*
          </label>

          <input
            type="text"
            className="form-control"
            defaultValue={profile.title}
          />

        </div>

        {/* località */}
        <h5 className="fw-bold mt-4">
          Location
        </h5>

        {/* città */}
        <div className="mb-3">

          <label className="form-label">
            City*
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
          Cancel
        </Button>

        {/* salva */}
        <Button
          variant="primary"
          onClick={onHide}
        >
          Save
        </Button>

      </Modal.Footer>
    </Modal>
  )
}

// esportiamo componente
export default EditProfileModal