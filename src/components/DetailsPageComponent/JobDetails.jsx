import { getJobsById } from '@/lib/jobs';
import React from 'react';

const JobDetails = async ({ id }) => {
    const job = await getJobsById(id)
    // console.log(job)
    return (
        <div>
            {job.jobTitle}
        </div>
    );
};

export default JobDetails;