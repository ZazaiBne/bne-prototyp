import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import QuestionnairePage from './QuestionnairePage';
import Sidebar from './Sidebar';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-bneBeige text-gray-800">
        <Sidebar />

        <main className="ml-64 flex-grow p-8">
          <Routes>
            <Route path="/" element={<Navigate to="/seite/1" replace />} />
            <Route path="/seite/:pageNumber" element={<QuestionnairePage />} />
            <Route path="/auswertung" element={<Auswertung />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/vorschlag" element={<Vorschlag />} />
            <Route path="*" element={<h2 className="text-center mt-10 text-red-600">Seite nicht gefunden</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Dummy-Komponenten
function Newsletter() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-bneGreen mb-4">📥 Newsletter</h2>
      <p>Hier könnte ein Anmeldeformular für den Newsletter stehen.</p>
    </div>
  );
}

function Kontakt() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-bneGreen mb-4">✉️ Kontakt</h2>
      <p>
        Du kannst uns per E-Mail erreichen:{' '}
        <a href="mailto:kontakt@beispiel.de" className="text-blue-600 underline">
          kontakt@beispiel.de
        </a>
      </p>
    </div>
  );
}

function Vorschlag() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-bneGreen mb-4">➕ Vorschlag einreichen</h2>
      <p>Hier könnte ein Formular sein, um eigene Materialien oder Ideen einzureichen.</p>
    </div>
  );
}

function Auswertung() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-bneGreen mb-4">🎉 Vielen Dank!</h2>
      <p>Hier wird die Auswertung des Fragebogens angezeigt.</p>
      <p>Später: Empfehlungen und Lernmaterialien basierend auf den Antworten.</p>
    </div>
  );
}

export default App;

