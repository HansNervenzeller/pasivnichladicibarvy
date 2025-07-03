// components/Vision2030.tsx
import { Users, Landmark, PaintRollerIcon } from "lucide-react"; // přidat navrch souboru

export const Vision2030 = () => {
    return (
        <section className="bg-[#333652] py-16 px-6 md:px-20 snap-start">
            <div className="max-w-4xl mx-auto text-center text-white">
                <h2 className="text-4xl font-bold mb-6">Vision for 2030</h2>
                <p className="text-lg mb-10 text-gray-200">
                    I’m not waiting for permission to act on climate change.
                    Imagine a world where every rooftop helps cool the planet. A
                    world where cities radiate heat away from Earth - quietly,
                    continuously, effectively.
                </p>

                <div className="grid gap-10 md:grid-cols-3 text-left">
                    <div>
                        <PaintRollerIcon className="w-12 h-12 text-yellow-400 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-3 text-white text-center">
                            One Million Painted Surfaces
                        </h3>
                        <p className="text-gray-300 text-center">
                            By 2030, I aim to help cover over one million
                            rooftops, walls, schools, hospitals, factories with
                            passive cooling paint. No wires. No emissions. Just
                            surfaces that fight global warming.
                        </p>
                    </div>

                    <div>
                        <Users className="w-12 h-12 text-yellow-400 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-3 text-white text-center">
                            A Global Network of Local Heroes
                        </h3>
                        <p className="text-gray-300 text-center">
                            I’m building a movement anyone can join — no degrees
                            required. Just passion. I collaborate with
                            volunteers worldwide to raise awareness and push
                            forward for better climate.
                        </p>
                    </div>

                    <div>
                        <Landmark className="w-12 h-12 text-yellow-400 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-3 text-white text-center">
                            European Policy Shift
                        </h3>
                        <p className="text-gray-300 text-center">
                            Let’s influence EU policy so passive cooling becomes
                            standard. Roads, bridges, rooftops, parking lots,
                            buses, warehouses, train stations, shipping
                            containers, stadiums - anything that gets hot should
                            reflect instead of absorb heat.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <p className="mb-6 text-lg font-extrabold font-medium text-white">
                        Want to help me get there? Your journey start today.
                    </p>
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
