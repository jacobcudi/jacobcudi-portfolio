
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, FileText } from 'lucide-react';

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  return (
    <div className={"p-6 max-w-4xl mx-auto space-y-6 transition-colors " + (dark ? "bg-black text-white" : "bg-white text-black")}>
      <header className="text-center">
        <h1 className="text-4xl font-bold">Jacob Cudiamat</h1>
        <p className="text-lg">Cybersecurity Engineer | Web Developer | Analyst</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="mailto:jacob.k.cudiamat@gmail.com"><Mail className="w-5 h-5" /></a>
          <a href="tel:+14243372222"><Phone className="w-5 h-5" /></a>
          <a href="https://linkedin.com/in/jacob-cudiamat" target="_blank"><Linkedin className="w-5 h-5" /></a>
          <a href="/Jacob_Cudiamat_Cover_Letter.pdf" target="_blank" title="Cover Letter"><FileText className="w-5 h-5" /></a>
        </div>
        <button className="mt-4" onClick={() => setDark(!dark)}>
          Toggle {dark ? "Light" : "Dark"} Mode
        </button>
      </header>
      <main className="mt-6">
        <p className="text-center">🚀 Portfolio content coming soon…</p>
      </main>
    </div>
  );
}
