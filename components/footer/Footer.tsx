import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#0a0a23] text-gray-300 py-12 ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-20">

                {/* Logo & Description */}
                <div>
                    <h2 className="text-2xl font-bold text-blue-500 mb-4">Fama Barber Shop & Beauty Salon</h2>
                    <p className="text-gray-400">
                        Experience premium grooming and beauty services in a welcoming atmosphere.
                        Your style, our passion.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>
                            <Link href="/" className="hover:text-blue-500 transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#gallery" className="hover:text-blue-500 transition">
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link href="#services" className="hover:text-blue-500 transition">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" className="hover:text-blue-500 transition">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
                    <address className="not-italic text-gray-400 space-y-2">
                        <p>123 Barber St, Grooming City, USA</p>
                        <p>Phone: <a href="tel:+1234567890" className="hover:text-blue-500 transition">+1 234 567 890</a></p>
                        <p>Email: <a href="mailto:info@famabarbersalon.com" className="hover:text-blue-500 transition">info@famabarbersalon.com</a></p>
                    </address>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
                    <div className="flex space-x-4 text-gray-400">
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600 transition">
                            <Facebook size={24} />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 transition">
                            <Instagram size={24} />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition">
                            <Twitter size={24} />
                        </Link>
                        <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-red-600 transition">
                            <Youtube size={24} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
                <div className="px-6 md:px-20">
                    &copy; {new Date().getFullYear()} Fama Barber Shop & Beauty Salon. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
