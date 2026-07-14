"use client";

import { MapPin, Search } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

const SearchJobs = ({ setJobs }) => {

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = async () => {
    
  }

  return (
    <div className="space-y-3">
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Job title, keyword..."
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
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="w-full rounded-xl border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-600"
        />
      </div>

      <Button
        type="submit"
        onClick={handleSearch}
        className="w-full rounded-xl bg-blue-600 hover:bg-blue-700"
      >
        Search Jobs
      </Button>
    </div>
  );
};

export default SearchJobs;