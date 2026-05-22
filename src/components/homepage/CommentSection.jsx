// import { Row } from "react-bootstrap";

const commentSection = ({ visualizza, posta, modifica, elimina, postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);

  if (visualizza || (!visualizza && !posta && !modifica && !elimina)) {
    (fetch("https://striveschool-api.herokuapp.com/api/comments/"),
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWY5ZmQ2NDU0YTMxNTAwMTU1OGIxYzUiLCJpYXQiOjE3NzkzNjk3NTIsImV4cCI6MTc4MDU3OTM1Mn0.8_efv-11_AJ1LCoQ2hn0pgXncAzXsjk8SRBLpfAc-yg",
        },
      }
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(response);
          }
        })
        .then((data) => {
          setComments(
            data.filter((commento) => {
              commento.elementId;
            }),
          );
        })
        .catch((err) => {
          console.log(err);
        }));
  }
  if (posta) {
    (fetch("https://striveschool-api.herokuapp.com/api/comments/"),
      {
        Headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWY5ZmQ2NDU0YTMxNTAwMTU1OGIxYzUiLCJpYXQiOjE3NzkzNjY1NDgsImV4cCI6MTc4MDU3NjE0OH0.YR76TB3X0V66RmlYCoN3AuYVcSeujKHNL1hIzUbYf98",
        },
      }
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(response);
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        }));
  }
  if (modifica) {
    (fetch("https://striveschool-api.herokuapp.com/api/comments/"),
      {
        Headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWY5ZmQ2NDU0YTMxNTAwMTU1OGIxYzUiLCJpYXQiOjE3NzkzNjY1NDgsImV4cCI6MTc4MDU3NjE0OH0.YR76TB3X0V66RmlYCoN3AuYVcSeujKHNL1hIzUbYf98",
        },
      }
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(response);
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        }));
  }
  if (elimina) {
    (fetch("https://striveschool-api.herokuapp.com/api/comments/"),
      {
        Headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWY5ZmQ2NDU0YTMxNTAwMTU1OGIxYzUiLCJpYXQiOjE3NzkzNjY1NDgsImV4cCI6MTc4MDU3NjE0OH0.YR76TB3X0V66RmlYCoN3AuYVcSeujKHNL1hIzUbYf98",
        },
      }
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(response);
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        }));
  }
};
export default commentSection;
