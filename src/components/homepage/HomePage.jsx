import { Col, Container, Row } from "react-bootstrap";
import CreaUnPost from "./CreaUnPost";
import SidebarDx from "./SidebarDx";
import SidebarSx from "./SidebarSx";

const HomePage = () => {
  return (
    <Container fluid className="my-3" style={{ backgroundColor: "#f3f2ef" }}>
      <Row>
        <Col xs={12} lg={3}>
          <SidebarSx />
        </Col>

        <Col xs={12} lg={6}>
          <CreaUnPost />
        </Col>
        <Col xs={12} lg={3}>
          <SidebarDx />
        </Col>
      </Row>
    </Container>
  );
};
export default HomePage;
