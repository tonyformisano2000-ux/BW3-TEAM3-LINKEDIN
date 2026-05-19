import { Row } from "react-bootstrap";

const SinglePost = (postElements) => {
  console.log(postElements);
  return (
    <Row>
      <img
        className="col-1 rounded-circle img-fluid"
        src="https://placecats.com/200/200"
      ></img>
      <div className="col-8">
        <Row>
          <h1>{postElements.postElements.user.name}</h1>
        </Row>
      </div>
    </Row>
  );
};
export default SinglePost;
