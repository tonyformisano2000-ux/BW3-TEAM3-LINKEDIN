import { Row } from "react-bootstrap";
import { BlockquoteLeft, PlayBtnFill, Image } from "react-bootstrap-icons";

const CreaUnPost = () => {
  return (
    <>
      <Row className="mt-3">
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
        <div className="rounded-2 col-4 bg-white d-flex justify-content-center my-2">
          <PlayBtnFill className="text-success fs-4 mx-1" />
          <p className="text-dark-subtle fw-bold fs-6">Video</p>
        </div>
        <div className="rounded-2 col-4 bg-white d-flex justify-content-center my-2">
          <Image className="text-primary  fs-4 mx-1" />
          <p className="text-dark-subtle fw-bold fs-6">Foto</p>
        </div>
        <div className="rounded-2 col-4 bg-white d-flex justify-content-center my-2">
          <BlockquoteLeft className=" text-warning fs-4 mx-1" />
          <p className="text-dark-subtle fw-bold fs-6">Scrivi un articolo</p>
        </div>
      </Row>
    </>
  );
};
export default CreaUnPost;
