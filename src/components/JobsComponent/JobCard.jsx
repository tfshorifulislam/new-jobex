import { Briefcase, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const JobCard = ({ jobs }) => {
    return (
        <div className="space-y-4">
            {jobs.map((job) => (
                <Link href={`/jobs/${job._id}`} key={job._id} className="bg-white p-5 block rounded-xl shadow-sm border border-gray-100 hover:border-blue-600 transition-shadow relative overflow-hidden">

                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h2 className="text-lg font-bold text-gray-800 hover:text-blue-600 cursor-pointer">{job.jobTitle}</h2>
                            <p className="text-sm font-medium text-gray-600">{job.companyName}</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between text-xs text-gray-500 mb-4 bg-gray-50 p-2 rounded-lg gap-x-4 gap-y-3">
                        <div className='flex flex-col md:flex-row gap-x-4 gap-y-3'>
                            <div className="flex items-center gap-1">
                                <Briefcase size={14} /> <span>{job.experienceRequired}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <MapPin size={14} /> <span>{job.workplaceType} • {job.location}</span>
                            </div>
                            <div className="font-semibold text-gray-700">
                                ৳ {job.salary}
                            </div>
                        </div>
                        <div className="flex gap-1 text-red-500 font-medium">
                            <Calendar size={14} /> <span>Deadline: {job.deadline}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                        {job.skillsAndExpertise.map((skill, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md border border-gray-200">
                                {skill}
                            </span>
                        ))}
                    </div>

                </Link>
            ))}
        </div>
    );
};

export default JobCard;