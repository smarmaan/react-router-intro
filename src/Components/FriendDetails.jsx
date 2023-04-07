import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();

  // console.log(friend);

 return (
  <div>


<h1>Details of each person...</h1>
<h3>Name: {friend.name}</h3>
<h3>Email: {friend.email}</h3>
<h3>Phone: {friend.phone}</h3>
<h3>Address: {friend.address.city}</h3>

  </div>
 )
};

export default FriendDetails;
