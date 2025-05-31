import React from 'react';
import { Thermometer, Zap, Globe } from 'lucide-react';

interface MotivationItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const MotivationItem: React.FC<MotivationItemProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <div className="text-[#fad02c] mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#333652] mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export const Motivation: React.FC = () => {
  return (
    <section id="motivation" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333652] mb-12 text-center">
          Proč Chladicí Barvy?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MotivationItem 
            icon={<Thermometer size={48} />}
            title="Redukce Tepla"
            description="Snižují absorpci slunečního záření povrchy budov a tím snižují teplotu interiéru až o 5°C bez dodatečné energie."
          />
          
          <MotivationItem 
            icon={<Zap size={48} />}
            title="Energetická Účinnost"
            description="Dramaticky snižují potřebu klimatizace, což vede k úsporám energie a nižším nákladům na provoz budov."
          />
          
          <MotivationItem 
            icon={<Globe size={48} />}
            title="Ekologický Dopad"
            description="Přispívají ke snížení městských tepelných ostrovů a celkové uhlíkové stopy urbanizovaných oblastí."
          />
        </div>
      </div>
    </section>
  );
};