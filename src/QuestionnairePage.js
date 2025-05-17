import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const questions = [
  { id: 'q1', text: 'Wie oft thematisieren Sie Umweltschutz in Ihrer Arbeit?' },
  { id: 'q2', text: 'Wie stark fördern Sie soziale Gerechtigkeit?' },
  { id: 'q3', text: 'Beziehen Sie Nachhaltigkeitsthemen in Ihre Angebote mit ein?' },
  { id: 'q4', text: 'Wie gut motivieren Sie Teilnehmende zur aktiven Mitgestaltung?' },
  { id: 'q5', text: 'Arbeiten Sie mit anderen Organisationen zusammen, um Nachhaltigkeit zu fördern?' },
  { id: 'q6', text: 'Wie oft reflektieren Sie Ihre eigene Rolle in Bezug auf nachhaltige Entwicklung?' },
  { id: 'q7', text: 'Nutzen Sie Materialien, die Umweltbewusstsein stärken?' },
  { id: 'q8', text: 'Fördern Sie interkulturelle Verständigung und Respekt?' },
  { id: 'q9', text: 'Wie oft binden Sie die Teilnehmenden in Entscheidungsprozesse ein?' },
  { id: 'q10', text: 'Setzen Sie sich für soziale Gerechtigkeit und Chancengleichheit ein?' },
  { id: 'q11', text: 'Wie oft thematisieren Sie klimafreundliches Verhalten?' },
  { id: 'q12', text: 'Fördern Sie Verantwortungsbewusstsein gegenüber zukünftigen Generationen?' },
  { id: 'q13', text: 'Beziehen Sie globale Zusammenhänge in Ihre Arbeit ein?' },
  { id: 'q14', text: 'Wie stark regen Sie zur kritischen Auseinandersetzung mit Nachhaltigkeitsthemen an?' },
  { id: 'q15', text: 'Organisieren Sie Aktionen oder Projekte zum Umweltschutz?' },
  { id: 'q16', text: 'Wie häufig arbeiten Sie mit Partnern aus der Zivilgesellschaft zusammen?' },
  { id: 'q17', text: 'Geben Sie praktische Tipps für nachhaltiges Handeln?' },
  { id: 'q18', text: 'Fördern Sie Toleranz und friedliches Zusammenleben?' },
  { id: 'q19', text: 'Wie oft nutzen Sie digitale Medien, um Nachhaltigkeit zu vermitteln?' },
  { id: 'q20', text: 'Unterstützen Sie die Teilnehmenden bei der Umsetzung nachhaltiger Ideen?' },
  { id: 'q21', text: 'Wie stark berücksichtigen Sie soziale Aspekte in Ihren Programmen?' },
  { id: 'q22', text: 'Setzen Sie sich für den Erhalt der Biodiversität ein?' },
  { id: 'q23', text: 'Fördern Sie den bewussten Umgang mit Ressourcen?' },
  { id: 'q24', text: 'Wie oft sensibilisieren Sie für nachhaltigen Konsum?' },
  { id: 'q25', text: 'Stärken Sie die Handlungskompetenz der Teilnehmenden?' },
  { id: 'q26', text: 'Wie sehr integrieren Sie Themen der globalen Gerechtigkeit?' },
  { id: 'q27', text: 'Unterstützen Sie lokale Initiativen zum Umweltschutz?' },
  { id: 'q28', text: 'Wie oft thematisieren Sie nachhaltige Mobilität?' },
  { id: 'q29', text: 'Fördern Sie ein Bewusstsein für Klimawandel und seine Folgen?' },
  { id: 'q30', text: 'Arbeiten Sie inklusiv und barrierefrei?' },
  { id: 'q31', text: 'Wie oft ermutigen Sie zu ehrenamtlichem Engagement?' },
  { id: 'q32', text: 'Nutzen Sie spielerische Methoden, um Nachhaltigkeit zu vermitteln?' },
  { id: 'q33', text: 'Wie stark beziehen Sie lokale Lebenswelten in Ihre Angebote ein?' },
  { id: 'q34', text: 'Fördern Sie kreatives Denken und Problemlösen?' },
  { id: 'q35', text: 'Setzen Sie sich für Frieden und Konfliktlösung ein?' },
  { id: 'q36', text: 'Wie oft bieten Sie Fortbildungen zum Thema Nachhaltigkeit an?' },
  { id: 'q37', text: 'Unterstützen Sie die Vernetzung von Akteur*innen im Nachhaltigkeitsbereich?' },
  { id: 'q38', text: 'Wie stark fördern Sie das Bewusstsein für Menschenrechte?' },
  { id: 'q39', text: 'Fördern Sie den Dialog zwischen verschiedenen Generationen?' },
  { id: 'q40', text: 'Wie oft reflektieren Sie Ihre Lernprozesse im Bereich Nachhaltigkeit?' },
];

const QUESTIONS_PER_PAGE = 4;

const answerOptions = [
  { value: 1, label: 'trifft zu' },
  { value: 2, label: 'trifft eher zu' },
  { value: 3, label: 'teils - teils' },
  { value: 4, label: 'trifft eher nicht zu' },
  { value: 5, label: 'trifft nicht zu' },
];

export default function QuestionnairePage() {
  const { pageNumber } = useParams();
  const pageIndex = parseInt(pageNumber, 10) - 1;
  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
  const navigate = useNavigate();

  const [answers, setAnswers] = useState(() => {
    const saved = localStorage.getItem('bneAnswers');
    return saved ? JSON.parse(saved) : {};
  });

  const currentQuestions = questions.slice(
    pageIndex * QUESTIONS_PER_PAGE,
    (pageIndex + 1) * QUESTIONS_PER_PAGE
  );

  useEffect(() => {
    const newAnswers = { ...answers };
    let changed = false;
    currentQuestions.forEach(q => {
      if (newAnswers[q.id] === undefined) {
        newAnswers[q.id] = 3; // Default = "teils - teils"
        changed = true;
      }
    });
    if (changed) setAnswers(newAnswers);
  }, [pageIndex]);

  useEffect(() => {
    localStorage.setItem('bneAnswers', JSON.stringify(answers));
  }, [answers]);

  const handleAnswer = (id, value) => {
    setAnswers({ ...answers, [id]: parseInt(value, 10) });
  };

  const isComplete = currentQuestions.every(q => answers[q.id] !== undefined);

  const next = () => {
    if (pageIndex < totalPages - 1) {
      navigate(`/seite/${pageIndex + 2}`);
    } else {
      navigate('/auswertung');
    }
  };

  const prev = () => {
    if (pageIndex > 0) {
      navigate(`/seite/${pageIndex}`);
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold text-bneGreen mb-6">
        Fragebogen Seite {pageIndex + 1} von {totalPages}
      </h2>

      {currentQuestions.map(q => (
        <div key={q.id} className="mb-8">
          <p className="mb-2 font-semibold">{q.text}</p>
          <div className="flex justify-between max-w-xl">
            {answerOptions.map(option => (
              <label key={option.value} className="flex flex-col items-center cursor-pointer">
                <input
                  type="radio"
                  name={q.id}
                  value={option.value}
                  checked={answers[q.id] === option.value}
                  onChange={(e) => handleAnswer(q.id, e.target.value)}
                  className="mb-1"
                />
                <span className="text-sm">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className="flex justify-between mt-6">
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
    </div>
  );
}
