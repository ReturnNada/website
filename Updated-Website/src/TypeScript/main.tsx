import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import ProjectPage from "./Pages/ProjectPage.tsx";
import WhatNextPage from "./Pages/WhatNextPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/website/" element={<HomePage />} />
        <Route path="/website/CA/" element={<ClassActionPage />} />
        <Route path="/website/PCBs/" element={<CircuitPage />} />
        <Route path="/website/Sketchee/" element={<SketcheePage />} />
        <Route path="/website/Hitbox/" element={<HitboxPage />} />
        <Route path="/website/NightVision/" element={<NightVisionPage />} />
        <Route path="/website/NoiseDetector/" element={<NoiseDetectorPage />} />
        <Route path="/website/QIR/" element={<QIRPage />} />
        <Route path="/website/Robot/" element={<RobotPage />} />
        <Route path="/website/About/" element={<AboutPage />} />
        <Route path="/website/Projects/" element={<ProjectPage />} />
        <Route path="/website/WhatNext/" element={<WhatNextPage />} />
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
