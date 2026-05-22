import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ThumbsUp, Share2, Send } from "lucide-react";

import CommentsSection from "./CommentsSection";

const CURRENT_USER_ID = "me";

const SinglePost = ({ postElements, onLike }) => {
  const user = postElements?.user;
  const [showComments, setShowComments] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "https://placecats.com/200/200",
  );

  const isLiked = postElements.likes?.includes(CURRENT_USER_ID);

  useEffect(() => {
    if (!user?._id) return;

    const savedProfileImage = localStorage.getItem(`profile-image-${user._id}`);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProfileImage(
      savedProfileImage || user?._image || "https://placecats.com/200/200",
    );
  }, [user]);

  return (
    <Row className="mb-4">
      <div className="bg-white rounded-2 shadow-sm p-3">
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

        <Row>
          <Col>
            <p className="mb-2">{postElements?.text}</p>
          </Col>
        </Row>

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

        <Row className="my-3 text-center align-items-center">
          <Col
            className="cursor-pointer d-flex flex-column align-items-center"
            onClick={onLike}
          >
            <ThumbsUp size={22} color={isLiked ? "#0d6efd" : "black"} />

            <p
              className="fw-semibold m-0"
              style={{
                color: isLiked ? "#0d6efd" : "black",
              }}
            >
              Like
            </p>
          </Col>

          <CommentsSection
            postId={postElements._id}
            insideRow={true}
            showComments={showComments}
            setShowComments={setShowComments}
          />

          <Col className="cursor-pointer d-flex flex-column align-items-center">
            <Share2 size={22} />

            <p className="fw-semibold m-0">Share</p>
          </Col>

          <Col className="cursor-pointer d-flex flex-column align-items-center">
            <Send size={22} />

            <p className="fw-semibold m-0">Send</p>
          </Col>
        </Row>

        <CommentsSection
          postId={postElements._id}
          insideRow={false}
          showComments={showComments}
          setShowComments={setShowComments}
        />
      </div>
    </Row>
  );
};

export default SinglePost;
