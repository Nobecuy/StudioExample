import React from 'react';
import { locationData } from '../data/studioData';
import { MapPin, Sun, Moon, Activity, Shirt, Lightbulb, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Location() {
  return (
    <section id="location" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Lokasi & Fasilitas
        </h2>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid gap-10 md:grid-cols-2"
        >
          {/* Map */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <iframe
              title="Lokasi Lumina Studio"
              width="100%"
              height="400"
              frameBorder="0"
              src={locationData.mapsUrl}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 text-lumina-amber" />
                <div>
                  <p className="font-medium text-slate-900">Alamat Studio</p>
                  <p className="text-slate-600">{locationData.address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Sun className="mt-1 h-5 w-5 text-lumina-emerald" />
                <div>
                  <p className="font-medium text-slate-900">Jam Operasional</p>
                  <p className="text-slate-600">{locationData.hours}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Fasilitas Studio</h3>
              <div className="space-y-2">
                {locationData.facilities.map((fac, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    {fac === 'AC' && <Activity className="mt-1 h-4 w-4 text-lumina-amber" />}
                    {fac === 'Dressing Room' && <Shirt className="mt-1 h-4 w-4 text-lumina-emerald" />}
                    {fac === 'Premium Lighting' && <Lightbulb className="mt-1 h-4 w-4 text-lumina-amber" />}
                    {fac === 'Softfile All Take' && <Folder className="mt-1 h-4 w-4 text-lumina-emerald" />}
                    <span className="text-slate-600">{fac}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}