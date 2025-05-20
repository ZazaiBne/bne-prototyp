import React from "react";
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

  const handleChange = (index, value) => {
    const updated = [...responses];
    updated[index] = value;
    setResponses(updated);
  };

  const handleSubmit = () => {
    navigate("/auswertung");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 bg-bneBeige min-h-screen">
      <h1 className="text-2xl font-bold text-bneGreen mb-6">📋 Fragebogen – Bildung für nachhaltige Entwicklung</h1>

      {questions.map((q, i) => (
        <section
          key={q.id}
          className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm mb-6"
        >
          <fieldset>
            <legend className="font-semibold text-gray-800 mb-3 leading-relaxed text base md:text-lg">
              {q.id}. {q.text}
            </legend>
            <div className="space-y-2">
              {options.map((label, idx) => (
                <label key={idx} className="block">
                  <input
                    type="radio"
                    name={`frage-${q.id}`}
                    className="mr-2"
                    checked={responses[i] === idx + 1}
                    onChange={() => handleChange(i, idx + 1)}
                  />
                  {label}
                </label>
              ))}
            </div>
          </fieldset>
        </section>
      ))}

      <div className="text-right mt-10">
        <button
          onClick={handleSubmit}
          className="bg-bneGreen text-bneBeige px-6 py-3 rounded hover:bg-green-700 transition"
        >
          🧾 Auswertung anzeigen
        </button>
      </div>
    </div>
  );
};

export default ScrollQuestionnaire;
