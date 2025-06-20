import React, { useState } from "react";
import "./index.css"; // Damit die Flip-Klassen wirken

const cards = [
  {
    frage: "Was bedeutet BNE?",
    antwort: "Bildung, die Menschen zu zukunftsfähigem Denken und Handeln befähigt.",
  },
  {
    frage: "Welche drei Dimensionen umfasst nachhaltige Entwicklung?",
    antwort: "Ökologie, Ökonomie und Soziales",
  },
  {
    frage: "Was ist das Ziel von BNE?",
    antwort: "Menschen zu befähigen, globale Herausforderungen zu verstehen und zu handeln.",
  },
  {
    frage: "Was bedeutet „Zukunft gestalten“ in BNE?",
    antwort: "Verantwortung übernehmen und mitentscheiden.",
  },
  {
    frage: "Nenne ein Beispiel für BNE in der Praxis.",
    antwort: "Mülltrennung, demokratische Abstimmungen, Klima-Projekte.",
  },
  {
    frage: "Welche Kompetenzen fördert BNE?",
    antwort: "Systemisches Denken, Empathie, Beteiligung, Werteorientierung.",
  },
  {
    frage: "Was ist ein nachhaltiger Lebensstil?",
    antwort: "Ressourcen schonen, fair konsumieren, bewusst handeln.",
  },
  {
    frage: "Wer profitiert von BNE?",
    antwort: "Alle – besonders Kinder, Jugendliche und künftige Generationen.",
  },
  {
    frage: "Warum ist BNE keine Zusatzaufgabe, sondern Grundhaltung?",
    antwort: "Weil Nachhaltigkeit alle Bereiche von Bildung betrifft.",
  },
];

export default function Flipcards() {
  const [flipped, setFlipped] = useState(Array(cards.length).fill(false));

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-bneGreen">📚 Flipcards – BNE Allgemein</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full h-48 perspective cursor-pointer"
            onClick={() => handleFlip(index)}
          >
            <div
              className={`relative w-full h-full duration-700 preserve-3d ${
                flipped[index] ? "rotate-y-180" : ""
              }`}
            >
              {/* Vorderseite */}
              <div className="absolute w-full h-full backface-hidden bg-white border border-bneGreen rounded-xl p-4 shadow-md flex items-center justify-center text-bneGreen font-semibold text-lg text-center">
                {card.frage}
              </div>

              {/* Rückseite */}
              <div className="absolute w-full h-full backface-hidden bg-bneGreen text-white border rounded-xl p-4 shadow-md flex items-center justify-center text-center rotate-y-180">
                {card.antwort}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

