import React, { useState } from 'react';

const questions = [
  { id: 1, text: "Unsere Mitarbeitenden werden regelmäßig zu Nachhaltigkeit und globalen Zielen fortgebildet." },
  { id: 2, text: "Nachhaltigkeit wird systematisch in unsere Programmplanung integriert." },
  { id: 3, text: "Unsere Bildungsangebote orientieren sich an Prinzipien wie Partizipation, Lebensweltbezug und Zukunftsfähigkeit." },
  { id: 4, text: "Wir fördern bei Teilnehmenden das Erkennen globaler Zusammenhänge." },
  { id: 5, text: "Wir bieten regelmäßig Angebote zu ökologischen, sozialen und wirtschaftlichen Themen an, die zu nachhaltigem Handeln im Alltag anregen." },
  { id: 6, text: "Wir holen Rückmeldungen zu Bewusstsein und Handlungsbereitschaft ein." },
  { id: 7, text: "Wir analysieren unseren Beitrag zu globalen Zielen mit Hilfe von Indikatoren." },
  { id: 8, text: "Evaluationsergebnisse werden genutzt, um unsere Angebote weiterzuentwickeln." },
  { id: 9, text: "Unsere Einrichtung achtet auf einen ressourcenschonenden Alltag (Energie, Abfall, Beschaffung)." },
  { id: 10, text: "Werte wie Solidarität, Gerechtigkeit und Umweltbewusstsein werden aktiv gelebt." },
  { id: 11, text: "Unsere Einrichtung arbeitet mit Partnern zusammen, die ebenfalls für Nachhaltigkeit stehen." },
  { id: 12, text: "Armut wird in unserer Region als relevantes Thema wahrgenommen." },
  { id: 13, text: "Unsere Einrichtung hat sich bereits in Projekten gegen Armut engagiert." },
  { id: 14, text: "Besucher*innen mit unterschiedlichen sprachlichen oder kulturellen Hintergründen fühlen sich angesprochen." },
  { id: 15, text: "Bei der Angebotsplanung werden verschiedene Zielgruppen aktiv einbezogen." },
  { id: 16, text: "Es finden regelmäßig Angebote zu Ernährung, Hunger, nachhaltiger Landwirtschaft und Gesundheitsthemen statt." },
  { id: 17, text: "Der Bezug zur Lebenswelt der Teilnehmenden wird bei den Themen Ernährung und Gesundheit berücksichtigt." },
  { id: 18, text: "Die Relevanz der Themen Ernährung und Gesundheit wird für unsere Zielgruppe als hoch eingeschätzt." },
  { id: 19, text: "Individuelle Lern- und Entwicklungsbedürfnisse der Kinder werden berücksichtigt." },
  { id: 20, text: "Kinder können eigene Ideen oder Themen in den Alltag einbringen." },
  { id: 21, text: "Es gibt gezielte Angebote zur Förderung sozialer Kompetenzen." },
  { id: 22, text: "Verschiedene Lernformen werden bewusst in den Alltag integriert." },
  { id: 23, text: "Inwieweit trägt Ihre Einrichtung dazu bei, Bildungsangebote unabhängig von sozialer oder kultureller Herkunft zugänglich zu machen?" },
  { id: 24, text: "Unsere Einrichtung stellt sicher, dass Kinder unabhängig von ihrem Geschlecht gleichberechtigt an allen Bildungsangeboten teilnehmen können." },
  { id: 25, text: "Inwieweit spiegeln die in Ihrer Einrichtung verwendeten Materialien unterschiedliche Lebensrealitäten und Rollenbilder wider, um Diversität und Inklusion zu fördern?" },
  { id: 26, text: "Geschlechterspezifische Bedürfnisse werden pädagogisch berücksichtigt." },
  { id: 27, text: "Im Alltag wird auf sparsamen Umgang mit Wasser und Energie geachtet und entsprechende Maßnahmen werden umgesetzt." },
  { id: 28, text: "Die Einrichtung beteiligt sich an Initiativen zum Schutz von Wasserressourcen." },
  { id: 29, text: "Energie- und wasserbezogene Themen werden regelmäßig in Angeboten behandelt, wobei verschiedene Energieformen thematisiert und der Bezug zur Lebenswelt der Teilnehmenden hergestellt wird." },
  { id: 30, text: "Geräte wie Computer oder Projektoren werden möglichst lange genutzt." },
  { id: 31, text: "Mit dem Thema Digitalisierung wird reflektiert umgegangen." },
  { id: 32, text: "Abfallvermeidung wird aktiv betrieben." },
  { id: 33, text: "Die Mobilität der Mitarbeitenden wird nachhaltig gestaltet." },
  { id: 34, text: "Der Umgang mit Papier, Wasser und Energie ist ressourcenschonend organisiert." },
  { id: 35, text: "Es gibt Projekte zur Sensibilisierung für bewussten Konsum." },
  { id: 36, text: "Die Einrichtung engagiert sich in Projekten zum Umwelt-, Natur- und Artenschutz (z.B. Schutz von Meeren, Wäldern oder Tieren)." },
  { id: 37, text: "Beim Einkauf wird auf nachhaltige Produkte geachtet." },
  { id: 38, text: "Die Einrichtung reflektiert regelmäßig ihre eigenen Nachhaltigkeitsziele und -maßnahmen." },
  { id: 39, text: "Unsere Einrichtung kooperiert aktiv mit lokalen und globalen Partnern für nachhaltige Entwicklung." },
  { id: 40, text: "Wir nehmen regelmäßig an Fortbildungen und Netzwerktreffen zum Thema BNE teil." }
];

