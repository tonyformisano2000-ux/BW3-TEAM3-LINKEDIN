import { useState, useEffect } from "react";
import SinglePost from "./SinglePost";

const HomepagePosts = ({ posts }) => {
  const [datas, setDatas] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    if (!posts) return;

    const onlyWithImages = posts.filter(
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

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDatas(
      uniquePosts.map((post) => ({
        ...post,
        likes: [],
        comments: [],
      })),
    );
  }, [posts]);

  const handleLike = (postId) => {
    setDatas((prev) =>
      prev.map((post) => {
        if (post._id !== postId) return post;
        const liked = post.likes.includes("me");

        return {
          ...post,
          likes: liked
            ? post.likes.filter((id) => id !== "me")
            : [...post.likes, "me"],
        };
      }),
    );
  };

  return (
    <>
      {datas.slice(0, visibleCount).map((post) => (
        <SinglePost
          key={post._id}
          postElements={post}
          onLike={() => handleLike(post._id)}
        />
      ))}

      {visibleCount < datas.length && (
        <div className="text-center mt-3">
          <button
            className="btn btn-primary rounded-pill"
            onClick={() => setVisibleCount((prev) => prev + 10)}
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
};

export default HomepagePosts;
