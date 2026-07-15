import {
    BriefcaseBusiness,
    Building2,
    CalendarDays,
    Layers3,
    MapPin,
    Wallet,
    Users,
    ChevronRight
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { getRelatedJobs } from "@/lib/jobs";
import LeftSideContainer from "./LeftSideContainer";
import RightSideContainer from "./RightSideContainer";

const JobDetailsCard = async ({ job }) => {

    // console.log(job);
    // console.log(job.postedAt);

    // const date = new Date(job.postedAt);

    // console.log(date);
    // console.log(date.getTime());
    // console.log(isNaN(date.getTime()));

    const data = [
        { icon: MapPin, label: job?.location },
        { icon: Building2, label: job?.workplaceType },
        { icon: CalendarDays, label: job?.deadline },
        { icon: Layers3, label: job?.category },
        { icon: BriefcaseBusiness, label: job?.employmentType },
        {
            icon: Users,
            label: job?.vacancy ? `${job.vacancy} Vacancy` : null,
        },
        { icon: BriefcaseBusiness, label: job?.experienceRequired },
        { icon: Wallet, label: job?.salary },
    ];

    const requirements = job?.jobRequirements?.map((item, index) => (
        <li key={index} className="flex items-start gap-2 text-md text-gray-600 leading-relaxed">


            <ChevronRight className="w-4 h-4 text-[#7c3aed] mt-1 shrink-0" />

            <span>{item}</span>
        </li>
    ));

    const skills = job?.skillsAndExpertise?.map((item, index) => (
        <ul key={index} className="gap-2 text-md text-gray-700  bg-gray-100 rounded-full px-3 py-1 ">
            {item}
        </ul>
    ));

    const relatedJobs = await getRelatedJobs(
        job.category,
        job._id
    );

    return (
        <div className="mx-auto my-8 max-w-7xl px-4 sm:px-6 lg:my-12 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

                {/* Left Side */}
                <LeftSideContainer
                    job={job}
                    data={data}
                    requirements={requirements}
                    skills={skills} />

                {/* Right Side */}
                <RightSideContainer
                    relatedJobs={relatedJobs} />

            </div>
        </div>
    );
};

export default JobDetailsCard;