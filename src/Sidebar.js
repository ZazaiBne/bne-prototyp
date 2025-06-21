// src/Sidebar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  const linkClasses = (path) =>
    `block px-4 py-3 rounded-lg transition text-lg font-semibold tracking-wide ${
      pathname === path
        ? "bg-white/20 backdrop-blur-md"
        : "hover:bg-white/10"
    } focus:outline-none focus:ring-2 focus:ring-white`;

  return (
    <aside className="hidden md:flex flex-col w-64 min-h-screen bg-bneGreen/70 backdrop-blur-lg text-white p-6 fixed left-0 top-0 shadow-xl border-r border-white/10">
      
      {/* Logo */}
      <div className="flex items-center justify-center mb-8 mt-8">
        <img
          src="/logo-bne.png"
          alt="BNE-Prototyp Logo"
          className="w-36"
        />
      </div>

      {/* Navigation */}
      <nav className="space-y-4 text-lg" aria-label="Hauptmenü">
        <Link to="/" className={linkClasses("/")}>
          Startseite
        </Link>
        <a
          href="/newsletter.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-3 rounded-lg hover:bg-white/10 transition text-lg font-semibold tracking-wide focus:outline-none focus:ring-2 focus:ring-white"
        >
          Newsletter
        </a>
        <Link to="/kontakt" className={linkClasses("/kontakt")}>
          Kontakt
        </Link>
        <Link to="/lerneinheiten" className={linkClasses("/lerneinheiten")}>
          Lerneinheiten
        </Link>
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-10 text-sm text-white/60 text-center">
        © {new Date().getFullYear()} Landratsamt München
      </div>
    </aside>
  );
}
