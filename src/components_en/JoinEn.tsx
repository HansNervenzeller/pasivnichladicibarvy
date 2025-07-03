// components_en/JoinEn.tsx
import React, { useState, useRef } from "react";
import {
    Smartphone,
    Handshake,
    Palette,
    Clapperboard,
    Laptop,
    Microscope,
    FileText,
    Globe,
    Puzzle,
    Mail,
} from "lucide-react";

// Pomocná funkce pro výběr ikony podle klíče
const getLucideIcon = (key: string) => {
    const iconProps = { size: 36, color: "#333652" };
    switch (key) {
        case "social":
            return <Smartphone {...iconProps} />;
        case "outreach":
            return <Handshake {...iconProps} />;
        case "designer":
            return <Palette {...iconProps} />;
        case "video":
            return <Clapperboard {...iconProps} />;
        case "web":
            return <Laptop {...iconProps} />;
        case "science":
            return <Microscope {...iconProps} />;
        case "grant":
            return <FileText {...iconProps} />;
        case "translator":
            return <Globe {...iconProps} />;
        case "member":
            return <Puzzle {...iconProps} />;
        default:
            return <Globe {...iconProps} />;
    }
};

const roles = [
    {
        key: "member",
        title: "Supporting Member",
        description:
            "Be part of something bigger. Join the mission today. Your support empowers meaningful change.",
    },
    {
        key: "social",
        title: "Social Media Coordinator",
        description:
            "Manage our social media presence and engage with the community.",
    },
    {
        key: "outreach",
        title: "Outreach Officer",
        description:
            "Connect with organizations and spread the word about our mission.",
    },
    {
        key: "designer",
        title: "Visual Designer",
        description:
            "Create graphics and visuals for our campaigns and website.",
    },
    {
        key: "video",
        title: "Video Editor",
        description:
            "Edit and produce engaging video content for our platforms.",
    },
    {
        key: "web",
        title: "Website & SEO Advisor",
        description:
            "Help us improve our website and search engine visibility.",
    },
    {
        key: "science",
        title: "Scientific Outreach Assistant",
        description:
            "Assist with scientific communication and outreach activities.",
    },
    {
        key: "grant",
        title: "Grant Writer",
        description:
            "Research and write grant applications to support our work.",
    },
    {
        key: "translator",
        title: "Translator",
        description: "Translate materials to help us reach a global audience.",
    },
];

// Komponenta pro jednu roli
const RoleCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    selected: boolean;
    onClick: () => void;
}> = ({ icon, title, description, selected, onClick }) => (
    <div
        className={`cursor-pointer rounded-xl border-2 transition-all p-6 shadow-md hover:bg-[#fad02c] hover:text-[#333652] hover:border-[#fad02c] ${
            selected
                ? "bg-[#fad02c] text-[#333652] border-[#fad02c]"
                : "bg-white text-[#333652] border-[#e9eaec]"
        }`}
        onClick={onClick}
        tabIndex={0}
        role="button"
        aria-pressed={selected}
        onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") onClick();
        }}
    >
        <div className="flex flex-col items-center gap-2">
            <span className="text-4xl">{icon}</span>
            <div className="font-bold text-lg text-center text-[#333652]">
                {title}
            </div>
            <div className="text-sm text-center opacity-80 text-[#333652]">
                {description}
            </div>
        </div>
    </div>
);

