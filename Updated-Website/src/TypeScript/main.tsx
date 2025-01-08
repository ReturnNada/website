import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "../App.css";
import HomePage from "./Pages/HomePage.tsx";
import NotFoundPage from "./Pages/NotFoundPage.tsx";
import ClassActionPage from "./Pages/ClassActionPage.tsx";

const router = createBrowserRouter([
  {
    path: "/website/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/website/CA/",
    element: <ClassActionPage />,
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
