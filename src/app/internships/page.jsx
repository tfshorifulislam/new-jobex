import JobContainer from '@/components/JobsComponent/JobContainer';
import { getInternShipJobs } from '@/lib/jobs';

const Internships = async () => {
    const jobs = await getInternShipJobs();
    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">

            <JobContainer
                jobs={jobs}
                title="All Internships"
            />
        </div>

    );
};

export default Internships;