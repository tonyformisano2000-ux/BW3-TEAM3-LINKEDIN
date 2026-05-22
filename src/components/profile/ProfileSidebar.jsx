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
  const [language, setLanguage] = useState("Italian");

  // slug URL dal nome profilo
  const profileSlug = profile
    ? `${profile.name}-${profile.surname}-${profile._id?.slice(-9) || "000000000"}`
        .toLowerCase()
        .replace(/\s+/g, "-")
    : "your-profile";

  const [customUrl, setCustomUrl] = useState(profileSlug);

  return (
    <div className="d-flex flex-column gap-3">
      {/* LINGUA DEL PROFILO */}
      <Card className="rounded-4 shadow-sm border-0">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="fw-bold mb-0">Profile language</h6>
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
            <h6 className="fw-bold mb-0">Public profile & URL</h6>
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
              <p className="fw-bold mb-1">Try Premium for free</p>
              <p className="small text-muted mb-3">
                Discover who viewed your profile, send direct messages
                and much more.
              </p>
              <Button
                variant="warning"
                size="sm"
                className="rounded-pill fw-semibold"
              >
                Try for €0
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* ALTRI PROFILI CONSULTATI */}
      <Card className="rounded-4 shadow-sm border-0">
        <Card.Body className="p-4">
          <h6 className="fw-bold mb-1">People also viewed</h6>
          <p className="text-muted small mb-3">Visible only to you</p>

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
      <div className="px-2 d-none d-lg-block">
        <div className="d-flex flex-wrap gap-2" style={{ fontSize: "0.72rem" }}>
          {[
            "About",
            "Accessibility",
            "Help Center",
            "Privacy",
            "Terms",
          ].map((link) => (
            <a key={link} href="#" className="text-muted text-decoration-none">
              {link}
            </a>
          ))}
        </div>
        <p className="text-muted mt-1" style={{ fontSize: "0.70rem" }}>
          LinkedIn &copy; {new Date().getFullYear()}
        </p>
      </div>

      <Modal
        show={showLangModal}
        onHide={() => setShowLangModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Profile language</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">Language</label>
            <select
              className="form-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="Italian">Italian</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLangModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShowLangModal(false)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showUrlModal} onHide={() => setShowUrlModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit public URL</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">Custom URL</label>
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
            Close
          </Button>
          <Button variant="primary" onClick={() => setShowUrlModal(false)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProfileSidebar;