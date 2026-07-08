'use client';

import { Button } from "@/components/ui/button";

const BannerSection = () => {

    const badge = [
        "10K+ Jobs",
        "Verified Companies",
        "Remote Jobs",
        "Internships",
        "Full Time",
        "AI Matching",
    ]

    return (
        <section className="relative overflow-hidden bg-white">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ede9fe_0%,white_65%)]" />

            <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">

                {/* Badge */}
                <div className="rounded-full border border-[#6633ff]/20 bg-[#6633ff]/10 px-5 py-2 text-sm font-medium text-[#6633ff]">
                    Wold wide Smart Job Portal
                </div>

                {/* Small Heading */}
                <p className="mt-8 md:text-lg text-gray-600">
                    Find Your Dream Job or Hire Top Talent with
                </p>

                {/* Main Heading */}
                <h1 className="mt-4 max-w-5xl text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">
                    Build Your Career With
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
                {/* Buttons */}
                <div className="mt-8 flex gap-4 flex-row">
                    <Button
                        size="lg"
                        className="rounded-lg bg-[#6633ff] px-10 hover:bg-[#5522ee]"
                    >
                        Find Jobs
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                        className="rounded-lg border-[#6633ff] px-10 text-[#6633ff] hover:bg-[#6633ff] hover:text-white"
                    >
                        Post a Job
                    </Button>
                </div>

                {/* Stats */}
                <div className="mt-10 md:mt-20 grid w-full max-w-4xl grid-cols-2 gap-6 rounded-3xl border bg-white p-8 shadow-xl md:grid-cols-4">

                    <div>
                        <h2 className="text-3xl font-bold text-[#6633ff]">
                            15K+
                        </h2>
                        <p className="mt-1 text-gray-500">
                            Active Jobs
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
                            Job Seekers
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-[#6633ff]">
                            98%
                        </h2>
                        <p className="mt-1 text-gray-500">
                            Success Rate
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BannerSection;