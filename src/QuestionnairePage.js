import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

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
  { id: 23, text: "Unsere Einrichtung trägt dazu bei, Bildungsangebote unabhängig von Herkunft zugänglich zu machen." },
  { id: 24, text: "Unsere Einrichtung stellt sicher, dass Kinder unabhängig vom Geschlecht gleichberechtigt teilnehmen können." },
  { id: 25, text: "Unsere Materialien fördern Diversität und Inklusion." },
  { id: 26, text: "Geschlechterspezifische Bedürfnisse werden pädagogisch berücksichtigt." },
  { id: 27, text: "Wir gehen sparsam mit Wasser und Energie um." },
  { id: 28, text: "Wir beteiligen uns an Initiativen zum Wasserschutz." },
  { id: 29, text: "Wir behandeln regelmäßig Energie- und Umweltthemen in Angeboten." },
  { id: 30, text: "Digitale Geräte werden möglichst lange genutzt." },
  { id: 31, text: "Wir gehen reflektiert mit Digitalisierung um." },
  { id: 32, text: "Wir vermeiden aktiv Abfall." },
  { id: 33, text: "Unsere Mitarbeitenden sind nachhaltig mobil." },
  { id: 34, text: "Ressourcenschonung ist Teil unserer Organisation." },
  { id: 35, text: "Wir sensibilisieren für bewussten Konsum." },
  { id: 36, text: "Wir engagieren uns für Umwelt- und Naturschutz." },
  { id: 37, text: "Wir achten beim Einkauf auf nachhaltige Produkte." },
  { id: 38, text: "Wir reflektieren regelmäßig unsere Nachhaltigkeitsziele." },
  { id: 39, text: "Wir kooperieren mit nachhaltigen Partnern." },
  { id: 40, text: "Wir nehmen regelmäßig an BNE-Fortbildungen teil." }
];

const scaleLabels = ["trifft nicht zu", "trifft eher nicht zu", "teils-teils", "trifft eher zu", "trifft zu"];
const QUESTIONS_PER_PAGE = 4;
export default function QuestionnairePage() {
  const { pageNumber } = useParams();
  const pageIndex = parseInt(pageNumber, 10) - 1;
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('bne-answers');
    if (saved) setAnswers(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('bne-answers', JSON.stringify(answers));
  }, [answers]);

  const start = pageIndex * QUESTIONS_PER_PAGE;
  const currentQuestions = questions.slice(start, start + QUESTIONS_PER_PAGE);
  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);

  const handleAnswer = (id, value) => {
    setAnswers({ ...answers, [id]: parseInt(value) });
  };

  const next = () => {
    if (pageIndex < totalPages - 1) navigate(`/seite/${pageIndex + 2}`);
    else navigate('/auswertung');
  };

  const prev = () => {
    if (pageIndex > 0) navigate(`/seite/${pageIndex}`);
  };

  const isComplete = currentQuestions.every(q => answers[q.id]);

  if (pageNumber === 'auswertung') {
    const positive = Object.values(answers).filter(v => v >= 4).length;

    const learning = [
      { title: "🎥 BNE-Erklärung (YouTube)", link: "https://www.youtube.com/watch?v=nx2jE9xEg3g" },
      { title: "🌍 Klimaschutz in der Bildung", link: "https://www.bne-portal.de/de/bne-umsetzen/klimaschutz-und-bne-22842" },
      { title: "📘 Flipcards zu SDGs", link: "https://www.bne-portal.de/files/flipcards_sdgs_bne.pdf" }
    ];

    let text = "";
    if (positive >= 30) text = "✅ Sehr gute Umsetzung von BNE!";
    else if (positive >= 15) text = "🟡 Solide, aber noch entwicklungsfähig.";
    else text = "🔴 Startpunkt – mit Potenzial nach oben!";

    return (
      <div className="p-10 max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-bneGreen">🎉 Vielen Dank!</h2>
        <p>Du hast <strong>{positive}</strong> von {questions.length} Aussagen mit <em>„trifft (eher) zu“</em> bewertet.</p>
        <p className="text-bneGreen font-medium">{text}</p>
        <h3 className="text-xl mt-6 font-semibold">📚 Empfohlene Lernmaterialien:</h3>
        <ul className="list-disc list-inside space-y-2">
          {learning.map((item, i) => (
            <li key={i}>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            setAnswers({});
            localStorage.removeItem('bne-answers');
            navigate('/seite/1');
          }}
          className="mt-6 bg-bneGreen text-bneBeige px-4 py-2 rounded"
        >
          🔁 Fragebogen neu starten
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-bneBeige min-h-screen">
      <h2 className="text-xl font-semibold text-bneGreen mb-6">
        Seite {pageIndex + 1} von {totalPages}
      </h2>

      <div className="space-y-8">
        {currentQuestions.map((q) => (
          <div key={q.id}>
            <p className="mb-2 font-medium text-gray-800">{q.text}</p>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={answers[q.id] || 3}
              onChange={(e) => handleAnswer(q.id, e.target.value)}
              className="w-full accent-bneGreen"
            />
            <div className="flex justify-between text-sm mt-1 text-gray-600">
              {scaleLabels.map((label, i) => (
                <span key={i} className="w-1/5 text-center">{label}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-between">
        <button
          onClick={prev}
          disabled={pageIndex === 0}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Zurück
        </button>

        <button
          onClick={next}
          disabled={!isComplete}
          className="bg-bneGreen text-bneBeige px-4 py-2 rounded disabled:opacity-50"
        >
          {pageIndex < totalPages - 1 ? 'Weiter' : 'Zur Auswertung'}
        </button>
      </div>

      <div className="mt-6 text-sm text-center text-gray-500">
        {Array.from({ length: totalPages }).map((_, i) => (
          <Link
            key={i}
            to={`/seite/${i + 1}`}
            className={`mx-1 px-2 py-1 rounded ${i === pageIndex ? 'bg-bneGreen text-bneBeige' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            {i + 1}
          </Link>
        ))}
      </div>
    </div>
  );
}
