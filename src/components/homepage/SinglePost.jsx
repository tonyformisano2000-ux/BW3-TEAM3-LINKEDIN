import { Row } from "react-bootstrap";
import CommentsSection from "./CommentsSection";
import { useEffect, useState } from "react";

const SinglePost = ({ postElements }) => {
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

  return (
    <Row className="align-items-start mb-3 p-3 bg-white rounded-2 shadow-sm">
      <img
        className="col-1"
        style={{ borderRadius: "100%", height: "50px" }}
        src={profileImage || null}
        alt="user"
      />

      <div className="col-11">
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

        <Row className="mt-2">
          <p className="mb-2">{postElements?.text}</p>
        </Row>

        {postElements?.image && (
          <Row>
            <img
              src={postElements.image}
              alt="post"
              className="img-fluid rounded-3"
              style={{ height: "70%", width: "70%" }}
            />
          </Row>
        )}
        <CommentsSection postId={postElements._id} />
      </div>
    </Row>
  );
};

export default SinglePost;
