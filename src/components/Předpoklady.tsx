import React from "react";

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

export const Předpoklady: React.FC = () => {
    return (
        <section id="předpoklady" className="py-20 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333652] mb-12 text-center">
                    Předpoklady
                </h2>

                <div className="bg-[#fad02c] rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-[#333652] mb-6">
                        Fyzikální principy pasivního chlazení
                    </h3>

                    <InfoItem
                        title="Tepelná bilance Země"
                        description="Ze zákona zachování energie vyplývá, že Země musí vyzařovat stejné množství tepla, jaké absorbuje ze Slunce. Tato rovnováha je však narušena (skleníkové plyny), což vede k oteplování planety. Ze Stefan-Boltzmannova zákona vyplývá, že vyšší teplota Země zvyšuje množství vyzařovaného tepla, čímž se ustanovuje nová rovnováha s vyšší teplotou Země."
                    />

                    <InfoItem
                        title="Atmosférické okno"
                        description="Pokud se podíváme na graf absorbance atmosféry v různých vlnových délkách, zjistíme, že existuje pásmo, ve kterém atmosféra téměř neabsorbuje záření. Toto pásmo umožňuje teplu uniknout do vesmíru, aniž  by bylo pohlceno skleníkovými plyny. Toto pásmo leží od 8 do 12,5 mikrometrů."
                    />

                    <InfoItem
                        title="Radiační chlazení"
                        description="Barvy vyzařují teplo do vesmíru prostřednictvím atmosférického okna a zároveň odrážejí viditelné záření. Jeví se nám tedy jako bílé. Bilanci mezi vyzářeným a pohlceným teplem se nám podařilo spočítat a je téměř stonásobná ve prospěch vyzařování v oblasti atmosférického okna."
                    />
                </div>
            </div>
        </section>
    );
};
