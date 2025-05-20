// src/MobileMenu.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50">
      <button onClick={() => setOpen(!open)} className="p-4">
        <Menu size={32} />
      </button>
      {open && (
        <div className="absolute top-0 left-0 w-full bg-bneGreen text-bneBeige p-6 shadow-lg">
          <button
            className="absolute top-2 right-4 text-3xl"
            onClick={() => setOpen(false)}
            aria-label="Menü schließen"
          >
            ×
          </button>
          <nav className="space-y-4 mt-6">
            <Link to="/newsletter" onClick={() => setOpen(false)}>📥 Newsletter</Link>
            <a href="/flyer.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>📄 Flyer</a>
            <Link to="/kontakt" onClick={() => setOpen(false)}>✉️ Kontakt</Link>
            <Link to="/vorschlag" onClick={() => setOpen(false)}>➕ Vorschlagen</Link>
          </nav>
        </div>
      )}
    </div>
  );
}
