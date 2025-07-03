// components_en/PrinciplesEn.tsx
import React from "react";
//import { ArrowDown } from "lucide-react";

interface InfoItemProps {
    title: string;
    description: React.ReactNode;
}

const InfoItem: React.FC<InfoItemProps> = ({ title, description }) => {
    return (
        <div className="mb-4">
            <h4 className="text-lg font-bold text-[#333652] mb-1">{title}</h4>
            <p className="text-gray-800">{description}</p>
        </div>
    );
};

const arrowAnimation = `
@keyframes bounceY {
  0%, 100% { transform: translateY(0);}
  50% { transform: translateY(10px);}
}
.bounce-arrow {
  animation: bounceY 1.5s infinite;
}
`;

const PrinciplesEn: React.FC = () => {
    return (
        <>
            <style>{arrowAnimation}</style>
            <section id="principles" className="py-20 px-4 bg-white snap-start">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#333652] mb-12 text-center">
                        Physical Principles
                    </h2>

                    <div className="bg-[#fad02c] rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-[#333652] mb-6">
                            How Passive Cooling Works
                        </h3>

                        <InfoItem
                            title="The Earth must balance heat."
                            description="What we absorb from the Sun, we must radiate back into space. But greenhouse gases trap that heat, forcing the planet to warm until a new balance is found — at a higher temperature."
                        />

                        <InfoItem
                            title="There’s a way out."
                            description="There’s a hidden “window” in the atmosphere — between 8 and 12.5 μm — where heat can escape into space without being blocked by greenhouse gases."
                        />

                        <InfoItem
                            title="Radiative cooling"
                            description={
                                <>
                                    Passive cooling paints are designed to
                                    radiate exactly in that range, while
                                    reflecting visible light to stay cool. The
                                    energy radiated in the atmospheric window is
                                    nearly 100x greater than the heat absorbed.{" "}
                                    <b>
                                        That’s not just cool. That’s
                                        revolutionary.
                                    </b>
                                </>
                            }
                        />

                        {/*<div className="flex justify-center mt-8">
                            <a
                                href="#join"
                                className="flex items-center gap-2 bg-[#333652] text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-[#22223b] transition"
                            >
                                Join the mission
                                <ArrowDown
                                    size={24}
                                    className="ml-2 bounce-arrow"
                                />
                            </a>
                        </div>*/}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrinciplesEn;
