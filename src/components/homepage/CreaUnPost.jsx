import { Row } from "react-bootstrap";
import { BlockquoteLeft, PlayBtnFill, Image } from "react-bootstrap-icons";

const CreaUnPost = () => {
  return (
    <Row className="align-items-center mb-3 p-3 bg-white rounded-2 shadow-sm">
      <div className="col-11">
        <Row className="mb-3">
          <div className="d-flex">
            <img
              className="col-1 rounded-circle img-fluid me-3"
              src="https://placecats.com/200/200"
              alt="user"
            />
            <input
              type="text"
              placeholder="Crea un post"
              className="form-control rounded-pill fw-bold py-2"
            />
          </div>
        </Row>

        <Row className="text-center">
          <div className="col-4 d-flex justify-content-center align-items-center">
            <PlayBtnFill className="text-success fs-4 me-2" />
            <span className="fw-bold text-muted">Video</span>
          </div>

          <div className="col-4 d-flex justify-content-center align-items-center">
            <Image className="text-primary fs-4 me-2" />
            <span className="fw-bold text-muted">Foto</span>
          </div>

          <div className="col-4 d-flex justify-content-center align-items-center">
            <BlockquoteLeft className="text-warning fs-4 me-2" />
            <span className="fw-bold text-muted">Scrivi articolo</span>
          </div>
        </Row>
      </div>
    </Row>
  );
};

export default CreaUnPost;
