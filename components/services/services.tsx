"use client"

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
    Scissors,
    Droplet,
    Star,
    User,
    Smile,
    ChevronLeft,
    ChevronRight,
    Brush,
} from "lucide-react";

const servicesData = [
    {
        title: "Classic Haircuts",
        subtitle: "Timeless Precision",
        description:
            "Experience traditional grooming with a modern touch that leaves you looking sharp and confident every day.",
        items: ["Taper & Fade", "Scissor Cuts", "Kids Haircuts"],
        icon: Scissors,
    },
    {
        title: "Beard Styling",
        subtitle: "Defined & Distinguished",
        description:
            "Expert trimming, shaping, and grooming services to make your beard look its absolute best.",
        items: ["Hot Towel Shave", "Beard Design", "Beard Color"],
        icon: User,
    },
    {
        title: "Hair Treatments",
        subtitle: "Scalp & Strength",
        description:
            "Boost hair health with nourishing treatments that revitalize your scalp and strengthen your hair.",
        items: ["Deep Conditioning", "Hair Spa", "Anti-Hair Fall Therapy"],
        icon: Droplet,
    },
    {
        title: "Premium Services",
        subtitle: "Luxury Meets Grooming",
        description:
            "Indulge in an upscale self-care experience with exclusive grooming services tailored for you.",
        items: ["VIP Grooming", "Massage Add-ons", "Signature Facial"],
        icon: Star,
    },
    {
        title: "Skin Care",
        subtitle: "Glow & Revive",
        description:
            "Tailored treatments for clean, refreshed skin that enhances your natural glow and confidence.",
        items: ["Detox Facial", "Peel Treatments", "Hydration Therapy"],
        icon: Smile,
    },
    {
        title: "Color & Styling",
        subtitle: "Express Yourself",
        description:
            "Trendy styles and expert color techniques that let you express your unique personality.",
        items: ["Hair Color", "Highlights", "Hair Styling & Finish"],
        icon: Brush,
    },
];

const variants: Variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
  };

const Services = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [cardsPerPage, setCardsPerPage] = useState(3);
    const [direction, setDirection] = useState(0);

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

    const handlePrev = () => {
        if (startIndex > 0) {
            setDirection(-1);
            setStartIndex(startIndex - cardsPerPage);
        }
    };

    const handleNext = () => {
        if (startIndex + cardsPerPage < servicesData.length) {
            setDirection(1);
            setStartIndex(startIndex + cardsPerPage);
        }
    };

    const visibleCards = servicesData.slice(startIndex, startIndex + cardsPerPage);

    return (
        <section
            id="services"
            className="bg-white dark:bg-[#0a0a23] md:py-20 py-10 px-6 md:px-20 text-black dark:text-white"
        >
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                    Our Services
                </h2>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                    Grooming. Relaxation. Style. Everything you deserve — under one roof.
                </p>
            </div>

            {/* Slide container */}
            <div className="max-w-7xl mx-auto flex flex-col gap-6 relative min-h-[400px]">
                <AnimatePresence custom={direction} initial={false}>
                    <motion.div
                        key={startIndex} // Important to re-render on pagination change
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {visibleCards.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={service.title}
                                    className="relative group bg-gray-50 dark:bg-[#1a1a35] rounded-xl shadow-md p-8 hover:shadow-xl transition-transform duration-0 hover:scale-105"
                                >
                                    {/* Gradient line on top */}
                                    <div
                                        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-t-xl origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out"
                                    />

                                    {/* Icon top-left */}
                                    <div className="absolute top-6 left-6 text-blue-600 dark:text-blue-400">
                                        <Icon size={28} />
                                    </div>

                                    <div className="pl-12 flex flex-col h-full">
                                        <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-transparent bg-clip-text">
                                            {service.title}
                                        </h3>
                                        <h4 className="text-md text-gray-600 dark:text-gray-400 mb-4">
                                            {service.subtitle}
                                        </h4>
                                        <p
                                            className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed"
                                            title={service.description}
                                        >
                                            {service.description}
                                        </p>
                                        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1 leading-6 flex-grow">
                                            {service.items.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                        <p className="mt-6 text-sm italic text-blue-600">
                                            Book your appointment now!
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination */}
                <div className="flex justify-end gap-4 mt-6">
                    <button
                        onClick={handlePrev}
                        disabled={startIndex === 0}
                        className={`p-3 rounded-full border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 transition 
              ${startIndex === 0
                                ? "cursor-not-allowed opacity-40"
                                : "hover:bg-blue-600 hover:text-white"
                            }`}
                        aria-label="Previous Services"
                    >
                        <ChevronLeft size={24} className="cursor-pointer" />
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={startIndex + cardsPerPage >= servicesData.length}
                        className={`p-3 rounded-full border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 transition
              ${startIndex + cardsPerPage >= servicesData.length
                                ? "cursor-not-allowed opacity-40"
                                : "hover:bg-blue-600 hover:text-white"
                            }`}
                        aria-label="Next Services"
                    >
                        <ChevronRight size={24} className="cursor-pointer" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;
