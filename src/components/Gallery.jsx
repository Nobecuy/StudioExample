import React, { useState } from 'react';
import { galleryData } from '../data/studioData';
import { ZoomIn, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos = activeCategory === 'all'
    ? galleryData.photos
    : galleryData.photos.filter(p => p.category === activeCategory);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setModalOpen(false);
  };

  return (
    <section id="gallery" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Galeri Foto Kami
        </h2>

        {/* Filter Tabs */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center mb-10 gap-4"
        >
          {galleryData.categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium
                ${activeCategory === cat.id
                  ? 'bg-lumina-amber text-slate-900'
                  : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-50'}
                transition-all motion-button`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredPhotos.map(photo => (
            <motion.div
              key={photo.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: photo.id * 0.05 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openModal(photo)}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                onError={(e) => {
                  e.target.src = 'https://picsum.photos/600/800';
                }}
                className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="text-xl text-white" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: modalOpen ? 1 : 0 }}
        exit={{ opacity: 0 }}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80
          ${modalOpen ? 'block' : 'hidden'}`}
        onClick={closeModal}
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
          className="relative w-[90%] max-w-[800px] max-h-[90vh] cursor-pointer"
          onClick={e => e.stopPropagation()}
        >
          {selectedPhoto && (
            <>
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.alt}
                onError={(e) => {
                  e.target.src = 'https://picsum.photos/600/800';
                }}
                className="w-full h-full rounded-xl object-contain"
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white/90 transition-colors"
              >
                <Search className="text-slate-600" />
              </button>
            </>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}