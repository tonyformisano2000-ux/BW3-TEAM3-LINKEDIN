import { Container, Row } from "react-bootstrap";
import { BlockquoteLeft, PlayBtnFill, Image } from "react-bootstrap-icons";

const CreaUnPost = () => {
  return (
    <Container className="bg-white rounded-2 shadow-sm p-3 mb-2">
      <Row className="mt-2 mb-2">
        <img
          className="rounded-circle m-1 col-1 img-fluid"
          src="https://placecats.com/200/200"
        ></img>
        <input
          type="text"
          placeholder="Crea un post"
          className=" border-2 text-dark-subtle border-black border-opacity-75 rounded-5 col-10 fw-bold"
        ></input>
      </Row>
      <Row>
        <div className="border-box rounded-2 col-4 bg-white d-flex align-items-center justify-content-center my-2 p-1">
          <PlayBtnFill className="text-success fs-4 mx-1" />
          <p className="text-dark-subtle fw-bold fs-6 mb-0">Video</p>
        </div>
        <div className="border-box rounded-2 col-4 bg-white d-flex align-items-center justify-content-center my-2 p-1">
          <Image className="text-primary  fs-4 mx-1" />
          <p className="text-dark-subtle fw-bold fs-6 mb-0">Foto</p>
        </div>
        <div className=" border-box rounded-2 col-4 bg-white d-flex align-items-center justify-content-center my-2 p-1">
          <BlockquoteLeft className=" text-warning fs-4 mx-1" />
          <p className="text-dark-subtle fw-bold fs-6 mb-0">Scrivi articolo</p>
        </div>
      </Row>
    </Container>
  );
};
export default CreaUnPost;
