import React from 'react';
import { BarChart3 } from 'lucide-react';

export const Results: React.FC = () => {
  return (
    <section id="results" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333652] mb-8 text-center">
          Naše Výsledky
        </h2>
        
        <p className="text-xl md:text-2xl font-bold text-center mb-8 text-[#333652]">
          Povrchy ošetřené našimi barvami jsou až o 10°C chladnější než okolní prostředí.
        </p>
        
        <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-10">
          <div className="aspect-[16/9] bg-white rounded-lg flex items-center justify-center mb-4">
            <BarChart3 size={64} className="text-[#fad02c]" />
            <span className="ml-2 text-gray-600">Graf výsledků experimentu</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#333652] mb-3">Laboratorní Testy</h3>
            <p className="text-gray-700 mb-4">
              V kontrolovaných laboratorních podmínkách naše barvy dosáhly průměrné odrazivosti 92% slunečního záření napříč celým spektrem. To je výrazně více než běžné bílé barvy, které dosahují odrazivosti kolem 80%. Dlouhodobé testy stability ukazují minimální degradaci reflektivních vlastností i po simulaci 5 let venkovní expozice.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-[#333652] mb-3">Reálné Aplikace</h3>
            <p className="text-gray-700 mb-4">
              Pilotní instalace na střechách experimentálních budov prokázaly snížení vnitřní teploty o 3-5°C během nejteplejších letních dnů bez jakéhokoliv dodatečného chlazení. Měření spotřeby energie ukázala průměrné snížení nákladů na klimatizaci o 23% v porovnání s kontrolními budovami se standardním nátěrem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};