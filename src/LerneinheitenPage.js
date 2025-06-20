// src/LerneinheitenPage.js
import React from "react";

const LerneinheitenPage = () => {
  const einheiten = [
    {
      icon: "🌱",
      titel: "Soziale Nachhaltigkeit in der Jugendarbeit",
      beschreibung:
        "Reflexion über Teilhabe, Gerechtigkeit und Diversität im Alltag non-formaler Bildungssettings.",
    },
    {
      icon: "♻️",
      titel: "Ökologische Bildung kreativ vermitteln",
      beschreibung:
        "Impulse zur Gestaltung von Workshops und Ausstellungen zu Klima, Ressourcen und Konsum.",
    },
    {
      icon: "🤝",
      titel: "Kooperation & globale Verantwortung",
      beschreibung:
        "Wie kann ich mit regionalen und internationalen Partnern SDG-orientierte Projekte entwickeln?",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-8 text-center">
        Lerneinheiten zu Bildung für nachhaltige Entwicklung
      </h1>

      <p className="text-center mb-12 text-gray-700 leading-relaxed max-w-3xl mx-auto">
        Hier finden Sie ausgewählte Impulse, die Sie direkt für Ihre Arbeit nutzen können – kurz, praxisnah und kostenlos.
        Jede Einheit beleuchtet einen Aspekt von Bildung für nachhaltige Entwicklung und lädt zur Reflexion und Weiterentwicklung ein.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {einheiten.map((einheit, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition"
          >
            <div className="text-4xl mb-4">{einheit.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{einheit.titel}</h2>
            <p className="text-gray-700 text-sm">{einheit.beschreibung}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LerneinheitenPage;
