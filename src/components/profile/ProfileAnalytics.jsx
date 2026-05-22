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
            <h5 className="fw-bold mb-0">Analytics</h5>
            <span className="text-muted small">
              <i className="bi bi-eye me-1"></i>
              Private to you
            </span>
          </div>
        </div>

        {/* metriche */}
        <div className="d-flex flex-column gap-3">

          {/* visualizzazioni profilo */}
          <div className="d-flex align-items-start gap-3" style={{ cursor: 'pointer' }}>
            <i className="bi bi-person-lines-fill fs-4 text-muted"></i>
            <div>
              <p className="mb-0 fw-semibold">47 profile views</p>
              <p className="mb-0 text-muted small">
                Discover who viewed your profile.
              </p>
            </div>
          </div>

          {/* impressioni post */}
          <div className="d-flex align-items-start gap-3" style={{ cursor: 'pointer' }}>
            <i className="bi bi-bar-chart-fill fs-4 text-muted"></i>
            <div>
              <p className="mb-0 fw-semibold">128 post impressions</p>
              <p className="mb-0 text-muted small">
                Start a post to increase your impressions.
              </p>
            </div>
          </div>

          {/* risultati di ricerca */}
          <div className="d-flex align-items-start gap-3" style={{ cursor: 'pointer' }}>
            <i className="bi bi-search fs-4 text-muted"></i>
            <div>
              <p className="mb-0 fw-semibold">12 search appearances</p>
              <p className="mb-0 text-muted small">
                See the keywords used to find you.
              </p>
            </div>
          </div>

          {/* follower */}
          {expanded && (
            <div className="d-flex align-items-start gap-3" style={{ cursor: 'pointer' }}>
              <i className="bi bi-people-fill fs-4 text-muted"></i>
              <div>
                <p className="mb-0 fw-semibold">23 new followers</p>
                <p className="mb-0 text-muted small">
                  Discover who follows you.
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
          {expanded ? 'Show less' : 'Show all analytics'}
          <i className={`bi ms-1 ${expanded ? 'bi-chevron-up' : 'bi-chevron-right'}`}></i>
        </Button>

      </Card.Body>
    </Card>
  )
}

export default ProfileAnalytics