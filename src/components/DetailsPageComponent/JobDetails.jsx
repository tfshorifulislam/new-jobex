import {
    Bookmark,
    BriefcaseBusiness,
    Building2,
    CalendarDays,
    EllipsisVertical,
    Layers3,
    MapPin,
    Wallet,
    Users,
    Save,
    CircleSmall,
    ArrowRight,
    ChevronRight
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";

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

    return (
        <div className="mx-auto my-8 max-w-7xl px-4 sm:px-6 lg:my-12 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

                {/* Left Side */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Header */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
                                    {job.jobTitle}
                                </h1>

                                <p className="mt-2 text-base font-medium text-blue-600">
                                    {job.companyName}
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <button className="rounded-full border border-gray-200 p-2 transition hover:bg-gray-100">
                                    <Bookmark size={20} />
                                </button>

                                <button className="rounded-full border border-gray-200 p-2 transition hover:bg-gray-100">
                                    <EllipsisVertical size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Info Cards */}
                        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                            {data.map((item, index) => {
                                if (!item.label) return null;

                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:border-blue-500 hover:bg-blue-50"
                                    >
                                        <Icon
                                            size={18}
                                            className="text-blue-600 shrink-0"
                                        />

                                        <span className="text-sm font-medium text-gray-700">
                                            {item.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Description Card */}
                    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                        <h2 className="text-2xl font-bold text-slate-900">
                            Job Description
                        </h2>

                        <p className="mt-4 leading-8 text-gray-600 whitespace-pre-line">
                            {job.jobDescription}
                        </p>

                        {/* Requirements */}

                        <div className="mt-10">
                            <h2 className="text-2xl font-bold text-slate-900">
                                Job Requirements
                            </h2>

                            <ul className="mt-5 space-y-3 text-sm text-gray-600">
                                {requirements}
                            </ul>
                        </div>

                        {/* Skills */}

                        <div className="mt-10">
                            <h2 className="text-2xl font-bold text-slate-900">
                                Skills & Areas of Expertise
                            </h2>

                            <li className="mt-5 flex flex-wrap gap-3">
                                {skills}
                            </li>
                        </div>

                        {/* Company */}

                        <div className="mt-10 border-t border-gray-200 pt-8">
                            <h2 className="mb-5 text-2xl font-bold text-slate-900">
                                Company Overview
                            </h2>

                            <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">

                                <Image
                                    src={job?.image || "/companylogo.jpg"}
                                    width={60}
                                    height={60}
                                    alt={job.companyName}
                                    className="rounded-xl border border-gray-200 object-cover"
                                />

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {job.companyName}
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-500">
                                        {job.location}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </section>

                </div>

                {/* Right Side */}
                <aside className="lg:col-span-1">
                    <div className="sticky top-24 space-y-6">

                        {/* Apply Card */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                            Apply Button
                        </div>

                        {/* Related Jobs */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                            {/* Related Jobs */}
                        </div>

                    </div>
                </aside>

            </div>
        </div>
    );
};

export default JobDetailsCard;