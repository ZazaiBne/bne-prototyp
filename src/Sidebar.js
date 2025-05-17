import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-bneGreen text-bneBeige p-6 fixed left-0 top-0">
      <h2 className="text-2xl font-bold mb-8">📘 Menü</h2>
      <nav className="space-y-4">
        <Link to="/newsletter" className="block hover:underline">📥 Newsletter</Link>
        <a href="/flyer.pdf" target="_blank" className="block hover:underline">📄 Flyer</a>
        <Link to="/kontakt" className="block hover:underline">✉️ Kontakt</Link>
        <Link to="/vorschlag" className="block hover:underline">➕ Vorschlagen</Link>
      </nav>
    </div>
  );
}
