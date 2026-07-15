"use client"

import {
    Bookmark,
    BriefcaseBusiness,
    CreditCardIcon,
    LogOutIcon,
    SettingsIcon,
    UserIcon,
    
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import AvatarComponent from "./Avatar"
import { RxDashboard } from "react-icons/rx"
import { signOut } from "@/lib/auth-client"
import { toast } from "react-toastify"


export function DropdownMenuIcons() {

    const handleLogout = async () => {
        try {
            await signOut();
            toast.success("Logged out successfully!");
        } catch (error) {
            toast.error("Failed to log out.");
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <AvatarComponent />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <UserIcon />
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <RxDashboard className="size-4" />
                    Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Bookmark />
                    Saved Jobex
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <BriefcaseBusiness />
                    Applied Jobex
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <SettingsIcon />
                    Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive" onClick={handleLogout}>
                    <LogOutIcon />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
