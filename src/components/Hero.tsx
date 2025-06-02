import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import "./Hero.css";

const typingText =
    "Pasivní chladicí barvy, aneb jak ochladit nejen domy ale i celou planetu";

export const Hero: React.FC = () => {
    const [typedText, setTypedText] = useState("");
    const [typingDone, setTypingDone] = useState(false);
    const [showFireflies, setShowFireflies] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            setTypedText(typingText.slice(0, currentIndex + 1));
            currentIndex++;
            if (currentIndex >= typingText.length) {
                clearInterval(interval);
                setTypingDone(true);
                setTimeout(() => {
                    setShowFireflies(true);
                    setTimeout(() => setShowFireflies(false), 6000); // Fireflies disappear after 6 seconds
                }, 1000); // Delay fireflies appearance by 1 second
            }
        }, 30);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const fireflies = document.querySelectorAll(".firefly");

        const randomMovement = () => {
            fireflies.forEach((firefly) => {
                const element = firefly as HTMLElement;
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                element.style.transform = `translate(${x}px, ${y}px)`;
            });
        };

        const interval = setInterval(randomMovement, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <section className="pt-28 pb-20 min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                {showFireflies && (
                    <>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div
                                key={index}
                                className="firefly random-movement flicker-once"
                            ></div>
                        ))}
                    </>
                )}
            </div>
            <h1 className="text-6xl md:text-6xl max-w-7xl font-times font-bold text-[#333652] mb-6 leading-tight min-h-[7rem] z-10">
                {typedText}
                {!typingDone && <span className="typing-cursor">|</span>}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-700 z-10">
                Jednoduché řešení složitého problému s využitím pasivních
                chladicích barev, které přispívají k ochraně životního prostředí
                a boji proti klimatickým změnám.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-4 z-10">
                <button
                    onClick={() => scrollToSection("downloads")}
                    className="bg-[#fad02c] hover:bg-[#333652] text-[#222222] hover:text-white font-bold py-3 px-10 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center subtle-button text-lg tracking-wide border-none outline-none"
                >
                    Dokumenty ke stažení
                    <ChevronDown className="ml-3" size={22} />
                </button>
                <button
                    onClick={() => scrollToSection("experiment")}
                    className="bg-[#333652] hover:bg-[#fad02c] text-white hover:text-[#222222] font-bold py-3 px-10 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center subtle-button text-lg tracking-wide border-none outline-none"
                >
                    Experiment
                    <ChevronDown className="ml-3" size={22} />
                </button>
            </div>
            <div className="absolute bottom-8 left-0 right-0 flex justify-center slow-bounce z-10">
                <button
                    onClick={() =>
                        window.scrollBy({ top: 600, behavior: "smooth" })
                    }
                    className="focus:outline-none"
                >
                    <ChevronDown className="text-[#333652]" size={64} />
                </button>
            </div>
        </section>
    );
};
