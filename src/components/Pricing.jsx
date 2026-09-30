import React, { useState } from 'react';
import { pricingData } from '../data/studioData';
import { Check, Calendar, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { motion } from 'framer-motion';
import BookingModal from './BookingModal';

export default function Pricing() {
  const [modalData, setModalData] = useState(null); // {package, open}

  const openBookingModal = (pkg) => {
    setModalData({ package: pkg, open: true });
  };

  const closeBookingModal = () => {
    setModalData(null);
  };

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Paket Harga Kami
        </h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-8 md:grid-cols-1 lg:grid-cols-3"
        >
          {pricingData.map(pkg => (
            <motion.div
              key={pkg.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: pkg.id * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg"
            >
              <div className={`${pkg.bg} p-6`}>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.title}</h3>
                <p className="text-2xl font-bold text-lumina-amber mb-4">
                  Rp {pkg.price.toLocaleString('id-ID')}
                </p>
                <ul className="space-y-2 text-slate-600">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="mt-1 h-4 w-4 text-lumina-emerald" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openBookingModal(pkg)}
                  className="mt-6 w-full inline-flex items-center px-4 py-2 bg-lumina-emerald text-white font-medium rounded-lg hover:bg-lumina-emerald/90 transition-colors motion-button"
                >
                  Cek Jadwal & Booking
                  <WhatsAppIcon className="ml-2 h-4 w-4 mt-[1px]" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Booking Modal */}
      {modalData && (
        <BookingModal
          package={modalData.package}
          onClose={closeBookingModal}
        />
      )}
    </section>
  );
}