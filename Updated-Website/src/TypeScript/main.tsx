import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "../App.css";
import HomePage from "./Pages/HomePage.tsx";
import NotFoundPage from "./NotFoundPage.tsx";
import ClassActionPage from "./Pages/ClassActionPage.tsx";
import CircuitPage from "./Pages/CircuitPage.tsx";
import SketcheePage from "./Pages/SketcheePage.tsx";
import HitboxPage from "./Pages/HitboxPage.tsx";
import NightVisionPage from "./Pages/NightVisionPage.tsx";
import NoiseDetectorPage from "./Pages/NoiseDetectorPage.tsx";
import QIRPage from "./Pages/QIRPage.tsx";
import RobotPage from "./Pages/RobotPage.tsx";
import AboutPage from "./Pages/AboutPage.tsx";
import DocumentPage from "./Pages/DocumentPage.tsx";

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
  {
    path: "/website/PCBs/",
    element: <CircuitPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/website/Sketchee/",
    element: <SketcheePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/website/Hitbox/",
    element: <HitboxPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/website/NightVision/",
    element: <NightVisionPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/website/NoiseDetector/",
    element: <NoiseDetectorPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/website/QIR/",
    element: <QIRPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/website/Robot/",
    element: <RobotPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/website/About/",
    element: <AboutPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/website/Documents/",
    element: <DocumentPage />,
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
