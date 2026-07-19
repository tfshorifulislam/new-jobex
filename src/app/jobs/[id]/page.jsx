import JobDetailsCard from '@/components/DetailsPageComponent/JobDetails';
import { getJobsById } from '@/lib/jobs';
import React from 'react';

const JobDetailsPage = async ({ params }) => {
    const { id } = await params
    const job = await getJobsById(id)
    console.log(job)
    // console.log(response.data.jobs[0]);
    return (
        <div>
            <JobDetailsCard job={job} />
        </div>
    );
};

export default JobDetailsPage;