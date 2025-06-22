// src/LerneinheitenPage.js
import React from "react";
import Sidebar from "./Sidebar";
import MobileMenu from "./MobileMenu";

const LerneinheitenPage = () => {
  const einheiten = [
    {
      icon: "🌱",
      titel: "Soziale Nachhaltigkeit",
      beschreibung:
        "Reflexion über Teilhabe, Gerechtigkeit und Diversität im Alltag non-formaler Bildungssettings.",
      link: "https://videos.simpleshow.com/O3SbwpqR0Q",
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
    <div className="min-h-screen bg-bneBeige text-gray-800">
      {/* 🔹 Einheitliches mobiles Menü */}
      <MobileMenu />

      {/* 🔹 Desktop Sidebar + Hauptinhalt */}
      <div className="flex">
        <Sidebar />

        <main className="ml-0 md:ml-64 w-full px-4 md:px-10 py-10 max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-bneGreen text-center md:text-left">
            Selbstlerneinheiten
          </h1>
          <p className="text-base mb-10 text-center md:text-left max-w-2xl mx-auto md:mx-0">
            Hier finden Sie themenspezifische Impulse aus den Bereichen soziale, ökologische und
            ökonomische Nachhaltigkeit – kurz, praxisnah und freiwillig.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {einheiten.map((einheit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-6 text-center"
              >
                <div className="text-3xl mb-3">{einheit.icon}</div>

                {einheit.link ? (
                  <a
                    href={einheit.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-bneGreen hover:underline block mb-2"
                  >
                    {einheit.titel}
                  </a>
                ) : (
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    {einheit.titel}
                  </h2>
                )}

                <p className="text-gray-700 text-sm leading-relaxed">
                  {einheit.beschreibung}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default LerneinheitenPage;

