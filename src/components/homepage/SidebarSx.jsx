import { Container, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const SidebarSx = () => {
  const profile = useSelector((state) => state.profile);
  if (!profile) return null;
  const profileImage = profile?.image || "https://via.placeholder.com/160";

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
            ></div>

            {/* corpo card */}
            <Card.Body className="position-relative pt-5 px-4 pb-4">
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
