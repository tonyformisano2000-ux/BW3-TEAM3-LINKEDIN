import { useState } from 'react'
import { Card, Button, Modal, Badge } from 'react-bootstrap'

// Dati sulle competenze
const MOCK_SKILLS = [
  { id: 1, name: 'React', endorsements: 18, category: 'Sviluppo web' },
  { id: 2, name: 'JavaScript', endorsements: 24, category: 'Sviluppo web' },
  { id: 3, name: 'Bootstrap', endorsements: 12, category: 'Sviluppo web' },
  { id: 4, name: 'HTML / CSS', endorsements: 21, category: 'Sviluppo web' },
  { id: 5, name: 'Node.js', endorsements: 9, category: 'Sviluppo web' },
  { id: 6, name: 'GitHub', endorsements: 15, category: 'Strumenti' },
  { id: 7, name: 'Redux', endorsements: 7, category: 'Strumenti' },
  { id: 8, name: 'Comunicazione', endorsements: 11, category: 'Soft skill' },
]

const VISIBLE_COUNT = 5

const ProfileSkills = () => {
  const [showAll, setShowAll] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [newSkill, setNewSkill] = useState('')

  const visibleSkills = showAll ? MOCK_SKILLS : MOCK_SKILLS.slice(0, VISIBLE_COUNT)

  return (
    <>
      <Card className="rounded-4 shadow-sm border-0 mt-3">
        <Card.Body className="p-4">

          {/* intestazione */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="fw-bold mb-0">Competenze</h5>
            <div className="d-flex gap-2">
              <Button
                variant="light"
                className="rounded-circle border-0 p-2"
                onClick={() => setShowModal(true)}
              >
                <i className="bi bi-plus-lg"></i>
              </Button>
              <Button variant="light" className="rounded-circle border-0 p-2">
                <i className="bi bi-pencil"></i>
              </Button>
            </div>
          </div>

          {/* lista competenze */}
          <div className="d-flex flex-column gap-3">
            {visibleSkills.map((skill) => (
              <div
                key={skill.id}
                className="d-flex justify-content-between align-items-center pb-3 border-bottom"
              >
                <div>
                  <p className="fw-semibold mb-0">{skill.name}</p>
                  <div className="d-flex align-items-center gap-2 mt-1">
                    <i className="bi bi-people text-muted small"></i>
                    <span className="text-muted small">
                      {skill.endorsements} conferme
                    </span>
                    <Badge bg="light" text="dark" className="small">
                      {skill.category}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="rounded-pill"
                >
                  Conferma
                </Button>
              </div>
            ))}
          </div>

          {/* mostra tutte / meno */}
          <Button
            variant="link"
            className="p-0 mt-3 text-decoration-none fw-semibold"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll
              ? 'Mostra meno'
              : `Visualizza tutte le ${MOCK_SKILLS.length} competenze`}
            <i className={`bi ms-1 ${showAll ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
          </Button>

        </Card.Body>
      </Card>

      {/* MODALE AGGIUNGI COMPETENZA */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Aggiungi competenza</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">Competenza*</label>
            <input
              type="text"
              className="form-control"
              placeholder="Es. Python, Leadership, Photoshop..."
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Annulla</Button>
          <Button
            variant="primary"
            onClick={() => {
              setNewSkill('')
              setShowModal(false)
            }}
          >
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProfileSkills
