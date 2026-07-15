'use client';

import JobDetails from '@/components/DetailsPageComponent/JobDetails';
import { useParams } from 'next/navigation';
import React from 'react';

const JobDetailsPage = () => {
    const { id } = useParams();

    return (
        <div>
            <JobDetails id={id} />
        </div>
    );
};

export default JobDetailsPage;