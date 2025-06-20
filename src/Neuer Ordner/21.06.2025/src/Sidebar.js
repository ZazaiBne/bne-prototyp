// src/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="hidden md:block w-64 min-h-screen bg-bneGreen text-bneBeige p-6 fixed left-0 top-0">
      <h2 className="text-2xl font-bold mb-8">📘 Menü</h2>

      <nav className="space-y-4" aria-label="Hauptmenü">
        {/* Newsletter als PDF (funktioniert wie Flyer) */}
        <a
          href="/newsletter.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:underline focus:outline-none focus:ring-2 focus:ring-bneBeige rounded"
        >
          📥 Newsletter
        </a>

        {/* Flyer als PDF */}
        <a
          href="/flyer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:underline focus:outline-none focus:ring-2 focus:ring-bneBeige rounded"
        >
          📄 Flyer
        </a>

        {/* Kontaktseite */}
        <Link
          to="/kontakt"
          className="block hover:underline focus:outline-none focus:ring-2 focus:ring-bneBeige rounded"
        >
          ✉️ Kontakt
        </Link>

        {/* Vorschlagsseite */}
        <Link
          to="/vorschlag"
          className="block hover:underline focus:outline-none focus:ring-2 focus:ring-bneBeige rounded"
        >
          ➕ Lerneinheiten
        </Link>
      </nav>
    </div>
  );
}
