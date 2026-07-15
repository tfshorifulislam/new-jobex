import JobCard from "@/components/JobsComponent/JobCard";
import JobContainer from "@/components/JobsComponent/JobContainer";
import { getRemoteJobs } from "@/lib/jobs";

const RemoteJobsPage = async () => {
    const jobs = await getRemoteJobs();

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">

            <JobContainer
                jobs={jobs}
                title="Remote Jobs"
            />
        </div>

    );
};

export default RemoteJobsPage;