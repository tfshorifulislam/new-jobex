"use client";

import { SlidersHorizontal } from "lucide-react";

import SearchJobs from "./SearchJobs";
import WorkplaceType from "./WorkplaceType";
import JobType from "./JobType";
import JobPostTime from "./JobPostTime";

const JobsFilterWrapper = ({ setJobs, setLocation }) => {

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-6">

            {/* Header */}
            <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-2">
                    <SlidersHorizontal size={18} />
                    <h2 className="font-semibold">Filters</h2>
                </div>

                {/* <button
                    onClick={handleClearAll}
                    className="text-sm text-red-500 hover:text-red-600"
                >
                    Clear All
                </button> */}
            </div>

            <SearchJobs
                setJobs={setJobs}
            />

            <WorkplaceType />

            <JobType />

            <JobPostTime />
        </div>
    );
};

export default JobsFilterWrapper;