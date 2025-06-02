import React, { useState } from "react";

const Galery: React.FC = () => {
    const images = [
        "/downloads/Picture4.png",
        "/downloads/Picture5.png",
        "/downloads/Picture6.png",
        "/downloads/Picture7.png",
    ];

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openImage = (src: string) => {
        setSelectedImage(src);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    return (
        <section id="galerie" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Galerie</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
                            onClick={() => openImage(src)}
                        >
                            <img
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={closeImage}
                >
                    <img
                        src={selectedImage}
                        alt="Selected"
                        className="max-w-full max-h-full rounded-lg"
                    />
                </div>
            )}
        </section>
    );
};

export default Galery;
