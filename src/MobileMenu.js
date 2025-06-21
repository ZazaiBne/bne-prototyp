// src/MobileMenu.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden bg-bneBeige relative z-50">
      {/* Hamburger Button */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <button onClick={() => setOpen(!open)} className="text-bneGreen">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dropdown-Menü */}
      {open && (
        <div className="w-full bg-white shadow-md border-t border-gray-100">
          <nav className="flex flex-col divide-y divide-gray-100 text-gray-800 font-medium">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="px-4 py-3 hover:bg-bneBeige"
            >
              🏠 Startseite
            </Link>

            <a
              href="/newsletter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="px-4 py-3 hover:bg-bneBeige"
            >
              📥 Newsletter
            </a>

            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="px-4 py-3 hover:bg-bneBeige"
            >
              ✉️ Kontakt
            </Link>

            <Link
              to="/lerneinheiten"
              onClick={() => setOpen(false)}
              className="px-4 py-3 hover:bg-bneBeige"
            >
              ➕ Lerneinheiten
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
