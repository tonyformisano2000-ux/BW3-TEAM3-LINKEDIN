import { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'

// logo azienda con iniziali Bootstrap — nessuna API esterna
const CompanyLogo = ({ initials, bg }) => (
  <div
    className="rounded-2 d-flex align-items-center justify-content-center text-white fw-bold flex-shrink-0"
    style={{ width: 52, height: 52, backgroundColor: bg, fontSize: '0.95rem' }}
  >
    {initials}
  </div>
)

// dati di esempio esperienza
const MOCK_EXPERIENCE = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Tech Solutions SRL',
    type: 'A tempo pieno',
    start: 'gen 2023',
    end: 'Presente',
    location: 'Milano, Italia · In presenza',
    description: "Sviluppo di interfacce utente con React e Bootstrap.",
    initials: 'TS',
    bg: '#0077B5',
  },
  {
    id: 2,
    role: 'Junior Web Developer',
    company: 'Digital Agency',
    type: 'Stage',
    start: 'giu 2022',
    end: 'dic 2022',
    location: 'Roma, Italia · In presenza',
    description: 'Realizzazione di siti web per clienti aziendali usando HTML, CSS e JavaScript.',
    initials: 'DA',
    bg: '#E44D26',
  },
]

const ExperienceItem = ({ exp }) => {
  const [expanded, setExpanded] = useState(false)
  const MAX = 130
  const isLong = exp.description.length > MAX
  const text = expanded || !isLong ? exp.description : exp.description.slice(0, MAX) + '...'

  return (
    <div className="d-flex gap-3 pb-4 border-bottom">

      {/* logo azienda */}
      <CompanyLogo initials={exp.initials} bg={exp.bg} />

      {/* dettagli */}
      <div className="flex-grow-1">
        <p className="fw-bold mb-0">{exp.role}</p>
        <p className="mb-0 small">
          {exp.company} · {exp.type}
        </p>
        <p className="text-muted small mb-0">
          {exp.start} – {exp.end}
        </p>
        <p className="text-muted small mb-1">{exp.location}</p>

        <p className="small mb-0">{text}</p>
        {isLong && (
          <Button
            variant="link"
            className="p-0 small text-decoration-none fw-semibold"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Mostra meno' : 'Visualizza altro'}
          </Button>
        )}
      </div>

      {/* bottone modifica */}
      <Button variant="light" className="rounded-circle border-0 p-2 align-self-start flex-shrink-0">
        <i className="bi bi-pencil"></i>
      </Button>
    </div>
  )
}

const ProfileExperience = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Card className="rounded-4 shadow-sm border-0 mt-3">
        <Card.Body className="p-4">

          {/* intestazione */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="fw-bold mb-0">Esperienza</h5>
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

          {/* lista esperienze */}
          <div className="d-flex flex-column gap-4">
            {MOCK_EXPERIENCE.map((exp) => (
              <ExperienceItem key={exp.id} exp={exp} />
            ))}
          </div>

          {/* link visualizza tutto */}
          <Button
            variant="link"
            className="p-0 mt-2 text-decoration-none fw-semibold"
          >
            Visualizza tutte le esperienze
            <i className="bi bi-chevron-right ms-1"></i>
          </Button>

        </Card.Body>
      </Card>

      {/* AGGIUNGI ESPERIENZA */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Aggiungi esperienza</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="small text-muted">* Indica che è obbligatorio</p>

          <div className="mb-3">
            <label className="form-label">Titolo*</label>
            <input type="text" className="form-control" placeholder="Es. Frontend Developer" />
          </div>

          <div className="mb-3">
            <label className="form-label">Tipo di impiego</label>
            <select className="form-select">
              <option>A tempo pieno</option>
              <option>Part-time</option>
              <option>Autonomo</option>
              <option>Libero professionista</option>
              <option>Stage</option>
              <option>Apprendistato</option>
              <option>Stagionale</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Azienda*</label>
            <input type="text" className="form-control" placeholder="Es. Google" />
          </div>

          <div className="mb-3">
            <label className="form-label">Sede</label>
            <input type="text" className="form-control" placeholder="Es. Milano, Italia" />
          </div>

          <div className="row g-3 mb-3">
            <div className="col">
              <label className="form-label">Data inizio*</label>
              <input type="month" className="form-control" />
            </div>
            <div className="col">
              <label className="form-label">Data fine</label>
              <input type="month" className="form-control" />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Descrizione</label>
            <textarea className="form-control" rows={4} placeholder="Descrivi il tuo ruolo..." />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Annulla</Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>Salva</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProfileExperience
