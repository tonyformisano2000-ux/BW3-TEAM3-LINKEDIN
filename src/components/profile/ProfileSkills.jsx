// importa hook react
import { useState } from 'react'

// importa componenti bootstrap
import { Card, Button, Modal, Badge } from 'react-bootstrap'

// dati mock competenze
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

// numero di competenze visibili di default
const VISIBLE_COUNT = 5

// componente principale competenze
const ProfileSkills = () => {

  // stato espansione lista
  const [showAll, setShowAll] = useState(false)

  // stato modale
  const [showModal, setShowModal] = useState(false)

  // campo nuova competenza (non utilizzato — funzione non disponibile)
  const [newSkill, setNewSkill] = useState('')

  // competenze visibili in base allo stato
  const visibleSkills = showAll ? MOCK_SKILLS : MOCK_SKILLS.slice(0, VISIBLE_COUNT)

  return (
    <>
      {/* card competenze */}
      <Card className="rounded-4 shadow-sm border-0 mt-3">
        <Card.Body className="p-4">

          {/* intestazione */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="fw-bold mb-0">Competenze</h5>

            {/* bottone aggiungi */}
            <Button
              variant="light"
              className="rounded-circle border-0 p-2"
              onClick={() => setShowModal(true)}
            >
              <i className="bi bi-plus-lg"></i>
            </Button>
          </div>

          {/* lista competenze */}
          <div className="d-flex flex-column gap-3">
            {visibleSkills.map((skill) => (
              <div
                key={skill.id}
                className="d-flex justify-content-between align-items-center pb-3 border-bottom"
              >
                {/* nome e conferme */}
                <div>
                  <p className="fw-semibold mb-0">{skill.name}</p>
                  <div className="d-flex align-items-center gap-2 mt-1">

                    {/* icona persone */}
                    <i className="bi bi-people text-muted small"></i>

                    {/* numero conferme */}
                    <span className="text-muted small">
                      {skill.endorsements} conferme
                    </span>

                    {/* categoria */}
                    <Badge bg="light" text="dark" className="small">
                      {skill.category}
                    </Badge>
                  </div>
                </div>

                {/* bottone conferma */}
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

          {/* bottone mostra tutte / meno */}
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

      {/* modale aggiungi competenza */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>

        {/* header */}
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Aggiungi competenza</Modal.Title>
        </Modal.Header>

        {/* messaggio funzione non disponibile */}
        <Modal.Body>
          <p className="text-muted">Funzione attualmente non disponibile.</p>
        </Modal.Body>

        {/* footer */}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Chiudi</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

// esporta componente
export default ProfileSkills
