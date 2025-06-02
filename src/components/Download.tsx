import React from "react";
import {
    Download as DownloadIcon,
    BookOpen,
    Wrench,
    ListOrdered,
} from "lucide-react";

interface DownloadItemProps {
    file: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const DownloadItem: React.FC<DownloadItemProps> = ({
    file,
    title,
    description,
    icon,
}) => (
    <div className="bg-white border border-gray-200 rounded-lg py-4 px-6 shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex flex-col items-center">
        <div className="text-[#fad02c] mb-3">{icon}</div>
        <h3 className="text-lg font-bold text-[#333652] mb-2 text-center">
            {title}
        </h3>
        <p className="text-gray-700 mb-3 text-center text-sm">{description}</p>
        <a
            href={`/downloads/${file}`}
            download
            className="bg-[#fad02c] hover:bg-[#e5bd28] text-[#333652] font-bold py-2 px-5 rounded-lg transition-transform duration-300 hover:scale-102 shadow-md flex items-center subtle-button text-sm"
        >
            <DownloadIcon className="mr-2" size={18} />
            Stáhnout
        </a>
    </div>
);

export const Download: React.FC = () => {
    // Add more documents here as needed
    const documents = [
        {
            file: "SOČ-Barva_Motivace_01.pdf",
            title: "Motivace",
            description:
                "Tento dokument popisuje motivaci pro práci na projektech bojujících se změnou klimatu.",
            icon: <ListOrdered size={40} />, // Roman I
        },
        {
            file: "SOČ-Barva_01.pdf",
            title: "Práce",
            description:
                "Samotná práce projektu. Obsahuje všechny důležité informace. Přesto je vhodné ji číst společně s technickou zprávou.",
            icon: <BookOpen size={40} />, // Roman II
        },
        {
            file: "SOČ-Barva_Technická-zpráva_01.pdf",
            title: "Technická zpráva",
            description:
                "Tento dokument obsahuje technické detaily a je vhodné ho číst společně s prací.",
            icon: <Wrench size={40} />, // Roman III
        },
    ];

    return (
        <section id="downloads" className="py-20 px-6 md:px-16 bg-gray-50 ">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333652] mb-12 text-center">
                    Ke stažení
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {documents.map((doc) => (
                        <DownloadItem
                            key={doc.file}
                            file={doc.file}
                            title={doc.title}
                            description={doc.description}
                            icon={doc.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
