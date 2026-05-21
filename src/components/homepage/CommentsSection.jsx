import { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";

const COMMENTS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWY5ZmQ2NDU0YTMxNTAwMTU1OGIxYzUiLCJpYXQiOjE3NzkzNjk3NTIsImV4cCI6MTc4MDU3OTM1Mn0.8_efv-11_AJ1LCoQ2hn0pgXncAzXsjk8SRBLpfAc-yg";

const CommentsSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const [visibleComments, setVisibleComments] = useState(10);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          headers: {
            Authorization: `Bearer ${COMMENTS_TOKEN}`,
          },
        },
      );

      if (response.ok) {
        const data = await response.json();

        const filteredComments = data.filter(
          (comment) => comment.elementId === postId,
        );

        setComments(filteredComments);
      } else {
        setComments([]);
      }
    } catch (error) {
      console.log(error);
      setComments([]);
    }
  };

  useEffect(() => {
    if (showComments) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchComments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showComments]);

  const handleSubmit = async () => {
    if (!newComment.trim()) return;

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
            comment: newComment,
            rate: "5",
            elementId: postId,
          }),
        },
      );

      if (response.ok) {
        setNewComment("");
        fetchComments();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-3">
      <Button
        variant="outline-secondary"
        size="sm"
        className="rounded-pill mb-3"
        onClick={() => {
          setShowComments(!showComments);
          setVisibleComments(10);
        }}
      >
        {showComments ? "Hide comments" : "Show comments"}
      </Button>

      {showComments && (
        <>
          <div className="mb-3">
            <Form.Control
              type="text"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />

            <Button
              className="mt-2 rounded-pill"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? <Spinner size="sm" /> : "Send"}
            </Button>
          </div>

          {comments.length === 0 ? (
            <p className="text-muted">No comments yet</p>
          ) : (
            <>
              {comments.slice(0, visibleComments).map((comment) => (
                <div
                  key={comment._id}
                  className="border rounded-3 p-2 mb-2 bg-light"
                >
                  <p className="mb-1 fw-bold">
                    {comment.author || "Anonymous"}
                  </p>

                  <p className="mb-0">{comment.comment}</p>
                </div>
              ))}

              {visibleComments < comments.length && (
                <Button
                  variant="link"
                  className="text-decoration-none"
                  onClick={() => setVisibleComments((prev) => prev + 10)}
                >
                  Load 10 more comments
                </Button>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CommentsSection;
