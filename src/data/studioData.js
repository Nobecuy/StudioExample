export const galleryData = {
  categories: [
    { id: 'all', label: 'Semua' },
    { id: 'selfphoto', label: 'Self-Photo' },
    { id: 'graduation', label: 'Graduation' },
    { id: 'couple', label: 'Couple & Group' },
    { id: 'prewedding', label: 'Pre-Wedding' },
  ],
  photos: [
    // Self-Photo
    { id: 1, category: 'selfphoto', url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80', alt: 'Self Photo Studio 1' },
    { id: 2, category: 'selfphoto', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80', alt: 'Self Photo Studio 2' },
    { id: 3, category: 'selfphoto', url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80', alt: 'Self Photo Studio 3' },
    // Graduation
    { id: 4, category: 'graduation', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80', alt: 'Graduation Photo 1' },
    { id: 5, category: 'graduation', url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80', alt: 'Graduation Photo 2' },
    { id: 6, category: 'graduation', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80', alt: 'Graduation Photo 3' },
    // Couple & Group
    { id: 7, category: 'couple', url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80', alt: 'Couple Photo 1' },
    { id: 8, category: 'couple', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80', alt: 'Couple Photo 2' },
    { id: 9, category: 'couple', url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80', alt: 'Group Photo 1' },
    // Pre-Wedding
    { id: 10, category: 'prewedding', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80', alt: 'Pre Wedding 1' },
    { id: 11, category: 'prewedding', url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80', alt: 'Pre Wedding 2' },
    { id: 12, category: 'prewedding', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80', alt: 'Pre Wedding 3' },
  ],
};

export const pricingData = [
  {
    id: 1,
    title: 'Express Self-Photo',
    price: 75000,
    features: [
      '30 menit shooting',
      '10 foto final (edit)',
      'File digital dalam 1 hari kerja',
      'Private studio',
    ],
    bg: 'bg-lumina-amber/5',
  },
  {
    id: 2,
    title: 'Graduation Special',
    price: 250000,
    features: [
      '60 menit shooting',
      '25 foto final (edit)',
      'File digital + 1 print 20x30cm',
      'Gown & props gratis',
    ],
    bg: 'bg-lumina-emerald/5',
  },
  {
    id: 3,
    title: 'Creative Studio Group',
    price: 400000,
    features: [
      '90 menit shooting',
      '40 foto final (edit)',
      'File digital + album mini',
      'Backup photographer',
    ],
    bg: 'bg-lumina-amber/10',
  },
];

export const locationData = {
  address: 'Jl. Raya Jogja-Sleman Km. 8, Sleman, Yogyakarta',
  hours: 'Senin - Minggu, 10.00 - 21.00 WIB',
  facilities: ['AC', 'Dressing Room', 'Premium Lighting', 'Softfile All Take'],
  mapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.391033477516!2d110.36424197450585!3d-7.780294392330312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5916f44334eb%3A0x3a67301ee544f42!2sLumina%20Photo%20Studio!5e0!3m2!1sid!2sid!4v1700000000000',
};

export const timeSlots = [
  '10.00',
  '11.00',
  '12.00',
  '13.00',
  '14.00',
  '15.00',
  '16.00',
  '17.00',
  '18.00',
  '19.00',
  '20.00',
];