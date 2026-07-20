"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

const socials = [
    { icon: FaFacebookF, label: "Facebook" },
    { icon: RiTwitterXFill, label: "X (Twitter)" },
    { icon: FaInstagram, label: "Instagram" },
    { icon: FaLinkedinIn, label: "LinkedIn" },
    { icon: AiFillYoutube, label: "YouTube" },
    { icon: FaWhatsapp, label: "WhatsApp" },
];

const columnHeadingCls = "mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500";
const columnLinkCls = "group flex w-fit items-center gap-1.5 text-gray-400 transition hover:text-white";

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email.trim()) return;
        toast.success("You're on the list — job alerts incoming.");
        setEmail("");
    };

    return (
        <footer className="relative bg-[#151C34] text-white">
            {/* Accent line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-[#6633ff] via-indigo-500 to-violet-500" />

            <div className="mx-auto max-w-7xl px-6 py-16">

                {/* Job alert signup */}
                <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-12 md:flex-row md:items-center">
                    <div>
                        <h3 className="text-xl font-semibold">Get job alerts in your inbox</h3>
                        <p className="mt-1 text-gray-400">
                            New roles matched to your field, sent weekly. No spam.
                        </p>
                    </div>

                    <form onSubmit={handleSubscribe} className="flex w-full max-w-sm gap-2">
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@email.com"
                            className="h-11 flex-1 rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-[#6633ff]"
                        />
                        <button
                            type="submit"
                            className="flex h-11 shrink-0 items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#6633ff] to-indigo-500 px-4 text-sm font-medium text-white transition hover:opacity-90"
                        >
                            Subscribe
                            <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                    </form>
                </div>

                <div className="grid gap-12 pt-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">

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

                            <h4 className={columnHeadingCls}>
                                Follow us
                            </h4>

                            <div className="flex flex-wrap gap-3">

                                {socials.map(({ icon: Icon, label }) => (
                                    <Link
                                        key={label}
                                        href="/"
                                        aria-label={label}
                                        title={label}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-base text-gray-300 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-br hover:from-[#6633ff] hover:to-indigo-500 hover:text-white hover:scale-110"
                                    >
                                        <Icon />
                                    </Link>
                                ))}

                            </div>

                        </div>

                    </div>

                    {/* Company */}
                    <div>

                        <h3 className={columnHeadingCls}>
                            Company
                        </h3>

                        <div className="space-y-4">

                            <Link href="/" className={columnLinkCls}>
                                About us
                                <ArrowRight className="h-3 w-3 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                            </Link>

                            <Link href="/" className={columnLinkCls}>
                                Our team
                                <ArrowRight className="h-3 w-3 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                            </Link>

                            <Link href="/" className={columnLinkCls}>
                                Contact
                                <ArrowRight className="h-3 w-3 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                            </Link>

                            <Link href="/" className={columnLinkCls}>
                                Terms of service
                                <ArrowRight className="h-3 w-3 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                            </Link>

                            <Link href="/" className={columnLinkCls}>
                                Privacy policy
                                <ArrowRight className="h-3 w-3 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                            </Link>

                        </div>

                    </div>

                    {/* Employers */}
                    <div>

                        <h3 className={columnHeadingCls}>
                            Employers
                        </h3>

                        <div className="space-y-4">

                            <Link href="/" className={columnLinkCls}>
                                Post a job
                                <ArrowRight className="h-3 w-3 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                            </Link>

                            <Link href="/" className={columnLinkCls}>
                                Browse candidates
                                <ArrowRight className="h-3 w-3 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                            </Link>

                            <Link href="/" className={columnLinkCls}>
                                Employer dashboard
                                <ArrowRight className="h-3 w-3 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                            </Link>

                            <Link href="/" className={columnLinkCls}>
                                Hiring solutions
                                <ArrowRight className="h-3 w-3 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                            </Link>

                            <Link href="/" className={columnLinkCls}>
                                Employer FAQ
                                <ArrowRight className="h-3 w-3 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                            </Link>

                        </div>

                    </div>

                    {/* Job Seekers */}
                    <div>

                        <h3 className={columnHeadingCls}>
                            Job seekers
                        </h3>

                        <div className="space-y-4">

                            <Link href="/" className={columnLinkCls}>
                                Find jobs
                                <ArrowRight className="h-3 w-3 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                            </Link>

                            <Link href="/" className={columnLinkCls}>
                                Remote jobs
                                <ArrowRight className="h-3 w-3 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                            </Link>

                            <Link href="/" className={columnLinkCls}>
                                Career advice
                                <ArrowRight className="h-3 w-3 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                            </Link>

                            <Link href="/" className={columnLinkCls}>
                                Resume builder
                                <ArrowRight className="h-3 w-3 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                            </Link>

                            <Link href="/" className={columnLinkCls}>
                                Learning resources
                                <ArrowRight className="h-3 w-3 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                            </Link>

                        </div>

                    </div>

                    {/* Contact */}
                    <div>

                        <h3 className={columnHeadingCls}>
                            Need help?
                        </h3>

                        <div className="space-y-4 text-gray-400">

                            <p className="flex items-start gap-2.5 leading-6">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#8f7bff]" />
                                <span>
                                    198 Bir Uttam Mir Shawkat Sarak,
                                    <br />
                                    Gulshan, Dhaka-1212, Bangladesh
                                </span>
                            </p>

                            <p className="flex items-center gap-2.5">
                                <Phone className="h-4 w-4 shrink-0 text-[#8f7bff]" />
                                <a href="tel:+8801568621583" className="hover:text-white">
                                    +880 1568-621583
                                </a>
                            </p>

                            <p className="flex items-center gap-2.5">
                                <Mail className="h-4 w-4 shrink-0 text-[#8f7bff]" />
                                <a href="mailto:newjobex4@gmail.com" className="hover:text-white">
                                    newjobex4@gmail.com
                                </a>
                            </p>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-14 border-t border-white/10 pt-8">

                    <div className="flex flex-col items-center justify-between gap-4 text-center text-sm md:flex-row">

                        <p className="text-gray-500">
                            © {new Date().getFullYear()} NewJobEx. All rights reserved.
                        </p>

                        <p className="text-gray-500">
                            Made with care for professionals worldwide.
                        </p>

                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;