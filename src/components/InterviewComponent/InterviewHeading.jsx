import { Briefcase } from 'lucide-react';
import React from 'react';

const InterviewHeading = () => {
    return (
        <section className="border-b bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#6633ff]/10 px-4 py-2 text-sm font-medium text-[#6633ff]">
                    <Briefcase size={16} />
                    Interview Preparation
                </span>

                <h1 className="mt-6 text-2xl font-bold text-gray-900 md:text-5xl">
                    Interview Questions
                </h1>

                <p className="mt-4 max-w-3xl text-gray-600 leading-7">
                    Prepare for your next interview with curated technical and
                    behavioral questions. Choose a category and start practicing.
                </p>
            </div>
        </section>
    );
};

export default InterviewHeading;