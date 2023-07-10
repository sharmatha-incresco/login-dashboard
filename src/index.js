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
import Signup from "./screens/signup"
import Update from "./screens/update";
import awsConfig from './aws-exports';
import { Amplify } from "aws-amplify";
import Forgetpassword from "./screens/forgetpassword";

Amplify.configure(awsConfig);
const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/students",
    element: <Students />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/update",
    element: <Update />,
  },
  {
    path: "/update",
    element: <Update />,
  },
  {
    path: "/forgetpassword",
    element: <Forgetpassword />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

