import React from "react";
import "./Slider.css";

const labels = [
  "trifft zu",
  "trifft eher zu",
  "teils-teils",
  "trifft eher nicht zu",
  "trifft nicht zu",
];

const QuestionSlider = ({ value = 0, onChange }) => {
  return (
    <div className="slider-wrapper">
      <input
        type="range"
        min="0"
        max={labels.length - 1}
        step="1"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="slider"
        style={{
          backgroundSize: `${(value / (labels.length - 1)) * 100}% 100%`,
        }}
        aria-label={`Antwort auswählen: ${labels[value]}`}
      />
      {/* Das gewählte Label als große Info darunter */}
      <div className="selected-label-mobile">{labels[value]}</div>
      <div className="labels-row">
        {labels.map((label, index) => (
          <div
            key={index}
            className="label"
            style={{ left: `${(index / (labels.length - 1)) * 100}%` }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionSlider;


