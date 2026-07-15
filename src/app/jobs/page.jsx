import { getJobs } from '@/lib/jobs';
import JobContainer from '@/components/JobsComponent/JobContainer';

const JobsPage = async () => {

    const jobs = await getJobs();

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
            
            <JobContainer jobs={jobs} />
        </div>

    );
};

export default JobsPage;