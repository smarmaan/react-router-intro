import React from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { name, email, id, phone } = friend;

  return (
    <div
      className=""
      style={{
        border: "2px solid goldenrod",
        marginTop: "20px",
        borderRadius: "20px",
        padding: "10px",
      }}
    >
      <h3>Name : {name}</h3>
      <p>Email : {email} </p>
      <p>Phone : {phone} </p>
      <p>
        <Link to={`/friend/${id}`}>Show me Details</Link>{" "}
      </p>
    </div>
  );
};

export default Friend;
 