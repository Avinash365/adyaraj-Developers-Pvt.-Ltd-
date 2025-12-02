'use client';

import React, { useState, useEffect } from 'react';

// ------------------ FilterTabs Component ------------------
function FilterTabs({ activeFilter, onFilterChange }) {
  const filters = [
    { id: 'photos', label: 'Photos', emoji: '📸' },
    { id: 'awards', label: 'Awards', emoji: '🏆' },
  ];

  return (
    <div className="bg-gray-50 py-8" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Construction{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Browse through our ongoing and completed construction projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center space-x-2 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span>{filter.emoji}</span>
              <span>{filter.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ------------------ PhotoGrid Component ------------------
function PhotoGrid({ activeFilter }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch(`/images/gallery/${activeFilter}.json`);
        if (!res.ok) throw new Error(`Failed to fetch ${activeFilter}.json`);
        const filenames = await res.json();

        const mapped = filenames.map((name, index) => ({
          id: `${activeFilter}-${index}`,
          src: `/images/gallery/${activeFilter}/${name}`,
          alt: `${activeFilter} ${index + 1}`,
        }));

        setItems(mapped);
      } catch (err) {
        console.error(err);
        setItems([]);
      }
    }

    fetchImages();
  }, [activeFilter]);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {items.length === 0 ? (
          <p className="text-center text-gray-500">No images found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="aspect-w-4 aspect-h-3 relative">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="relative">
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition-colors cursor-pointer"
              >
                ✖️
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ------------------ Main ConstructionGallery Component ------------------
export default function ConstructionGallery() {
  const [activeFilter, setActiveFilter] = useState('photos'); // default to photos

  return (
    <div className="w-full bg-white">
      <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <PhotoGrid activeFilter={activeFilter} />
    </div>
  );
}
