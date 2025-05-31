import React from 'react';

interface InfoItemProps {
  title: string;
  description: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ title, description }) => {
  return (
    <div className="mb-4">
      <h4 className="text-lg font-bold text-[#333652] mb-1">{title}</h4>
      <p className="text-gray-800">{description}</p>
    </div>
  );
};

export const ScientificSolution: React.FC = () => {
  return (
    <section id="research" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333652] mb-12 text-center">
          Vědecké Řešení
        </h2>
        
        <div className="bg-[#fad02c] rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#333652] mb-6">Fyzikální Principy Pasivního Chlazení</h3>
          
          <InfoItem 
            title="Odraz Slunečního Záření"
            description="Speciální pigmenty odrážejí až 95% slunečního záření v široké části spektra, čímž zabraňují přeměně na tepelnou energii."
          />
          
          <InfoItem 
            title="Tepelná Emise"
            description="Naše barvy mají vysokou tepelnou emisivitu, což umožňuje efektivně vyzařovat teplo zpět do atmosféry místo jeho absorpce do struktury budovy."
          />
          
          <InfoItem 
            title="Radiační Chlazení"
            description="Barvy aktivně vyzařují teplo do vesmíru prostřednictvím atmosférického okna, což vede k teplotám nižším než je okolní prostředí i bez dodatečné energie."
          />
        </div>
      </div>
    </section>
  );
};