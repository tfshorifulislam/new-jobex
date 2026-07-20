'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BannerSection = () => {

    const router = useRouter();
    const [keyword, setKeyword] = useState('');
    const [location, setLocation] = useState('');

    const badge = [
        "10K+ Jobs",
        "Verified Companies",
        "Remote Jobs",
        "Internships",
        "Full Time",
        "AI Matching",
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (keyword.trim()) params.set('q', keyword.trim());
        if (location.trim()) params.set('location', location.trim());
        router.push(`/jobs${params.toString() ? `?${params.toString()}` : ''}`);
    };

    return (
        <section className="relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ede9fe_0%,white_65%)]" />
            <div
                className="absolute inset-0 opacity-[0.4]"
                style={{
                    backgroundImage: "radial-gradient(#6633ff11 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">

                {/* Badge */}
                <div className="rounded-full border border-[#6633ff]/20 bg-[#6633ff]/10 px-5 py-2 text-sm font-medium text-[#6633ff]">
                    Smart Job Portal for Global Careers
                </div>

                {/* Small Heading */}
                <p className="mt-8 md:text-lg text-gray-600">
                    Find your dream job or hire top talent with
                </p>

                {/* Main Heading */}
                <h1 className="mt-4 max-w-5xl text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">
                    Build your career with
                    <br />
                    <span className="text-[#6633ff]">
                        NewJobEx
                    </span>
                </h1>

                {/* Description */}
                <p className="mt-8 max-w-3xl md:text-lg md:leading-8 text-gray-600">
                    NewJobEx connects talented professionals with trusted
                    companies. Discover thousands of verified opportunities,
                    apply with confidence, and hire the perfect candidate
                    faster than ever.
                </p>

                {/* Search bar — the actual product action */}
                <form
                    onSubmit={handleSearch}
                    className="mt-10 flex w-full max-w-2xl flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-lg shadow-[#6633ff]/5 sm:flex-row sm:items-center sm:gap-0 sm:rounded-full"
                >
                    <div className="flex flex-1 items-center gap-2 px-4 py-2.5">
                        <Search className="h-4 w-4 shrink-0 text-gray-400" />
                        <Input
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            placeholder="Job title, keyword, or company"
                            className="h-auto border-0 p-0 text-sm shadow-none focus-visible:ring-0"
                        />
                    </div>

                    <div className="hidden h-6 w-px bg-gray-200 sm:block" />

                    <div className="flex flex-1 items-center gap-2 border-t border-gray-100 px-4 py-2.5 sm:border-t-0">
                        <MapPin className="h-4 w-4 shrink-0 text-gray-400" />
                        <Input
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="City or remote"
                            className="h-auto border-0 p-0 text-sm shadow-none focus-visible:ring-0"
                        />
                    </div>

                    <Button
                        type="submit"
                        size="lg"
                        className="h-11 shrink-0 rounded-full bg-[#6633ff] px-6 hover:bg-[#5522ee] sm:ml-1"
                    >
                        Search jobs
                    </Button>
                </form>

                <a
                    href="/recruiter/post-job"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-600 transition hover:text-[#6633ff]"
                >
                    Hiring? Post a job for free
                    <ArrowRight className="h-3.5 w-3.5" />
                </a>

                {/* Trust badges */}
                <div className="mt-10 w-full max-w-3xl hidden gap-3 md:flex md:flex-wrap md:justify-center">
                    {badge?.map((item) => (
                        <div
                            key={item}
                            className="flex items-center justify-center rounded-full border border-[#6633ff]/20 bg-[#6633ff]/5 px-4 py-2 text-sm font-medium text-gray-700"
                        >
                            {item}
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-10 md:mt-16 grid w-full max-w-4xl grid-cols-2 gap-6 rounded-lg border bg-white p-8 shadow-md md:grid-cols-4">

                    <div>
                        <h2 className="text-3xl font-bold text-[#6633ff]">
                            15K+
                        </h2>
                        <p className="mt-1 text-gray-500">
                            Active jobs
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-[#6633ff]">
                            5K+
                        </h2>
                        <p className="mt-1 text-gray-500">
                            Companies
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-[#6633ff]">
                            50K+
                        </h2>
                        <p className="mt-1 text-gray-500">
                            Job seekers
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-[#6633ff]">
                            98%
                        </h2>
                        <p className="mt-1 text-gray-500">
                            Success rate
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BannerSection;