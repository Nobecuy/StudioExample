import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden">
      {/* Background grid of images */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="grid gap-4 p-8" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-1522199710521-754683823369?auto=format&fit=crop&w=${300+i*50}&q=80`}
                alt="studio"
                onError={(e) => {
                  e.target.src = 'https://picsum.photos/600/800';
                }}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex min-h-[80vh] items-center px-6 lg:px-12">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 space-y-6 max-w-2xl"
        >
          <div className="flex items-center space-x-2">
            <Sun className="h-5 w-5 text-lumina-amber"/>
            <span className="text-xl font-bold text-lumina-amber">Lumina Studio</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 lg:text-5xl">
            Foto Estetik yang <span className="text-lumina-emerald">Memories</span>
          </h1>
          <p className="text-slate-600 max-w-lg">
            Studio foto self-portrait & portrait di Jogja/Sleman dengan layanan profesional,
            lighting premium, dan pengalaman berfoto yang menyenangkan.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#pricing"
              className="motion-button inline-flex items-center px-6 py-3 bg-lumina-amber text-slate-900 font-medium rounded-lg hover:bg-lumina-amber/90 transition-colors"
            >
              Pilih Paket & Booking
            </a>
            <a
              href="#gallery"
              className="motion-button inline-flex items-center px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
            >
              Lihat Galeri
            </a>
          </div>
        </motion.div>

        {/* Right side decorative */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex-1 hidden lg:flex items-center justify-center"
        >
          <div className="relative w-[280px] h-[380px]">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
              alt="studio interior"
              onError={(e) => {
                e.target.src = 'https://picsum.photos/600/800';
              }}
              className="w-full h-full rounded-2xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-lumina-amber rounded-xl opacity-90"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Simple motion button variant
const motionButton = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};