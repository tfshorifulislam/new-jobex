'use client';
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import AvatarComponent from "./Avatar";
import LoginSignUp from "./Login&SignUp";
import { DropdownMenuIcons } from "./DropDownButton";
import { BriefcaseBusiness } from "lucide-react";

const dropdownLinkCls =
    "block rounded-lg px-3 py-2 text-sm text-gray-600 transition hover:bg-indigo-50 hover:text-[#6633ff]";

const topLinkCls = (active) =>
    `rounded-lg px-3 py-2 text-sm transition ${active
        ? "font-medium text-[#6633ff]"
        : "text-gray-600 hover:bg-indigo-50 hover:text-[#6633ff]"
    }`;

export default function Navbar() {

    const { data: session, isPending } = useSession()
    const user = session?.user;
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-2 md:px-0">

                {/* Left */}
                <div>
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-[#6633ff] to-indigo-500 text-white shadow-lg shadow-indigo-200">
                            <BriefcaseBusiness className="h-5 w-5" />
                        </div>

                        <div className="flex flex-col leading-none">
                            <span className="text-2xl font-extrabold tracking-tight">
                                <span className="bg-linear-to-r from-[#6633ff] to-indigo-500 bg-clip-text text-transparent">
                                    NewJob
                                </span>
                                <span className="text-gray-900">Ex</span>
                            </span>

                            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-gray-500">
                                Job platform
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Center */}
                <NavigationMenu className="hidden md:block">
                    <NavigationMenuList className="gap-1">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="rounded-lg text-sm text-gray-600 hover:bg-indigo-50 hover:text-[#6633ff] data-[state=open]:text-[#6633ff]">
                                Jobs
                            </NavigationMenuTrigger>

                            <NavigationMenuContent>
                                <div className="w-56 space-y-0.5 p-2">
                                    <NavigationMenuLink href="/jobs" className={dropdownLinkCls}>
                                        All jobs
                                    </NavigationMenuLink>

                                    <NavigationMenuLink href="/remote-jobs" className={dropdownLinkCls}>
                                        Remote jobs
                                    </NavigationMenuLink>

                                    <NavigationMenuLink href="/internships" className={dropdownLinkCls}>
                                        Internships
                                    </NavigationMenuLink>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="rounded-lg text-sm text-gray-600 hover:bg-indigo-50 hover:text-[#6633ff] data-[state=open]:text-[#6633ff]">
                                Learning Lab
                            </NavigationMenuTrigger>

                            <NavigationMenuContent>
                                <div className="w-56 space-y-0.5 p-2">
                                    <NavigationMenuLink href="/courses" className={dropdownLinkCls}>
                                        Courses
                                    </NavigationMenuLink>

                                    <NavigationMenuLink href="/roadmaps" className={dropdownLinkCls}>
                                        Roadmaps
                                    </NavigationMenuLink>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="rounded-lg text-sm text-gray-600 hover:bg-indigo-50 hover:text-[#6633ff] data-[state=open]:text-[#6633ff]">
                                Career Development
                            </NavigationMenuTrigger>

                            <NavigationMenuContent>
                                <div className="w-56 space-y-0.5 p-2">
                                    <NavigationMenuLink href="/resume" className={dropdownLinkCls}>
                                        Resume builder
                                    </NavigationMenuLink>

                                    <NavigationMenuLink href="/interview" className={dropdownLinkCls}>
                                        Interview prep
                                    </NavigationMenuLink>
                                </div>
                            </NavigationMenuContent>

                        </NavigationMenuItem>

                        {user && (
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href={user?.role === "recruiter" ? "/recruiter" : "/seeker"}
                                    className={topLinkCls(
                                        pathname === (user?.role === "recruiter" ? "/recruiter" : "/seeker")
                                    )}
                                >
                                    Dashboard
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )}

                        {user && (
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/profile"
                                    className={topLinkCls(pathname === "/profile")}
                                >
                                    Profile
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )}

                    </NavigationMenuList>
                </NavigationMenu>

                {/* dynamic system */}
                {isPending ? (
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 animate-pulse rounded-full bg-gray-100" />
                    </div>
                ) : user ? (
                    <DropdownMenuIcons />
                ) : (
                    <LoginSignUp />
                )}
            </div>
        </header>
    );
}