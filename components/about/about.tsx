"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import aboutSection from "../../public/images/aboutSection.jpg";

const textVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const imageVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const About = () => {
    return (
        <section id="about" className="bg-gray-50 dark:bg-[#0a0a23] md:py-20 py-10  px-6 md:px-20 text-black dark:text-white">
            {/* Top Heading Section */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                    Who We Are
                </h2>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                    Crafting Confidence, One Style at a Time.
                </p>
                <div className="mt-10">
                    <p className="text-lg dark:text-gray-300">
                        Established in 2010, Fama Barber Shop has grown from a single chair to a full-service grooming hub known for excellence and innovation.
                    </p>
                </div>

            </div>

            {/* Image + Text Section */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left - Image */}
                <motion.div
                    variants={imageVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="rounded-xl overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.03, boxShadow: "0px 15px 40px rgba(59,130,246,0.3)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Image
                        src={aboutSection}
                        alt="About Fama"
                        className="object-cover w-full h-auto"
                        height={500}
                        width={700}
                    />
                </motion.div>

                {/* Right - Text */}
                <motion.div
                    variants={textVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <p className="text-lg mb-4 dark:text-gray-300">
                        At <strong>Fama Barber Shop & Beauty Salon</strong>, we don’t just shape appearances — we shape confidence. Rooted in legacy, fueled by creativity, and driven by passion, we offer an elevated grooming experience tailored for you.
                    </p>
                    <p className="text-lg mb-4 dark:text-gray-400 hidden md:block">
                        Our expert stylists bring precision, skill, and flair to every service — from timeless haircuts to modern transformations and luxurious skin treatments. We welcome you into a space where comfort meets class, and every client is royalty.
                    </p>
                    <p className="text-lg dark:text-gray-400">
                        We stand for style, self-expression, and service excellence. Whether it's your first visit or the hundredth, you’ll always leave looking — and feeling — your absolute best.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
