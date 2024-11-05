import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slider = () => {
  const slides = [
    "Welcome",
    "To",
    "Devs",
    "Let's Build Great Stuff Together!",
    "Innovate and Inspire",
    "Collaborate and Succeed",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval); 
  }, [currentSlide]);

  return (
    <div className="relative bg-black text-white flex items-center justify-center rounded-lg shadow-lg w-[80%] ml-[150px] h-[500px]">
      <div className="text-4xl font-bold text-center">
        {slides[currentSlide]}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute left-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-600"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-600"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicator */}
      <div className="absolute bottom-4 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
