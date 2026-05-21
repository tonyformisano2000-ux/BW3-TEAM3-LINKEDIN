import { Button, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  ChatText,
  ChatTextFill,
  HandThumbsUp,
  HandThumbsUpFill,
  Send,
  Share,
} from "react-bootstrap-icons";
import CommentSection from "./CommentSection";

const SinglePost = ({ postElements }) => {
  const [commentOnOff, setCommentOnOff] = useState(false);
  const user = postElements?.user;

  // stato immagine profilo  - martina
  const [profileImage, setProfileImage] = useState("");

  // recupero immagine salvata nel localStorage
  useEffect(() => {
    if (!user?._id) return;

    const savedProfileImage = localStorage.getItem(`profile-image-${user._id}`);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProfileImage(
      savedProfileImage || user?._image || "https://placecats.com/200/200",
    );
  }, [user]);

  useEffect(() => {
    CommentSection;
  }, []);

  return (
    <>
      // immagine profilo
      <Row className="align-items-start mb-3 p-3 bg-white rounded-2 shadow-sm">
        <img
          className="col-1 rounded-circle"
          style={{ height: "50px", width: "50px" }}
          src={profileImage || null}
          alt="user"
        />

        <div className="col-11">
          {/* info user */}
          <Row>
            <h6 className="mb-0 fw-bold">
              {user?.name} {user?.surname}
            </h6>
          </Row>

          <Row>
            <small className="text-muted">
              {user?.title} • {user?.area}
            </small>
          </Row>
          {/* contenuto text del post */}
          <Row className="mt-2">
            <p className="mb-2">{postElements?.text}</p>
          </Row>
          {/* contenuto img del post */}
          {postElements?.image && (
            <Row>
              <div className="d-flex justify-content-center m-0">
                <img
                  src={postElements.image}
                  alt="post"
                  className=" img-fluid overflow-hidden rounded-2 "
                />
              </div>
            </Row>
          )}
        </div>
        {/* indicatore dei likes e condivisioni */}
        <Row className="d-flex justify-content-between my-2 align-content-center">
          <div className="d-flex col-2">
            <HandThumbsUpFill className="me-1" />
            <small>numero</small>
          </div>
          <div className="col-5 d-flex justify-content-end ">
            <small>commenti</small>
            <small>• diffusioni </small>
          </div>
        </Row>
        <hr></hr>
        {/* barra bottoni d'interazione del post */}
        {/* Like */}
        <Row className="mt-2">
          <Button className="col-3 bg-white text-dark d-flex justify-content-center border-0 align-content-center">
            <HandThumbsUp className="fs-2" />
          </Button>
          {/* Commenta */}
          <Button
            className="col-3 bg-white text-dark d-flex justify-content-center border-0 align-content-center"
            onClick={() => setCommentOnOff(!commentOnOff)}
          >
            {commentOnOff ? (
              <ChatTextFill className="fs-2" />
            ) : (
              <ChatText className="fs-2" />
            )}
          </Button>{" "}
          {/* Condividi */}
          <Button className="col-3 bg-white text-dark d-flex justify-content-center border-0 align-content-center">
            <Share className="fs-2" />
          </Button>{" "}
          {/* Invia ad amico */}
          <Button className="col-3 bg-white text-dark d-flex justify-content-center border-0 align-content-center">
            <Send className="fs-2" />
          </Button>
        </Row>
      </Row>
      {commentOnOff && <CommentSection />}
    </>
  );
};

export default SinglePost;
