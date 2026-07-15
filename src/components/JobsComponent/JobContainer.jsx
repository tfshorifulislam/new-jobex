'use client'

import React, { useState } from 'react';
import JobsFilterWrapper from './JobsFilterWraper';
import JobCard from './JobCard';

const JobContainer = ({ jobs }) => {

    const [allJobs, setAllJobs] = useState(jobs);
    const [filters, setFilters] = useState({
        search: "",
        location: "",
        workplaceType: "",
        employmentType: "",
        postedWithin: "",
    })

    return (
        <div>
            {/* Top Header */}
            <div className="max-w-7xl mx-auto mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Latest Jobs in BD</h1>
                <p className="mt-1 text-sm text-gray-500">
                    Total Jobs {allJobs.length}
                </p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
                <JobsFilterWrapper
                    filters={filters}
                    setFilters={setFilters}
                    setAllJobs={setAllJobs} />

                <div className="lg:col-span-3">
                    <JobCard jobs={allJobs} />
                </div>
            </div>
        </div>
    );
};

export default JobContainer;