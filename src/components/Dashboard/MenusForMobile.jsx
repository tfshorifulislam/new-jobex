"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import {
    LayoutDashboard,
    Bookmark,
    BriefcaseBusiness,
    Settings,
    FileText,
    ClipboardList,
    Users,
} from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useSession } from "@/lib/auth-client";

const MenusForMobile = () => {
    const pathname = usePathname();
    const { data: session } = useSession();

    const role = session?.user?.role;

    const seekerMenus = [
        {
            title: "Dashboard",
            href: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "Saved Jobs",
            href: "/dashboard/saved-jobs",
            icon: Bookmark,
        },
        {
            title: "Applied Jobs",
            href: "/dashboard/applied-jobs",
            icon: BriefcaseBusiness,
        },
        {
            title: "Settings",
            href: "/dashboard/settings",
            icon: Settings,
        },
    ];

    const recruiterMenus = [
        {
            title: "Overview",
            href: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "Received Applications",
            href: "/dashboard/applications",
            icon: Users,
        },
        {
            title: "Post Job",
            href: "/dashboard/post-job",
            icon: FileText,
        },
        {
            title: "My Jobs",
            href: "/dashboard/my-jobs",
            icon: ClipboardList,
        },
        {
            title: "Settings",
            href: "/dashboard/settings",
            icon: Settings,
        },
    ];

    const menus = role === "recruiter" ? recruiterMenus : seekerMenus;

    return (
        <div>
            <Sheet>
                <SheetTrigger className="w-11/12 mx-auto h-12 rounded-xl bg-linear-to-r from-indigo-600 to-violet-600 text-white font-semibold flex items-center justify-center gap-2 mt-2">
                    <button className="flex items-center gap-3">
                        <Menu size={20} />
                        Dashboard Menu
                    </button>
                </SheetTrigger>

                <SheetContent side="top" className="rounded-b-3xl w-11/12 mx-auto">
                    <SheetHeader>
                        <SheetTitle className="text-left text-[#6633ff]">
                            {role === "recruiter"
                                ? "Recruiter Dashboard"
                                : "Seeker Dashboard"}
                        </SheetTitle>
                    </SheetHeader>

                    <div className="mt-6 space-y-2 px-4">
                        {menus.map((item) => {
                            const Icon = item.icon;
                            const active = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all
                    ${active
                                            ? "bg-linear-to-r from-indigo-600 to-violet-600 text-white"
                                            : "hover:bg-gray-100"
                                        }`}
                                >
                                    <Icon size={20} />
                                    <span>{item.title}</span>
                                </Link>
                            );
                        })}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MenusForMobile;