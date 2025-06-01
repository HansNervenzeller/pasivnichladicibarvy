import React from "react";
import { Mail, User } from "lucide-react";
import "./formHandler";

/*console.log("formHandler.js script loaded successfully");*/

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#333652] text-white py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">O Autorovi</h3>
                        <div className="flex items-start mb-4">
                            <div className="mr-4 bg-gray-300 rounded-full h-16 w-16 flex items-center justify-center">
                                <User size={32} className="text-[#333652]" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#fad02c] mb-2">
                                    Jan Čivrný
                                </h4>
                                <p className="text-gray-300 mb-4">
                                    Výzkumník na vlastní pěst, student. Zajímám
                                    se o fyziku, biologii a chemii. Věnuji se
                                    výzkumu pasivních chladicích barev a jejich
                                    aplikacím v boji proti klimatickým změnám.
                                    <br />
                                    Zkušenosti jsem nabíral v práci na{" "}
                                    <span className="font-bold">
                                        UFE a UChP AV.
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h4 className="font-bold text-[#fad02c] mb-2">
                                Poděkování
                            </h4>
                            <p className="text-gray-300">
                                Především bych chtěl poděkovat mému
                                konzultantovi{" "}
                                <span className="font-bold">
                                    prof. Ing. Dr. Čestmíru Drašarovi
                                </span>{" "}
                                z FChT UPa. za jeho čas, trpělivost, sdílení
                                zkušeností, obětavou pomoc a odborné konzultace.
                                Nejvíce si však vážím našeho přátelství.
                                <br />
                                <br /> Děkuji{" "}
                                <span className="font-bold">
                                    prof. Ing. Petře Šulcové Ph.D.
                                </span>{" "}
                                z FChT UPa za pohotové poskytnutí některých
                                bílých pigmentů, které nám scházely.
                                <br />
                                <br /> Děkuji{" "}
                                <span className="font-bold">
                                    Lučebním závodům Kolín, a.s.
                                </span>{" "}
                                za bezplatné poskytnutí siloxanového laku
                                Lukosil M130. Děkuji také všem ostatním, kteří
                                mi pomohli a pomáhají.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-6">
                            Kontaktujte Nás
                        </h3>
                        <form className="space-y-4" id="contactForm">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-300 mb-1"
                                >
                                    Jméno
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="Name"
                                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-[#fad02c] focus:outline-none text-white"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300 mb-1"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="Email"
                                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-[#fad02c] focus:outline-none text-white"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-300 mb-1"
                                >
                                    Zpráva
                                </label>
                                <textarea
                                    id="message"
                                    name="Message"
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-[#fad02c] focus:outline-none text-white"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#fad02c] to-[#ff5733] text-[#333652] font-bold py-3 px-6 rounded-lg transition-all duration-500 flex items-center hover:bg-gradient-to-r hover:from-[#ff5733] hover:to-[#3357ff] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#fad02c] focus:ring-offset-2 shadow-md subtle-button"
                            >
                                <Mail className="mr-2" size={20} />
                                Odeslat zprávu
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/20 text-center text-gray-400">
                    <p className="max-w-2xl mx-auto px-4 text-sm">
                        © 2025 Výzkumný projekt: Středoškolská odborná činnost
                        Pasivní chladicí barvy, aneb jak ochladit nejen domy ale
                        i celou planetu. Jan Čivrný. Všechna práva vyhrazena.
                    </p>
                </div>
            </div>
        </footer>
    );
};
