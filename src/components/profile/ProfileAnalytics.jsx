import { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

const ProfileAnalytics = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card className="rounded-4 shadow-sm border-0 mt-3">
      <Card.Body className="p-4">

        {/* intestazione */}
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <h5 className="fw-bold mb-0">Analisi del profilo</h5>
            <span className="text-muted small">
              <i className="bi bi-eye me-1"></i>
              Visibile solo a te
            </span>
          </div>
        </div>

        {/* metriche */}
        <div className="d-flex flex-column gap-3">

          {/* visualizzazioni profilo */}
          <div className="d-flex align-items-start gap-3" style={{ cursor: 'pointer' }}>
            <i className="bi bi-person-lines-fill fs-4 text-muted"></i>
            <div>
              <p className="mb-0 fw-semibold">47 visualizzazioni del profilo</p>
              <p className="mb-0 text-muted small">
                Scopri chi ha visitato il tuo profilo.
              </p>
            </div>
          </div>

          {/* impressioni post */}
          <div className="d-flex align-items-start gap-3" style={{ cursor: 'pointer' }}>
            <i className="bi bi-bar-chart-fill fs-4 text-muted"></i>
            <div>
              <p className="mb-0 fw-semibold">128 impressioni dei post</p>
              <p className="mb-0 text-muted small">
                Inizia un post per aumentare le tue impressioni.
              </p>
            </div>
          </div>

          {/* risultati di ricerca */}
          <div className="d-flex align-items-start gap-3" style={{ cursor: 'pointer' }}>
            <i className="bi bi-search fs-4 text-muted"></i>
            <div>
              <p className="mb-0 fw-semibold">12 apparizioni nei risultati di ricerca</p>
              <p className="mb-0 text-muted small">
                Vedi le parole chiave usate per trovarti.
              </p>
            </div>
          </div>

          {/* follower */}
          {expanded && (
            <div className="d-flex align-items-start gap-3" style={{ cursor: 'pointer' }}>
              <i className="bi bi-people-fill fs-4 text-muted"></i>
              <div>
                <p className="mb-0 fw-semibold">23 nuovi follower</p>
                <p className="mb-0 text-muted small">
                  Scopri chi ti segue.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* link visualizza tutto */}
        <Button
          variant="link"
          className="p-0 mt-3 text-decoration-none fw-semibold"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Mostra meno' : 'Visualizza tutte le analisi'}
          <i className={`bi ms-1 ${expanded ? 'bi-chevron-up' : 'bi-chevron-right'}`}></i>
        </Button>

      </Card.Body>
    </Card>
  )
}

export default ProfileAnalytics
