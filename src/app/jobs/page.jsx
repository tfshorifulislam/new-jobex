import JobsFilterWraper from '@/components/JobsComponent/JobsFilterWraper';
import JobCard from '@/components/JobsComponent/JobCard';

const JobsPage = () => {

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
            {/* Top Header */}
            <div className="max-w-7xl mx-auto mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Latest Jobs in BD</h1>
            </div>

            {/* Main Layout Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* LEFT SIDEBAR: FILTERS */}
                <JobsFilterWraper />

                {/* RIGHT CONTENT: SEARCH & JOB CARDS */}
                <div className="lg:col-span-3 space-y-4">
                   <JobCard/>
                </div>
            </div>
        </div>
    );
};

export default JobsPage;