import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import {
    BadgeCheck,
    BriefcaseBusiness,
    FileText,
    Sparkles,
    Target,
    TrendingUp,
} from "lucide-react";
import Image from "next/image";

const ProfilePage = async () => {
    const userInfo = await auth.api.getSession({
        headers: await headers(),
    });

    const user = userInfo?.user;

    const steps = [
        {
            icon: FileText,
            title: "Create Your Resume",
            description:
                "Create a professional resume that clearly showcases your education, experience, and achievements to employers.",
        },
        {
            icon: Sparkles,
            title: "Add Your Skills",
            description:
                "List your strongest technical and professional skills so recruiters can easily match you with relevant jobs.",
        },
        {
            icon: BadgeCheck,
            title: "Complete Your Profile",
            description:
                "A complete profile builds trust and increases your chances of getting shortlisted by recruiters.",
        },
        {
            icon: Target,
            title: "Get Discovered",
            description:
                "Keep your profile updated so employers can find you when searching for the right candidate.",
        },
        {
            icon: BriefcaseBusiness,
            title: "Apply for Relevant Jobs",
            description:
                "Apply to jobs that match your skills and experience to improve your chances of getting hired.",
        },
        {
            icon: TrendingUp,
            title: "Grow Your Career",
            description:
                "Continue learning, update your profile regularly, and unlock better career opportunities over time.",
        },
    ];

    return (
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
            {/* Hero */}
            <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#0b1d4d] via-[#162d69] to-[#253b80] text-white">
                <div className="grid items-center gap-10 p-8 md:grid-cols-2 lg:p-12">
                    <div>
                        <span className="rounded-full bg-white/10 px-4 py-1 text-sm">
                            Welcome Back 👋
                        </span>

                        <h1 className="mt-6 text-3xl font-bold md:text-5xl">
                            Hi, {user?.name || "User"}
                        </h1>

                        <p className="mt-5 max-w-lg text-white/80 leading-8">
                            Your profile is more than just information—it represents your
                            professional journey. Keep it updated and increase your chances
                            of getting noticed by recruiters.
                        </p>
                    </div>

                    <div className="relative mx-auto h-65 w-full max-w-md">
                        <Image
                            src="/banner1.png"
                            alt="Career"
                            fill
                            priority
                            className="rounded-2xl object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Career Journey */}
            <section className="mt-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Get Ready to Land Your New Jobex
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-gray-500">
                        Follow these simple steps to build a stronger profile, attract recruiters,
                        and increase your chances of getting hired through NewJobex.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {steps.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-violet-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#6633ff] hover:shadow-lg"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6633ff]/10">
                                    <Icon className="h-7 w-7 text-[#6633ff]" />
                                </div>

                                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Tips */}
            <section className="mt-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900">
                    Career Tips
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                    <div className="rounded-xl bg-violet-50 p-5">
                        <h4 className="font-semibold text-gray-900">
                            Keep Your Profile Updated
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-gray-600">
                            Regularly update your skills, education and work experience to
                            improve your visibility.
                        </p>
                    </div>

                    <div className="rounded-xl bg-violet-50 p-5">
                        <h4 className="font-semibold text-gray-900">
                            Add Relevant Skills
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-gray-600">
                            Employers often search by skills. Make sure your strongest skills
                            are listed.
                        </p>
                    </div>

                    <div className="rounded-xl bg-violet-50 p-5">
                        <h4 className="font-semibold text-gray-900">
                            Write a Professional Bio
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-gray-600">
                            A short and clear summary helps recruiters quickly understand your
                            background.
                        </p>
                    </div>

                    <div className="rounded-xl bg-violet-50 p-5">
                        <h4 className="font-semibold text-gray-900">
                            Apply Consistently
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-gray-600">
                            Consistent applications and an updated profile significantly
                            increase interview opportunities.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProfilePage;