import Link from 'next/link';
import React from 'react';

const RightSideContainer = ({ relatedJobs }) => {
    return (
        <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">

                {/* Apply Card */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    Apply Button
                </div>

                {/* Related Jobs */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h2 className="mb-5 text-xl font-bold text-gray-900">
                        Related Jobs
                    </h2>

                    <div className="space-y-4">
                        {relatedJobs.length > 0 ? (
                            relatedJobs.map((job) => (
                                <Link
                                    key={job._id}
                                    href={`/jobs/${job._id}`}
                                    className="block rounded-xl border border-gray-200 p-4 transition hover:border-blue-600 hover:bg-blue-50"
                                >
                                    <h3 className="font-semibold text-gray-900 hover:text-blue-600">
                                        {job.jobTitle}
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-500">
                                        {job.companyName}
                                    </p>

                                    <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-500">
                                        <span>{job.location}</span>
                                        <span>•</span>
                                        <span>{job.workplaceType}</span>
                                        <span>•</span>
                                        <span>{job.employmentType}</span>
                                    </div>

                                    <p className="mt-3 text-sm font-semibold text-blue-600">
                                        ৳ {job.salary}
                                    </p>
                                </Link>
                            ))
                        ) : (
                            <p className="text-sm text-gray-500">
                                No related jobs found.
                            </p>
                        )}
                    </div>
                </div>

            </div>
        </aside>
    );
};

export default RightSideContainer;