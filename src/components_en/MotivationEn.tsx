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
            className="py-20 px-4 scroll-animate"
        >
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333652] mb-12 text-center">
                    The Problems We Face
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <MotivationItem
                        icon={<Sun size={48} />}
                        title="Greenhouse Effect"
                        description={
                            <>
                                The <b>greenhouse effect traps heat</b> in the
                                atmosphere. Energy escapes into space with lower
                                effectivity, so Earth's temperature rises.
                            </>
                        }
                    />
                    <MotivationItem
                        icon={<CircleSlash2Icon size={48} />}
                        title="Resistance to Change"
                        description={
                            <>
                                Most climate solutions demand too much from
                                people: bans, regulations, expensive electric
                                cars. But people resist being told what to do.
                                And so <b>nothing changes</b>.
                            </>
                        }
                    />
                    <MotivationItem
                        icon={<BellElectricIcon size={48} />}
                        title="Rising Temperatures"
                        description={
                            <>
                                Meanwhile, <b>the Earth keeps heating up</b>. To
                                restore energy balance, the planet's temperature
                                rises, leading to more extreme weather and
                                environmental instability.
                            </>
                        }
                    />
                    <MotivationItem
                        icon={<SplitIcon size={48} />}
                        title="Need for New Solutions"
                        description={
                            <>
                                We need climate solutions that don't interfere
                                with personal freedom. Solutions that work with
                                physics, <b>not against people</b>.
                            </>
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default MotivationEn;
