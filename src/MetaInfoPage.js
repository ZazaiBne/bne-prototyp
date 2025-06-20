// src/MetaInfoPage.js
import React from "react";
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
    <div className="min-h-screen bg-bneBeige text-gray-800 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-bneGreen mb-4 flex items-center gap-2">
          🧾 Meta-Informationen zum BNE-Prototyp
        </h1>

        <p className="text-gray-700 text-sm sm:text-base italic mb-8">
          Diese Angaben sind freiwillig und dienen ausschließlich der anonymen Auswertung nach Tätigkeitsfeld und Zielgruppen.
        </p>

        <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); handleContinue(); }}>
          {/* 1. Rolle */}
          <div>
            <label htmlFor="rolle" className="font-semibold block mb-1">
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
            <input
              type="text"
              name="andereRolle"
              placeholder="Andere Rolle (optional)"
              className="w-full p-2 border rounded"
            />
          </div>

          {/* 2. Bereich */}
          <div>
            <label htmlFor="bereich" className="font-semibold block mb-1">
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
            <input
              type="text"
              name="andererBereich"
              placeholder="Anderer Bereich (optional)"
              className="w-full p-2 border rounded"
            />
          </div>

          {/* 3. Altersgruppe */}
          <div>
            <label htmlFor="altersgruppe" className="font-semibold block mb-1">
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
            <label htmlFor="sitz" className="font-semibold block mb-1">
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
            <label htmlFor="aktiv" className="font-semibold block mb-1">
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


