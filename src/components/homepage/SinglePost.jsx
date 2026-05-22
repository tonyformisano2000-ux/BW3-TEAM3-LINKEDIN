import { Col, Row, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ThumbsUp, MessageCircle, Share2, Send } from "lucide-react";

const SinglePost = ({ postElements }) => {
  const user = postElements?.user;

  const [commentModal, setCommentModal] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    // handle empty comment
    if (!comment.trim()) return;

    // hide modal
    setCommentModal(false);

    console.log("Submitting comment:", comment);

    // reset input
    setComment("");
  };

  useEffect(() => {
    if (!user?._id) return;

    const savedProfileImage = localStorage.getItem(`profile-image-${user._id}`);

    setProfileImage(
      savedProfileImage || user?._image || "https://placecats.com/200/200",
    );
  }, [user]);

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
                style={{
                  maxHeight: "500px",
                  objectFit: "cover",
                }}
              />
            </Col>
          </Row>
        )}

        {/* ACTIONS */}
        <Row className="my-3 text-center">
          {/* LIKE */}
          <Col
            className="cursor-pointer d-flex flex-column align-items-center"
            onClick={() => setIsLiked((prev) => !prev)}
          >
            <ThumbsUp
              size={22}
              color={isLiked ? "#0d6efd" : "black"} // Bootstrap primary blue
            />
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

        {/* COMMENT BOX */}
        {commentModal && (
          <Row>
            <Col xs={12} className="text-center">
              <form onSubmit={handleCommentSubmit}>
                <textarea
                  className="border-0 shadow-sm rounded-2 p-2"
                  style={{ width: "100%" }}
                  name="comment"
                  id={postElements._id}
                  placeholder="Type a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />

                <button type="submit" className="btn btn-primary mt-2">
                  Post
                </button>
              </form>
            </Col>
          </Row>
        )}
      </div>
    </Row>
  );
};

export default SinglePost;
