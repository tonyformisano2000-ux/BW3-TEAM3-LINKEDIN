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
    school: 'University of Messina',
    degree: "Bachelor's Degree · Computer Science",
    start: '2019',
    end: '2022',
    grade: '108/110',
    initials: 'UM',
    bg: '#003366',
  },
  {
    id: 2,
    school: 'A. Volta Scientific High School',
    degree: 'High School Diploma · Science',
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
            <h5 className="fw-bold mb-0">Education</h5>

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
                      Grade: {edu.grade}
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
          <Modal.Title className="fw-bold">Add education</Modal.Title>
        </Modal.Header>

        {/* campi form */}
        <Modal.Body>

          {/* nota obbligatori */}
          <p className="small text-muted">* Indicates required</p>

          {/* campo scuola */}
          <div className="mb-3">
            <label className="form-label">School*</label>
            <input type="text" className="form-control" placeholder="E.g. University of Bologna" />
          </div>

          {/* campo titolo */}
          <div className="mb-3">
            <label className="form-label">Degree</label>
            <input type="text" className="form-control" placeholder="E.g. Master's Degree" />
          </div>

          {/* campo indirizzo */}
          <div className="mb-3">
            <label className="form-label">Field of study</label>
            <input type="text" className="form-control" placeholder="E.g. Computer Science" />
          </div>

          {/* campi anni */}
          <div className="row g-3 mb-3">

            {/* anno inizio */}
            <div className="col">
              <label className="form-label">Start year</label>
              <input type="number" className="form-control" placeholder="E.g. 2019" min="1950" max="2030" />
            </div>

            {/* anno fine */}
            <div className="col">
              <label className="form-label">End year</label>
              <input type="number" className="form-control" placeholder="E.g. 2022" min="1950" max="2030" />
            </div>
          </div>

          {/* campo voto */}
          <div className="mb-3">
            <label className="form-label">Grade</label>
            <input type="text" className="form-control" placeholder="E.g. 110/110" />
          </div>

          {/* campo attività */}
          <div className="mb-3">
            <label className="form-label">Activities and societies</label>
            <textarea className="form-control" rows={3} placeholder="Activities, associations..." />
          </div>

          {/* campo descrizione */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" rows={3} placeholder="Describe your educational journey..." />
          </div>
        </Modal.Body>

        {/* footer */}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProfileEducation