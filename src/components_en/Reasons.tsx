// components_En/Reasons.tsx
import { PaintRoller, ThermometerSnowflake, Clock3 } from "lucide-react";

export const Reasons = () => {
    return (
        <section className="bg-[#333652] py-16 px-6 md:px-20 snap-start">
            <div className="max-w-4xl mx-auto text-center text-white">
                <h2 className="text-4xl font-bold mb-6">
                    Why Passive Cooling Paints?
                </h2>
                <p className="text-lg mb-10 text-gray-200">
                    Cooling paints could be the solution to global warming. They
                    also have the benefit of saving energy and extending the
                    lifespan of infrastructure.
                    <br />
                    <strong>
                        This gives us a huge edge on the other global warming
                        mitigation effords!
                    </strong>
                </p>

                <div className="grid gap-10 md:grid-cols-3 text-left">
                    {/* Energy savings */}
                    <div>
                        <ThermometerSnowflake className="w-12 h-12 text-yellow-400 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-3 text-white text-center">
                            Save on Air Conditioning
                        </h3>
                        <p className="text-gray-300 text-center">
                            Painting a 100 m² roof can reduce indoor temperature
                            by up to 5–8°C. That means{" "}
                            <strong>up to 30% less energy</strong> spent on
                            cooling. In warm regions, it can save you hundreds
                            of euros each summer.
                        </p>
                    </div>

                    {/* Infrastructure longevity */}
                    <div>
                        <Clock3 className="w-12 h-12 text-yellow-400 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-3 text-white text-center">
                            Longer Lifespan for Structures
                        </h3>
                        <p className="text-gray-300 text-center">
                            Heat is the enemy of infrastructure. Reflective
                            coatings protect bridges, roads, and facades from
                            thermal stress, reducing cracks and material
                            fatigue. That means{" "}
                            <strong>fewer repairs and longer lifetimes</strong>.
                        </p>
                    </div>

                    {/* Scalability + simplicity */}
                    <div>
                        <PaintRoller className="w-12 h-12 text-yellow-400 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-3 text-white text-center">
                            Simple, Scalable, Powerful
                        </h3>
                        <p className="text-gray-300 text-center">
                            These paints work on rooftops, roads, parking lots,
                            shipping containers, stadiums, trucks —{" "}
                            <strong> any surface that gets hot</strong>. Easy to
                            apply. Easy to produce. Huge impact.
                        </p>
                    </div>
                </div>

                <div className="mt-16">
                    <a
                        href="#join"
                        className="inline-block bg-[#fad02c] text-[#333652] px-6 py-3 rounded-xl text-lg font-bold hover:bg-[#333652] hover:text-[#fad02c] transition"
                    >
                        Join the Mission!
                    </a>
                </div>
            </div>
        </section>
    );
};
