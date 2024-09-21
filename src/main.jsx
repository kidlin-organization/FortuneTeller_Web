import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Home from "./Routes/Home.jsx";
import Dream from "./Routes/Dream.jsx";
import About from "./Routes/About.jsx";
import Products from "./Routes/Products.jsx";
import Pricing from "./Routes/Pricing.jsx";
import Root from "./Routes/root.jsx";
import ErrorPage from "./Routes/Error.jsx";
import Login from "./Routes/Login.jsx";
import Register from "./Routes/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    // element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Login />,
      },
    ],
  },
  {
    path: "/register",
    // element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Register />,
      },
    ],
  },
  {
    path: "/about",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <About />,
      },
    ],
  },
  {
    path: "/products",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Products />,
      },
    ],
  },
  {
    path: "/pricing",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Pricing />,
      },
    ],
  },
  {
    path: "/dream",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Dream />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
