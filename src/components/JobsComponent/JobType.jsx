import React from 'react';

const JobType = () => {
    return (
        <div>
            <h3 className="font-semibold text-sm text-gray-800 mb-2">Job Type</h3>
            <div className="space-y-2 text-sm text-gray-600">
                {['Full-Time', 'Part-Time', 'Contractual', 'Internship'].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={selectedJobTypes.includes(type)}
                            onChange={() => handleJobTypeChange(type)}
                            className="rounded text-blue-600 focus:ring-blue-500"
                        />
                        {type}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default JobType;