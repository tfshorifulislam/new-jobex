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
import { ApplyBtnModal } from "./ApplyBtnModal";

const JobDetailsCard = async ({ job }) => {

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
    ].filter((item) => item.label);

    const skills = job?.skillsAndExpertise?.map((item, index) => (
        <li
            key={index}
            className="list-none rounded-full border border-[#6633ff]/20 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-[#6633ff] transition-all hover:bg-indigo-100 sm:px-4 sm:py-2 sm:text-sm"
        >
            {item}
        </li>
    ));

    const relatedJobs = await getRelatedJobs(
        job.category,
        job._id
    );

    return (
        <>
            <div className="mx-auto my-8 max-w-7xl px-4 sm:px-6 lg:my-12 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

                    <LeftSideContainer
                        job={job}
                        data={data}
                        skills={skills}
                    />

                    <div className="sticky top-24 space-y-6 self-start">
                        <div className="hidden lg:block rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                            <ApplyBtnModal
                                job={job}
                            />
                        </div>

                        <div className="hidden md:block">
                            <RightSideContainer relatedJobs={relatedJobs} />
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile Apply Button */}
            <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-100 bg-white/95 p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.04)] backdrop-blur-md lg:hidden">
                <ApplyBtnModal
                    job={job}
                />
            </div>
        </>
    );
};

export default JobDetailsCard;