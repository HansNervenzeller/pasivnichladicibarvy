import React, { useState, useEffect } from 'react';
import { Droplets } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Droplets className="text-[#fad02c] mr-2" size={28} />
          <span className="font-bold text-[#333652] text-xl">CoolPaint</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#motivation" 
                className="text-[#333652] hover:text-[#fad02c] font-medium transition-colors"
              >
                Motivace
              </a>
            </li>
            <li>
              <a 
                href="#research" 
                className="text-[#333652] hover:text-[#fad02c] font-medium transition-colors"
              >
                Výzkum
              </a>
            </li>
            <li>
              <a 
                href="#results" 
                className="text-[#333652] hover:text-[#fad02c] font-medium transition-colors"
              >
                Výsledky
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};