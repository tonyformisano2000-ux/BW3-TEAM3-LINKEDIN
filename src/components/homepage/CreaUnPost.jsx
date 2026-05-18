import { Row } from "react-bootstrap";
import { BlockquoteLeft, PlayBtnFill } from "react-bootstrap-icons";

const CreaUnPost = () => {
  return (
    <>
      <Row>
        <img className="rounded-circle m-1 col-1 img-fluid"></img>
        <input
          type="text"
          placeholder="Crea un post"
          className="p-1 border-1 border-dark-subtle text-dark-subtle rounded-2 col-10 text-decoration-none"
        ></input>
      </Row>
      <Row>
        <div className="rounded-2 col-4 bg-white d-flex justify-content-center">
          <PlayBtnFill className="text-success " />
          <p className="text-dark-subtle fw-bold ">Video</p>
        </div>
        <div className="rounded-2 col-4 bg-white d-flex justify-content-center">
          <Image className="text-primary " />
          <p className="text-dark-subtle fw-bold ">Foto</p>
        </div>
        <div className="rounded-2 col-4 bg-white d-flex justify-content-center">
          <BlockquoteLeft className=" text-warning " />
          <p className="text-dark-subtle fw-bold ">Scrivi un articolo</p>
        </div>
      </Row>
    </>
  );
};
export default CreaUnPost;
