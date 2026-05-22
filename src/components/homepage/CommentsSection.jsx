import { useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { MessageCircle } from "lucide-react";

const COMMENTS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWY5ZmQ2NDU0YTMxNTAwMTU1OGIxYzUiLCJpYXQiOjE3NzkzNjk3NTIsImV4cCI6MTc4MDU3OTM1Mn0.8_efv-11_AJ1LCoQ2hn0pgXncAzXsjk8SRBLpfAc-yg";

const CommentsSection = ({
  postId,
  insideRow,
  showComments,
  setShowComments,
}) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);

  const fetchComments = async () => {
    try {
      setLoadingComments(true);

      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            Authorization: `Bearer ${COMMENTS_TOKEN}`,
          },
        },
      );

      if (response.ok) {
        const data = await response.json();

        const filtered = data
          .filter((c) => c.elementId === postId)
          .map((c) => ({
            ...c,
            author: c.author || "Anonymous",
          }));

        setComments(filtered);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingComments(false);
    }
  };

  useEffect(() => {
    if (showComments) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchComments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showComments]);

  // POST COMMENT
  const handleCommentSubmit = async () => {
    if (!comment.trim()) return;

    try {
      setLoading(true);

      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${COMMENTS_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comment: comment,
            elementId: postId,
            rate: "5",
          }),
        },
      );

      if (response.ok) {
        setComment("");
        fetchComments();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (insideRow) {
    return (
      <Col
        className="cursor-pointer d-flex flex-column align-items-center"
        onClick={() => setShowComments((prev) => !prev)}
      >
        <MessageCircle size={22} />
        <p className="fw-semibold m-0">Comment</p>
      </Col>
    );
  }

  return (
    showComments && (
      <>
        {loadingComments ? (
          <p className="text-muted mt-3">Loading comments...</p>
        ) : (
          <>
            {comments.length > 0 && (
              <Row className="mb-2 mt-3">
                <Col className="text-start">
                  {comments.map((c) => (
                    <div
                      key={c._id}
                      className="bg-light rounded-2 px-3 py-2 mb-2"
                    >
                      <p className="fw-bold mb-1">{c.author}</p>
                      <span>{c.comment}</span>
                    </div>
                  ))}
                </Col>
              </Row>
            )}

            {!loadingComments && comments.length === 0 && (
              <p className="text-muted mt-3">No comments yet</p>
            )}
          </>
        )}

        <Row className="mt-2">
          <Col className="d-flex gap-2 align-items-center">
            <textarea
              className="border-0 shadow-sm rounded-2 p-2 flex-grow-1"
              style={{
                resize: "none",
                height: "42px",
              }}
              placeholder="Type a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <button
              className="btn btn-primary"
              onClick={handleCommentSubmit}
              disabled={loading}
            >
              {loading ? <Spinner size="sm" /> : "Post"}
            </button>
          </Col>
        </Row>
      </>
    )
  );
};

export default CommentsSection;
