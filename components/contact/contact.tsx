"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        service: "",
        date: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        toast.success("Your appointment request has been submitted!");
        setFormData({
            name: "",
            phone: "",
            service: "",
            date: "",
            message: "",
        });
    };

    const today = new Date().toISOString().split("T")[0]; // yyyy-mm-dd

    return (
        <section
            id="contact"
            className="bg-white dark:bg-[#0a0a23] md:py-20 py-12 px-6 md:px-20 text-black dark:text-white"
        >
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                    Contact Us
                </h2>
                <h3 className="text-2xl font-semibold mb-2 dark:text-white">
                    Book Your Appointment
                </h3>
                <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                    We’d love to hear from you. Whether you're ready for a new look or
                    just have a question, get in touch and we’ll get back to you shortly.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto bg-white dark:bg-[#1a1a2e] p-8 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="" disabled>
                        Select a Service
                    </option>
                    <option value="Haircut">Haircut</option>
                    <option value="Shaving">Shaving</option>
                    <option value="Beard Trim">Beard Trim</option>
                    <option value="Facial">Facial</option>
                    <option value="Hair Coloring">Hair Coloring</option>
                </select>

                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={today} // disables past dates
                    className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message (Optional)"
                    rows={4}
                    className="md:col-span-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="md:col-span-2 flex justify-center">
                    <Button
                        type="submit"
                        onClick={() => console.log("Submit button clicked")}
                        className="cursor-pointer bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white px-8 py-3 rounded-full text-lg hover:opacity-90 transition duration-300"
                    >
                        Submit
                    </Button>
                </div>
            </form>

            {/* Contact Info */}
            <div className="max-w-3xl mx-auto mt-16 text-center space-y-4">
                <h4 className="text-2xl font-semibold text-blue-500">Get In Touch</h4>
                <p className="text-gray-700 dark:text-gray-300">
                    📍 <strong>Address:</strong> 500 N Bell Ave #109, Denton, TX 76209, United States
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                    📞 <strong>Phone:</strong>{" "}
                    <a href="tel:+19406129127" className="text-blue-500 hover:underline">
                        +1 940-612-9127
                    </a>
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                    ⏰ <strong>Hours:</strong> Mon–Fri: 9:00 AM – 7:00 PM,
                    <br /> Sat: 9:00 AM – 5:00 PM,
                    <br /> Sun: Closed
                </p>
            </div>
        </section>
    );
};

export default Contact;
