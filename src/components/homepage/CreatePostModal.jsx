import {
  Modal,
  Button,
  Form,
  Spinner,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";

import {
  Image,
  EmojiSmile,
  CalendarEvent,
  Plus,
  GlobeEuropeAfrica,
} from "react-bootstrap-icons";

import { TOKEN } from "../../auth/auth";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

const CreatePostModal = ({ show, handleClose, onPostCreated }) => {
  const [postText, setPostText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef();

  const myProfile = useSelector((state) => state.profile);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handlePublish = async () => {
    if (!postText.trim()) return;

    try {
      setLoading(true);

      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: postText,
          }),
        },
      );

      const createdPost = await response.json();

      if (selectedImage) {
        const formData = new FormData();

        formData.append("post", selectedImage);

        await fetch(
          `https://striveschool-api.herokuapp.com/api/posts/${createdPost._id}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
            body: formData,
          },
        );
      }

      setPostText("");
      setSelectedImage(null);
      setPreview("");

      handleClose();

      if (onPostCreated) {
        onPostCreated();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const badges = ["add reaction", "post an image", "set event", "more"];
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {badges[props]}
    </Tooltip>
  );

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton className="border-0">
        <div className="d-flex align-items-center">
          <img
            src={myProfile?.image}
            alt="\r"
            className="rounded-circle me-3"
            style={{
              width: "55px",
              height: "55px",
              objectFit: "cover",
            }}
          />

          <div>
            <h5 className="mb-0 fw-bold">
              {myProfile?.name} {myProfile?.surname}
            </h5>

            <div className="d-flex align-items-center border rounded-pill px-2 py-1 mt-1 small">
              <GlobeEuropeAfrica className="me-1" />
              Anyone
            </div>
          </div>
        </div>
      </Modal.Header>

      <Modal.Body>
        <Form.Control
          as="textarea"
          rows={6}
          placeholder="What do you want to talk about?"
          className="border-0 shadow-none fs-4"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />

        {preview && (
          <div className="mt-3">
            <img src={preview} alt="preview" className="img-fluid rounded-3" />
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          hidden
          ref={fileInputRef}
          onChange={handleImageChange}
        />
      </Modal.Body>

      <Modal.Footer className="justify-content-between">
        <div className="d-flex align-items-center">
          <OverlayTrigger
            placement="top"
            delay={{ show: 50, hide: 50 }}
            overlay={renderTooltip(0)}
          >
            <Button
              variant="light"
              className="mx-1 border-0 d-flex align-content-center"
            >
              <EmojiSmile size={22} />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            delay={{ show: 50, hide: 50 }}
            overlay={renderTooltip(1)}
          >
            <Button
              variant="light"
              className="mx-1 border-0 d-flex align-content-center"
              onClick={() => fileInputRef.current.click()}
            >
              <Image size={22} />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            delay={{ show: 50, hide: 50 }}
            overlay={renderTooltip(2)}
          >
            <Button
              variant="light"
              className="mx-1 border-0 d-flex align-content-center"
            >
              <CalendarEvent size={22} />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            delay={{ show: 50, hide: 50 }}
            overlay={renderTooltip(3)}
          >
            <Button
              variant="light"
              className="mx-1 border-0 d-flex align-content-center"
            >
              <Plus size={22} />
            </Button>
          </OverlayTrigger>
        </div>

        <Button
          variant="secondary"
          className="rounded-pill px-4 fw-bold"
          disabled={!postText.trim() || loading}
          onClick={handlePublish}
        >
          {loading ? <Spinner size="sm" /> : "Post"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreatePostModal;
