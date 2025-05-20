import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import ScrollQuestionnaire from "./ScrollQuestionnaire";
import LandingPage from "./LandingPage";
import Sidebar from "./Sidebar";
import MobileMenu from "./MobileMenu";

// Dummy-Komponenten
function Newsletter() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-bneGreen mb-4">📥 Newsletter</h2>
      <p>Hier könnte ein Anmeldeformular stehen.</p>
    </div>
  );
}

function Kontakt() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-bneGreen mb-4">✉️ Kontakt</h2>
      <p>Kontaktaufnahme per E-Mail: <a href="mailto:kontakt@beispiel.de" className="text-blue-600 underline">kontakt@beispiel.de</a></p>
    </div>
  );
}

function Vorschlag() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-bneGreen mb-4">➕ Vorschlag einreichen</h2>
      <p>Hier können Ideen oder Materialien eingereicht werden.</p>
    </div>
  );
}

function Auswertung({ responses, setResponses }) {
  const handleRestart = () => {
    setResponses(Array(40).fill(0));
    window.location.href = "/fragebogen";
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-bneGreen mb-4">🎉 Vielen Dank!</h2>
      <p>Hier wird die Auswertung des Fragebogens angezeigt.</p>
      <pre className="bg-white rounded p-4 text-sm">{JSON.stringify(responses, null, 2)}</pre>
      <button onClick={handleRestart} className="mt-4 bg-bneGreen text-bneBeige px-4 py-2 rounded">
        🔁 Fragebogen neu starten
      </button>
    </div>
  );
}

// App Wrapper, damit useLocation funktioniert
function AppWrapper() {
  const [responses, setResponses] = useState(() => {
    const saved = localStorage.getItem("bneResponses");
    return saved ? JSON.parse(saved) : Array(40).fill(0);
  });

  useEffect(() => {
    localStorage.setItem("bneResponses", JSON.stringify(responses));
  }, [responses]);

  const location = useLocation();
  const showSidebar = location.pathname === "/fragebogen";

  return (
    <div className="min-h-screen bg-bneBeige text-gray-800">
      {/* Nur bei Fragebogen Sidebar & MobileMenu */}
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
          <Route path="/" element={<Navigate to="/bne" replace />} />
          <Route path="/bne" element={<LandingPage />} />
          <Route path="/fragebogen" element={<ScrollQuestionnaire responses={responses} setResponses={setResponses} />} />
          <Route path="/auswertung" element={<Auswertung responses={responses} setResponses={setResponses} />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/vorschlag" element={<Vorschlag />} />
          <Route path="*" element={<h2 className="text-center mt-10 text-red-600">Seite nicht gefunden</h2>} />
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

