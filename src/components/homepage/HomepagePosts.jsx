import { useState, useEffect } from "react";
import SinglePost from "./SinglePost";
const HomepagePosts = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZTNjNTA2YmJlOTAwMTVkZWU1ODUiLCJpYXQiOjE3NzkwOTg1NjUsImV4cCI6MTc4MDMwODE2NX0.O0KuxUKN3vNzyOPjo-ajKPphxUhWPm22PXZ0IRPzgZc",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response);
        }
      })
      .then((data) => {
        setDatas(data);
        console.log(data);
      })
      .catch((err) => {
        console.log("errore:", err);
      });
  }, []);

  return datas.slice(5, 10).map((post) => {
    return <SinglePost key={post._id} postElements={post} />;
  });
};

export default HomepagePosts;
