// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./LandingPage";
import BNEPage from "./BNEPage";
import MetaInfoPage from "./MetaInfoPage";
import ScrollQuestionnaire from "./ScrollQuestionnaire";
import Sidebar from "./Sidebar";
import MobileMenu from "./MobileMenu";
import Auswertung from "./Auswertung";
import Flipcards from "./Flipcards";
import KontaktPage from "./KontaktPage";

function AppWrapper() {
  const [responses, setResponses] = useState(Array(36).fill(0));
  const location = useLocation();

  // Sidebar anzeigen auf bestimmten Seiten
  const showSidebar = [
    "/fragebogen",
    "/meta",
    "/kontakt",
    "/auswertung"
  ].includes(location.pathname);

  return (
    <div className="min-h-screen bg-bneBeige text-gray-800">
      {showSidebar && (
        <>
          <div className="hidden md:block fixed top-0 left-0 h-full w-64 z-40">
            <Sidebar />
          </div>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </>
      )}

      <main className={showSidebar ? "md:ml-64 p-4 pt-6 md:pt-10" : "p-4"}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/bne" element={<BNEPage />} />
          <Route path="/meta" element={<MetaInfoPage />} />
          <Route
            path="/fragebogen"
            element={
              <ScrollQuestionnaire
                responses={responses}
                setResponses={setResponses}
              />
            }
          />
          <Route path="/auswertung" element={<Auswertung responses={responses} />} />
          <Route path="/flipcards" element={<Flipcards />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route
            path="*"
            element={
              <h2 className="text-center mt-10 text-red-600">
                ❌ Seite nicht gefunden
              </h2>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;



