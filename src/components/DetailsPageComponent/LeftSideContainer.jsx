import { Bookmark, EllipsisVertical } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import SavedJobs from './SavedJobs';

const LeftSideContainer = ({ job, data, requirements, skills }) => {

    return (
        <div className="lg:col-span-2 space-y-8">

            {/* Header */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                            {job.jobTitle}
                        </h1>

                        <p className="mt-2 text-sm sm:text-base font-medium text-[#6633ff]">
                            {job.companyName}
                        </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                        <SavedJobs job={job} />

                        <button className="rounded-full border border-gray-200 p-2 hover:bg-gray-100 transition">
                            <EllipsisVertical size={20} />
                        </button>
                    </div>
                </div>

                {/* Info Cards */}
                <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-3 xl:grid-cols-3">
                    {data.map((item, index) => {
                        if (!item.label) return null;

                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className=" flex items-center gap-2  rounded-lg border border-gray-200  bg-gray-50   p-2.5 sm:p-4   transition  hover:border-blue-500  hover:bg-blue-50  "
                            >
                                <Icon
                                    className="h-4 w-4 sm:h-5 sm:w-5 text-[#6633ff] shrink-0"
                                />

                                <span
                                    className=" text-[11px] sm:text-sm font-medium text-gray-700 leading-4 sm:leading-5 wrap-break-word "
                                >
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

                <div className="mt-4 leading-8 text-gray-600 [&_h1]:text-3xl [&_h1]:font-bold [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:text-xl [&_h3]:font-semibold [&_p]:mb-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-2 [&_strong]:font-semibold">
                    {job.jobDescription ? (
                        <p>{job.jobDescription}</p>
                    ) : job.description ? (
                        <div
                            dangerouslySetInnerHTML={{
                                __html: job.description,
                            }}
                        />
                    ) : (
                        <p>No Description</p>
                    )}
                </div>

                {/* Requirements */}

                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Job Requirements
                    </h2>

                    <ul className="mt-5 space-y-3 text-sm text-gray-600">
                        {requirements || 'No Requirements'}
                    </ul>
                </div>

                {/* Skills */}

                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Skills & Areas of Expertise
                    </h2>

                    <ul className="mt-5 flex flex-wrap gap-3">
                        {skills}
                    </ul>
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