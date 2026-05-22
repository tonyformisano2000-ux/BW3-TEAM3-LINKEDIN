import { useState, useEffect } from "react";
import SinglePost from "./SinglePost";
import { TOKEN } from "../../auth/auth";

const CURRENT_USER_ID = "me";

const HomepagePosts = () => {
  const [datas, setDatas] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
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

        setDatas(
          uniquePosts.map((post) => ({ ...post, likes: [], comments: [] })),
        );
      })
      .catch((err) => console.log(err));
  }, []);

  const handleLike = (postId) => {
    setDatas((prev) =>
      prev.map((post) => {
        if (post._id !== postId) return post;
        const liked = post.likes.includes(CURRENT_USER_ID);
        return {
          ...post,
          likes: liked
            ? post.likes.filter((id) => id !== CURRENT_USER_ID)
            : [...post.likes, CURRENT_USER_ID],
        };
      }),
    );
  };

  const handleComment = (postId, text, author) => {
    setDatas((prev) =>
      prev.map((post) =>
        post._id !== postId
          ? post
          : {
              ...post,
              comments: [
                ...post.comments,
                { author, text, createdAt: new Date() },
              ],
            },
      ),
    );
  };

  return (
    <>
      {datas.slice(0, visibleCount).map((post) => (
        <SinglePost
          key={post._id}
          postElements={post}
          onLike={() => handleLike(post._id)}
          onComment={(text, author) => handleComment(post._id, text, author)}
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
