import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './components/Icons';
import { slides } from './slides';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNext, handlePrev]);

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100 font-sans">
      <header className="p-4 bg-gray-800/50 border-b border-gray-700 shadow-lg">
        <h1 className="text-xl md:text-2xl font-bold text-cyan-400">PLDM Firmware Update Explainer</h1>
      </header>
      
      <main className="flex-grow flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
        {/* Slide Content */}
        <div className="w-full h-full max-w-6xl max-h-[70vh] md:max-h-[75vh] bg-gray-800 rounded-2xl shadow-2xl flex items-center justify-center p-6 md:p-10 border border-gray-700 transition-opacity duration-500 ease-in-out">
          {slides[currentSlide]}
        </div>

        {/* Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-4">
           <button 
             onClick={handlePrev} 
             className="p-3 bg-gray-700/80 rounded-full hover:bg-cyan-500/80 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition-colors duration-200 backdrop-blur-sm"
             aria-label="Previous slide"
           >
             <ChevronLeftIcon className="h-6 w-6" />
           </button>
           <span className="text-lg font-mono w-20 text-center text-gray-400">{`${currentSlide + 1} / ${slides.length}`}</span>
           <button 
             onClick={handleNext} 
             className="p-3 bg-gray-700/80 rounded-full hover:bg-cyan-500/80 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition-colors duration-200 backdrop-blur-sm"
             aria-label="Next slide"
            >
             <ChevronRightIcon className="h-6 w-6" />
           </button>
        </div>
      </main>

      <footer className="text-center p-2 text-xs text-gray-500">
        Use Arrow Keys for Navigation
      </footer>
    </div>
  );
};

export default App;
