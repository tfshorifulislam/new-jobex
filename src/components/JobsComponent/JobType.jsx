"use client";

import { BriefcaseBusiness } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getJobs } from "@/lib/jobs";

const jobTypes = [
  { label: "Full-Time", value: "Full-Time" },
  { label: "Part-Time", value: "Part-Time" },
  { label: "Contractual", value: "Contractual" },
  { label: "Internship", value: "Internship" },
];

const JobType = ({ filters, setFilters, setAllJobs }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <BriefcaseBusiness className="h-5 w-5 text-blue-600" />
        <h3 className="text-sm font-semibold text-gray-900">
          Job Type
        </h3>
      </div>

      <RadioGroup
        value={filters.employmentType}

        onValueChange={async (value) => {

          const newFilters = {
            ...filters,
            employmentType: value
          }

          setFilters(newFilters);

          const data = await getJobs(
            newFilters.search,
            newFilters.location,
            newFilters.workplaceType,
            newFilters.employmentType,
            newFilters.postedWithin
          );

          setAllJobs(data);

        }}

        className="space-y-2"
      >
        {jobTypes.map((type) => (
          <Label
            key={type.value}
            htmlFor={type.value}
            className={`flex cursor-pointer items-center justify-between rounded-xl border p-3 transition-all ${filters.employmentType === type.value
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
              }`}
          >
            <span className="text-sm font-medium text-gray-700">
              {type.label}
            </span>

            <RadioGroupItem
              id={type.value}
              value={type.value}
            />
          </Label>
        ))}
      </RadioGroup>
    </div>
  );
};

export default JobType;