
import { SlidersHorizontal } from "lucide-react";

import SearchJobs from "./SearchJobs";
import WorkplaceType from "./WorkplaceType";
import JobType from "./JobType";
import JobPostTime from "./JobPostTime";

const JobsFilterWrapper = ({ filters, setFilters, setAllJobs }) => {

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-6">

            {/* Header */}
            <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-2">
                    <SlidersHorizontal size={18} />
                    <h2 className="font-semibold">Filters</h2>
                </div>

            </div>

            <SearchJobs filters={filters} setFilters={setFilters} setAllJobs= {setAllJobs}/>

            <WorkplaceType filters={filters} setFilters={setFilters} setAllJobs= {setAllJobs} />

            <JobType filters={filters} setFilters={setFilters} setAllJobs= {setAllJobs} />

            <JobPostTime filters={filters} setFilters={setFilters} setAllJobs= {setAllJobs} />
        </div>
    );
};

export default JobsFilterWrapper;