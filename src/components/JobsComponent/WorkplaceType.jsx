"use client";

import { Building2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const workplaceTypes = ["Onsite", "Hybrid", "Remote"];

const WorkplaceType = ({
    selectedWorkplaceType,
    setSelectedWorkplaceType,
}) => {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-blue-600" />
                <h3 className="text-sm font-semibold text-gray-900">
                    Workplace Type
                </h3>
            </div>

            <RadioGroup
                value={selectedWorkplaceType}
                onValueChange={setSelectedWorkplaceType}
                className="space-y-2"
            >
                {workplaceTypes.map((type) => (
                    <Label
                        key={type}
                        htmlFor={type}
                        className={`flex items-center justify-between rounded-xl border p-3 cursor-pointer transition
              ${selectedWorkplaceType === type
                                ? "border-blue-600 bg-blue-50"
                                : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                            }`}
                    >
                        <span className="text-sm font-medium">{type}</span>

                        <RadioGroupItem
                            id={type}
                            value={type}
                        />
                    </Label>
                ))}
            </RadioGroup>
        </div>
    );
};

export default WorkplaceType;