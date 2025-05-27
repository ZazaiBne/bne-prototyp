import React from "react";
import { useNavigate } from "react-router-dom";

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
          <label className="font-semibold block mb-2">1. Welche Rolle trifft am besten auf Sie zu?</label>
          <select className="w-full p-2 border rounded">
            <option>Pädagogische Fachkraft</option>
            <option>Ehrenamtlich Tätige*r</option>
            <option>Leitung / Koordination</option>
            <option>Sonstige</option>
          </select>
        </div>

        {/* 2. Arbeitsbereich */}
        <div>
          <label className="font-semibold block mb-2">2. In welchem Bereich arbeiten Sie hauptsächlich?</label>
          <select className="w-full p-2 border rounded">
            <option>Kita</option>
            <option>Familienzentrum</option>
            <option>Museum</option>
            <option>Volkshochschule</option>
            <option>Offene Kinder- und Jugendarbeit</option>
            <option>Andere</option>
          </select>
        </div>

        {/* 3. Zielgruppe */}
        <div>
          <label className="font-semibold block mb-2">3. Mit welcher Zielgruppe arbeiten Sie hauptsächlich?</label>
          <select className="w-full p-2 border rounded">
            <option>Kinder im Vorschulalter (0–6 Jahre)</option>
            <option>Kinder im Schulalter (6–12 Jahre)</option>
            <option>Jugendliche (13–18 Jahre)</option>
            <option>Erwachsene</option>
            <option>Generationenübergreifend / Familien</option>
            <option>Keine direkte Zielgruppe</option>
          </select>
        </div>

        {/* 4. Eigene Altersgruppe */}
        <div>
          <label className="font-semibold block mb-2">4. Welcher Altersgruppe gehören Sie selbst an?</label>
          <select className="w-full p-2 border rounded">
            <option>Unter 35 Jahre</option>
            <option>35 bis 54 Jahre</option>
            <option>55 Jahre oder älter</option>
            <option>Möchte ich nicht angeben</option>
          </select>
        </div>

        {/* 5. Region */}
        <div>
          <label className="font-semibold block mb-2">5. In welchem Landkreis / Region sind Sie tätig?</label>
          <input
            type="text"
            placeholder="z. B. München-Land, Ebersberg"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="pt-6">
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
