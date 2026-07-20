"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Bookmark,
    BriefcaseBusiness,
    Settings,
    FileText,
    ClipboardList,
    Users,
    LogOut,
} from "lucide-react";
import { useSession } from "@/lib/auth-client";

const Sidebar = () => {

    const { data: session } = useSession();
    const role = session?.user?.role;

    const pathname = usePathname();

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
    ];

    const recruiterMenus = [
        {
            title: "Overview",
            href: "/recruiter",
            icon: LayoutDashboard,
        },
        {
            title: "Received Applications",
            href: "/recruiter/applications",
            icon: Users,
        },
        {
            title: "Post Job",
            href: "/recruiter/post-job",
            icon: FileText,
        },
        {
            title: "My Jobs",
            href: "/recruiter/my-jobs",
            icon: ClipboardList,
        },
    ];

    const settingsHref = role === "recruiter" ? "/recruiter/settings" : "/dashboard/settings";
    const menus = role === "recruiter" ? recruiterMenus : seekerMenus;

    const initials = (session?.user?.name || "")
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((n) => n[0]?.toUpperCase())
        .join("") || "?";

    return (
        <aside className="flex h-screen w-72 sticky top-0 flex-col border-r border-gray-100 bg-white">
            {/* Logo */}
            <div className="flex items-center gap-3 border-b border-gray-100 p-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-r from-indigo-600 to-violet-600 text-sm font-bold text-white">
                    N
                </div>
                <div className="min-w-0">
                    <h2 className="truncate text-lg font-bold text-gray-900">NewJobex</h2>
                    <p className="truncate text-xs capitalize text-gray-400">
                        {role || "member"} dashboard
                    </p>
                </div>
            </div>

            {/* Menu */}
            <nav className="flex-1 space-y-1 overflow-y-auto p-4">
                <span className="mb-1 block px-4 text-[11px] font-medium uppercase tracking-wider text-gray-400">
                    Menu
                </span>

                {menus.map((item) => {
                    const Icon = item.icon;
                    const active = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all
                ${active
                                    ? "bg-linear-to-r from-indigo-600 to-violet-600 text-white shadow-sm shadow-indigo-200"
                                    : "text-gray-600 hover:bg-indigo-50 hover:text-[#6633ff]"
                                }`}
                        >
                            <Icon size={18} className={active ? "text-white" : "text-gray-400"} />
                            <span className={active ? "font-medium" : ""}>{item.title}</span>
                        </Link>
                    );
                })}

                <div className="my-3 border-t border-gray-100" />

                <Link
                    href={settingsHref}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all
            ${pathname === settingsHref
                            ? "bg-linear-to-r from-indigo-600 to-violet-600 text-white shadow-sm shadow-indigo-200"
                            : "text-gray-600 hover:bg-indigo-50 hover:text-[#6633ff]"
                        }`}
                >
                    <Settings size={18} className={pathname === settingsHref ? "text-white" : "text-gray-400"} />
                    <span className={pathname === settingsHref ? "font-medium" : ""}>Settings</span>
                </Link>
            </nav>

            {/* Account */}
            <div className="border-t border-gray-100 p-4">
                <div className="flex items-center gap-3 rounded-xl px-2 py-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-[#6633ff]">
                        {initials}
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900">
                            {session?.user?.name || "Guest"}
                        </p>
                        <p className="truncate text-xs text-gray-400">
                            {session?.user?.email || "Not signed in"}
                        </p>
                    </div>
                    <button
                        type="button"
                        title="Log out"
                        className="shrink-0 rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                    >
                        <LogOut size={16} />
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;