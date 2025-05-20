// src/QuestionnairePage.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuestionSlider from "./QuestionSlider";
import questions from "./Questionnaire";

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

  // Fortschritt berechnen
  const totalAnswered = responses.filter(r => r > 0).length;
  const progressPercent = Math.round((totalAnswered / questions.length) * 100);

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Fortschrittsbalken */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-bneGreen h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
      <div className="text-sm text-gray-700 mb-2">Fragen beantwortet: {totalAnswered} / {questions.length}</div>
      <h1 className="text-2xl font-bold mb-6">Fragen – Seite {page}</h1>

      {currentQuestions.map((question, index) => {
        const questionGlobalIndex = startIndex + index;
        return (
          <div key={questionGlobalIndex} className="mb-8">
            <p className="mb-2 font-semibold text-xl">
              {questionGlobalIndex + 1}. {question.text}
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

