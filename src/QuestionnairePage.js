import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuestionSlider from "./QuestionSlider";

const questions = [
  "Wie gut fördert Ihre Einrichtung nachhaltiges Denken?",
  "Wie oft werden Themen wie Klimawandel oder Gerechtigkeit thematisiert?",
  "Wie aktiv beteiligen sich die Teilnehmenden in Entscheidungsprozessen?",
  "Gibt es Partnerschaften mit anderen Bildungseinrichtungen?",
  "Wird in Ihrer Einrichtung ressourcenschonend gearbeitet?",
  "Welche Rolle spielt Demokratiebildung im Alltag?",
  "Werden kulturelle Unterschiede aktiv berücksichtigt?",
  "Wie wird verantwortungsvolles Konsumverhalten gefördert?",
  "Wie wird Medienkompetenz im Sinne nachhaltiger Entwicklung vermittelt?",
  "Wie reflektieren die Fachkräfte ihr eigenes Verhalten?",
  "Gibt es Projekte zu sozialem Engagement?",
  "Wie wird mit Konflikten in der Gruppe umgegangen?",
  "Werden globale Zusammenhänge thematisiert?",
  "Werden außerschulische Lernorte genutzt?",
  "Wie werden Kinder und Jugendliche zur Mitgestaltung ermutigt?",
  "Gibt es eine langfristige BNE-Strategie?",
  "Wie oft werden die Methoden reflektiert und angepasst?",
  "Welche Rolle spielen Emotionen im Lernprozess?",
  "Wie wird Kreativität im Sinne nachhaltiger Lösungen gefördert?",
  "Werden die SDGs in der Bildungsarbeit sichtbar gemacht?",
  "Wie divers ist das pädagogische Team?",
  "Werden Benachteiligungen aktiv abgebaut?",
  "Wie oft finden Fortbildungen zu BNE statt?",
  "Wie transparent ist die Kommunikation in der Einrichtung?",
  "Werden alternative Zukunftsszenarien besprochen?",
  "Wie wird nachhaltige Mobilität gefördert?",
  "Welche Rolle spielt Digitalisierung in der BNE?",
  "Wie werden Eltern in die Arbeit einbezogen?",
  "Gibt es Austausch mit internationalen Partnern?",
  "Wie wird mit Fehlern umgegangen?",
  "Werden Methoden der Zukunftswerkstätten eingesetzt?",
  "Wie wird der Lernerfolg in BNE gemessen?",
  "Gibt es eine Feedbackkultur?",
  "Wie wird Eigenverantwortung gefördert?",
  "Werden Aktivitäten regelmäßig dokumentiert?",
  "Wie werden Zielkonflikte besprochen?",
  "Wie werden die Themen Umwelt, Soziales, Ökonomie verknüpft?",
  "Wie viel Gestaltungsspielraum haben Fachkräfte?",
  "Werden auch unbequeme Themen offen angesprochen?",
  "Wie oft werden externe Expert*innen eingeladen?"
];

const questionsPerPage = 4;

const QuestionnairePage = ({ responses, setResponses }) => {
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const page = parseInt(pageNumber || "1", 10);

  const startIndex = (page - 1) * questionsPerPage;
  const currentQuestions = questions.slice(startIndex, startIndex + questionsPerPage);

  const handleSliderChange = (questionIndex, value) => {
    const updatedResponses = [...responses];
    updatedResponses[questionIndex] = value;
    setResponses(updatedResponses);
  };

  const handleNext = () => {
    if (page < Math.ceil(questions.length / questionsPerPage)) {
      navigate(`/seite/${page + 1}`);
    } else {
      navigate("/auswertung");
    }
  };

  const handleBack = () => {
    if (page > 1) {
      navigate(`/seite/${page - 1}`);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Fragen – Seite {page}</h1>

      {currentQuestions.map((question, index) => {
        const questionGlobalIndex = startIndex + index;
        return (
          <div key={questionGlobalIndex} className="mb-8">
            <p className="mb-2 font-semibold text-xl">
              {questionGlobalIndex + 1}. {question}
            </p>
            <QuestionSlider
              value={responses[questionGlobalIndex] ?? 0}
              onChange={(value) => handleSliderChange(questionGlobalIndex, value)}
            />
          </div>
        );
      })}

      <div className="flex justify-between mt-8">
        {page > 1 ? (
          <button
            onClick={handleBack}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
          >
            Zurück
          </button>
        ) : (
          <div></div>
        )}

        <button
          onClick={handleNext}
          className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded"
        >
          {page < Math.ceil(questions.length / questionsPerPage)
            ? "Weiter"
            : "Zur Auswertung"}
        </button>
      </div>
    </div>
  );
};

export default QuestionnairePage;
