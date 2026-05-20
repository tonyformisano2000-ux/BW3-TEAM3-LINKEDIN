import { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'

// logo scuola
const SchoolLogo = ({ initials, bg }) => (
  <div
    className="rounded-2 d-flex align-items-center justify-content-center text-white fw-bold flex-shrink-0"
    style={{ width: 52, height: 52, backgroundColor: bg, fontSize: '0.95rem' }}
  >
    {initials}
  </div>
)

// dati mockup formazione
const MOCK_EDUCATION = [
  {
    id: 1,
    school: 'Università degli Studi di Messina',
    degree: 'Laurea Triennale · Informatica',
    start: '2019',
    end: '2022',
    grade: '108/110',
    initials: 'UM',
    bg: '#003366',
  },
  {
    id: 2,
    school: 'Liceo Scientifico A. Volta',
    degree: 'Diploma · Scientifico',
    start: '2014',
    end: '2019',
    grade: '95/100',
    initials: 'LS',
    bg: '#4CAF50',
  },
]

// componente principale
const ProfileEducation = () => {

  // aggiunta stato modale 
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {/* card formazione */}
      <Card className="rounded-4 shadow-sm border-0 mt-3">
        <Card.Body className="p-4">

          {/* intestazione */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="fw-bold mb-0">Formazione</h5>

            {/* bottone aggiungi */}
            <Button
              variant="light"
              className="rounded-circle border-0 p-2"
              onClick={() => setShowModal(true)}
            >
              <i className="bi bi-plus-lg"></i>
            </Button>
          </div>

          {/* lista scuole */}
          <div className="d-flex flex-column gap-4">
            {MOCK_EDUCATION.map((edu) => (
              <div key={edu.id} className="d-flex gap-3 pb-4 border-bottom">

                {/* logo scuola */}
                <SchoolLogo initials={edu.initials} bg={edu.bg} />

                {/* dettagli */}
                <div className="flex-grow-1">

                  {/* nome scuola */}
                  <p className="fw-bold mb-0">{edu.school}</p>

                  {/* titolo di studio */}
                  <p className="mb-0 small">{edu.degree}</p>

                  {/* anni */}
                  <p className="text-muted small mb-0">
                    {edu.start} – {edu.end}
                  </p>

                  {/* voto se presente */}
                  {edu.grade && (
                    <p className="text-muted small mb-0">
                      Voto: {edu.grade}
                    </p>
                  )}
                </div>

                {/* bottone modifica */}
                <Button
                  variant="light"
                  className="rounded-circle border-0 p-2 align-self-start flex-shrink-0"
                >
                  <i className="bi bi-pencil"></i>
                </Button>
              </div>
            ))}
          </div>

        </Card.Body>
      </Card>

      {/* modale aggiungi formazione */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">

        {/* header */}
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Aggiungi formazione</Modal.Title>
        </Modal.Header>

        {/* campi form */}
        <Modal.Body>

          {/* nota obbligatori */}
          <p className="small text-muted">* Indica che è obbligatorio</p>

          {/* campo scuola */}
          <div className="mb-3">
            <label className="form-label">Scuola*</label>
            <input type="text" className="form-control" placeholder="Es. Università di Bologna" />
          </div>

          {/* campo titolo */}
          <div className="mb-3">
            <label className="form-label">Titolo di studio</label>
            <input type="text" className="form-control" placeholder="Es. Laurea Magistrale" />
          </div>

          {/* campo indirizzo */}
          <div className="mb-3">
            <label className="form-label">Indirizzo / Campo di studi</label>
            <input type="text" className="form-control" placeholder="Es. Informatica" />
          </div>

          {/* campi anni */}
          <div className="row g-3 mb-3">

            {/* anno inizio */}
            <div className="col">
              <label className="form-label">Anno inizio</label>
              <input type="number" className="form-control" placeholder="Es. 2019" min="1950" max="2030" />
            </div>

            {/* anno fine */}
            <div className="col">
              <label className="form-label">Anno fine</label>
              <input type="number" className="form-control" placeholder="Es. 2022" min="1950" max="2030" />
            </div>
          </div>

          {/* campo voto */}
          <div className="mb-3">
            <label className="form-label">Voto</label>
            <input type="text" className="form-control" placeholder="Es. 110/110" />
          </div>

          {/* campo attività */}
          <div className="mb-3">
            <label className="form-label">Attività e società</label>
            <textarea className="form-control" rows={3} placeholder="Attività svolte, associazioni..." />
          </div>

          {/* campo descrizione */}
          <div className="mb-3">
            <label className="form-label">Descrizione</label>
            <textarea className="form-control" rows={3} placeholder="Descrivi il tuo percorso..." />
          </div>
        </Modal.Body>

        {/* footer */}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Annulla</Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>Salva</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProfileEducation
