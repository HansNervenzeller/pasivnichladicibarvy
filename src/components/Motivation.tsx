import React from "react";
import { Sun, ThermometerSnowflake, RotateCcw, BugOff } from "lucide-react";

interface MotivationItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const MotivationItem: React.FC<MotivationItemProps> = ({
    icon,
    title,
    description,
}) => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="text-[#fad02c] mb-4">{icon}</div>
            <h3 className="text-xl font-bold text-[#333652] mb-3">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    );
};

export const Motivation: React.FC = () => {
    return (
        <section id="motivation" className="py-20 px-4 scroll-animate">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333652] mb-12 text-center">
                    Proti čemu bojujeme?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <MotivationItem
                        icon={<Sun size={48} />}
                        title="Skleníkový efekt"
                        description="Zvýšené emise CO₂ a metanu zachycují teplo v atmosféře. To vede k oteplování planety, tání ledovců a častějším extrémům počasí."
                    />

                    <MotivationItem
                        icon={<RotateCcw size={48} />}
                        title="Zpětnovazební smyčky"
                        description="Tání sněhu a permafrostu snižuje odrazivost povrchu. Ohřívání oceánů uvolňuje další skleníkové plyny. Tyto procesy mohou vést k nezastavitelnému extrému."
                    />

                    <MotivationItem
                        icon={<ThermometerSnowflake size={48} />}
                        title="Chaotické klima"
                        description="Klimatická změna přináší častější vlny veder, požáry, povodně i sucha. Extrémní jevy způsobují škody na infrastruktuře, ohrožují zdraví lidí a destabilizují přírodní systémy."
                    />

                    <MotivationItem
                        icon={<BugOff size={48} />}
                        title="Vymírání druhů"
                        description="Ztrácíme klíčové druhy – včely, motýly, hmyz i další živočichy. Úbytek biodiverzity narušuje potravní řetězce a ohrožuje stabilitu celých ekosystémů."
                    />
                </div>
            </div>
        </section>
    );
};
