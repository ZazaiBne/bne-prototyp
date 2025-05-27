import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo-lra-muenchen.png";
import banner from "./blumenbanner.jpg";

const BNEPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-start px-8 py-5 space-x-6">
          <img
            src={logo}
            alt="Landratsamt München Logo"
            className="h-20 w-auto md:h-28"
          />
          <span className="text-2xl md:text-4xl font-bold text-gray-900">
            Landratsamt München
          </span>
        </div>
      </header>

      {/* Bannerbild + Navigation */}
      <div className="relative w-full overflow-hidden">
        <img
          src={banner}
          alt="Blumenbanner"
          className="w-full object-cover object-[center_top]"
          style={{ height: "440px" }}
        />
        <nav className="absolute bottom-0 left-0 right-0 bg-gray-100 text-gray-900 text-[18px] md:text-xl font-bold py-4 md:py-5 shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between px-6 md:px-10">
            <span className="hover:underline cursor-pointer">Bürgerservice</span>
            <span className="text-blue-900 underline">Themen</span>
            <span className="hover:underline cursor-pointer">Landkreis</span>
            <span className="hover:underline cursor-pointer">Kontakt</span>
          </div>
        </nav>
      </div>

      {/* Hauptinhalt */}
      <main className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold text-blue-900 mb-4">
          Bildung für nachhaltige Entwicklung (BNE)
        </h2>
        <p className="mb-8 text-gray-800 leading-relaxed">
          Im Rahmen unserer Bildungsstrategie für nachhaltige Entwicklung im Landkreis München
          laden wir Sie herzlich ein, an diesem digitalen Fragebogen teilzunehmen.
          Ihre Einschätzungen und Anregungen helfen uns dabei, BNE sichtbarer zu machen.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/meta")}
            className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition font-medium"
          >
            BNE-Fragebogen starten
          </button>

          <a
            href="/newsletter.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded hover:bg-gray-300 transition font-medium text-center"
          >
            📥 Newsletter herunterladen
          </a>
        </div>
      </main>
    </div>
  );
};

export default BNEPage;


