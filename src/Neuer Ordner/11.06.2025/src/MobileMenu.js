import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden bg-bneBeige relative z-50">
      {/* Toggle Button */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <button onClick={() => setOpen(!open)} className="text-bneGreen">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dropdown-Menü */}
      {open && (
        <div className="w-full bg-white shadow-md animate-slide-down border-t border-gray-100">
          <nav className="flex flex-col divide-y divide-gray-100">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="px-4 py-3 hover:bg-bneBeige"
            >
              🏠 Startseite
            </Link>
            <Link
              to="/bne"
              onClick={() => setOpen(false)}
              className="px-4 py-3 hover:bg-bneBeige"
            >
              📚 Themen
            </Link>
            <Link
              to="/newsletter"
              onClick={() => setOpen(false)}
              className="px-4 py-3 hover:bg-bneBeige"
            >
              📥 Newsletter
            </Link>
            <a
              href="/flyer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="px-4 py-3 hover:bg-bneBeige"
            >
              📄 Flyer
            </a>
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="px-4 py-3 hover:bg-bneBeige"
            >
              ✉️ Kontakt
            </Link>
            <Link
              to="/vorschlag"
              onClick={() => setOpen(false)}
              className="px-4 py-3 hover:bg-bneBeige"
            >
              ➕ Vorschlagen
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
