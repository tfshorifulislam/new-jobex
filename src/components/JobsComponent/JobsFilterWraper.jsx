import { SlidersHorizontal } from 'lucide-react';
import React, { useState } from 'react';
import WorkplaceType from './WorkplaceType';
import JobType from './JobType';
import JobPostTime from './JobPostTime';
import SearchJobs from './SearchJobs';

const JobsFilterWraper = () => {





    const [selectedWorkplaceTypes, setSelectedWorkplaceTypes] = useState([]);
    const [selectedJobTypes, setSelectedJobTypes] = useState([]);
    const [selectedPostedTime, setSelectedPostedTime] = useState('All');

    // সার্চ ইনপুট স্টেট
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchLocation, setSearchLocation] = useState('');


    const [salaryMin, setSalaryMin] = useState('');
    const [salaryMax, setSalaryMax] = useState('');

    // ---- হ্যান্ডলার ফাংশনসমূহ (ফিল্টার লজিক যুক্ত করতে সুবিধা হবে) ----
    const handleWorkplaceTypeChange = (type) => {
        if (selectedWorkplaceTypes.includes(type)) {
            setSelectedWorkplaceTypes(selectedWorkplaceTypes.filter(t => t !== type));
        } else {
            setSelectedWorkplaceTypes([...selectedWorkplaceTypes, type]);
        }
    };

    const handleJobTypeChange = (type) => {
        if (selectedJobTypes.includes(type)) {
            setSelectedJobTypes(selectedJobTypes.filter(t => t !== type));
        } else {
            setSelectedJobTypes([...selectedJobTypes, type]);
        }
    };

    const handleClearAll = () => {
        setSearchKeyword('');
        setSearchLocation('');
        setSelectedWorkplaceTypes([]);
        setSelectedJobTypes([]);
        setSelectedPostedTime('All');
        setSalaryMin('');
        setSalaryMax('');
    };


    return (
        <div className="lg:col-span-1 bg-white p-5 rounded-xl shadow-sm border border-gray-100 h-fit space-y-6">

            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <span className="font-bold text-gray-700 flex items-center gap-2">
                    <SlidersHorizontal size={18} /> Filter
                </span>
                <button onClick={handleClearAll} className="text-xs text-red-500 hover:underline">Clear All</button>
            </div>

            {/* Search Bar Container */}
            <SearchJobs
                searchKeyword={searchKeyword}
                searchLocation={searchLocation} />

            {/* Workplace Type (Multi-select Checkbox) */}
            <WorkplaceType selectedWorkplaceTypes={selectedWorkplaceTypes} />

            {/* Job Type (Multi-select Checkbox) */}
            <JobType selectedJobTypes={selectedJobTypes} />

            {/* Job Posted (Single-select Radio) */}
            <JobPostTime selectedPostedTime={selectedPostedTime} />
        </div>
    );
};

export default JobsFilterWraper;