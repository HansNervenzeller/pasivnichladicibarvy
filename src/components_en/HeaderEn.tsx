// components_en/HeaderEn.tsx
import React, { useState, useEffect } from "react";
import { SunSnow, Menu } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export const HeaderEn: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const switchToCzech = () => {
        const newPath = "/cs" + location.pathname;
        navigate(newPath);
        setMenuOpen(false);
    };

    const menuItems = (
        <>
            <li>
                <a
                    href="#motivation"
                    className="text-[#333652] hover:text-[#fad02c] font-bold transition-colors"
                    onClick={() => setMenuOpen(false)}
                >
                    Motivation
                </a>
            </li>
            <li>
                <a
                    href="#principles"
                    className="text-[#333652] hover:text-[#fad02c] font-bold transition-colors"
                    onClick={() => setMenuOpen(false)}
                >
                    Principles
                </a>
            </li>
            <li>
                <a
                    href="#join"
                    className="text-[#333652] hover:text-[#fad02c] font-bold transition-colors"
                    onClick={() => setMenuOpen(false)}
                >
                    Join
                </a>
            </li>
            <li>
                <button
                    onClick={switchToCzech}
                    className="text-[#333652] hover:text-[#fad02c] font-bold transition-colors"
                >
                    🇨z
                </button>
            </li>
        </>
    );

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
            }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <SunSnow
                        className="text-[#333652] hover:text-[#fad02c] transition-colors mr-2"
                        size={28}
                    />
                    <span className="font-bold text-[#333652] text-xl">
                        Passive Cooling Paints
                    </span>
                </div>
                {/* Desktop menu */}
                <nav className="hidden md:block">
                    <ul className="flex items-center space-x-6 pr-4">
                        {menuItems}
                    </ul>
                </nav>
                {/* Mobile menu button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label="Open menu"
                >
                    <Menu size={32} className="text-[#333652]" />
                </button>
                {/* Mobile menu dropdown */}
                {menuOpen && (
                    <div className="absolute top-full right-4 mt-2 bg-white rounded-lg shadow-lg p-4 z-50 md:hidden">
                        <ul className="flex flex-col space-y-4">{menuItems}</ul>
                    </div>
                )}
            </div>
        </header>
    );
};
