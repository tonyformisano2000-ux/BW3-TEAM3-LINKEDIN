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
          <Card className="overflow-hidden rounded-4 shadow-sm border-0">
            <div
              className="position-relative bg-secondary-subtle"
              style={{
                height: "100px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <Card.Body className="position-relative pt-5 px-4 pb-4">
              <img
                src={profileImage}
                alt={`${profile.name} ${profile.surname}`}
                className="rounded-circle border border-4 border-white position-absolute"
                style={{
                  width: "90px",
                  height: "90px",
                  objectFit: "cover",
                  top: "-45px",
                  left: "24px",
                }}
              />

              <div style={{ height: "20px" }}></div>

              <div className="d-flex align-items-center gap-2 flex-wrap">
                <h5 className="mb-0 fw-bold">
                  {profile.name} {profile.surname}
                </h5>
              </div>

              <p className="mb-2 small">{profile.title || "--"}</p>

              <p className="text-muted small mb-0">
                {profile.area || "Lamezia Terme, Calabria, Italia"}
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} className="mb-2">
          <Card className="rounded-4 shadow-sm border-0 p-3">
            <p className="mb-0 fw-semibold small">Connections</p>

            <small className="text-muted">Grow your network</small>
          </Card>
        </Col>

        <Col xs={12} className="mb-2">
          <Card className="rounded-4 shadow-sm border-0 p-3">
            <p className="mb-0 fw-semibold small">Premium</p>

            <small className="text-muted">Try Premium for 0€</small>
          </Card>
        </Col>

        <Col xs={12}>
          <Card className="rounded-4 shadow-sm border-0 p-3">
            <p className="mb-0 fw-semibold small">Saved Items</p>

            <small className="text-muted">
              Keep track of your jobs and posts
            </small>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SidebarSx;
