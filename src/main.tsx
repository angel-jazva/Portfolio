
  import { createRoot } from "react-dom/client";
  import { BrowserRouter, Routes, Route } from "react-router";
  import App from "./app/App.tsx";
  import CaseStudyBrushBuddy from "./app/CaseStudyBrushBuddy.tsx";
  import CaseStudyRinesk from "./app/CaseStudyRinesk.tsx";
  import CaseStudyFincube from "./app/CaseStudyFincube.tsx";
  import CaseStudyJukrassic from "./app/CaseStudyJukrassic.tsx";
  import "./styles/index.css";

  createRoot(document.getElementById("root")!).render(
    <BrowserRouter basename="/Portfolio">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/work/brushbuddy" element={<CaseStudyBrushBuddy />} />
        <Route path="/work/rinesk" element={<CaseStudyRinesk />} />
        <Route path="/work/fincube" element={<CaseStudyFincube />} />
        <Route path="/work/jukrassic" element={<CaseStudyJukrassic />} />
      </Routes>
    </BrowserRouter>
  );
