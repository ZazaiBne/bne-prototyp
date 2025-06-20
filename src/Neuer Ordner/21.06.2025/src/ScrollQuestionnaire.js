// src/ScrollQuestionnaire.js
import React, { useRef } from "react";
import questions from "./Questionnaire";
import { useNavigate } from "react-router-dom";

const options = [
  "trifft zu",
  "trifft eher zu",
  "teils-teils",
  "trifft eher nicht zu",
  "trifft nicht zu",
];

const ScrollQuestionnaire = ({ responses, setResponses }) => {
  const navigate = useNavigate();
  const topRef = useRef(null);

  const handleChange = (index, value) => {
    const updated = [...responses];
    updated[index] = value;
    setResponses(updated);
  };

  const handleSubmit = () => {
    navigate("/auswertung");
  };

  const answeredCount = responses.filter((r) => r > 0).length;
  const progressPercent = Math.round((answeredCount / questions.length) * 100);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 bg-bneBeige min-h-screen">
      <div ref={topRef} />
      <h1 className="text-2xl font-bold text-bneGreen mb-4">
        📋 Fragebogen – Bildung für nachhaltige Entwicklung
      </h1>

      {/* Fortschrittsanzeige */}
      <div className="sticky top-0 z-20 bg-bneBeige pt-2 pb-4 mb-6 shadow-sm">
        <div className="text-sm text-gray-700 mb-1">
          Beantwortet: {answeredCount} / {questions.length}
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-3 bg-bneGreen transition-all"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Fragenliste */}
      {questions.map((q, i) => (
        <div key={q.id}>
          {i % 12 === 0 && i !== 0 && (
            <hr className="my-8 border-gray-300" />
          )}

          <section
            className={`border border-gray-200 p-4 rounded-xl shadow-sm mb-6 ${
              i % 2 === 0 ? "bg-white" : "bg-gray-50"
            }`}
          >
            <fieldset>
              <legend className="font-semibold text-gray-800 mb-3 leading-relaxed text-base md:text-lg">
                {q.id}. {q.text}
              </legend>
              <div className="space-y-3">
                {options.map((label, idx) => (
                  <div key={idx}>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name={`frage-${q.id}`}
                        className="mr-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                        checked={responses[i] === idx + 1}
                        onChange={() => handleChange(i, idx + 1)}
                      />
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </section>
        </div>
      ))}

      {/* Absenden */}
      <div className="text-right mt-10">
        <button
          onClick={handleSubmit}
          className="px-6 py-3 rounded bg-bneGreen text-white hover:bg-green-700 transition font-medium"
        >
          🧾 Auswertung anzeigen
        </button>
      </div>
    </div>
  );
};

export default ScrollQuestionnaire;




