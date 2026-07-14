'use client'
import React, { useState } from 'react';
import { MapPin, Briefcase, Calendar, } from 'lucide-react';
import SearchJobs from '@/components/JobsComponent/SearchJobs';
import JobsFilterWraper from '@/components/JobsComponent/JobsFilterWraper';

// ডামি ডাটা (Dummy Data)
const dummyJobs = [];

const JobsPage = () => {

    // সার্চ ইনপুট স্টেট
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchLocation, setSearchLocation] = useState('');


    

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
            {/* Top Header */}
            <div className="max-w-7xl mx-auto mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Latest Jobs in BD</h1>
            </div>

            {/* Main Layout Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* LEFT SIDEBAR: FILTERS */}
                <JobsFilterWraper />

                {/* RIGHT CONTENT: SEARCH & JOB CARDS */}
                <div className="lg:col-span-3 space-y-4">

                    {/* Search Bar Container */}
                    

                    {/* Job Cards List */}
                    <div className="space-y-4">
                        {dummyJobs.map((job) => (
                            <div key={job.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden">

                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h2 className="text-lg font-bold text-gray-800 hover:text-blue-600 cursor-pointer">{job.title}</h2>
                                        <p className="text-sm font-medium text-gray-600">{job.company}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-gray-500 mb-4 bg-gray-50 p-2 rounded-lg">
                                    <div className="flex items-center gap-1">
                                        <Briefcase size={14} /> <span>{job.experience}</span>
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
                                    {job.skills.map((skill, index) => (
                                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md border border-gray-200">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobsPage;