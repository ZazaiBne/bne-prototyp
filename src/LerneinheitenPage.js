// src/LerneinheitenPage.js
import React from "react";
import Sidebar from "./Sidebar";

const LerneinheitenPage = () => {
  const einheiten = [
    {
      icon: "🌱",
      titel: "Soziale Nachhaltigkeit",
      beschreibung:
        "Reflexion über Teilhabe, Gerechtigkeit und Diversität im Alltag non-formaler Bildungssettings.",
    },
    {
      icon: "🌍",
      titel: "Ökologische Verantwortung im Alltag",
      beschreibung:
        "Impulse zum Thema Umweltbildung, Klimaschutz und nachhaltige Ressourcenverwendung.",
    },
    {
      icon: "💶",
      titel: "Wirtschaft & Konsum reflektieren",
      beschreibung:
        "Ideen zur Auseinandersetzung mit Konsumverhalten, globaler Gerechtigkeit und nachhaltigem Wirtschaften.",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-6 w-full max-w-5xl text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-bneGreen text-left">
          Selbstlerneinheiten
        </h1>
        <p className="text-base mb-8 text-left">
          Hier finden Sie themenspezifische Impulse aus den Bereichen soziale, ökologische und
          ökonomische Nachhaltigkeit – kurz, praxisnah und freiwillig.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {einheiten.map((einheit, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{einheit.icon}</div>

              {/* Nur für erste Einheit: Titel wird klickbarer Link */}
              {index === 0 ? (
                <a
                  href="https://videos.simpleshow.com/O3SbwpqR0Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold mb-2 hover:underline text-bneGreen block"
                >
                  {einheit.titel}
                </a>
              ) : (
                <h2 className="text-xl font-semibold mb-2">{einheit.titel}</h2>
              )}

              <p className="text-gray-700 text-sm">{einheit.beschreibung}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LerneinheitenPage;

