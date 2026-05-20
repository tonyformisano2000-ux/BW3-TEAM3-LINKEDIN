import { Row } from "react-bootstrap";
import {
  BlockquoteLeft,
  PlayBtnFill,
  Image,
} from "react-bootstrap-icons";
import { useState } from "react";
import CreatePostModal from "./CreatePostModal";

const CreaUnPost = ({ onPostCreated }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Row className="align-items-center mb-3 p-3 bg-white rounded-2 shadow-sm">
        <div className="col-12">
          <Row className="mb-3">
            <div className="d-flex align-items-center">
              <img
                className="rounded-circle img-fluid me-3"
                src="https://placecats.com/200/200"
                alt="user"
                style={{
                  width: "52px",
                  height: "52px",
                  objectFit: "cover",
                }}
              />

              <button
                onClick={() => setShowModal(true)}
                className="form-control text-start rounded-pill fw-bold py-2 px-4 bg-white border"
                style={{
                  height: "48px",
                  color: "#666",
                }}
              >
                Start a post
              </button>
            </div>
          </Row>

          <Row className="text-center">
            <div className="col-4 d-flex justify-content-center align-items-center post-action">
              <PlayBtnFill className="text-success fs-4 me-2" />
              <span className="fw-bold text-muted">Video</span>
            </div>

            <div
              className="col-4 d-flex justify-content-center align-items-center post-action"
              onClick={() => setShowModal(true)}
            >
              <Image className="text-primary fs-4 me-2" />
              <span className="fw-bold text-muted">Photo</span>
            </div>

            <div className="col-4 d-flex justify-content-center align-items-center post-action">
              <BlockquoteLeft className="text-warning fs-4 me-2" />
              <span className="fw-bold text-muted">Write article</span>
            </div>
          </Row>
        </div>
      </Row>

      <CreatePostModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        onPostCreated={onPostCreated}
      />
    </>
  );
};

export default CreaUnPost;