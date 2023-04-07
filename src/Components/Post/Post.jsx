import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/post/${post.id}`);
  };

  return (
    <div
      className="m-12  p-5  rounded-xl bg-cyan-500
    "
    >
      <p className="text-2xl font-extrabold underline mb-6">
        ID : {post.id} / UserID : {post.userId}{" "}
      </p>
      <h3 className="text-xl font-bold">Title: {post.title} </h3>
      <p className="mb-5">Body: {post.body}</p>

      <Link
        to={`/post/${post.id}`}
        className="text-white px-2 py-1 mx-3 bg-blue-900 rounded-3xl"
      >
        Post Details
      </Link>

      <Link to={`/post/${post.id}`} className="mx-3 text-white">
        <button>Post Details</button>
      </Link>

      <button onClick={handleNavigation}>With button handler</button>
    </div>
  );
};

export default Post;
