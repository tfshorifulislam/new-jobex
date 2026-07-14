"use client";

import { Building2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const workplaceTypes = [
  { label: "Onsite", value: "onsite" },
  { label: "Hybrid", value: "hybrid" },
  { label: "Remote", value: "remote" },
];

const WorkplaceType = ({ filters, setFilters }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Building2 className="h-5 w-5 text-blue-600" />
        <h3 className="text-sm font-semibold text-gray-900">
          Workplace Type
        </h3>
      </div>

      <RadioGroup
        value={filters.workplaceType}
        onValueChange={(value) =>
          setFilters((prev) => ({
            ...prev,
            workplaceType: value,
          }))
        }
        className="space-y-2"
      >
        {workplaceTypes.map((type) => (
          <Label
            key={type.value}
            htmlFor={type.value}
            className={`flex cursor-pointer items-center justify-between rounded-xl border p-3 transition-all ${
              filters.workplaceType === type.value
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

export default WorkplaceType;