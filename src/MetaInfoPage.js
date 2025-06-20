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
    <div className="min-h-screen bg-bneBeige text-gray-800 px-6 py-16">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-bneGreen mb-6 flex items-center gap-2">
          🧾 Meta-Informationen zum BNE-Prototyp
        </h1>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 mb-8 rounded">
          Diese Angaben sind freiwillig und dienen ausschließlich der anonymen Auswertung nach Tätigkeitsfeld und Zielgruppen.
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleContinue(); }}>
          {/* 1. Rolle */}
          <div>
            <label htmlFor="rolle" className="font-semibold block mb-2">
              1. Welche Rolle trifft am besten auf Sie zu?
            </label>
            <select id="rolle" name="rolle" className="w-full p-2 border rounded mb-2" defaultValue="">
              <option value="" disabled>Bitte auswählen …</option>
              <option>Pädagogische Fachkraft</option>
              <option>Auszubildende</option>
              <option>Ehrenamtlich tätig</option>
              <option>Leitung</option>
              <option>Koordination</option>
            </select>
            <label htmlFor="andereRolle" className="sr-only">Andere Rolle (optional)</label>
            <input
              type="text"
              id="andereRolle"
              name="andereRolle"
              placeholder="Andere Rolle (optional)"
              className="w-full p-2 border rounded"
            />
          </div>

          {/* 2. Bereich */}
          <div>
            <label htmlFor="bereich" className="font-semibold block mb-2">
              2. In welchem Bereich sind Sie beruflich tätig?
            </label>
            <select id="bereich" name="bereich" className="w-full p-2 border rounded mb-2" defaultValue="">
              <option value="" disabled>Bitte auswählen …</option>
              <option>Kita</option>
              <option>Familienzentrum</option>
              <option>Museum</option>
              <option>Volkshochschule</option>
              <option>Offene Kinder- und Jugendarbeit</option>
            </select>
            <label htmlFor="andererBereich" className="sr-only">Anderer Bereich (optional)</label>
            <input
              type="text"
              id="andererBereich"
              name="andererBereich"
              placeholder="Anderer Bereich (optional)"
              className="w-full p-2 border rounded"
            />
          </div>

          {/* 3. Altersgruppe */}
          <div>
            <label htmlFor="altersgruppe" className="font-semibold block mb-2">
              3. Mit welcher Altersgruppe arbeiten Sie hauptsächlich?
            </label>
            <select id="altersgruppe" name="altersgruppe" className="w-full p-2 border rounded" defaultValue="">
              <option value="" disabled>Bitte auswählen …</option>
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
            <label htmlFor="sitz" className="font-semibold block mb-2">
              4. Sitz Ihrer Organisation:
            </label>
            <select id="sitz" name="sitz" className="w-full p-2 border rounded" defaultValue="">
              <option value="" disabled>Bitte auswählen …</option>
              {kommunen.map((ort, index) => (
                <option key={index}>{ort}</option>
              ))}
            </select>
          </div>

          {/* 5. Tätigkeitsort */}
          <div>
            <label htmlFor="aktiv" className="font-semibold block mb-2">
              5. Wo ist Ihre Organisation aktiv tätig?
            </label>
            <select id="aktiv" name="aktiv" className="w-full p-2 border rounded" defaultValue="">
              <option value="" disabled>Bitte auswählen …</option>
              {kommunen.map((ort, index) => (
                <option key={index}>{ort}</option>
              ))}
            </select>
          </div>

          {/* Weiter Button */}
          <div className="pt-6 text-right">
            <button
              type="submit"
              className="bg-bneGreen text-white font-semibold px-6 py-2 rounded hover:bg-green-700"
            >
              Zum Fragebogen →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MetaInfoPage;


