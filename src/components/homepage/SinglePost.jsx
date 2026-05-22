import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ThumbsUp, MessageCircle, Share2, Send } from "lucide-react";

const CURRENT_USER_ID = "me";

const SinglePost = ({ postElements, onLike, onComment }) => {
  const user = postElements?.user;

  const [profileImage, setProfileImage] = useState(
    "https://placecats.com/200/200",
  );
  const [commentModal, setCommentModal] = useState(false);
  const [comment, setComment] = useState("");

  const isLiked = postElements.likes?.includes(CURRENT_USER_ID);

  useEffect(() => {
    if (!user?._id) return;
    const savedProfileImage = localStorage.getItem(`profile-image-${user._id}`);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProfileImage(
      savedProfileImage || user?._image || "https://placecats.com/200/200",
    );
  }, [user]);

  const handleCommentSubmit = () => {
    if (!comment.trim()) return;
    onComment(comment, user?.name ?? "Anonymous");
    setComment("");
    setCommentModal(false);
  };

  return (
    <Row className="mb-4">
      <div className="bg-white rounded-2 shadow-sm p-3">
        {/* USER */}
        <Row className="align-items-center mb-3">
          <Col xs="auto">
            <img
              src={profileImage}
              alt="user"
              style={{
                borderRadius: "50%",
                height: "50px",
                width: "50px",
                objectFit: "cover",
              }}
            />
          </Col>
          <Col className="d-flex flex-column">
            <h6 className="mb-0 fw-bold">
              {user?.name} {user?.surname}
            </h6>
            <small className="text-muted">
              {user?.title} • {user?.area}
            </small>
          </Col>
        </Row>

        {/* POST TEXT */}
        <Row>
          <Col>
            <p className="mb-2">{postElements?.text}</p>
          </Col>
        </Row>

        {/* POST IMAGE */}
        {postElements?.image && (
          <Row className="mt-2 mb-4">
            <Col>
              <img
                src={postElements.image}
                alt="post"
                className="img-fluid rounded-3 w-100"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
            </Col>
          </Row>
        )}

        {/* ACTIONS */}
        <Row className="my-3 text-center">
          {/* LIKE */}
          <Col
            className="cursor-pointer d-flex flex-column align-items-center"
            onClick={onLike}
          >
            <ThumbsUp size={22} color={isLiked ? "#0d6efd" : "black"} />
            <p
              className="fw-semibold m-0"
              style={{ color: isLiked ? "#0d6efd" : "black" }}
            >
              Like
            </p>
          </Col>

          {/* COMMENT */}
          <Col
            className="cursor-pointer d-flex flex-column align-items-center"
            onClick={() => setCommentModal((prev) => !prev)}
          >
            <MessageCircle size={22} />
            <p className="fw-semibold m-0">Comment</p>
          </Col>

          {/* SHARE */}
          <Col className="cursor-pointer d-flex flex-column align-items-center">
            <Share2 size={22} />
            <p className="fw-semibold m-0">Share</p>
          </Col>

          {/* SEND */}
          <Col className="cursor-pointer d-flex flex-column align-items-center">
            <Send size={22} />
            <p className="fw-semibold m-0">Send</p>
          </Col>
        </Row>

        {/* EXISTING COMMENTS */}
        {postElements.comments?.length > 0 && (
          <Row className="mb-2">
            <Col>
              {postElements.comments.map((c, i) => (
                <div key={i} className="bg-light rounded-2 px-3 py-2 mb-1">
                  <strong>Default_User</strong>
                  <span className="ms-2">{c.text}</span>
                </div>
              ))}
            </Col>
          </Row>
        )}

        {/* COMMENT INPUT */}
        {commentModal && (
          <Row>
            <Col className="d-flex gap-2 align-items-center">
              <textarea
                className="border-0 shadow-sm rounded-2 p-2 flex-grow-1"
                style={{ resize: "none", height: "42px" }}
                id={postElements._id}
                placeholder="Type a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button className="btn btn-primary" onClick={handleCommentSubmit}>
                Post
              </button>
            </Col>
          </Row>
        )}
      </div>
    </Row>
  );
};

export default SinglePost;
