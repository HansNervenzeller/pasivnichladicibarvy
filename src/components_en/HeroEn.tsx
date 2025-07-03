// components_en/HeroEn.tsx
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

// Text for typing effect
const typingText = "Fighting for the future. Join the cause.";

// Počet světlušek
const FIREFLY_COUNT = 16;

// Pomocná funkce pro generování náhodných parametrů světlušek
const getFireflies = () =>
    Array.from({ length: FIREFLY_COUNT }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: 6 + Math.random() * 6, // 6–12s
        delay: Math.random() * 8,
        size: 2 + Math.random() * 2, // 2–4px (menší světlušky)
        opacity: 0.6 + Math.random() * 0.4, // 0.6–1
        blur: Math.random() * 1, // 0–1px
        x: 40 + Math.random() * 60, // 40–100px
        y: 30 + Math.random() * 60, // 30–90px
    }));

const HeroEn: React.FC = () => {
    const [displayedText, setDisplayedText] = useState("");
    const [typingIndex, setTypingIndex] = useState(0);
    const [fireflies, setFireflies] = useState(getFireflies);
    const [showFireflies, setShowFireflies] = useState(false);
    const [firefliesFade, setFirefliesFade] = useState(false);

    // Typing effect
    useEffect(() => {
        if (typingIndex < typingText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + typingText[typingIndex]);
                setTypingIndex((prev) => prev + 1);
            }, 40);
            return () => clearTimeout(timeout);
        } else {
            // Po dopsání textu zobraz světlušky
            setShowFireflies(true);
            // Za 5 vteřin začni mizet světlušky
            const fadeTimeout = setTimeout(() => setFirefliesFade(true), 5000);
            // Za 6 vteřin je úplně skryj
            const hideTimeout = setTimeout(() => setShowFireflies(false), 6000);
            return () => {
                clearTimeout(fadeTimeout);
                clearTimeout(hideTimeout);
            };
        }
    }, [typingIndex]);

    // Regenerace světlušek při každém mountu
    useEffect(() => {
        setFireflies(getFireflies());
    }, []);

    return (
        <section className="snap-start pt-28 pb-20 min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
            {/* Fireflies */}
            {showFireflies && (
                <div
                    className={`absolute inset-0 pointer-events-none z-0 transition-opacity duration-1000 ${
                        firefliesFade ? "opacity-0" : "opacity-100"
                    }`}
                >
                    {fireflies.map((f, i) => (
                        <span
                            key={i}
                            className="firefly"
                            style={
                                {
                                    top: `${f.top}%`,
                                    left: `${f.left}%`,
                                    width: `${f.size}px`,
                                    height: `${f.size}px`,
                                    opacity: f.opacity,
                                    filter: `blur(${f.blur}px)`,
                                    animationDuration: `${f.duration}s`,
                                    animationDelay: `${f.delay}s`,
                                    "--x": `${f.x}px`,
                                    "--y": `${f.y}px`,
                                } as React.CSSProperties
                            }
                        />
                    ))}
                </div>
            )}
            {/* Main content */}
            <div className="max-w-3xl relative z-10 mb-20">
                <h1 className="text-4xl md:text-6xl font-times font-bold mb-6 text-[#333652] min-h-[3.5rem]">
                    <span>{displayedText}</span>
                    <span className="blinking-cursor">
                        {typingIndex < typingText.length ? "|" : ""}
                    </span>
                </h1>
                <p className="text-lg md:text-xl  mb-8 text-[#333652]">
                    Be part of the solution.{" "}
                    <strong>Global warming is real</strong> — but we don't need
                    bans or sacrifices. We need solutions that work in the
                    background.{" "}
                    <b>Passive cooling paints could save the planet.</b>
                </p>
                <a
                    href="#join"
                    className="inline-block bg-[#fad02c] text-[#333652] px-6 py-3 rounded-xl text-lg font-bold hover:bg-[#333652] hover:text-white transition"
                >
                    Join the Mission!
                </a>
            </div>
            {/* Fireflies CSS */}
            <style>{`
                .firefly {
                    position: absolute;
                    border-radius: 50%;
                    background: #fad02c;
                    animation: flyfire 8s linear infinite;
                    pointer-events: none;
                }
                @keyframes flyfire {
                    0% {
                        transform: translate(0, 0) scale(1);
                        opacity: 0.7;
                    }
                    40% {
                        opacity: 1;
                    }
                    50% {
                        transform: translate(var(--x, 60px), var(--y, -40px)) scale(1.3);
                        opacity: 1;
                    }
                    60% {
                        opacity: 1;
                    }
                    100% {
                        transform: translate(0, 0) scale(1);
                        opacity: 0.7;
                    }
                }
                .blinking-cursor {
                    display: inline-block;
                    width: 1ch;
                    color: #fad02c;
                    animation: blink 1s steps(1) infinite;
                }
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
            `}</style>
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

export default HeroEn;
