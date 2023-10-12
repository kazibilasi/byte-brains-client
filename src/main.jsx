import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";


import AllToys from "./Components/AllToys/AllToys";
import MyToys from "./Components/MyToys/MyToys";
import AddAToys from "./Components/AddAToys/AddAToys";
import Blogs from "./Components/Blogs/Blogs";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import ViewDetails from "./Components/ViewDetails/ViewDetails";
import { HelmetProvider } from "react-helmet-async";

import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Home from "./Components/Home/Home";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import Head from "./Components/Head/Head";
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element:<Head></Head> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/myToys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
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

      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) => fetch(`https://byte-brains-server.vercel.app/allToys/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className=' max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
