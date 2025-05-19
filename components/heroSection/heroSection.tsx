"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import heroSection from "../../public/images/heroSection.webp";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
    }),
};

const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.8 } },
};

const HeroSection = () => {
    return (
        <section className="bg-white dark:bg-gradient-to-b dark:from-[#00001a] dark:to-[#000033] md:py-20 py-12 px-6 md:px-20 text-black dark:text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                    <motion.p
                        custom={1}
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="text-sm text-blue-400 font-semibold mb-2"
                    >
                        Premium Grooming & Beauty Services in Denton, Texas
                    </motion.p>

                    <motion.h1
                        custom={2}
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="text-2xl md:text-5xl font-bold leading-tight mb-4"
                    >
                        Timeless Style, Modern Flair
                    </motion.h1>

                    <motion.h2
                        custom={3}
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="text-xl md:text-2xl text-blue-500 font-extrabold mb-6"
                    >
                        Fama Barber Shop & Beauty Salon
                    </motion.h2>

                    <motion.p
                        custom={4}
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="dark:text-gray-300 mb-6"
                    >
                        At Fama, we blend classic barbering traditions with modern beauty care to deliver exceptional grooming experiences. From fresh cuts and beard trims to facials and styling, our team is dedicated to helping you look and feel your best.
                    </motion.p>

                    <motion.p
                        custom={5}
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="dark:text-gray-300 mb-6 hidden md:block"
                    >
                        Whether you're preparing for a big event or simply treating yourself, our skilled professionals take pride in precision, artistry, and personalized care.
                    </motion.p>

                    {/* Location */}
                    <motion.a
                        custom={6}
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        href="https://www.google.com/maps/place/500+N+Bell+Ave+%23109,+Denton,+TX+76209,+USA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm dark:bg-white/10 border dark:border-white/20 px-4 py-2 rounded-full mb-6 hover:bg-white/20 transition"
                    >
                        <MapPin className="h-5 w-5 text-blue-400" />
                        Denton, Texas
                    </motion.a>

                    {/* Buttons */}
                    <motion.div
                        custom={7}
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap gap-4"
                    >
                        <Link href="#services">
                            <Button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 shadow-lg px-6 py-2.5 rounded-full">
                                Our Services
                            </Button>
                        </Link>

                        <Link href="#contact">
                            <Button
                                variant="outline"
                                className="dark:border-white dark:text-white hover:bg-white/10 px-6 py-2.5 rounded-full"
                            >
                                Book Now
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Down Arrow */}
                    <motion.div
                        custom={8}
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="md:flex justify-center mt-28 hidden"
                    >
                        <Link href={'#about'}>
                            <ArrowDown className="h-8 w-8 text-black dark:text-white animate-bounce" />
                        </Link>
                    </motion.div>
                </div>

                {/* Right Image */}
                <motion.div
                    variants={imageVariant}
                    initial="hidden"
                    animate="visible"
                    className="flex justify-center md:justify-end"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="rounded-xl overflow-hidden shadow-xl max-w-md md:max-w-lg"
                    >
                        <Image
                            src={heroSection}
                            alt="Fama Team"
                            className="object-cover"
                            priority
                            height={500}
                            width={700}
                        />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
