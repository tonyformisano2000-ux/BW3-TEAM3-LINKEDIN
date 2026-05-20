import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../../redux/Actions/index";
import { Col, Container, Row } from "react-bootstrap";

import CreaUnPost from "./CreaUnPost";
import SidebarDx from "./SidebarDx";
import SidebarSx from "./SidebarSx";
import HomepagePosts from "./HomepagePosts";
import { TOKEN } from "../../auth/auth";

const HomePage = () => {
  const dispatch = useDispatch();

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        },
      );

      const data = await response.json();

      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getMyProfile());
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchPosts();
  }, [dispatch]);

  return (
    <Container fluid className="my-3">
      <Row>
        <Col xs={12} lg={3}>
          <SidebarSx />
        </Col>

        <Col xs={12} lg={6}>
          <CreaUnPost onPostCreated={fetchPosts} />

          <HomepagePosts posts={posts} />
        </Col>

        <Col xs={12} lg={3}>
          <SidebarDx />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
