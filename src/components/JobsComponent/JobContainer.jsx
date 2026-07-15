'use client'

import React, { useState } from 'react';
import JobsFilterWrapper from './JobsFilterWraper';
import JobCard from './JobCard';
import FilterContent from './FilterContent';

const JobContainer = ({ jobs,  title = "Latest Jobs in BD" }) => {

    const [allJobs, setAllJobs] = useState(jobs);
    const [filters, setFilters] = useState({
        search: "",
        location: "",
        workplaceType: "",
        employmentType: "",
        postedWithin: "All",
    })

    return (
        <div>
            {/* Top Header */}
            <div className="max-w-7xl mx-auto mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Latest {title}</h1>
                <p className="mt-1 text-sm text-gray-500">
                    Total Jobs {allJobs.length}
                </p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

                <div className='block md:hidden'>
                    <FilterContent
                        filters={filters}
                        setFilters={setFilters}
                        setAllJobs={setAllJobs} />
                </div>

                <div className='hidden md:block'>
                    <JobsFilterWrapper
                        filters={filters}
                        setFilters={setFilters}
                        setAllJobs={setAllJobs} />
                </div>

                <div className="lg:col-span-3">
                    <JobCard jobs={allJobs} />
                </div>
            </div>
        </div>
    );
};

export default JobContainer;