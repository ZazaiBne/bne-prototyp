// src/LandingPage.js
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo-lra-muenchen.png";
import banner from "./blumenbanner.jpg";

const LandingPage = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const menuRef = useRef();
  const desktopRef = useRef();

  // Klick außerhalb schließt beide Menüs
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
        setSubMenuOpen(false);
      }
      if (desktopRef.current && !desktopRef.current.contains(e.target)) {
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm relative z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-20 md:h-24 w-auto" />
            <span className="hidden md:inline text-3xl font-semibold text-gray-700">
              BNE-Prototyp
            </span>
          </div>

          {/* Mobile Menü */}
          <div className="md:hidden relative z-20" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl"
              aria-label="Menü öffnen"
            >
              ☰
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow z-50 w-64">
                <div>
                  <span
                    onClick={() => setSubMenuOpen(!subMenuOpen)}
                    className="block px-4 py-3 hover:bg-gray-100 cursor-pointer font-medium"
                  >
                    Themen ▸
                  </span>
                  {subMenuOpen && (
                    <div className="ml-4 border-l border-gray-200">
                      <span
                        onClick={() => {
                          navigate("/bne");
                          setMenuOpen(false);
                          setSubMenuOpen(false);
                        }}
                        className="block px-4 py-3 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                      >
                        Bildung für nachhaltige Entwicklung
                      </span>
                    </div>
                  )}
                </div>
                <span className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  Bürgerservice
                </span>
                <span className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  Landkreis
                </span>
                <span className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  Kontakt
                </span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Banner + Desktop Menü */}
      <div className="relative z-10">
        <img
          src={banner}
          alt="Banner"
          className="w-full object-cover"
          style={{ height: "300px", objectPosition: "right top" }}
        />
        <nav className="hidden md:flex absolute bottom-0 left-0 right-0 bg-gray-100 text-gray-900 text-lg font-semibold py-4 shadow-md justify-evenly px-10 z-20">
          <span className="hover:underline cursor-pointer">Bürgerservice</span>

          {/* Themen mit Klick-Dropdown */}
          <div className="relative" ref={desktopRef}>
            <div
              className="hover:underline cursor-pointer"
              onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
            >
              Themen ▾
            </div>
            {desktopDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded shadow z-50 min-w-[300px]">
                <div
                  onClick={() => {
                    navigate("/bne");
                    setDesktopDropdownOpen(false);
                  }}
                  className="block px-4 py-3 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                >
                  Bildung für nachhaltige Entwicklung
                </div>
              </div>
            )}
          </div>

          <span className="hover:underline cursor-pointer">Landkreis</span>
          <span className="hover:underline cursor-pointer">Kontakt</span>
        </nav>
      </div>

      {/* Inhalt */}
      <main className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-6">
          Willkommen beim BNE-Prototyp
        </h1>
        <p className="text-gray-800 leading-relaxed">
          Willkommen auf unserem BNE-Portal für pädagogische Fachkräfte!
Schön, dass Sie da sind!

Diese Website wurde im Rahmen eines Hochschulprojekts in Zusammenarbeit mit dem Landratsamt München entwickelt. Unser Ziel: Bildung für nachhaltige Entwicklung (BNE) in non-formalen Einrichtungen sichtbar machen, stärken und gemeinsam weiterentwickeln.

Was erwartet Sie hier?
🔍 Fragebogen – um herauszufinden, wie BNE bereits in Ihrer Einrichtung gelebt wird
📚 Selbstlerneinheiten – kurze, praxisnahe Online-Impulse zu Themen aus dem sozialen, ökologischen und ökonomischen Bereich

Lassen Sie sich inspirieren, reflektieren Sie Ihre Praxis – und gestalten Sie Zukunft mit!
        </p>
      </main>

      {/* Förderlogos + Text */}
      <footer className="max-w-5xl mx-auto px-6 pb-16 text-center text-sm text-gray-600">
        <p className="mb-4">
          Das Projekt wird im Rahmen des Programms <strong>„Bildungskommunen“</strong> durch das
          Bundesministerium für Bildung und Forschung und die Europäische Union über den Europäischen
          Sozialfonds Plus (ESF Plus) gefördert.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <img src="/logos/eu.jpg" alt="EU" className="h-16 object-contain" />
          <img src="/logos/bmbf.jpg" alt="BMBF" className="h-16 object-contain" />
          <img src="/logos/bildungskommunen.jpg" alt="Bildungskommunen" className="h-16 object-contain" />
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;



