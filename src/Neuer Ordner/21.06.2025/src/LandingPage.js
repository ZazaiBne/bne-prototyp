import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo-lra-muenchen.png";
import banner from "./blumenbanner.jpg";

const LandingPage = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Klick außerhalb schließt das Dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-20 md:h-24 w-auto" />
            <span className="text-2xl md:text-3xl font-semibold text-gray-700">
              BNE-Prototyp
            </span>
          </div>
        </div>
      </header>

      {/* Banner + Navigation */}
      <div className="relative">
        <img
          src={banner}
          alt="Banner"
          className="w-full object-cover"
          style={{ height: "300px", objectPosition: "right top" }}
        />
        <nav className="hidden md:flex absolute bottom-0 left-0 right-0 bg-gray-100 text-gray-900 text-lg font-semibold py-4 shadow-md justify-evenly px-10 z-20">
          <span className="hover:underline cursor-pointer">Bürgerservice</span>

          {/* Klickbares Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <span
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:underline cursor-pointer"
            >
              Themen
            </span>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded shadow z-50 w-max">
                <span
                  onClick={() => {
                    navigate("/bne");
                    setDropdownOpen(false);
                  }}
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                >
                  Bildung für nachhaltige Entwicklung
                </span>
              </div>
            )}
          </div>

          <span className="hover:underline cursor-pointer">Landkreis</span>
          <span className="hover:underline cursor-pointer">Kontakt</span>
        </nav>
      </div>

      {/* Landingpage Content */}
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



