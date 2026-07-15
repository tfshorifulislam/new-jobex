import { Bookmark, EllipsisVertical } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const LeftSideContainer = ({ job, data, requirements, skills }) => {
    return (
        <div className="lg:col-span-2 space-y-8">

            {/* Header */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            {job.jobTitle}
                        </h1>

                        <p className="mt-2 text-base font-medium text-blue-600">
                            {job.companyName}
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="rounded-full border border-gray-200 p-2 transition hover:bg-gray-100">
                            <Bookmark size={20} />
                        </button>

                        <button className="rounded-full border border-gray-200 p-2 transition hover:bg-gray-100">
                            <EllipsisVertical size={20} />
                        </button>
                    </div>
                </div>

                {/* Info Cards */}
                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {data.map((item, index) => {
                        if (!item.label) return null;

                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:border-blue-500 hover:bg-blue-50"
                            >
                                <Icon
                                    size={18}
                                    className="text-blue-600 shrink-0"
                                />

                                <span className="text-sm font-medium text-gray-700">
                                    {item.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Description Card */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                <h2 className="text-2xl font-bold text-slate-900">
                    Job Description
                </h2>

                <p className="mt-4 leading-8 text-gray-600 whitespace-pre-line">
                    {job.jobDescription}
                </p>

                {/* Requirements */}

                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Job Requirements
                    </h2>

                    <ul className="mt-5 space-y-3 text-sm text-gray-600">
                        {requirements}
                    </ul>
                </div>

                {/* Skills */}

                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Skills & Areas of Expertise
                    </h2>

                    <li className="mt-5 flex flex-wrap gap-3">
                        {skills}
                    </li>
                </div>

                {/* Company */}

                <div className="mt-10 border-t border-gray-200 pt-8">
                    <h2 className="mb-5 text-2xl font-bold text-slate-900">
                        Company Overview
                    </h2>

                    <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">

                        <Image
                            src={job?.image || "/companylogo.jpg"}
                            width={60}
                            height={60}
                            alt={job.companyName}
                            className="rounded-xl border border-gray-200 object-cover"
                        />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                {job.companyName}
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                {job.location}
                            </p>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default LeftSideContainer;