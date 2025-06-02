import React from "react";

export const Experiment: React.FC = () => {
    return (
        <section id="experiment" className="py-20 px-4 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333652] mb-12 text-center">
                    Experiment
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Apparatus Left */}
                    <div className="bg-white h-[40rem] p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-[#333652] mb-6 text-center">
                            Změřená data absorbance jednotlivých pigmentů
                        </h3>
                        <div className="w-full flex flex-col items-center mb-6">
                            <img
                                src="/downloads/Picture1.png"
                                alt="Spektra absorbance"
                                className="rounded-lg max-h-96 w-auto object-contain border border-gray-200"
                            />
                        </div>
                        <p className="text-gray-700 text-center">
                            Nejprve jsme prošli databázi bílých pigmentů,
                            protože jsme věděli, že ideální pigment bude ve
                            viditelném spektru bílý. Pak jsme provedli měření
                            absorbance, abychom našli takový, který je ve
                            viditelném spektru odrazivý a v atmosférickém okně
                            dobře vyzařuje.
                        </p>
                    </div>
                    {/* Apparatus Right */}
                    <div className="bg-white h-[40rem] p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-[#333652] mb-6 text-center">
                            Měřicí aparatura
                        </h3>
                        <div className="w-full flex flex-col items-center mb-6">
                            <img
                                src="/downloads/Picture2.png"
                                alt="Schéma aparatury"
                                className="rounded-lg max-h-96 w-auto object-contain border border-gray-200"
                            />
                            <span className="mt-2 text-gray-600 text-sm">
                                Schéma aparatury
                            </span>
                        </div>
                        <p className="text-gray-700 text-center">
                            Měření teploty jednotlivých pigmentů jsme provedli
                            pomocí mikropočítače arduino. Pomocí zesilovače z
                            termočlánků. Součástí termočlánků byly měděné
                            destičky, které slouží jako základna pro pigmenty.
                            Pigmenty jsme umístili do malých krabiček, které
                            byly umístněny za okno.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
