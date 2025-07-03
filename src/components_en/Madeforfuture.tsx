// components_En/MadeForFuture.tsx
import { Landmark } from "lucide-react";

export const MadeForFuture = () => {
    return (
        <section className="bg-white py-16 px-4 md:px-20 snap-start">
            <div className="max-w-3xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                    <Landmark className="w-14 h-14 text-[#FAD02C]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#333652] mb-4">
                    Made for the Future
                </h2>
                <p className="text-base md:text-lg text-gray-700 mb-6">
                    These paints aren’t just a clever idea — they’re designed
                    for impact at scale. I’m working with materials that can
                    already be produced globally using existing infrastructure.
                </p>
                <p className="text-base md:text-md text-gray-800 mb-8">
                    Built on <strong>common pigments and binders</strong>,
                    passive cooling paints can fit right into existing
                    manufacturing lines. They’re{" "}
                    <strong>affordable, durable, and adaptable</strong> to
                    different climates. From arid rooftops to humid cities —
                    these coatings are engineered to last.
                </p>
                <p className="text-base md:text-lg text-gray-900 font-semibold">
                    Research is still ongoing — but the potential is massive.
                    I'm not waiting for perfection. I'm starting with what works
                    now.
                </p>
                <div className="mt-10">
                    <a
                        href="#join"
                        className="inline-block px-6 py-3 bg-[#FAD02C] text-gray-900 font-semibold rounded-xl hover:bg-yellow-400 transition"
                    >
                        Join the Mission
                    </a>
                </div>
            </div>
        </section>
    );
};
