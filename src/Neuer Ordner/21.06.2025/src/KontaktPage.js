// src/KontaktPage.js
import React from "react";

const KontaktPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-bneGreen">📬 Kontakt</h1>

      {/* Ansprechpartnerinnen */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">Marianna Unger</h2>
        <p className="text-gray-700 mb-1">Bildungsmanagement</p>
        <a
          href="mailto:Marianna.Unger@lra-m.bayern.de"
          className="text-blue-600 underline break-all"
        >
          Marianna.Unger@lra-m.bayern.de
        </a>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">Lisa Raich</h2>
        <p className="text-gray-700 mb-1">Bildungsmonitoring</p>
        <a
          href="mailto:Lisa.Raich@lra-m.bayern.de"
          className="text-blue-600 underline break-all"
        >
          Lisa.Raich@lra-m.bayern.de
        </a>
      </div>

      {/* Adresse Landratsamt */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Landratsamt München</h2>
        <p className="text-gray-700 leading-relaxed">
          Sachgebiet 2.1.4.4 – Jugend- und Familienförderung, Bildungsbüro<br />
          Mariahilfplatz 17<br />
          81541 München
        </p>
        <p className="mt-4 text-gray-700">
          Telefon:{" "}
          <a href="tel:+498962215145" className="text-blue-600 underline">
            089 / 6221-5145
          </a>
          <br />
          Fax: 089 / 6221 44-5145
        </p>
      </div>

      {/* Förderung & Webseite */}
      <div className="mt-12 text-sm text-gray-600">
        <p>
          Das Projekt wird im Rahmen des Programms <strong>„Bildungskommunen“</strong> durch das
          Bundesministerium für Bildung und Forschung und die Europäische Union über den Europäischen
          Sozialfonds Plus (ESF Plus) gefördert.
        </p>
        <p className="mt-4">
          Weitere Informationen finden Sie unter&nbsp;
          <a
            href="http://www.landkreis-muenchen.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            www.landkreis-muenchen.de
          </a>
        </p>
      </div>
    </div>
  );
};

export default KontaktPage;
