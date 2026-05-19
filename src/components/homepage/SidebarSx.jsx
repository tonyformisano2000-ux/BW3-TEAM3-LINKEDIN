import { Container, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const SidebarSx = () => {
  const profile = useSelector((state) => state.profile);

  if (!profile) {
    return (
      <div className="d-flex justify-content-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const profileImage = profile.image || "https://via.placeholder.com/160";

  return (
    <Container fluid className="px-0">
      <Row>
        <Col xs={12} className="mb-2">
          {/* card principale */}
          <Card className="overflow-hidden rounded-2 shadow-sm border-0 p-2">
            {/* banner/copertina */}
            <div
              className="position-relative bg-secondary-subtle"
              style={{
                height: "100px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* corpo card */}
            <Card.Body className="position-relative pt-5 px-2 pb-2">
              {/* immagine profilo */}
              <img
                src={profileImage}
                alt={`${profile.name} ${profile.surname}`}
                className="rounded-circle border border-4 border-white position-absolute"
                style={{
                  width: "130px",
                  height: "130px",
                  objectFit: "cover",

                  // sovrapposta alla copertina
                  top: "-85px",
                  left: "45px",
                }}
              />

              {/* spazio sopra per la foto */}
              <div style={{ height: "30px" }}></div>

              <div className="d-flex align-items-center gap-2 flex-wrap">
                <h3
                  className="mb-2 fw-bold"
                  style={{ textTransform: "capitalize" }}
                >
                  {profile.name} {profile.surname}
                </h3>
              </div>

              <p className="mb-2 small">{profile.title || "--"}</p>

              <p className="text-muted small mb-0">
                {profile.area || "Lamezia Terme, Calabria, Italia"}
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} className="mb-2">
          <Card className="overflow-hidden rounded-2 shadow-sm border-0 p-2">
            <div className=" d-flex flex-column mx-1">
              <small className="text-secondary">
                Accedi a strumenti e informazioni in esclusiva
              </small>
              <small className="text-black fw-semibold">
                Prova Premium per 0€
              </small>
            </div>
          </Card>
        </Col>
        <Col xs={12} className="mb-2">
          <Card className=" overflow-hidden rounded-2 shadow-sm border-0 p-2">
            <div className="d-flex justify-content-between mx-1">
              <div className="d-flex flex-column">
                <small className="text-black fw-semibold">Collegamenti</small>
                <small className="text-secondary">Amplia la tua rete</small>
              </div>
              <div>
                <small className="text-primary fw-semibold cursor-pointer">
                  0
                </small>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={12} className="mb-2">
          <Card className="overflow-hidden rounded-2 shadow-sm border-0 p-2">
            <div className="d-flex align-items-center justify-content-start p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bookmark-fill me-2"
                viewBox="0 0 16 16"
              >
                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
              </svg>
              <small className="text-black fw-semibold cursor-pointer">
                Elementi salvati
              </small>
            </div>
            <div className="d-flex align-items-center justify-content-start p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-people-fill me-2"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
              </svg>
              <small className="text-black fw-semibold cursor-pointer">
                Gruppi
              </small>
            </div>
            <div className="d-flex align-items-center justify-content-start p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-newspaper me-2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
              </svg>
              <small className="text-black fw-semibold cursor-pointer">
                Newsletter
              </small>
            </div>
            <div className="d-flex align-items-center justify-content-start p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-calendar-fill me-2"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5" />
              </svg>
              <small className="text-black fw-semibold cursor-pointer">
                Eventi
              </small>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SidebarSx;
