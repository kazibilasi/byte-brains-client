import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import AllToys from "./Components/AllToys/AllToys";
import MyToys from "./Components/MyToys/MyToys";
import AddAToys from "./Components/AddAToys/AddAToys";
import Blogs from "./Components/Blogs/Blogs";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Login from "./Components/Login/Login";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import SignUp from "./Components/SignUp/SignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/myToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/addAToy",
        element: <AddAToys></AddAToys>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
