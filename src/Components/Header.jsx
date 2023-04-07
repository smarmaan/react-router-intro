import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";
const Header = () => {
  return (
    <nav id="navbar" className="flex gap-3 items-center">
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/friends">Friends</ActiveLink>
      <ActiveLink to="/posts">Posts</ActiveLink>
      <ActiveLink to="/about">About</ActiveLink>
      <ActiveLink to="/contact">Contact</ActiveLink>
    </nav>
  );
};

export default Header;
