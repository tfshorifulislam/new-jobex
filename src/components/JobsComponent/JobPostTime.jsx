"use client";

import { CalendarClock } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const postedTimes = [
  "All",
  "Last Week",
  "Last 3 Months",
  "This Year",
];

const JobPostTime = ({ filters, setFilters }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <CalendarClock className="h-5 w-5 text-blue-600" />
        <h3 className="text-sm font-semibold text-gray-900">
          Job Posted
        </h3>
      </div>

      <RadioGroup
        className="space-y-2"
      >
        {postedTimes.map((time) => {
          const id = `posted-${time.toLowerCase().replace(/\s+/g, "-")}`;

          return (
            <Label
              key={time}
              htmlFor={id}
              className={`flex cursor-pointer items-center justify-between rounded-xl border p-3 transition-all ${
                '' === time
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
              }`}
            >
              <span className="text-sm font-medium text-gray-700">
                {time}
              </span>

              <RadioGroupItem
                id={id}
                value={time}
              />
            </Label>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default JobPostTime;