const likertScale = [
  { value: 1, label: "trifft nicht zu" },
  { value: 2, label: "trifft eher nicht zu" },
  { value: 3, label: "teils-teils" },
  { value: 4, label: "trifft eher zu" },
  { value: 5, label: "trifft zu" }
];

const learningResources = [
  {
    title: "🎥 Einführung in BNE (YouTube)",
    link: "https://www.youtube.com/watch?v=nx2jE9xEg3g"
  },
  {
    title: "🌍 Klimaschutz in der Bildung (SDG 13)",
    link: "https://www.bne-portal.de/de/bne-umsetzen/klimaschutz-und-bne-22842"
  },
  {
    title: "🤝 SDG 17 – Partnerschaften stärken",
    link: "https://www.engagement-global.de/sdg17.html"
  },
  {
    title: "📘 Flipcards zu SDGs (PDF)",
    link: "https://www.bne-portal.de/files/flipcards_sdgs_bne.pdf"
  }
];

export default function Questionnaire() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [questions[current].id]: value });
  };

  const next = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setCompleted(true);
    }
  };

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const restart = () => {
    setAnswers({});
    setCurrent(0);
    setCompleted(false);
  };

  // --- NEU: Auswertung berechnen ---
  const positiveCount = Object.values(answers).filter(v => v >= 4).length;

  let resultText = "";
  if (positiveCount >= 30) {
    resultText = "✅ Ihre Einrichtung setzt bereits viele Prinzipien nachhaltiger Entwicklung um – sehr gut!";
  } else if (positiveCount >= 15) {
    resultText = "🟡 Ihre Einrichtung hat viele nachhaltige Ansätze – aber es gibt noch Entwicklungspotenzial.";
  } else {
    resultText = "🔴 Ihre Einrichtung steht am Anfang der BNE-Umsetzung. Die folgenden Lernmaterialien helfen Ihnen weiter.";
  }

  if (completed) {
    return (
      <div className="max-w-xl mx-auto p-6 bg-bneBeige rounded-xl shadow-md text-center space-y-6">
        <h2 className="text-2xl font-bold text-bneGreen">🎉 Vielen Dank für Ihre Teilnahme!</h2>

        {/* AUSWERTUNG */}
        <p className="text-gray-800 text-lg">
          Sie haben <strong>{positiveCount}</strong> von {questions.length} Aussagen mit <em>„trifft (eher) zu“</em> beantwortet.
        </p>
        <p className="text-bneGreen font-medium">{resultText}</p>

        {/* LERNMATERIALIEN */}
        <div className="mt-6 text-left">
          <h3 className="text-xl font-bold mb-2 text-gray-800">📚 Empfohlene Lernmaterialien:</h3>
          <ul className="list-disc list-inside space-y-2">
            {learningResources.map((item, idx) => (
              <li key={idx}>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button onClick={restart} className="mt-6 bg-bneGreen text-bneBeige px-4 py-2 rounded">
          🔁 Fragebogen neu starten
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-bneBeige rounded-xl shadow-md text-center">
      <div className="mb-4 text-gray-700 font-semibold">
        Frage {current + 1} von {questions.length}
      </div>

      <div className="mb-6 text-xl font-bold text-bneGreen">
        {questions[current].text}
      </div>

      <div className="flex flex-col gap-3 mb-6">
        {likertScale.map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleAnswer(opt.value)}
            className={`py-3 rounded border transition font-semibold ${
              answers[questions[current].id] === opt.value
                ? 'bg-bneGreen text-bneBeige border-bneGreen'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={prev}
          disabled={current === 0}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Zurück
        </button>
        <button
          onClick={next}
          disabled={!answers[questions[current].id]}
          className="bg-bneGreen text-bneBeige px-4 py-2 rounded disabled:opacity-50"
        >
          {current < questions.length - 1 ? 'Weiter' : 'Fertig'}
        </button>
      </div>
    </div>
  );
}
