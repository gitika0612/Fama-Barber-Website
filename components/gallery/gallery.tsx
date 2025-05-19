"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import gallery1 from "../../public/images/gallery/gallery1.jpeg";
import gallery2 from "../../public/images/gallery/gallery2.jpeg";
import gallery3 from "../../public/images/gallery/gallery3.jpeg";
import gallery4 from "../../public/images/gallery/gallery4.jpeg";
import gallery5 from "../../public/images/gallery/gallery5.jpeg";

type GalleryItem = {
    type: "image" | "video";
    src: any;
    alt: string;
};

const galleryItems: GalleryItem[] = [
    { type: "image", src: gallery1, alt: "Gallery Image 1" },
    { type: "video", src: "/images/gallery/video1.mp4", alt: "Gallery Video 1" },
    { type: "image", src: gallery2, alt: "Gallery Image 2" },
    { type: "image", src: gallery3, alt: "Gallery Image 3" },
    { type: "video", src: "/images/gallery/video2.mp4", alt: "Gallery Video 2" },
    { type: "image", src: gallery4, alt: "Gallery Image 4" },
    { type: "image", src: gallery5, alt: "Gallery Image 5" },
    { type: "video", src: "/images/gallery/video3.mp4", alt: "Gallery Video 3" },
    { type: "video", src: "/images/gallery/video4.mp4", alt: "Gallery Video 4" },
];

const Gallery = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [modalItem, setModalItem] = useState<GalleryItem | null>(null);
    const [cardsPerPage, setCardsPerPage] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setCardsPerPage(1);
            } else {
                setCardsPerPage(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const handleView = (item: GalleryItem) => setModalItem(item);
    const closeModal = () => setModalItem(null);

    const startIndex = currentPage * cardsPerPage;
    const visibleItems = galleryItems.slice(startIndex, startIndex + cardsPerPage);
    const totalPages = Math.ceil(galleryItems.length / cardsPerPage);

    return (
        <section
            id="gallery"
            className="bg-white dark:bg-[#0a0a23] md:py-20 py-10 px-6 md:px-20 text-black dark:text-white"
        >
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                    Our Gallery
                </h2>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                    Explore Our Space
                </p>
                <div className="mt-10">
                    <p className="text-lg dark:text-gray-300">
                        Dive into the ambiance and energy of our grooming studio — through vivid visuals and vibrant moments.
                    </p>
                </div>

            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {visibleItems.map((item, index) => (
                    <div
                        key={index}
                        className="relative rounded-xl p-1 bg-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-600 hover:to-pink-500 transition-all duration-300 group"
                    >
                        <div className="bg-white dark:bg-[#0a0a23] rounded-lg overflow-hidden group-hover:shadow-lg transition-shadow duration-300 relative">
                            {item.type === "image" ? (
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-64 object-cover rounded-xl transform transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75"
                                    width={500}
                                    height={400}
                                />
                            ) : (
                                <video
                                    src={item.src}
                                    className="w-full h-64 object-cover rounded-xl transform transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75"
                                    muted
                                    loop
                                    playsInline
                                    autoPlay
                                />
                            )}

                            <Button
                                onClick={() => handleView(item)}
                                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white text-sm px-4 py-2 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-20"
                            >
                                View
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-10 gap-3">
                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i)}
                        className={`w-3 h-3 rounded-full ${i === currentPage ? "bg-blue-600" : "bg-gray-400"
                            } transition`}
                        aria-label={`Go to page ${i + 1}`}
                    />
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {modalItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
                    >
                        <div className="relative max-w-3xl w-full p-4">
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-white z-50"
                            >
                                <X size={32} />
                            </button>

                            {modalItem.type === "image" ? (
                                <Image
                                    src={modalItem.src}
                                    alt={modalItem.alt}
                                    className="w-full max-h-[80vh] object-contain rounded-xl"
                                    width={800}
                                    height={600}
                                />
                            ) : (
                                <video
                                    src={modalItem.src}
                                    autoPlay
                                    controls
                                    className="w-full max-h-[80vh] object-contain rounded-xl"
                                />
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
