import { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { TextCard } from "./TextCard";

// easter egg — pannello "scrivi nuovo messaggio"
const ComposePanel = ({ onClose }) => {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="position-fixed bottom-0 end-0 me-5 bg-white border border-black rounded-top-3 shadow p-3" style={{ width: 350, zIndex: 1000 }}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="fw-semibold" style={{ fontSize: 14 }}>Nuovo messaggio</span>
          <i className="bi bi-x-lg" role="button" onClick={onClose} />
        </div>
        <p className="text-muted text-center mt-4 mb-1" style={{ fontSize: 13 }}>Messaggio inviato.</p>
        <p className="text-secondary text-center" style={{ fontSize: 12 }}>
          Risposta stimata: mai.<br />
          Ma il tuo profilo e stato visto. Probabilmente.
        </p>
      </div>
    );
  }

  return (
    <div className="position-fixed bottom-0 end-0 me-5 bg-white border border-black rounded-top-3 shadow" style={{ width: 350, zIndex: 1000 }}>
      {/* header */}
      <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
        <span className="fw-semibold" style={{ fontSize: 14 }}>Nuovo messaggio</span>
        <i className="bi bi-x-lg" role="button" onClick={onClose} />
      </div>

      <div className="px-3 py-2">
        {/* campo A: */}
        <div className="border-bottom pb-2 mb-2">
          <input
            className="border-0 w-100 outline-none bg-transparent"
            placeholder="A: qualcuno che non ti rispondera"
            style={{ fontSize: 13, outline: "none" }}
          />
        </div>

        {/* corpo messaggio con testo */}
        <textarea
          className="w-100 border-0 bg-transparent"
          rows={5}
          defaultValue={"Ciao,\n\nti contatto per fare rete.\nNon so bene perche, ma LinkedIn mi ha detto di farlo.\n\nCordiali sinergie."}
          style={{ fontSize: 13, outline: "none", resize: "none" }}
        />
      </div>

      {/* footer */}
      <div className="d-flex justify-content-end px-3 pb-3">
        <button
          className="btn btn-primary btn-sm rounded-pill px-3"
          style={{ fontSize: 13 }}
          onClick={() => setSent(true)}
        >
          Invia
        </button>
      </div>
    </div>
  );
};

// easter egg — parodia breve dei cliche di LinkedIn, leggibili interi dall'anteprima
const FAKE_CHATS = [
  {
    name: "Giulia • Top Voice",
    time: "adesso",
    message: "Mi sono svegliata alle 5. Mindset.",
    color: "#b91c1c",
    unread: true,
  },
  {
    name: "Marco R. • Recruiter",
    time: "2h",
    message: "Stipendio competitivo. Non chiedere quanto.",
    color: "#0a66c2",
    unread: true,
  },
  {
    name: "Luca • CEO di se stesso",
    time: "5 min",
    message: "Ho perso il lavoro. Meglio cosi.",
    color: "#059669",
    unread: true,
  },
  {
    name: "Francesca • Open to Work",
    time: "ieri",
    message: "Uscita dalla comfort zone. Di nuovo.",
    color: "#7c3aed",
    unread: false,
  },
  {
    name: "Davide • Thought Leader",
    time: "3 giorni",
    message: "Ho fallito 7 volte. Sono un leader.",
    color: "#d97706",
    unread: false,
  },
  {
    name: "Sara • Passion Driven",
    time: "4h",
    message: "Cerco una missione, non uno stipendio.",
    color: "#e11d48",
    unread: false,
  },
  {
    name: "LinkedIn",
    time: "2 giorni",
    message: "Il tuo post ha raggiunto 4 persone.",
    color: "#6b7280",
    unread: false,
  },
];

export const Texting = ({ collapsed, setCollapsed }) => {
  const [composing, setComposing] = useState(false);

  return (
    <>
    <Container
      className="d-none d-lg-block position-fixed bottom-0 end-0 me-5 border border-bottom-0 border-black rounded-top-3 bg-light shadow"
      style={{
        width: "350px",
        height: collapsed ? "60px" : "75vh",
        transition: "height 0.3s ease",
        overflow: "hidden",
        zIndex: 999,
      }}
    >
      <Row>
        <Col>
          <section>
            <div className="d-flex justify-content-between align-items-center my-2">
              <div className="d-flex align-items-center">
                <i className="bi bi-person-circle fs-5 me-2"></i>
                <span className="fw-normal">Messages</span>
              </div>

              <div className="d-flex align-items-center">
                <i className="bi bi-three-dots fs-5 mx-2"></i>

                <i
                  className="bi bi-pencil-square fs-5 mx-2"
                  role="button"
                  onClick={() => { setComposing(true); setCollapsed(false); }}
                />

                <i
                  className={`bi ${
                    collapsed
                      ? "bi-chevron-compact-up"
                      : "bi-chevron-compact-down"
                  } fs-5 mx-2`}
                  role="button"
                  onClick={() => setCollapsed(!collapsed)}
                ></i>
              </div>
            </div>

            {!collapsed && (
              <div>
                <div>
                  <InputGroup
                    className="rounded-2 overflow-hidden"
                    style={{
                      width: "100%",
                      border: "1px solid #ccc",
                      backgroundColor: "#fff",
                    }}
                  >
                    <InputGroup.Text className="bg-white border-0">
                      <i className="bi bi-search text-secondary"></i>
                    </InputGroup.Text>

                    <Form.Control
                      type="text"
                      placeholder="Search messages"
                      className="border-0 shadow-none"
                    />

                    <InputGroup.Text className="bg-white border-0">
                      <i className="bi bi-sliders text-secondary"></i>
                    </InputGroup.Text>
                  </InputGroup>
                </div>
                <div>
                  {FAKE_CHATS.map((chat, i) => (
                    <TextCard key={i} {...chat} />
                  ))}
                </div>
              </div>
            )}
          </section>
        </Col>
      </Row>
    </Container>

      {/* pannello scrivi nuovo messaggio — easter egg */}
      {composing && <ComposePanel onClose={() => setComposing(false)} />}
    </>
  );
};
