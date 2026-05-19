import { Container } from "react-bootstrap";
import CreaUnPost from "./CreaUnPost";
import HomepagePosts from "./HomepagePosts";

const PorzioneCentrale = () => {
  return (
    <Container>
      <CreaUnPost />
      <HomepagePosts />
    </Container>
  );
};
export default PorzioneCentrale;
