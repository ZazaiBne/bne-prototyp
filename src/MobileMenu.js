import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden p-4 border-b border-gray-200 relative bg-bneBeige">
      {/* Toggle-Button */}
      <button onClick={() => setOpen(!open)} className="text-bneGreen">
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Vertikal geöffnetes Menü */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md mt-2 z-50 rounded-b-xl overflow-hidden animate-slide-down">
          <nav className="flex flex-col text-bneGreen divide-y divide-gray-100">
            <Link to="/newsletter" onClick={() => setOpen(false)} className="px-4 py-3 hover:bg-bneBeige">📥 Newsletter</Link>
            <a href="/flyer.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="px-4 py-3 hover:bg-bneBeige">📄 Flyer</a>
            <Link to="/kontakt" onClick={() => setOpen(false)} className="px-4 py-3 hover:bg-bneBeige">✉️ Kontakt</Link>
            <Link to="/vorschlag" onClick={() => setOpen(false)} className="px-4 py-3 hover:bg-bneBeige">➕ Vorschlagen</Link>
          </nav>
        </div>
      )}
    </div>
  );
}
