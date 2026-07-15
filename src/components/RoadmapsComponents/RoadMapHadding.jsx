import { Map } from 'lucide-react';
import React from 'react';

const RoadMapHadding = () => {
    return (
        <section className="border-b bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#6633ff]/10 px-4 py-2 text-sm font-medium text-[#6633ff]">
                        <Map size={16} />
                        Developer Roadmaps
                    </span>

                    <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
                        Roadmaps
                    </h1>

                    <p className="mt-5 text-lg leading-8 text-gray-600">
                        Follow structured learning paths to become job-ready. Choose your
                        career path and learn step by step with interactive roadmaps.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RoadMapHadding;