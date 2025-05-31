import React from 'react';
import { FileDown, Mail, Github, Linkedin, User } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#333652] text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="mb-8">
              <button className="bg-[#fad02c] hover:bg-opacity-90 text-[#333652] font-bold py-3 px-6 rounded-lg transition-all flex items-center">
                <FileDown className="mr-2" size={20} />
                Stáhnout výzkumnou zprávu (PDF)
              </button>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">O Autorovi</h3>
            <div className="flex items-start mb-4">
              <div className="mr-4 bg-gray-300 rounded-full h-16 w-16 flex items-center justify-center">
                <User size={32} className="text-[#333652]" />
              </div>
              <div>
                <h4 className="font-bold text-[#fad02c] mb-2">Jan Novák, Ph.D.</h4>
                <p className="text-gray-300 mb-4">
                  Výzkumník na Technické univerzitě s více než 8 lety zkušeností v oblasti materiálových věd. 
                  Specializuje se na pokročilé materiály pro energetickou účinnost a udržitelnost budov. 
                  Autor 15 vědeckých publikací a držitel 3 patentů v oblasti reflektivních povrchů.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-300 hover:text-[#fad02c]" aria-label="Github">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-[#fad02c]" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-bold text-[#fad02c] mb-2">Poděkování</h4>
              <p className="text-gray-300">
                Tento výzkum byl podpořen grantem Ministerstva průmyslu a obchodu a Technologické agentury ČR. 
                Zvláštní poděkování patří kolegům z Ústavu fyziky materiálů za jejich cenné rady a připomínky.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Kontaktujte Nás</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Jméno
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-[#fad02c] focus:outline-none text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-[#fad02c] focus:outline-none text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Zpráva
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-[#fad02c] focus:outline-none text-white"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-[#fad02c] hover:bg-opacity-90 text-[#333652] font-bold py-3 px-6 rounded-lg transition-all flex items-center"
              >
                <Mail className="mr-2" size={20} />
                Odeslat zprávu
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center text-gray-400">
          <p>© 2025 Výzkumný projekt Pasivní Chladicí Barvy. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};