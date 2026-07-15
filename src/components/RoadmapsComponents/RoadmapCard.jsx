import { ArrowRight, } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const RoadmapCard = ({ roadmaps }) => {
    return (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {roadmaps.map((roadmap) => {
                    const Icon = roadmap.icon;

                    return (
                        <Link
                            key={roadmap.title}
                            href={roadmap.link}
                            target="_blank"
                            className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6633ff] hover:shadow-xl"
                        >
                            {/* Icon */}
                            <div
                                className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl ${roadmap.color}`}
                            >
                                <Icon size={28} />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-[#6633ff]">
                                    {roadmap.title}
                                </h2>

                                <p className="mt-3 text-sm leading-6 text-gray-500">
                                    {roadmap.description}
                                </p>
                            </div>

                            {/* Bottom */}
                            <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5">
                                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                                    {roadmap.level}
                                </span>

                                <div className="flex items-center gap-2 text-sm font-medium text-[#6633ff]">
                                    View
                                    <ArrowRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default RoadmapCard;