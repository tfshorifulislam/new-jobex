"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";

const ApplyForm = ({ job }) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        // পরে এখানে API call করবে
        // await axios.post("/api/applications", formData);

        setTimeout(() => {
            setLoading(false);
            alert("Application submitted successfully!");
        }, 1000);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">

            <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>

                <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                />
            </div>

           

                <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>

                    <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>

                    <Input
                        id="phone"
                        type="tel"
                         placeholder="+1 234 567 8901"
                        required
                    />
                </div>

        

            <div className="space-y-2">
                <Label htmlFor="resume">
                    Resume (PDF)
                </Label>

                <Input
                    id="resume"
                    type="file"
                    accept=".pdf"
                    required
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="portfolio">
                    Portfolio / Website
                </Label>

                <Input
                    id="portfolio"
                    type="url"
                    placeholder="https://yourportfolio.com"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="cover">
                    Cover Letter{" "}
                    <span className="text-xs font-normal text-muted-foreground">
                        (optional)
                    </span>
                </Label>

                <Textarea
                    id="cover"
                    rows={6}
                    placeholder={`Why are you interested in the ${job?.jobTitle} position?`}
                />
            </div>

            <Button
                type="submit"
                disabled={loading}
                className="h-11 w-full"
            >
                {loading ? "Submitting..." : "Submit Application"}
            </Button>

        </form>
    );
};

export default ApplyForm;