const JoinEn: React.FC = () => {
    const [selectedRole, setSelectedRole] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [motivation, setMotivation] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const nameInputRef = useRef<HTMLInputElement>(null);

    // Funkce pro výběr role a přesun focusu na jméno
    const handleRoleSelect = (roleTitle: string) => {
        setSelectedRole(roleTitle);
        setTimeout(() => {
            nameInputRef.current?.focus();
        }, 0);
    };

    const AIRTABLE_BASE_ID = "appAVB2TksYqim5wi"; // ID vaší Airtable databáze
    const AIRTABLE_TABLE = "TABLE"; // např. "Table 1"
    const AIRTABLE_TOKEN =
        "patOgk4VlmW0JDwax.8117497a12d8797900cdbe64dda2e5127801feccff656338c9b5388350a3086e"; // Váš Airtable API token

    // Odeslání dat do Google Sheets přes Apps Script
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            await fetch(
                `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(
                    AIRTABLE_TABLE
                )}`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        fields: {
                            name: name,
                            email: email,
                            position: selectedRole,
                            country: country,
                            motivation: motivation,
                        },
                    }),
                }
            );
            setSubmitted(true);
            setName("");
            setEmail("");
            setCountry("");
            setMotivation("");
            setSelectedRole("");
        } catch (err) {
            alert(
                "There was an error sending your application. Please try again."
            );
        } finally {
            setSubmitting(false);
        }
    };

    return submitted ? (
        <section
            id="join"
            className="mt-16 snap-start py-16 px-4 max-w-4xl mx-auto rounded-xl flex flex-col items-center justify-center min-h-[60vh] bg-[#333652] transition-colors duration-700"
        >
            <img
                src="https://mcdn.wallpapersafari.com/medium/81/93/byg90N.jpg"
                alt="Thank you"
                className="rounded-xl shadow-lg max-w-full max-h-[60vh] object-contain mb-8"
            />
            <div className="text-green-300 text-center font-bold text-2xl mb-2">
                Thank you for joining!
            </div>
            <div className="text-white text-center text-xl">
                You are cool now! 😎
            </div>
        </section>
    ) : (
        <section id="join" className="py-16 px-0 w-full bg-red-700">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">
                    Join the Movement
                </h2>
                <div className="text-center mb-6 text-white">
                    <div>
                        I am building a global campaign to make passive cooling
                        paints mainstream. Want to help? You don’t need a PhD —
                        just passion.
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
                    {roles.map((role) => (
                        <RoleCard
                            key={role.key}
                            icon={getLucideIcon(role.key)}
                            title={role.title}
                            description={role.description}
                            selected={selectedRole === role.title}
                            onClick={() => handleRoleSelect(role.title)}
                        />
                    ))}
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-white font-bold mb-1">
                            Full Name <span className="text-white">*</span>
                        </label>
                        <input
                            ref={nameInputRef}
                            type="text"
                            className="w-full p-2 rounded border"
                            required
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-white font-bold mb-1">
                            Email <span className="text-white">*</span>
                        </label>
                        <input
                            type="email"
                            className="w-full p-2 rounded border"
                            required
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-white font-bold mb-1">
                            Position <span className="text-white">*</span>
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 rounded border"
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                            placeholder="Choose or type your role"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-white font-bold mb-1">
                            Country <span className="text-white">*</span>
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 rounded border"
                            required
                            placeholder="Enter your country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-white font-bold mb-1">
                            Motivation <span className="text-white">*</span>
                        </label>
                        <textarea
                            className="w-full p-2 rounded border h-32"
                            required
                            placeholder="Why do you want to join?"
                            value={motivation}
                            onChange={(e) => setMotivation(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-gradient-to-r from-[#fad02c] to-[#ff5733] text-[#333652] font-bold py-3 px-6 rounded-lg transition-all duration-500 flex items-center hover:bg-gradient-to-r hover:from-[#ff5733] hover:to-[#3357ff] hover:text-[#333652] focus:outline-none focus:ring-2 focus:ring-[#fad02c] focus:ring-offset-2 shadow-md subtle-button"
                        disabled={submitting}
                    >
                        {submitting ? (
                            <span className="flex items-center gap-2">
                                <svg
                                    className="animate-spin h-5 w-5 text-[#333652]"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        fill="none"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v8z"
                                    />
                                </svg>
                                Sending...
                            </span>
                        ) : (
                            <>
                                <Mail className="mr-2" size={20} />
                                Send Application
                            </>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default JoinEn;
