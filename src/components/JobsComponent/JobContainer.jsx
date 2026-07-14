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
        jobType: "",
        postedWithin: "",
    })


    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
            <JobsFilterWrapper
                filters={filters}
                setFilters={setFilters}
                setAllJobs={setAllJobs} />

            <div className="lg:col-span-3">
                <JobCard jobs={jobs} />
            </div>
        </div>
    );
};

export default JobContainer;