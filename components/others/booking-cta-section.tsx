"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BookingCTASection = () => {
    return (
        <section
            id="booking-cta"
            className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 text-white md:py-20 py-12 px-6 md:px-20 rounded-lg max-w-full mx-auto text-center"
        >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
                Ready to Elevate Your Style?
            </h2>
            <p className="max-w-3xl mx-auto mb-12 text-lg md:text-xl font-medium drop-shadow-md">
                Step into Fama Barber Shop and Beauty Salon for a fresh, bold look that turns heads. Experience expert grooming tailored just for you.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 w-full max-w-4xl mx-auto">
                <Link href={'#contact'}>
                    <Button
                        className="cursor-pointer w-full md:w-auto bg-white text-gradient-to-r from-blue-600 via-purple-600 to-pink-600 font-bold py-3 px-8 rounded-lg hover:brightness-110 transition"
                        onClick={() => {
                            document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Book an Appointment
                    </Button>
                </Link>

                <Link href={'#services'}>
                    <Button
                        variant="outline"
                        className=" cursor-pointer w-full md:w-auto border-white text-white font-semibold py-3 px-8 rounded-lg hover:text-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition"
                    >
                        View Our Services
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default BookingCTASection;
