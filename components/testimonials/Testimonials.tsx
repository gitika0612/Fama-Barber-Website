"use client";

import React from "react";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Gitika Bhatia",
        rating: 5,
        feedback:
            "Absolutely loved the service! The staff was professional and attentive. The ambiance was perfect, and I felt completely relaxed throughout. My haircut was exactly what I wanted, and I would definitely recommend this place to friends and family.",
    },
    {
        name: "Emily Smith",
        rating: 4.5,
        feedback:
            "Top-notch experience from start to finish. The team really listens to your needs and delivers excellent results. The atmosphere is welcoming and clean, and the appointment was on time. I’ll definitely be coming back for my next haircut and grooming.",
    },
    {
        name: "Michael Lee",
        rating: 4,
        feedback:
            "Great ambiance, skilled team, and excellent service quality. They took the time to understand what I wanted and exceeded my expectations. The products they used left my hair feeling fresh and healthy. Highly recommended!",
    },
];

const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const totalStars = 5;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<Star key={"full-" + i} size={20} fill="currentColor" className="text-yellow-500" />);
    }
    if (halfStar) {
        stars.push(
            <Star
                key="half"
                size={20}
                fill="url(#half)"
                className="text-yellow-500"
                style={{ clipPath: "inset(0 50% 0 0)" }}
            />
        );
    }
    for (let i = stars.length; i < totalStars; i++) {
        stars.push(<Star key={"empty-" + i} size={20} fill="none" stroke="currentColor" className="text-yellow-500" />);
    }
    return stars;
};

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="bg-gray-50 dark:bg-[#0a0a23] py-16 px-6 md:px-20"
        >
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                    What Our Clients Say
                </h2>
                <div className="flex justify-center items-center gap-2 text-yellow-500 mb-2">
                    {/* Overall rating stars */}
                    {renderStars(4.6)}
                    <span className="text-gray-700 dark:text-gray-300 text-sm ml-2">
                        4.6 stars (116+ reviews)
                    </span>
                </div>
                <div className="mt-10">
                    <p className="text-lg dark:text-gray-300">
                        Here's what our happy customers have to say about our services.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className="bg-white dark:bg-[#1a1a2e] shadow-lg rounded-2xl p-6 flex flex-col justify-between"
                    >
                        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{`"${t.feedback}"`}</p>
                        <div className="flex justify-between items-center">
                            <h4 className="text-blue-600 font-semibold">— {t.name}</h4>
                            <div className="flex text-yellow-500">
                                {renderStars(t.rating)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
