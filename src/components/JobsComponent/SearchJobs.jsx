
import { MapPin, Search } from "lucide-react";
import { Button } from "../ui/button";
import { getJobs } from "@/lib/jobs";

const SearchJobs = ({ filters, setFilters, setAllJobs }) => {

  const handleSearch = async () => {

    console.log('filter',filters);
    const data = await getJobs(
      filters.search,
      filters.location,
      filters.workplaceType,
      filters.jobType,
      filters.postedWithin
    );

    setAllJobs(data);
     console.log(data);
  };

  return (
    <div className="space-y-3">
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        <input
          type="text"
          value={filters.search}
          onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
          placeholder="Job title, keyword..."
          className="w-full rounded-xl border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-[#6633ff]"
        />
      </div>

      <div className="relative">
        <MapPin
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        <input
          type="text"
          value={filters.location}
          onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
          placeholder="Location"
          className="w-full rounded-xl border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-[#6633ff]"
        />
      </div>

      <Button
        type="submit"
        onClick={handleSearch}
        className="w-full rounded-xl bg-[#6633ff] hover:bg-[#6633fff1]"
      >
        Search Jobs
      </Button>
    </div>
  );
};

export default SearchJobs;