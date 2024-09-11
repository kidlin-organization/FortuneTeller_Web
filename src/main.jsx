import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Home from "./Routes/Home.jsx";
import Dream from "./Routes/Dream.jsx";
import About from "./Routes/About.jsx";
import Root from "./Routes/root.jsx";
import ErrorPage from "./Routes/Error.jsx";
import Register from "./Routes/Register.jsx";

const router = createBrowserRouter([
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
    path: "/register",
    element: <Root />,
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
    element: <About />,
  },
  {
    path: "/dream",
    element: <Dream />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
