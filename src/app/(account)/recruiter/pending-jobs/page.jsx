"use client";

import { useEffect, useState } from "react";
import {
    Clock3,
    MapPin,
    BriefcaseBusiness,
    CalendarDays,
    Wallet,
} from "lucide-react";
import { useSession } from "@/lib/auth-client";

const StatusDot = () => (
    <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
    </span>
);

const PendingCardSkeleton = () => (
    <div className="animate-pulse rounded-2xl border border-gray-100 bg-white p-6">
        <div className="mb-2 h-5 w-2/3 rounded bg-gray-100" />
        <div className="mb-6 h-4 w-1/3 rounded bg-gray-100" />
        <div className="space-y-3">
            <div className="h-3.5 w-1/2 rounded bg-gray-100" />
            <div className="h-3.5 w-1/3 rounded bg-gray-100" />
            <div className="h-3.5 w-2/5 rounded bg-gray-100" />
        </div>
    </div>
);

const PendingPage = () => {
    const { data: session } = useSession();
    const email= session?.user?.email;

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!session?.user?.email) return;

        const fetchJobs = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pendingJobs?email=${email}`,{
                        cache: 'no-cache'
                    });

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

    return (
        <div className="mx-auto max-w-7xl px-5 py-10">
            {/* Header */}
            <div className="mb-10 flex flex-col gap-4 border-b border-gray-100 pb-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#6633ff]">
                        Recruiter · Review queue
                    </p>
                    <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        Pending jobs
                    </h1>
                    <p className="mt-2 max-w-lg text-gray-500">
                        These postings are awaiting admin approval before they go live for job seekers.
                    </p>
                </div>

                {!loading && jobs.length > 0 && (
                    <div className="flex items-center gap-2 self-start rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700 sm:self-auto">
                        <StatusDot />
                        {jobs.length} awaiting review
                    </div>
                )}
            </div>

            {/* Loading */}
            {loading ? (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <PendingCardSkeleton key={i} />
                    ))}
                </div>
            ) : jobs.length === 0 ? (
                /* Empty State */
                <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-gray-200 bg-gray-50/50 py-20 text-center">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-600 to-violet-600">
                        <Clock3 className="h-8 w-8 text-white" />
                    </div>

                    <h2 className="text-xl font-bold text-gray-900">
                        Nothing pending right now
                    </h2>

                    <p className="mt-2 max-w-md text-gray-500">
                        New job posts you submit will show up here while they wait for admin approval.
                    </p>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {jobs.map((job) => (
                        <div
                            key={job._id}
                            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6633ff]/30 hover:shadow-lg hover:shadow-indigo-100"
                        >
                            {/* Left accent bar, matches other cards in the app */}
                            <span className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-amber-400 to-amber-500" />

                            <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                    <h2 className="truncate text-lg font-bold text-gray-900">
                                        {job.jobTitle}
                                    </h2>
                                    <p className="mt-0.5 truncate text-sm font-medium text-[#6633ff]">
                                        {job.companyName}
                                    </p>
                                </div>

                                <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                                    <StatusDot />
                                    Pending
                                </span>
                            </div>

                            <div className="mt-5 space-y-3 border-t border-gray-50 pt-5 text-sm text-gray-600">
                                <div className="flex items-center gap-2.5">
                                    <MapPin size={16} className="shrink-0 text-gray-400" />
                                    <span className="truncate">{job.location}</span>
                                </div>

                                <div className="flex items-center gap-2.5">
                                    <BriefcaseBusiness size={16} className="shrink-0 text-gray-400" />
                                    <span className="truncate">{job.employmentType}</span>
                                </div>

                                {job.salary && (
                                    <div className="flex items-center gap-2.5">
                                        <Wallet size={16} className="shrink-0 text-gray-400" />
                                        <span className="truncate">{job.salary}</span>
                                    </div>
                                )}

                                <div className="flex items-center gap-2.5">
                                    <CalendarDays size={16} className="shrink-0 text-gray-400" />
                                    <span>
                                        Submitted{" "}
                                        {job.postedAt
                                            ? new Date(job.postedAt).toLocaleDateString(undefined, {
                                                  year: "numeric",
                                                  month: "short",
                                                  day: "numeric",
                                              })
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