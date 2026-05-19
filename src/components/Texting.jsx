import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { TextCard } from "./TextCard";

export const Texting = ({ collapsed, setCollapsed }) => {
  return (
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

                <i className="bi bi-pencil-square fs-5 mx-2"></i>

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
                  <TextCard />
                  <TextCard />
                  <TextCard />
                  <TextCard />
                  <TextCard />
                  <TextCard />
                  <TextCard />
                </div>
              </div>
            )}
          </section>
        </Col>
      </Row>
    </Container>
  );
};
