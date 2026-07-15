"use client";

import Link from "next/link";

import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
    const icon = [
        <FaFacebookF />,
        <RiTwitterXFill />,
        <FaInstagram />,
        <FaLinkedinIn />,
        <AiFillYoutube />,
        <FaWhatsapp />,
    ]

    return (
        <footer className="bg-[#151C34] text-white">
            <div className="mx-auto max-w-7xl px-6 py-16">

                <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">

                    {/* Logo */}
                    <div>

                        <Link href="/" className="inline-flex items-center gap-2">

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#6633ff] to-indigo-500 text-xl font-bold">
                                N
                            </div>

                            <div>

                                <h2 className="text-3xl font-bold">
                                    <span className="text-white">
                                        New
                                    </span>

                                    <span className="text-[#6633ff]">
                                        JobEx
                                    </span>
                                </h2>

                                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                                    Worldwide Jobs
                                </p>

                            </div>

                        </Link>

                        <p className="mt-6 max-w-sm leading-7 text-gray-400">
                            Connecting talented professionals with trusted employers
                            worldwide. Discover remote, hybrid, internship and full-time
                            opportunities all in one place.
                        </p>

                        <div className="mt-8">

                            <h4 className="mb-4 text-lg font-semibold">
                                Follow Us
                            </h4>

                            <div className="flex flex-wrap gap-3">

                                {icon.map((icon, index) => (
                                    <Link
                                        key={index}
                                        href="/"
                                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lg transition-all duration-300 hover:bg-[#6633ff] hover:scale-110"
                                    >
                                        {icon}
                                    </Link>
                                ))}

                            </div>

                        </div>

                    </div>

                    {/* Company */}
                    <div>

                        <h3 className="mb-6 text-xl font-semibold">
                            Company
                        </h3>

                        <div className="space-y-4 text-gray-400">

                            <Link href="/" className="block hover:text-white">
                                About Us
                            </Link>

                            <Link href="/" className="block hover:text-white">
                                Our Team
                            </Link>

                            <Link href="/" className="block hover:text-white">
                                Contact
                            </Link>

                            <Link href="/" className="block hover:text-white">
                                Terms of Service
                            </Link>

                            <Link href="/" className="block hover:text-white">
                                Privacy Policy
                            </Link>

                        </div>

                    </div>

                    {/* Employers */}
                    <div>

                        <h3 className="mb-6 text-xl font-semibold">
                            Employers
                        </h3>

                        <div className="space-y-4 text-gray-400">

                            <Link href="/" className="block hover:text-white">
                                Post a Job
                            </Link>

                            <Link href="/" className="block hover:text-white">
                                Browse Candidates
                            </Link>

                            <Link href="/" className="block hover:text-white">
                                Employer Dashboard
                            </Link>

                            <Link href="/" className="block hover:text-white">
                                Hiring Solutions
                            </Link>

                            <Link href="/" className="block hover:text-white">
                                Employer FAQ
                            </Link>

                        </div>

                    </div>

                    {/* Job Seekers */}
                    <div>

                        <h3 className="mb-6 text-xl font-semibold">
                            Job Seekers
                        </h3>

                        <div className="space-y-4 text-gray-400">

                            <Link href="/" className="block hover:text-white">
                                Find Jobs
                            </Link>

                            <Link href="/" className="block hover:text-white">
                                Remote Jobs
                            </Link>

                            <Link href="/" className="block hover:text-white">
                                Career Advice
                            </Link>

                            <Link href="/" className="block hover:text-white">
                                Resume Builder
                            </Link>

                            <Link href="/" className="block hover:text-white">
                                Learning Resources
                            </Link>

                        </div>

                    </div>

                    {/* Contact */}
                    <div>

                        <h3 className="mb-6 text-xl font-semibold">
                            Need Help?
                        </h3>

                        <div className="space-y-5 text-gray-400 leading-7">

                            <p>
                                198 Bir Uttam Mir Shawkat Sarak,
                                <br />
                                Gulshan, Dhaka-1212,
                                Bangladesh
                            </p>

                            <p>
                                +880 1568-621583
                            </p>

                            <p>
                                newjobex4@gmail.com
                            </p>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-14 border-t border-white/10 pt-8">

                    <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">

                        <p className="text-gray-400">
                            © {new Date().getFullYear()} NewJobEx. All rights reserved.
                        </p>

                        <p className="text-gray-400">
                            Made with ❤️ for professionals worldwide.
                        </p>

                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;