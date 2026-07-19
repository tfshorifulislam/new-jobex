import Image from "next/image";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import {
    Briefcase,
    MapPin,
    Mail,
    Eye,
    Bookmark,
    FileText,
    Pencil,
} from "lucide-react";

const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top,#ede9fe_0%,white_65%)] py-14">
            <div className="mx-auto max-w-6xl px-5">

                {/* Header */}
                <div className="rounded-3xl border border-violet-100 bg-white shadow-xl overflow-hidden">

                    {/* Cover */}
                    <div className="h-40 bg-gradient-to-r from-[#6633ff] via-violet-500 to-fuchsia-500" />

                    <div className="px-8 pb-8">

                        {/* Avatar */}
                        <div className="-mt-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                            <div className="flex items-end gap-5">

                                <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg bg-white">
                                    <Image
                                        src={user?.image || "/avatar.png"}
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="pb-2">

                                    <h1 className="text-3xl font-bold">
                                        {user?.name}
                                    </h1>

                                    <p className="mt-1 text-[#6633ff] font-semibold">
                                        Frontend Developer
                                    </p>

                                    <div className="mt-3 flex flex-wrap gap-5 text-gray-600 text-sm">

                                        <div className="flex items-center gap-2">
                                            <Mail size={16} />
                                            {user?.email}
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} />
                                            Bangladesh
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <button className="inline-flex items-center gap-2 rounded-xl bg-[#6633ff] px-5 py-3 font-semibold text-white transition hover:bg-violet-700">
                                <Pencil size={18} />
                                Edit Profile
                            </button>

                        </div>
                    </div>
                </div>

                {/* Stats */}

                <div className="mt-8 grid gap-5 md:grid-cols-4">

                    {[
                        {
                            title: "Applied Jobs",
                            value: "12",
                            icon: FileText,
                        },
                        {
                            title: "Saved Jobs",
                            value: "8",
                            icon: Bookmark,
                        },
                        {
                            title: "Profile Views",
                            value: "320",
                            icon: Eye,
                        },
                        {
                            title: "Experience",
                            value: "2 Years",
                            icon: Briefcase,
                        },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm"
                        >
                            <item.icon
                                className="text-[#6633ff]"
                                size={30}
                            />

                            <h2 className="mt-5 text-3xl font-bold">
                                {item.value}
                            </h2>

                            <p className="mt-1 text-gray-500">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>

                {/* About */}

                <div className="mt-8 grid gap-8 lg:grid-cols-3">

                    <div className="rounded-2xl border border-violet-100 bg-white p-7 shadow-sm lg:col-span-2">

                        <h2 className="text-xl font-bold text-[#6633ff]">
                            About Me
                        </h2>

                        <p className="mt-4 leading-8 text-gray-600">
                            Passionate Frontend Developer specializing in
                            React.js, Next.js and Tailwind CSS. I enjoy
                            building modern, responsive and scalable web
                            applications while continuously learning new
                            technologies.
                        </p>

                    </div>

                    <div className="rounded-2xl border border-violet-100 bg-white p-7 shadow-sm">

                        <h2 className="text-xl font-bold text-[#6633ff]">
                            Skills
                        </h2>

                        <div className="mt-5 flex flex-wrap gap-3">

                            {[
                                "React",
                                "Next.js",
                                "Tailwind",
                                "Node.js",
                                "MongoDB",
                                "Express",
                                "TypeScript",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-[#6633ff]"
                                >
                                    {skill}
                                </span>
                            ))}

                        </div>

                    </div>

                </div>

                {/* Recent Activity */}

                <div className="mt-8 rounded-2xl border border-violet-100 bg-white p-7 shadow-sm">

                    <h2 className="text-xl font-bold text-[#6633ff]">
                        Recent Activity
                    </h2>

                    <div className="mt-6 space-y-5">

                        <div className="rounded-xl border p-4">
                            Applied for <b>Frontend Developer</b> at Google
                        </div>

                        <div className="rounded-xl border p-4">
                            Saved UI/UX Designer Position
                        </div>

                        <div className="rounded-xl border p-4">
                            Updated Profile Information
                        </div>

                    </div>

                </div>

            </div>
        </main>
    );
};

export default ProfilePage;