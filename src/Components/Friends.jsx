import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "./Friend";

const Friends = () => {
  const Friends = useLoaderData();
  // console.log(Friends);

  return (
    <div>
      <h3>Yooooooo... Amar friend sonkha : {Friends.length} </h3>
      {Friends.map((friend) => (
        <Friend friend={friend} key={friend.id}/>
      ))}
    </div>
  );
};

export default Friends;
