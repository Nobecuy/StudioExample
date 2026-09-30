import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-900 text-slate-200">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-xl font-bold text-lumina-amber">Lumina Studio</span>
        </div>
        <p className="text-sm">
          Powered by Lambda Studios &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}