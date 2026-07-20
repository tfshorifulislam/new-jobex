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
import { useSession } from "@/lib/auth-client";
import AvatarComponent from "./Avatar";
import LoginSignUp from "./Login&SignUp";
import { DropdownMenuIcons } from "./DropDownButton";
import { BriefcaseBusiness } from "lucide-react";

export default function Navbar() {

    const { data: session, isPending } = useSession()
    const user = session?.user;

    return (
        <header className="sticky top-0 z-50  bg-white/80 backdrop-blur-md shadow">
            <div className="container mx-auto flex h-16 items-center justify-between px-2 md:px-0">

                {/* Left */}
                <div>
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-[#6633ff] to-indigo-500 text-white shadow-lg">
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
                                JOB PLATFORM
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Center */}
                <NavigationMenu className="hidden md:block">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Jobs</NavigationMenuTrigger>

                            <NavigationMenuContent>
                                <div className="w-56 p-2">
                                    <NavigationMenuLink href="/jobs">
                                        All Jobs
                                    </NavigationMenuLink>

                                    <NavigationMenuLink href="/remote-jobs">
                                        Remote Jobs
                                    </NavigationMenuLink>

                                    <NavigationMenuLink href="/internships">
                                        Internships
                                    </NavigationMenuLink>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Learning Lab
                            </NavigationMenuTrigger>

                            <NavigationMenuContent>
                                <div className="w-56 p-2">
                                    <NavigationMenuLink href="/courses">
                                        Courses
                                    </NavigationMenuLink>

                                    <NavigationMenuLink href="/roadmaps">
                                        Roadmaps
                                    </NavigationMenuLink>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Career Development
                            </NavigationMenuTrigger>

                            <NavigationMenuContent>
                                <div className="w-56 p-2">
                                    <NavigationMenuLink href="/resume">
                                        Resume Builder
                                    </NavigationMenuLink>

                                    <NavigationMenuLink href="/interview">
                                        Interview Prep
                                    </NavigationMenuLink>
                                </div>
                            </NavigationMenuContent>

                        </NavigationMenuItem>

                        {user && (
                            <NavigationMenuItem>
                                <NavigationMenuLink href={user?.role === "recruiter" ? "/recruiter" : "/seeker"}>
                                    Dashboard
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )}

                        {user && (
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/profile">
                                    Profile
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )}

                    </NavigationMenuList>
                </NavigationMenu>

                {/* dynamic system */}
                {
                    user ?
                        <DropdownMenuIcons />
                        :
                        <LoginSignUp />
                }
            </div>
        </header>
    );
}