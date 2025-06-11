// src/BNEPage.js
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo-lra-muenchen.png";
import banner from "./blumenbanner.jpg";

const BNEPage = () => {
  const navigate = useNavigate();
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const desktopRef = useRef();

  // Klick außerhalb schließt Menü
  useEffect(() => {
    const handleClickOutside = (e) => {
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

          {/* Themen mit Klick-Dropdown */}
          <div className="relative" ref={desktopRef}>
            <div
              className="hover:underline cursor-pointer"
              onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
            >
              Themen ▾
            </div>
            {desktopDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded shadow z-50 w-80">
                <div
                  onClick={() => {
                    navigate("/bne");
                    setDesktopDropdownOpen(false);
                  }}
                  className="block px-4 py-3 hover:bg-gray-100 cursor-pointer"
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

        {/* Buttons */}
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

        {/* Trennung */}
        <hr className="my-10 border-gray-300" />

        {/* Newsletter abonnieren (nur UI) */}
        <div className="max-w-md mx-auto text-left">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            📬 Newsletter abonnieren
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Erhalten Sie regelmäßig aktuelle Informationen rund um BNE im Landkreis München.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <button className="bg-bneGreen text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Abonnieren
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BNEPage;



