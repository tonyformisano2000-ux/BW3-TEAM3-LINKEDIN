import { Row } from "react-bootstrap";

const SinglePost = ({ postElements }) => {
  const user = postElements?.user;

  return (
    <Row className="align-items-start mb-3 p-3 bg-white rounded-4 shadow-sm">
      <img
        className="col-1 rounded-circle img-fluid"
        src={user?.image || "https://placecats.com/200/200"}
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
            />
          </Row>
        )}
      </div>
    </Row>
  );
};

export default SinglePost;
