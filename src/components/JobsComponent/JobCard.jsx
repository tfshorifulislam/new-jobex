import { Briefcase, MapPin } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const initials = (name = '') =>
    name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((n) => n[0]?.toUpperCase())
        .join('') || '?';

const JobCard = ({ jobs }) => {
    return (
        <div className="space-y-4">
            {jobs.map((job) => (
                <Link
                    href={`/jobs/${job._id}`}
                    key={job._id}
                    className="group relative block overflow-hidden rounded-xl border border-gray-100 bg-white p-5 pl-6 shadow-sm transition-all hover:border-[#6633ff]/30 hover:shadow-md hover:shadow-indigo-100"
                >
                    <span className="absolute left-0 top-0 h-full w-1 origin-left scale-y-0 bg-linear-to-b from-[#6633ff] to-indigo-500 transition-transform duration-200 group-hover:scale-y-100" />

                    <div className="mb-3 flex items-start justify-between gap-4">
                        <div className="flex min-w-0 items-start gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-[#6633ff] to-indigo-500 text-sm font-bold text-white">
                                {initials(job.companyName)}
                            </div>
                            <div className="min-w-0">
                                <h2 className="truncate text-lg font-bold text-gray-800 group-hover:text-[#6633ff]">
                                    {job.jobTitle}
                                </h2>
                                <p className="truncate text-sm font-medium text-gray-600">{job.companyName}</p>
                            </div>
                        </div>

                        {job.salary && (
                            <span className="shrink-0 whitespace-nowrap rounded-lg bg-indigo-50 px-3 py-1.5 text-sm font-semibold text-[#6633ff]">
                                {job.salary}
                            </span>
                        )}
                    </div>

                    <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-500">
                        {job.experienceRequired && (
                            <div className="flex items-center gap-1.5">
                                <Briefcase size={14} className="text-gray-400" />
                                <span>{job.experienceRequired}</span>
                            </div>
                        )}
                        <div className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-gray-400" />
                            <span>{job.workplaceType} • {job.location}</span>
                        </div>
                    </div>

                    {job.skillsAndExpertise?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                            {job.skillsAndExpertise.map((skill, index) => (
                                <span
                                    key={index}
                                    className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-600"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}
                </Link>
            ))}
        </div>
    );
};

export default JobCard;