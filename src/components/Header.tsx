import React, { useState, useEffect } from "react";
import { SunSnow, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Menu items for reuse
    const menuItems = (
        <>
            <li>
                <a
                    href="#motivation"
                    className="text-[#333652] hover:text-[#fad02c] font-bold transition-colors"
                    onClick={() => setMenuOpen(false)}
                >
                    Motivace
                </a>
            </li>
            <li>
                <a
                    href="#předpoklady"
                    className="text-[#333652] hover:text-[#fad02c] font-bold transition-colors"
                    onClick={() => setMenuOpen(false)}
                >
                    Předpoklady
                </a>
            </li>
            <li>
                <a
                    href="#experiment"
                    className="text-[#333652] hover:text-[#fad02c] font-bold transition-colors"
                    onClick={() => setMenuOpen(false)}
                >
                    Experiment
                </a>
            </li>
            <li>
                <a
                    href="#galerie"
                    className="text-[#333652] hover:text-[#fad02c] font-bold transition-colors"
                    onClick={() => setMenuOpen(false)}
                >
                    Galerie
                </a>
            </li>
            <li>
                <Link
                    to="/ortogen"
                    className="text-[#333652] hover:text-[#fad02c] font-bold transition-colors"
                    onClick={() => setMenuOpen(false)}
                >
                    OrtoGen
                </Link>
            </li>
            <li>
                <Link
                    to="/"
                    className="text-[#333652] hover:text-[#fad02c] font-bold transition-colors"
                    onClick={() => setMenuOpen(false)}
                >
                    en
                </Link>
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
                        Pasivní chladicí barvy
                    </span>
                </div>
                {/* Desktop menu */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-6 pr-4">
                        {location.pathname === "/ortogen" ? (
                            <li>
                                <Link
                                    to="/"
                                    className="text-[#333652] hover:text-[#fad02c] font-bold transition-colors"
                                >
                                    Back
                                </Link>
                            </li>
                        ) : (
                            menuItems
                        )}
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
                        <ul className="flex flex-col space-y-4">
                            {location.pathname === "/ortogen" ? (
                                <li>
                                    <Link
                                        to="/"
                                        className="text-[#333652] hover:text-[#fad02c] font-bold transition-colors"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        Back
                                    </Link>
                                </li>
                            ) : (
                                menuItems
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};
