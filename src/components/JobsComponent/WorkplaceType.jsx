import React from 'react';

const WorkplaceType = ({ selectedWorkplaceTypes }) => {
    return (
        <div>
            <h3 className="font-semibold text-sm text-gray-800 mb-2">Workplace Type</h3>
            <div className="space-y-2 text-sm text-gray-600">
                {['Onsite', 'Hybrid', 'Remote'].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={selectedWorkplaceTypes.includes(type)}
                            onChange={() => handleWorkplaceTypeChange(type)}
                            className="rounded text-blue-600 focus:ring-blue-500"
                        />
                        {type}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default WorkplaceType;