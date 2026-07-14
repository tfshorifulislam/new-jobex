import { getJobs } from '@/lib/jobs';
import JobContainer from '@/components/JobsComponent/JobContainer';

const JobsPage = async () => {

    const jobs = await getJobs();

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
            {/* Top Header */}
            <div className="max-w-7xl mx-auto mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Latest Jobs in BD</h1>
            </div>

            {/* Main Layout Grid */}
            <JobContainer jobs={jobs} />
        </div>

    );
};

export default JobsPage;