import React, { useState } from 'react';
import { timeSlots } from '../data/studioData';
import { Calendar, Clock, X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { motion } from 'framer-motion';

export default function BookingModal({ package: pkg, onClose }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time) return alert('Pilih tanggal dan jam');

    const phone = '6281234567890'; // Replace with actual studio MessageCircle number
    const text = `Halo, saya ingin booking paket:${encodeURIComponent(pkg.title)}\n` +
                 `Tanggal: ${date}\n` +
                 `Jam: ${time}\n` +
                 `Mohon konfirmasi ketersediaan.`;
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, type: 'spring' }}
        className="relative w-[90%] max-w-md p-6 bg-white rounded-2xl shadow-2xl"
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-900">
            Booking {pkg.title}
          </h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-slate-100">
            <X className="h-4 w-4 text-slate-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-slate-700 font-medium mb-1">
              Tanggal
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lumina-amber"
              min="2026-01-01"
            />
          </div>

          <div>
            <label className="block text-slate-700 font-medium mb-1">
              Jam Operasional
            </label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lumina-amber"
            >
              <option value="">Pilih Jam</option>
              {timeSlots.map(t => (
                <option key={t} value={t}>
                  {t} WIB
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center px-5 py-3 bg-lumina-emerald text-white font-medium rounded-lg hover:bg-lumina-emerald/90 transition-colors motion-button"
          >
            Lanjut Booking via WhatsApp
            <WhatsAppIcon className="ml-2 h-4 w-4 mt-[1px]" />
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}