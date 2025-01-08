import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "../App.css";
import HomePage from "./HomePage.tsx";
import NotFoundPage from "./NotFoundPage.tsx";

const router = createBrowserRouter([
  {
    path: "/website/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
