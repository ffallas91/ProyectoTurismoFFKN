'use client';
import React, { useState } from 'react';

const images = [
  '/carousel1.png',
  '/carousel2.png',
  '/carousel3.png',
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-8">
      {/* Contenedor del carrusel */}
      <div className="relative h-[320px] sm:h-[330px] md:h-[350px] lg:h-[380px] overflow-hidden rounded-xl shadow-lg bg-neutral-50">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="h-full w-auto object-contain mx-auto"
            />
          </div>
        ))}
      </div>

      {/* Botones de navegación inferiores */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-4 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Botón anterior */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Anterior</span>
        </span>
      </button>

      {/* Botón siguiente */}
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Siguiente</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
