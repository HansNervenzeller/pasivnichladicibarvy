import React from "react";

export const Results: React.FC = () => {
    return (
        <section id="results" className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333652] mb-8 text-center">
                    Výsledky
                </h2>

                <p className="text-xl md:text-2xl font-bold text-center mb-8 text-[#333652]">
                    Prokázali jsme existenci pigmentů s dostatečnou tepelnou
                    bilancí pro chlazení.
                </p>

                <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-10">
                    <div className="w-full flex flex-col items-center">
                        <img
                            src="/downloads/Picture3.png"
                            alt="Graf výsledků experimentu"
                            className="rounded-lg max-h-[28rem] w-auto object-contain border border-gray-200"
                        />
                        <p className="text-gray-700 mt-6 text-center max-w-2xl">
                            Graf ukazuje srovnání teplotních změn během 4 dní
                            mezi vybranými pigmenty. Můžeme pozorovat výrazně
                            nižší teploty u ZnO, zejména během poledních hodin,
                            kdy je sluneční záření nejintenzivnější. Pro
                            orientaci je v grafu čas osvětlení označen oranžově.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-[#333652] mb-3">
                            Váhledy
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Naše měření i výpočty ukazují, že pasivní chladicí
                            barvy mají reálný potenciál. Spojením vysoké
                            odrazivosti a emisivity v atmosférickém okně lze
                            dosáhnout ochlazení povrchu i bez energie. Do
                            budoucna plánujeme vícevrstvý nátěr – kombinaci
                            odrazivých a emisivních vrstev pro ještě vyšší
                            účinnost.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-[#333652] mb-3">
                            Reálné Aplikace
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Hledáme někoho, kdo nám pomůže tento nápad posunout
                            dál. Máme měření, víme, že princip funguje – teď
                            potřebujeme podporu, abychom barvu dotáhli do
                            finální podoby. Pokud Vás náš projekt zaujal a
                            vidíte v něm smysl, napište nám. Možná právě s Vámi
                            dokážeme ochladit města.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
