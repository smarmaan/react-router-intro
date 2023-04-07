import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const postDetails = useLoaderData();
  console.log(postDetails);

  const { id, userId, title, body } = postDetails;

  const goBack = useNavigate();

  const handleGoBack = () => {
    goBack(-1);
  };

  return (
    <div
      className="m-12  p-5  rounded-xl bg-cyan-500
  "
    >
      <h1 className="text-4xl mb-12">Details of posts...</h1>
      <p className="text-2xl font-extrabold underline mb-6">
        ID : {id} / UserID : {userId}{" "}
      </p>
      <h3 className="text-xl font-bold">Title: {title} </h3>
      <p className="mb-5">Body: {body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
