import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../../redux/Actions/index";
import { Col, Container, Row } from "react-bootstrap";
import CreaUnPost from "./CreaUnPost";
import SidebarDx from "./SidebarDx";
import SidebarSx from "./SidebarSx";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyProfile());
  }, [dispatch]);

  return (
    <Container fluid className="my-3">
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
