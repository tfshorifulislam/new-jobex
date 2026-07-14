import { Briefcase, Calendar, MapPin } from 'lucide-react';
import React from 'react';

const JobCard = ({jobs}) => {

    return (
        <div className='className="lg:col-span-3 space-y-4"'>
            {/* Job Cards List */}
            <div className="space-y-4">
                {jobs.map((job) => (
                    <div key={job._id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden">

                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h2 className="text-lg font-bold text-gray-800 hover:text-blue-600 cursor-pointer">{job.jobTitle}</h2>
                                <p className="text-sm font-medium text-gray-600">{job.company}</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-gray-500 mb-4 bg-gray-50 p-2 rounded-lg">
                            <div className="flex items-center gap-1">
                                <Briefcase size={14} /> <span>{job.experienceRequired}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <MapPin size={14} /> <span>{job.workplaceType} • {job.location}</span>
                            </div>
                            <div className="font-semibold text-gray-700">
                                ৳ {job.salary}
                            </div>
                            <div className="ml-auto flex items-center gap-1 text-red-500 font-medium">
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobCard;