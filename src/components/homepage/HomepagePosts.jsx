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
        if (response.ok) return response.json();
        throw new Error("Fetch error");
      })
      .then((data) => {
        const onlyWithImages = data.filter(
          (post) => post.image && post.image.trim() !== "",
        );

        const sortedPosts = onlyWithImages.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );

        const uniquePosts = Array.from(
          new Map(
            sortedPosts.map((post) => {
              const cleanImage = post.image?.split("?")[0];

              const key = `${post.text?.trim()}-${cleanImage}-${post.user?._id}`;

              return [key, post];
            }),
          ).values(),
        );

        setDatas(sortedPosts, uniquePosts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {datas.slice(0, 10).map((post) => (
        <SinglePost key={post._id} postElements={post} />
      ))}
    </>
  );
};

export default HomepagePosts;
