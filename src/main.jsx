import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import First from "./Components/First";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ErrorPage from "./Components/ErrorPage";
import Header from "./Components/Header";
import Home from "./Components/home";
import Friends from "./Components/Friends";
import FriendDetails from "./Components/FriendDetails";
import Posts from "./Components/Posts/Posts";
import PostDetails from "./Components/Post/PostDetails/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <First></First>,
      },
      {
        path: "friends",
        element: <Friends></Friends>,

        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
      },
      {
        path: "friend/:friendId",
        element: <FriendDetails></FriendDetails>,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendId}`
          ),
      },

      {
        path: "posts",
        element: <Posts></Posts>,
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`),
      },

      {
        path: "post/:postId",
        element: <PostDetails></PostDetails>,

        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },

      {
        path: "about",
        element: <About></About>,
      },

      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
