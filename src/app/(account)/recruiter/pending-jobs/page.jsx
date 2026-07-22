"use client";

import { useEffect, useState } from "react";
import {
    Clock3,
    MapPin,
    BriefcaseBusiness,
    CalendarDays,
} from "lucide-react";
import { useSession } from "@/lib/auth-client";

const PendingPage = () => {
    const { data: session } = useSession();

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!session?.user?.email) return;

        const fetchJobs = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pendingJobs?email=${session.user.email}`
                );

                const data = await res.json();

                setJobs(data.data || []);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, [session]);

    if (loading) {
        return (
            <div className="flex h-[70vh] items-center justify-center">
                <span className="loading loading-spinner loading-lg text-[#6633ff]"></span>
            </div>
        );
    }

    return (
        <div className="mx-auto px-5 py-8">
            {/* Header */}
            <div className="mb-10">
                <h1 className="text-4xl font-bold bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    Pending Jobs
                </h1>

                <p className="mt-2 text-gray-500">
                    These job posts are currently waiting for admin approval.
                </p>
            </div>

            {/* Empty State */}
            {jobs.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white py-20 text-center shadow-sm">
                    <Clock3 className="mb-5 h-16 w-16 text-[#6633ff]" />

                    <h2 className="text-2xl font-bold text-gray-800">
                        No Pending Jobs
                    </h2>

                    <p className="mt-2 max-w-md text-gray-500">
                        You don't have any pending job posts at the moment.
                    </p>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {jobs.map((job) => (
                        <div
                            key={job._id}
                            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6633ff] hover:shadow-lg"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">
                                        {job.jobTitle}
                                    </h2>

                                    <p className="mt-1 font-medium text-[#6633ff]">
                                        {job.companyName}
                                    </p>
                                </div>

                                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-[#6633ff]">
                                    Pending
                                </span>
                            </div>

                            <div className="mt-6 space-y-4 text-sm text-gray-600">
                                <div className="flex items-center gap-3">
                                    <MapPin size={18} className="text-[#6633ff]" />
                                    <span>{job.location}</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <BriefcaseBusiness
                                        size={18}
                                        className="text-[#6633ff]"
                                    />
                                    <span>{job.employmentType}</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <CalendarDays
                                        size={18}
                                        className="text-[#6633ff]"
                                    />
                                    <span>
                                        {job.postedAt
                                            ? new Date(
                                                  job.postedAt
                                              ).toLocaleDateString()
                                            : "N/A"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PendingPage;