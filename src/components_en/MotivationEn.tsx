// components_en/MotivationEn.tsx
import React, { useRef, useEffect } from "react";
import {
    Sun,
    CircleSlash2Icon,
    SplitIcon,
    BellElectricIcon,
} from "lucide-react";

interface MotivationItemProps {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const MotivationItem: React.FC<MotivationItemProps> = ({
    icon,
    title,
    description,
}) => (
    <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
        <div className="text-[#fad02c] mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-[#333652] mb-3">{title}</h3>
        <p className="text-gray-700">{description}</p>
    </div>
);

const MotivationEn: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const onScroll = () => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        };

        window.addEventListener("scroll", onScroll);
        // Spustit i při načtení
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section
            id="motivation"
            ref={sectionRef}
            className="py-20 px-4 scroll-animate "
        >
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333652] mb-12 text-center">
                    The Problems We Face
                </h2>
                <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:items-stretch md:px-8 lg:px-20">
                    <div className="flex-1 flex justify-center">
                        <MotivationItem
                            icon={<BellElectricIcon size={48} />}
                            title="Rising Temperatures"
                            description={
                                <>
                                    <b>The Earth keeps heating up</b>. To
                                    restore energy balance, the planet's
                                    temperature rises, leading to more extreme
                                    weather and environmental instability.
                                </>
                            }
                        />
                    </div>
                    <div className="flex-1 flex justify-center">
                        <MotivationItem
                            icon={<CircleSlash2Icon size={48} />}
                            title="Resistance to Change"
                            description={
                                <>
                                    Most climate solutions demand too much from
                                    people: bans, regulations, expensive
                                    electric cars. But{" "}
                                    <b>people resist being told what to do</b>.
                                    And sonothing changes.
                                </>
                            }
                        />
                    </div>
                    <div className="flex-1 flex justify-center">
                        <MotivationItem
                            icon={<SplitIcon size={48} />}
                            title="Need for New Solutions"
                            description={
                                <>
                                    We need climate solutions that don't
                                    interfere with personal freedom. Solutions
                                    that work with physics,{" "}
                                    <b>not against people</b>.
                                </>
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MotivationEn;
