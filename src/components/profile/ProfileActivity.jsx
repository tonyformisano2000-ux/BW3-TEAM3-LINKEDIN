import { useState } from "react";
import { Card, Button } from "react-bootstrap";

// post di esempio
const MOCK_POSTS = [
  {
    id: 1,
    text: "Today I completed my first full-stack project with React 🚀 #WebDevelopment #React",
    likes: 42,
    comments: 8,
    time: "2 days ago",
    image: null,
  },
  {
    id: 2,
    text: "Interesting article about state management in React with Redux Toolkit. I recommend everyone to read it!",
    likes: 19,
    comments: 3,
    time: "1 week ago",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaXI76_figZeYaHsj96o3xin0FJtQPU3cROQ&s",
  },
];

const TABS = ["Posts", "Documents", "Images", "Likes", "Comments", "Articles"];

const ProfileActivity = ({ profile }) => {
  const [activeTab, setActiveTab] = useState("Posts");
  const [followers] = useState(() => Math.floor(Math.random() * 500) + 100);

  return (
    <Card className="rounded-4 shadow-sm border-0 mt-3">
      <Card.Body className="p-4">
        {/* intestazione */}
        <div className="d-flex justify-content-between align-items-center mb-1">
          <div>
            <h5 className="fw-bold mb-0">Activity</h5>
            <p className="text-muted small mb-0">
              {profile?.name} {profile?.surname} · {followers} followers
            </p>
          </div>
          <Button
            variant="outline-primary"
            className="rounded-pill fw-semibold"
          >
            Create a post
          </Button>
        </div>

        {/* tab filtri */}
        <div className="d-flex gap-2 flex-wrap mt-3 mb-4">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`btn btn-sm rounded-pill ${
                activeTab === tab
                  ? "btn-secondary text-white"
                  : "btn-outline-secondary"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* lista post */}
        {activeTab === "Posts" ? (
          <div className="d-flex flex-column gap-4">
            {MOCK_POSTS.map((post) => (
              <div key={post.id} className="border-bottom pb-4">
                {/* autore */}
                <div className="d-flex align-items-center gap-2 mb-2">
                  <img
                    src={profile?.image || "https://via.placeholder.com/40"}
                    alt="avatar"
                    className="rounded-circle"
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <p className="mb-0 fw-semibold small">
                      {profile?.name} {profile?.surname}
                    </p>
                    <p
                      className="mb-0 text-muted"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {post.time}
                    </p>
                  </div>
                </div>

                {/* testo */}
                <p className="mb-2 small">{post.text}</p>

                {/* immagine opzionale */}
                {post.image && (
                  <img
                    src={post.image}
                    alt="post"
                    className="img-fluid rounded-3 mb-2"
                    style={{
                      maxHeight: "200px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}

                {/* reazioni */}
                <div className="d-flex gap-3 text-muted small">
                  <span>
                    <i className="bi bi-hand-thumbs-up me-1"></i>
                    {post.likes}
                  </span>
                  <span>
                    <i className="bi bi-chat me-1"></i>
                    {post.comments} comments
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted text-center py-3">
            No content to show.
          </p>
        )}

        {/* link visualizza tutto */}
        <Button
          variant="link"
          className="p-0 mt-2 text-decoration-none fw-semibold w-100 text-center"
        >
          Show all activity
          <i className="bi bi-arrow-right ms-1"></i>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProfileActivity;