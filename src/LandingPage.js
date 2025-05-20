import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo-lra-muenchen.png";
import banner from "./blumenbanner.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/fragebogen");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-start px-8 py-6 space-x-6">
          <img
            src={logo}
            alt="Landratsamt München Logo"
            className="h-24 w-auto md:h-28"
          />
          <span className="text-3xl md:text-4xl font-bold text-gray-900">
            Landratsamt München
          </span>
        </div>
      </header>

      {/* Bannerbild mit Navigation überlappt */}
      <div className="w-full relative">
        <div className="relative w-full">
          <img
            src={banner}
            alt="Blumenbanner Landkreis München"
            className="w-full object-cover"
            style={{
              height: "300px",
              objectPosition: "right top",
            }}
          />

          {/* Navigationsbalken */}
          <nav className="absolute bottom-0 left-0 right-0 bg-gray-100 text-gray-900 text-lg md:text-xl font-semibold py-4 md:py-5 shadow-md">
            <div className="max-w-full flex justify-evenly px-4 md:px-10">
              <span className="hover:underline cursor-pointer">Bürgerservice</span>
              <span className="hover:underline cursor-pointer">Themen</span>
              <span className="hover:underline cursor-pointer text-blue-900">BNE</span>
              <span className="hover:underline cursor-pointer">Landkreis</span>
              <span className="hover:underline cursor-pointer">Kontakt</span>
            </div>
          </nav>
        </div>
      </div>

      {/* Hauptinhalt */}
      <main className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl font-semibold text-blue-900 mb-4">
          Bildung für nachhaltige Entwicklung (BNE)
        </h1>
        <p className="mb-6 text-gray-800 leading-relaxed">
          Im Rahmen unserer Bildungsstrategie für nachhaltige Entwicklung im Landkreis München
          laden wir Sie herzlich ein, an diesem digitalen Fragebogen teilzunehmen. 
          Ihre Einschätzungen und Anregungen helfen uns dabei, BNE sichtbar zu machen.
        </p>
        <button
          onClick={handleStart}
          className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition font-medium shadow text-base"
        >
          🔹 BNE-Fragebogen starten
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Landratsamt München
      </footer>
    </div>
  );
};

export default LandingPage;

