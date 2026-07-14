import React from 'react';

const JobPostTime = ({ selectedPostedTime }) => {
    return (
        <div>
            <h3 className="font-semibold text-sm text-gray-800 mb-2">Job Posted</h3>
            <div className="space-y-2 text-sm text-gray-600">
                {['All', 'Last Week', 'Last 3 Months', 'This Year'].map((time) => (
                    <label key={time} className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="posted"
                            checked={selectedPostedTime === time}
                            onChange={() => setSelectedPostedTime(time)}
                            className="text-blue-600 focus:ring-blue-500"
                        />
                        {time}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default JobPostTime;