// src/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 min-h-screen bg-bneGreen text-bneBeige p-6 fixed left-0 top-0 shadow-lg">
      <h2 className="text-2xl font-bold mb-10 flex items-center gap-2">
        📘 Menü
      </h2>

      <nav className="space-y-6 text-base font-medium" aria-label="Hauptmenü">
        <Link
          to="/"
          className="block px-3 py-2 rounded hover:bg-bneBeige hover:text-bneGreen focus:outline-none focus:ring-2 focus:ring-bneBeige transition"
        >
          🏠 Startseite
        </Link>

        <a
          href="/newsletter.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-3 py-2 rounded hover:bg-bneBeige hover:text-bneGreen focus:outline-none focus:ring-2 focus:ring-bneBeige transition"
        >
          📥 Newsletter
        </a>

        <Link
          to="/kontakt"
          className="block px-3 py-2 rounded hover:bg-bneBeige hover:text-bneGreen focus:outline-none focus:ring-2 focus:ring-bneBeige transition"
        >
          ✉️ Kontakt
        </Link>

        <Link
          to="/lerneinheiten"
          className="block px-3 py-2 rounded hover:bg-bneBeige hover:text-bneGreen focus:outline-none focus:ring-2 focus:ring-bneBeige transition"
        >
          ➕ Lerneinheiten
        </Link>
      </nav>

      <div className="mt-auto pt-10 text-sm text-bneBeige/80">
        <p>© {new Date().getFullYear()} Landratsamt München</p>
      </div>
    </aside>
  );
}
