// src/MetaInfoPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const kommunen = [
  "Aschheim", "Aying", "Baierbrunn", "Brunnthal", "Feldkirchen",
  "Garching b. München", "Grasbrunn", "Grünwald", "Haar", "Hohenbrunn",
  "Ismaning", "Kirchheim b. München", "Neubiberg", "Neuried", "Oberhaching",
  "Oberschleißheim", "Ottobrunn", "Planegg", "Pullach i. Isartal", "Putzbrunn",
  "Sauerlach", "Schäftlarn", "Straßlach-Dingharting", "Taufkirchen", "Unterföhring",
  "Unterhaching", "Unterschleißheim", "Gräfelfing", "München-Land"
];

const MetaInfoPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/fragebogen");
  };

  return (
    <div className="min-h-screen bg-bneBeige text-gray-800 p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-bneGreen mb-6">
        Meta-Informationen zum BNE-Prototyp
      </h1>
      <p className="mb-6">
        Um eine fundierte und datenschutzkonforme Auswertung zu ermöglichen,
        erheben wir vor dem Start des Fragebogens freiwillige Angaben:
      </p>

      <div className="space-y-6">

        {/* 1. Rolle */}
        <div>
          <label className="font-semibold block mb-2">
            1. Welche Rolle trifft am besten auf Sie zu?
          </label>
          <select defaultValue="" className="w-full p-2 border rounded mb-2">
            <option value="" disabled hidden>
              Bitte auswählen …
            </option>
            <option>Pädagogische Fachkraft</option>
            <option>Auszubildende</option>
            <option>Ehrenamtlich tätig</option>
            <option>Leitung</option>
            <option>Koordination</option>
          </select>
          <input
            type="text"
            placeholder="Andere Rolle (optional)"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* 2. Bereich */}
        <div>
          <label className="font-semibold block mb-2">
            2. In welchem Bereich sind Sie beruflich tätig?
          </label>
          <select defaultValue="" className="w-full p-2 border rounded mb-2">
            <option value="" disabled hidden>
              Bitte auswählen …
            </option>
            <option>Kita</option>
            <option>Familienzentrum</option>
            <option>Museum</option>
            <option>Volkshochschule</option>
            <option>Offene Kinder- und Jugendarbeit</option>
          </select>
          <input
            type="text"
            placeholder="Anderer Bereich (optional)"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* 3. Altersgruppe */}
        <div>
          <label className="font-semibold block mb-2">
            3. Mit welcher Altersgruppe arbeiten Sie hauptsächlich?
          </label>
          <select defaultValue="" className="w-full p-2 border rounded">
            <option value="" disabled hidden>
              Bitte auswählen …
            </option>
            <option>0 - 6 Jahre</option>
            <option>7 - 14 Jahre</option>
            <option>15 - 25 Jahre</option>
            <option>26 - 45 Jahre</option>
            <option>46 - 67 Jahre</option>
            <option>68+ Jahre</option>
            <option>Altersunabhängig</option>
          </select>
        </div>

        {/* 4. Sitz der Organisation */}
<div>
  <label className="font-semibold block mb-2">
    4. Sitz Ihrer Organisation:
  </label>
  <select defaultValue="" className="w-full p-2 border rounded">
    <option value="" disabled hidden>
      Bitte auswählen …
    </option>
    {kommunen.map((ort, index) => (
      <option key={index}>{ort}</option>
    ))}
  </select>
</div>

{/* 5. Tätigkeitsort */}
<div>
  <label className="font-semibold block mb-2">
    5. Wo ist Ihre Organisation aktiv tätig?
  </label>
  <select defaultValue="" className="w-full p-2 border rounded">
    <option value="" disabled hidden>
      Bitte auswählen …
    </option>
    {kommunen.map((ort, index) => (
      <option key={index}>{ort}</option>
    ))}
  </select>
</div>


        {/* Weiter Button */}
        <div className="pt-6 text-right">
          <button
            onClick={handleContinue}
            className="bg-bneGreen text-white font-semibold px-6 py-2 rounded hover:bg-green-700"
          >
            Zum Fragebogen →
          </button>
        </div>
      </div>
    </div>
  );
};

export default MetaInfoPage;


