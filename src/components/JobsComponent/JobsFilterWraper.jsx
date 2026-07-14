"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

import SearchJobs from "./SearchJobs";
import WorkplaceType from "./WorkplaceType";
import JobType from "./JobType";
import JobPostTime from "./JobPostTime";

const JobsFilterWrapper = () => {
    const [filters, setFilters] = useState({
        keyword: "",
        location: "",

        workplaceTypes: [],
        jobTypes: [],

        postedTime: "All",

        salaryMin: "",
        salaryMax: "",
    });

    // Checkbox Handle
    const handleCheckbox = (field, value) => {
        setFilters((prev) => ({
            ...prev,
            [field]: prev[field].includes(value)
                ? prev[field].filter((item) => item !== value)
                : [...prev[field], value],
        }));
    };

    // Radio Handle
    const handleRadio = (field, value) => {
        setFilters((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    // Input Handle
    const handleInput = (field, value) => {
        setFilters((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    // Clear All
    const handleClearAll = () => {
        setFilters({
            keyword: "",
            location: "",
            workplaceTypes: [],
            jobTypes: [],
            postedTime: "All",
            salaryMin: "",
            salaryMax: "",
        });
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-6">

            {/* Header */}
            <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-2">
                    <SlidersHorizontal size={18} />
                    <h2 className="font-semibold">Filters</h2>
                </div>

                <button
                    onClick={handleClearAll}
                    className="text-sm text-red-500 hover:text-red-600"
                >
                    Clear All
                </button>
            </div>

            <SearchJobs
                keyword={filters.keyword}
                location={filters.location}
                onKeywordChange={(value) => handleInput("keyword", value)}
                onLocationChange={(value) => handleInput("location", value)}
            />

            <WorkplaceType
                selectedWorkplaceTypes={filters.workplaceTypes}
                handleWorkplaceTypeChange={(value) =>
                    handleCheckbox("workplaceTypes", value)
                }
            />

            <JobType
                selectedJobTypes={filters.jobTypes}
                handleJobTypeChange={(value) =>
                    handleCheckbox("jobTypes", value)
                }
            />

            <JobPostTime
                selectedPostedTime={filters.postedTime}
                setSelectedPostedTime={(value) =>
                    handleRadio("postedTime", value)
                }
            />
        </div>
    );
};

export default JobsFilterWrapper;