"use client";
import React, { useState } from "react";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import ToggleMode from "./toggle-mode";
import { Button } from "../ui/button";
import { Menu, Phone, X } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            {/* Top header */}
            <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-20 py-4 bg-white dark:bg-[#00001a]">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={logo} alt="Fama Barber Shop Logo" height={50} width={50} />
                    <div className="text-lg font-semibold">FAMA BARBER SHOP</div>
                </Link>

                {/* Desktop menu */}
                <nav className="hidden md:flex gap-4 items-center">
                    <Link href="/" className="hover:text-primary text-sm font-medium">Home</Link>
                    <Link href="#about" className="hover:text-primary text-sm font-medium">About</Link>
                    <Link href="#services" className="hover:text-primary text-sm font-medium">Services</Link>
                    <Link href="#gallery" className="hover:text-primary text-sm font-medium">Gallery</Link>
                    <Link href="#contact" className="hover:text-primary text-sm font-medium">Contact</Link>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <ToggleMode />
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Phone size={15} className="ml-2" />
                        <a href="tel:+19406129127" className="ml-2 hover:text-primary">+1 940-612-9127</a>
                    </div>
                    <Link href="#contact">
                        <Button className="cursor-pointer bg-blue-600 text-white hover:bg-blue-700">Book an Appointment</Button>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-muted-foreground hover:text-foreground"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <Menu className="h-5 w-5" />
                </Button>
            </header>

            {/* Backdrop */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar / Off-canvas */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-zinc-900 z-50 shadow-xl transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header with logo and close */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-zinc-700">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src={logo} alt="Fama Barber Shop Logo" height={30} width={30} />
                        <div className="text-xs font-semibold">FAMA BARBER SHOP</div>
                    </Link>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-6 p-4">
                    <div className="font-bold text-[#3333ff]">Menu</div>
                    {["Home", "About", "Services", "Gallery", "Contact"].map((label, i) => (
                        <Link
                            key={i}
                            href={label === "Home" ? "/" : label === "About" ? "#about" : label === "Services" ? "#services" : label === "Gallery" ? "#gallery" : label === "Contact" ? "#contact" : "/dashboard"}
                            className="text-base font-medium text-foreground hover:text-primary pl-4"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Bottom section with preferences, call, and CTA */}
                <div className="absolute bottom-0 w-full space-y-3 p-5 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-700">
                    {/* Call Us */}
                    <Card className="p-1 bg-gray-200 dark:bg-zinc-700 border-0">
                        <CardContent className="px-3 py-2">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-semibold text-muted-foreground">Call Us</h3>
                                <a href="tel:+19406129127" className="text-sm text-blue-600 hover:underline">+1 940-612-9127</a>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Preferences */}
                    <Card className="p-1 bg-gray-200 dark:bg-zinc-700 border-0">
                        <CardContent className="px-3 py-2">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-semibold text-muted-foreground">Preferences</h3>
                                <ToggleMode />
                            </div>
                        </CardContent>
                    </Card>

                    {/* CTA Button */}
                    <Button className="cursor-pointer w-full bg-blue-600 text-white hover:bg-blue-700">
                        Book an Appointment
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Header;
