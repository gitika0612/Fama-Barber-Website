"use client";

import React from "react";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const pricingData = [
    {
        title: "Basic Grooming",
        price: "$25",
        features: [
            "Haircut",
            "Beard Trim",
            "Neck Shave",
            "Eyebrow Trim",
            "Shoulder Massage",
            "Hair Wash",
            "Blow Dry",
        ],
        highlight: false,
    },
    {
        title: "Classic Package",
        price: "$40",
        features: [
            "Haircut",
            "Beard Trim",
            "Facial",
            "Hair Wash",
            "Scalp Massage",
            "Eyebrow Trim",
            "Beard Design",
        ],
        highlight: true,
    },
    {
        title: "Premium Styling",
        price: "$60",
        features: [
            "Haircut",
            "Beard Design",
            "Coloring",
            "Facial",
            "Scalp Massage",
            "Shoulder Massage",
            "Deluxe Treatment",
        ],
        highlight: false,
    },
];

const PricingSection = () => {
    return (
        <section
            id="pricing"
            className="bg-gray-100 dark:bg-[#121212] md:py-20 py-12 px-6 md:px-20 text-black dark:text-white"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                    Pricing & Packages
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
                    Choose from our flexible grooming packages designed to suit every style and budget.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {pricingData.map((pkg, idx) => (
                        <div
                            key={idx}
                            className={`relative rounded-xl ${pkg.highlight
                                    ? "p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                                    : ""
                                }`}
                        >
                            <Card
                                className={`rounded-xl h-full bg-white dark:bg-[#1a1a2e] ${pkg.highlight ? "p-6" : "border border-gray-300 dark:border-gray-700 p-6"
                                    }`}
                            >
                                {pkg.highlight && (
                                    <div className="absolute top-0 left-0 right-0 flex justify-center -mt-4">
                                        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-xs font-bold uppercase px-4 py-1 rounded-full shadow-md">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <CardContent className="p-0">
                                    <h3 className="text-2xl font-semibold text-white mb-2">{pkg.title}</h3>
                                    <p className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                        {pkg.price}
                                    </p>

                                    <ul className="space-y-2 mb-6">
                                        {pkg.features.map((feature, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                                            >
                                                <Check className="w-4 h-4 text-green-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {pkg.highlight ? (
                                        <Link href={"#contact"}>
                                        <Button
                                            className="w-full font-semibold rounded-xl 
                                            bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 
                                            text-white cursor-default"
                                        >
                                            Book Now
                                        </Button>
                                        </Link>
                                    ) : (
                                        <Link href={"#contact"}>
                                        <Button
                                            className="w-full font-semibold rounded-xl 
                                            bg-gray-300 text-black hover:bg-blue-600 hover:text-white 
                                            dark:bg-gray-700 dark:text-white dark:hover:bg-blue-600 dark:hover:text-white"
                                        >
                                            Book Now
                                        </Button>
                                        </Link>
                                    )}

                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
