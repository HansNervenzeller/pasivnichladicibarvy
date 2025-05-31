import React from 'react';
import { FlaskConical } from 'lucide-react';

interface PigmentCardProps {
  name: string;
  color: string;
  reflectivity: string;
}

const PigmentCard: React.FC<PigmentCardProps> = ({ name, color, reflectivity }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className={`h-32 ${color}`}></div>
      <div className="p-4">
        <h4 className="font-bold text-[#333652] mb-1">{name}</h4>
        <p className="text-sm text-gray-700">Odrazivost: {reflectivity}</p>
      </div>
    </div>
  );
};

export const Experiment: React.FC = () => {
  const pigments = [
    { name: "TiO₂ Standard", color: "bg-white", reflectivity: "85%" },
    { name: "BaSO₄ Advanced", color: "bg-gray-100", reflectivity: "92%" },
    { name: "CaCO₃ Hybrid", color: "bg-gray-200", reflectivity: "89%" },
    { name: "SiO₂ Infused", color: "bg-blue-50", reflectivity: "91%" },
    { name: "ZnO Composite", color: "bg-yellow-50", reflectivity: "88%" },
    { name: "MgO Enhanced", color: "bg-green-50", reflectivity: "90%" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333652] mb-12 text-center">
          Experiment
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-[#333652] mb-6">Testované Pigmenty</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {pigments.map((pigment, index) => (
                <PigmentCard 
                  key={index}
                  name={pigment.name}
                  color={pigment.color}
                  reflectivity={pigment.reflectivity}
                />
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#333652] mb-6">Měřicí Aparatura</h3>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
              <FlaskConical size={64} className="text-[#333652] opacity-50" />
              <span className="ml-2 text-gray-600">Schéma aparatury</span>
            </div>
            <p className="text-gray-700">
              Naše měřicí zařízení kombinuje spektrofotometr s infračervenou kamerou a tepelné senzory pro komplexní analýzu vlastností chladicích barev v reálných podmínkách.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};