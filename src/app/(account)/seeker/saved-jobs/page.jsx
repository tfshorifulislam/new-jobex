"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";

const SavedJobs = () => {
    const { data: session } = useSession();

    const [savedJobs, setSavedJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!session?.user?.id) return;

        const fetchSavedJobs = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/savedJobs?userId=${session?.user?.id}`
                );

                const data = await res.json();

                if (data.success) {
                    setSavedJobs(data.data);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchSavedJobs();
    }, [session]);

    if (loading) {
        return (
            <div className="flex justify-center py-10">
                Loading...
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">
                Saved Jobs ({savedJobs.length})
            </h1>

            <div className="overflow-x-auto border rounded-lg">
                <table className="w-full border-collapse">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border p-3 text-left">#</th>
                            <th className="border p-3 text-left">Job ID</th>
                            <th className="border p-3 text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {savedJobs.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={3}
                                    className="border p-6 text-center"
                                >
                                    No saved jobs found.
                                </td>
                            </tr>
                        ) : (
                            savedJobs.map((job, index) => (
                                <tr key={job._id}>
                                    <td className="border p-3">
                                        {index + 1}
                                    </td>

                                    <td className="border p-3">
                                        {job.jobId}
                                    </td>

                                    <td className="border p-3 text-center">
                                        <Link
                                            href={`/jobs/${job.jobId}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            View Details
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SavedJobs;