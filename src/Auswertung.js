// src/Auswertung.js
import React from "react";
import { Link } from "react-router-dom";
import { exportResponsesToExcel } from "./exportToExcel";

const Auswertung = ({ responses }) => {
  const hatLernbedarf = responses.slice(0, 12).some((value) => value >= 3);

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-bneGreen mb-6">📊 </h1>

      {/* Empfehlung nur bei Lernbedarf */}
      {hatLernbedarf && (
  <div className="p-6 border border-yellow-400 bg-yellow-100 rounded">
    <p className="mb-3 text-yellow-900">
      Vielen Dank für Ihre Teilnahme!
      <br />
      Im Menü finden Sie weitere Informationen rund um Bildung für nachhaltige Entwicklung (BNE) – darunter Flyer und unseren Newsletter zum Herunterladen sowie zusätzliche Materialien wie Texte und Videos.
Wenn Sie möchten, können Sie sich auch hier unten ein kurzes Video anschauen, das einige Gedanken zur Vertiefung bietet.
    </p>
    <a
      href="https://youtu.be/ZygtMuqKO3A?si=GBFzYv5WH-BNswaw"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-yellow-500 text-white font-semibold px-4 py-2 rounded hover:bg-yellow-600 transition"
    >
      ▶️ Video ansehen
    </a>
  </div>
)}

     

      {/* Nur für dich sichtbar: Button für Datenexport */}
      <div className="mt-10">
        <button
          onClick={() => exportResponsesToExcel(responses)}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition font-medium"
        >
          📁 Antworten exportieren (intern)
        </button>
        <p className="text-xs text-gray-500 mt-1">
          (Nur für interne Auswertung – wird nicht angezeigt)
        </p>
      </div>

      {/* Zurück */}
      <div className="mt-12 text-center">
        <Link to="/" className="text-bneGreen font-semibold hover:underline">
          Zur Startseite zurück
        </Link>
      </div>
    </div>
  );
};

export default Auswertung;

