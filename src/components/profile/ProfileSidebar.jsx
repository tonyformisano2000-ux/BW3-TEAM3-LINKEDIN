import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

// avatar con iniziali Bootstrap
const Avatar = ({ initials, bg, size = 48 }) => (
  <div
    className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold flex-shrink-0"
    style={{
      width: size,
      height: size,
      backgroundColor: bg,
      fontSize: size * 0.3,
    }}
  >
    {initials}
  </div>
);

// profili recentemente consultati 
const RECENT_PROFILES = [
  {
    id: 1,
    name: "Giulia Rossi",
    title: "UX Designer @ air SRL",
    initials: "GR",
    bg: "#FF7043",
  },
  {
    id: 2,
    name: "Marco Bianchi",
    title: "Backend Developer @ Amazon",
    initials: "MB",
    bg: "#42A5F5",
  },
  {
    id: 3,
    name: "Sara Ferrari",
    title: "Product Manager @ Spotify",
    initials: "SF",
    bg: "#66BB6A",
  },
];

const ProfileSidebar = ({ profile }) => {
  const [showLangModal, setShowLangModal] = useState(false);
  const [showUrlModal, setShowUrlModal] = useState(false);
  const [language, setLanguage] = useState("Italiano");

  // slug URL dal nome profilo
  const profileSlug = profile
    ? `${profile.name}-${profile.surname}-${profile._id?.slice(-9) || "000000000"}`
        .toLowerCase()
        .replace(/\s+/g, "-")
    : "il-tuo-profilo";

  const [customUrl, setCustomUrl] = useState(profileSlug);

  return (
    <div className="d-flex flex-column gap-3">
      {/* LINGUA DEL PROFILO */}
      <Card className="rounded-4 shadow-sm border-0">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="fw-bold mb-0">Lingua del profilo</h6>
            <Button
              variant="light"
              className="rounded-circle border-0 p-1"
              onClick={() => setShowLangModal(true)}
            >
              <i className="bi bi-pencil"></i>
            </Button>
          </div>

          <p className="text-muted mb-0">{language}</p>

          <hr />

          {/* PROFILO PUBBLICO E URL */}
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="fw-bold mb-0">Profilo pubblico e URL</h6>
            <Button
              variant="light"
              className="rounded-circle border-0 p-1"
              onClick={() => setShowUrlModal(true)}
            >
              <i className="bi bi-pencil"></i>
            </Button>
          </div>

          <p
            className="text-muted mb-0"
            style={{ fontSize: "0.85rem", wordBreak: "break-all" }}
          >
            www.linkedin.com/in/{customUrl}
          </p>
        </Card.Body>
      </Card>

      {/* CARD PREMIUM */}
      <Card className="rounded-4 shadow-sm border-0 bg-warning bg-opacity-10">
        <Card.Body className="p-4">
          <div className="d-flex gap-2 align-items-start">
            <i className="bi bi-patch-check-fill text-warning fs-4"></i>
            <div>
              <p className="fw-bold mb-1">Prova Premium gratuitamente</p>
              <p className="small text-muted mb-3">
                Scopri chi ha visualizzato il tuo profilo, invia messaggi
                diretti e molto altro.
              </p>
              <Button
                variant="warning"
                size="sm"
                className="rounded-pill fw-semibold"
              >
                Prova per 0 €
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* ALTRI PROFILI CONSULTATI */}
      <Card className="rounded-4 shadow-sm border-0">
        <Card.Body className="p-4">
          <h6 className="fw-bold mb-1">Altri profili consultati</h6>
          <p className="text-muted small mb-3">Visibile solo a te</p>

          <div className="d-flex flex-column gap-3">
            {RECENT_PROFILES.map((person) => (
              <div key={person.id} className="d-flex align-items-center gap-3">
                <Avatar initials={person.initials} bg={person.bg} size={48} />

                <div className="flex-grow-1 overflow-hidden">
                  <p className="fw-semibold mb-0 small">{person.name}</p>
                  <p
                    className="text-muted mb-0 text-truncate"
                    style={{ fontSize: "0.78rem" }}
                  >
                    {person.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>

      {/* FOOTER SIDEBAR */}
      <div className="px-2">
        <div className="d-flex flex-wrap gap-2" style={{ fontSize: "0.72rem" }}>
          {[
            "Informazioni",
            "Accessibilità",
            "Centro assistenza",
            "Privacy",
            "Termini",
          ].map((link) => (
            <a key={link} href="#" className="text-muted text-decoration-none">
              {link}
            </a>
          ))}
        </div>
        <p className="text-muted mt-1" style={{ fontSize: "0.70rem" }}>
          LinkedIn © {new Date().getFullYear()}
        </p>
      </div>

      <Modal
        show={showLangModal}
        onHide={() => setShowLangModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Lingua del profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">Lingua</label>
            <select
              className="form-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="Italiano">Italiano</option>
              <option value="Inglese">Inglese</option>
              <option value="Spagnolo">Spagnolo</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLangModal(false)}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={() => setShowLangModal(false)}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showUrlModal} onHide={() => setShowUrlModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modifica URL pubblico</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">URL personalizzato</label>
            <input
              type="text"
              className="form-control"
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowUrlModal(false)}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={() => setShowUrlModal(false)}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProfileSidebar;
