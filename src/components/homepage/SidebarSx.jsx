import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Button from "react-bootstrap";

const SidebarSx = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <Container>
      <Row>
        <Col xs={12} className="mb-2">
          {/* card principale */}
          <Card className="overflow-hidden rounded-4 shadow-sm border-0">
            {/* banner/copertina */}
            <div
              className="position-relative"
              style={{
                height: "100px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* bottone modifica copertina */}
              <Button
                variant="light"
                size="sm"
                className="rounded-circle position-absolute top-0 end-0 m-3"
                onClick={() => setShowCoverModal(true)}
              >
                <i className="bi bi-camera-fill"></i>
              </Button>
            </div>

            {/* corpo card */}
            <Card.Body className="position-relative pt-5 px-4 pb-4">
              {/* bottone modifica profilo */}
              <Button
                variant="light"
                className="rounded-circle position-absolute top-0 end-0 m-3 border-0"
                onClick={() => setShowEditModal(true)}
              >
                <i className="bi bi-pencil"></i>
              </Button>

              {/* immagine profilo */}
              <img
                src={profileImage}
                alt={`${profile.name} ${profile.surname}`}
                className="rounded-circle border border-4 border-white position-absolute"
                style={{
                  width: "160px",
                  height: "160px",
                  objectFit: "cover",

                  // sovrapposta alla copertina
                  top: "-100px",
                  left: "32px",
                }}
              />

              {/* spazio sopra per la foto */}
              <div style={{ height: "30px" }}></div>

              {/* nome */}
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <h2 className="mb-0 fw-bold">
                  {profile.name} {profile.surname}
                </h2>
              </div>

              {/* titolo */}
              <p className="mb-2">{profile.title || "--"}</p>

              {/* area + contatti */}
              <p className="text-muted mb-4">
                {profile.area || "Lamezia Terme, Calabria, Italia"}
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12}>
          <div className="card"></div>
        </Col>
        <Col xs={12}>
          <div className="card"></div>
        </Col>
        <Col xs={12}>
          <div className="card"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default SidebarSx;
