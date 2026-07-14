"use client";

import { MapPin, Search } from "lucide-react";
import { Button } from "../ui/button";

const SearchJobs = ({
  keyword,
  location,
  onKeywordChange,
  onLocationChange,
  onSearch,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Job title, keyword..."
          value={keyword}
          onChange={(e) => onKeywordChange(e.target.value)}
          className="w-full rounded-xl border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-600"
        />
      </div>

      <div className="relative">
        <MapPin
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          className="w-full rounded-xl border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-600"
        />
      </div>

      <Button
        type="submit"
        className="w-full rounded-xl bg-blue-600 hover:bg-blue-700"
      >
        Search Jobs
      </Button>
    </form>
  );
};

export default SearchJobs;