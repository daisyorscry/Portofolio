import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './index.css'


import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import About from "./Pages/About"


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "about",
    element: <About/>
  },  
  {
    path: "blog",
    element: <Blog/>
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);