import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-28 pb-20 min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-[#333652] mb-6 leading-tight">
        Inovativní Pasivní Chladicí Barvy
      </h1>
      <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-700">
        Moderní řešení pro snížení energetické náročnosti budov s využitím pokročilých materiálů odrážejících sluneční záření.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={() => scrollToSection('motivation')}
          className="bg-[#fad02c] hover:bg-[#e5bd28] text-[#333652] font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-md flex items-center justify-center"
        >
          Motivace
          <ChevronDown className="ml-2" size={20} />
        </button>
        <button 
          onClick={() => scrollToSection('research')}
          className="bg-[#333652] hover:bg-[#262a3f] text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-md flex items-center justify-center"
        >
          Výzkum
          <ChevronDown className="ml-2" size={20} />
        </button>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <ChevronDown className="text-[#333652]" size={32} />
      </div>
    </section>
  );
};