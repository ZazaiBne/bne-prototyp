// src/LandingPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bneBeige text-gray-800">
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 border-b border-gray-300">
        <img
          src="/logo-bne.png"
          alt="BNE-Prototyp Logo"
          className="h-10"
        />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-bneGreen focus:outline-none focus:ring-2 focus:ring-bneGreen rounded"
        >
          ☰
        </button>
      </header>

      {/* Mobile Dropdown-Menü */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-b border-gray-200">
          <ul className="flex flex-col">
            <li
              onClick={() => {
                setSubMenuOpen(!subMenuOpen);
              }}
              className="px-4 py-3 border-t border-gray-100 hover:bg-gray-100 cursor-pointer"
            >
              Themen
            </li>

            {/* Submenü mit angepasstem Text */}
            {subMenuOpen && (
              <div className="ml-4 border-l border-gray-200">
                <span
                  onClick={() => {
                    navigate("/bne");
                    setMenuOpen(false);
                    setSubMenuOpen(false);
                  }}
                  className="block px-4 py-3 hover:bg-gray-100 cursor-pointer whitespace-normal text-sm leading-snug"
                >
                  Bildung für nachhaltige Entwicklung
                </span>
              </div>
            )}

            <li
              onClick={() => {
                navigate("/kontakt");
                setMenuOpen(false);
              }}
              className="px-4 py-3 border-t border-gray-100 hover:bg-gray-100 cursor-pointer"
            >
              Kontakt
            </li>
          </ul>
        </nav>
      )}

      {/* Hauptinhalt */}
      <main className="flex flex-col items-center justify-center px-6 py-16 md:py-32 md:flex-row md:gap-16">
        <div className="max-w-xl text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-bneGreen">
            Bildung für nachhaltige Entwicklung sichtbar machen
          </h1>
          <p className="text-lg text-gray-700">
            Unser Tool unterstützt Fachkräfte dabei, ihre Bildungsarbeit zu reflektieren und
            Entwicklungspotenziale zu erkennen – ganz ohne komplizierte Technik.
          </p>
          <p className="text-base text-gray-600">
            Direkt eingebettet auf der Website des Landratsamts – ohne neue App, ohne neues System.
            Einfach, barrierefrei und datensparsam.
          </p>
        </div>

        <img
          src="/landingbild.png"
          alt="Illustration zur BNE"
          className="mt-10 md:mt-0 w-full max-w-sm md:max-w-md"
        />
      </main>
    </div>
  );
}


