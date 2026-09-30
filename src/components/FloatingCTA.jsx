import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingCTA() {
  const phone = '6281234567890'; // Replace with actual number
  const whatsappUrl = `https://wa.me/${phone}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 p-3"
    >
      <WhatsAppIcon className="w-6 h-6" />
    </a>
  );
}