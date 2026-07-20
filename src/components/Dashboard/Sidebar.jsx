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
} from "lucide-react";

const Sidebar = ({ role = "seeker" }) => {
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
    <aside className="w-72 h-screen bg-white border-r sticky top-0">
      {/* Logo */}
      <div className="border-b p-6">
        <h2 className="text-2xl font-bold text-[#6633ff]">NewJobex</h2>
        <p className="text-sm text-gray-500 capitalize">
          {role} Dashboard
        </p>
      </div>

      {/* Menu */}
      <nav className="p-4 space-y-2">
        {menus.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all
                ${
                  active
                    ? "bg-linear-to-r from-indigo-600 to-violet-600 text-white shadow"
                    : "text-gray-700 hover:bg-blue-50 hover:text-[#6633ff]"
                }`}
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;