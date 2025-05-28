import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo-lra-muenchen.png";
import banner from "./blumenbanner.jpg";

const LandingPage = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const menuRef = useRef();

  // Klick außerhalb schließt Menü
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
        setSubMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm relative z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-20 md:h-24 w-auto" />
            <span className="text-2xl md:text-3xl font-semibold text-gray-700 z-10">
              BNE-Prototyp
            </span>
          </div>

          {/* Hamburger-Menü mobil */}
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
                {/* Themen mit Submenü */}
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
                        className="block px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm"
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

      {/* Banner + Desktop Navigation */}
      <div className="relative z-10">
        <img
          src={banner}
          alt="Banner"
          className="w-full object-cover"
          style={{ height: "300px", objectPosition: "right top" }}
        />
        <nav className="hidden md:flex absolute bottom-0 left-0 right-0 bg-gray-100 text-gray-900 text-lg font-semibold py-4 shadow-md justify-evenly px-10 z-20">
          <span className="hover:underline cursor-pointer">Bürgerservice</span>
          <span
            onClick={() => navigate("/bne")}
            className="hover:underline cursor-pointer"
          >
            Themen
          </span>
          <span className="hover:underline cursor-pointer">Landkreis</span>
          <span className="hover:underline cursor-pointer">Kontakt</span>
        </nav>
      </div>

      {/* Hauptinhalt */}
      <main className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-6">
          Willkommen beim BNE-Prototyp
        </h1>
        <p className="text-gray-800 leading-relaxed">
          Diese Plattform unterstützt Einrichtungen dabei, Bildung für nachhaltige Entwicklung
          sichtbarer und zugänglicher zu machen.
        </p>
      </main>
    </div>
  );
};

export default LandingPage;


