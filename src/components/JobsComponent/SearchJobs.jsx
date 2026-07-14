import { MapPin, Search } from 'lucide-react';
import React from 'react';

const SearchJobs = ({ searchKeyword, searchLocation }) => {
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Searching with states:", {
            searchKeyword,
            searchLocation,
            selectedWorkplaceTypes,
            selectedJobTypes,
            selectedPostedTime,
            salaryMin,
            salaryMax
        });
    };

    return (
        <form onSubmit={handleSearchSubmit} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 space-y-3">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="relative">
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Title or keyword"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Enter desired location"
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg text-sm transition-colors">
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchJobs;