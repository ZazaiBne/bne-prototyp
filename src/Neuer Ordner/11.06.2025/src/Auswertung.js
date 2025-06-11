// src/Auswertung.js
import React from "react";
import { Link } from "react-router-dom";
import { exportResponsesToExcel } from "./exportToExcel";

const themen = [
  { titel: "Was ist BNE?", start: 0, end: 6 },
  { titel: "Thema 2", start: 7, end: 13 },
  { titel: "Thema 3", start: 14, end: 20 },
  { titel: "Thema 4", start: 21, end: 27 },
  { titel: "Thema 5", start: 28, end: 34 },
  { titel: "Thema 6", start: 35, end: 39 },
];

export default function Auswertung({ responses }) {
  // Nur Antworten mit 4 oder 5 gelten als "nicht zutreffend"
  const betroffeneThemen = themen.filter((thema) =>
    responses.slice(thema.start, thema.end + 1).some((r) => r >= 4)
  );

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-bneGreen">Auswertung</h1>

      {/* ✅ Kein Thema betroffen */}
      {betroffeneThemen.length === 0 && (
        <p className="text-lg text-green-700">
          🎉 Super! In allen Themenbereichen wurde positiv geantwortet.
        </p>
      )}

      {/* ✅ Nur Thema 1 betroffen – mit wertschätzender Sprache */}
      {betroffeneThemen.length === 1 && betroffeneThemen[0].start === 0 && (
        <>
          <p className="text-lg mb-4 text-green-800 flex items-center gap-2">
            ✅ <span>Vielen Dank für Ihre Teilnahme!</span>
          </p>
          <p className="mb-4">
            Sie beschäftigen sich bereits mit wichtigen Fragen rund um nachhaltige Entwicklung.
            Wenn Sie sich noch weiter mit den Grundlagen von BNE auseinandersetzen möchten,
            haben wir hier ein ergänzendes Lernangebot für Sie.
          </p>
          <div className="bg-bneYellow p-4 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2">🧠 Lernmaterial zu BNE</h2>
            <p className="mb-2">
              Unsere interaktiven Flipcards geben einen kompakten Einblick in zentrale BNE-Grundlagen –
              ideal zum Auffrischen oder Weiterdenken.
            </p>
            <Link
              to="/flipcards"
              className="inline-block mt-2 px-4 py-2 bg-bneGreen text-white rounded hover:bg-green-700 transition"
            >
              Zu den Flipcards
            </Link>
          </div>
        </>
      )}

      {/* ✅ Mehrere Themen betroffen */}
      {betroffeneThemen.length > 0 && !(betroffeneThemen.length === 1 && betroffeneThemen[0].start === 0) && (
        <>
          <p className="mb-4 text-lg">
            In folgenden Themenbereichen wurden Aussagen mit <strong>„trifft eher nicht zu“</strong> oder
            <strong> „trifft nicht zu“</strong> beantwortet:
          </p>
          <ul className="list-disc list-inside mb-6">
            {betroffeneThemen.map((thema, index) => (
              <li key={index} className="text-bneGreen font-medium">
                {thema.titel}
              </li>
            ))}
          </ul>
          <div className="bg-bneYellow p-4 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2">🧠 Lernmaterial-Empfehlung</h2>
            <p className="mb-2">
              Zur Vertiefung empfehlen wir unsere interaktiven Flipcards zu BNE.
            </p>
            <Link
              to="/flipcards"
              className="inline-block mt-2 px-4 py-2 bg-bneGreen text-white rounded hover:bg-green-700 transition"
            >
              Zu den Flipcards
            </Link>
          </div>
        </>
      )}

      {/* 📊 Export-Button */}
      <div className="mt-8">
        <button
          onClick={() => exportResponsesToExcel(responses)}
          className="px-4 py-2 bg-bneGreen text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-bneGreen"
        >
          📊 Antworten als Excel exportieren
        </button>
      </div>
    </div>
  );
}
