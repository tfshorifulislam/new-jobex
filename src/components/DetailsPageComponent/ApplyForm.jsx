"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

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
        <form onSubmit={handleSubmit} className="space-y-5">

            <div>
                <label className="mb-2 block text-sm font-medium">
                    Full Name
                </label>

                <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
                />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Email
                    </label>

                    <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Phone Number
                    </label>

                    <input
                        type="tel"
                        required
                        placeholder="+8801XXXXXXXXX"
                        className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
                    />
                </div>

            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    Resume (PDF)
                </label>

                <input
                    type="file"
                    accept=".pdf"
                    required
                    className="w-full rounded-lg border p-3"
                />
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    Portfolio / Website
                </label>

                <input
                    type="url"
                    placeholder="https://yourportfolio.com"
                    className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
                />
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    Cover Letter
                </label>

                <textarea
                    rows={5}
                    placeholder={`Why are you interested in the ${job?.jobTitle} position?`}
                    className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
                />
            </div>

            <Button
                type="submit"
                disabled={loading}
                className="w-full h-11"
            >
                {loading ? "Submitting..." : "Submit Application"}
            </Button>

        </form>
    );
};

export default ApplyForm;