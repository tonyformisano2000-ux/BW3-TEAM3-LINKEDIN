import { Container } from "react-bootstrap";
import CreaUnPost from "./CreaUnPost";
import SidebarDx from "../SidebarDx";

const PorzioneCentrale = () => {
  return (
    <Container>
      <CreaUnPost className="p-1" />
      <SidebarDx />
    </Container>
  );
};
export default PorzioneCentrale;
