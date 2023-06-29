import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./screens/home";
//import Signup1 from "./nav_bar/user";
import Signin from "./screens/login";
import Students from "./screens/students";
//import Home from "./nav_bar/home";
//import Studdd from "./nav_bar/Students";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/",
    element: <Signin/>,
  },
  {
    path: "/students",
    element: <Students/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

