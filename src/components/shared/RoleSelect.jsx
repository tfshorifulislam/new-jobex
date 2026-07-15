

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RoleSelect({ value, onValueChange }) {
    return (
        <RadioGroup
            defaultValue="seeker"
            className="w-fit flex gap-6 my-7"
            value={value}
            onValueChange={onValueChange}>
            <div className="flex items-center gap-3">
                <RadioGroupItem value="seeker" id="r2" />
                <Label htmlFor="r2">Seeker</Label>
            </div>
            <div className="flex items-center gap-3">
                <RadioGroupItem value="recruiter" id="r3" />
                <Label htmlFor="r3">Recruiter</Label>
            </div>
        </RadioGroup>
    )
}

