"use client";

import { Button } from "@/components/ui/button";
import { LuEye, LuEyeOff } from "react-icons/lu";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RoleSelect } from "@/components/RoleSelect";
import { LoaderCircle } from "lucide-react";

const SignUpPage = () => {

    const router = useRouter()

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("seeker");

    const handleSignup = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/send-email`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, name, }),
            });

        const result = await res.json();

        if (result.success) {

            localStorage.setItem(
                "signupData",
                JSON.stringify({ name, email, password, role, }));

            router.push("/auth/verify");
        }
    }


    return (
        <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 via-white to-blue-100 px-4">

            <Card className="w-full max-w-md border-none shadow-xl">

                <CardHeader className="space-y-3 text-center">

                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#6633ff] text-xl font-bold text-white">
                        N
                    </div>


                    <CardTitle className="text-2xl font-bold">
                        Create an Account
                    </CardTitle>


                    <CardDescription>
                        signup to continue your journey with NewJobex
                    </CardDescription>
                </CardHeader>


                <CardContent>

                    <form className="space-y-5" onSubmit={handleSignup}>
                        <div className="space-y-2" name="name">
                            <Label htmlFor="name">
                                Full Name
                            </Label>

                            <Input
                                id="name"
                                required
                                type="text"
                                placeholder="John Doe"
                                className="h-11"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="space-y-2" name="email">
                            <Label htmlFor="email">
                                Email Address
                            </Label>

                            <Input
                                id="email"
                                required
                                type="email"
                                placeholder="you@example.com"
                                className="h-11"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">
                                    Password
                                </Label>

                                <Link
                                    href="/forgot-password"
                                    className="text-sm text-[#6633ff] hover:underline"
                                >
                                    Forgot password?
                                </Link>

                            </div>

                            <div className="space-y-2" name="password">
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className="h-11 pr-10"
                                        required
                                        minLength={6}
                                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_+\-=\[\]{};':\\|,.<>\/?])[A-Za-z\d@$!%*?&^#()_+\-=\[\]{};':\\|,.<>\/?]{6,}$"
                                        title="Password must contain at least 6 characters, one uppercase letter, one lowercase letter, one number, and one special character."
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                                        {showPassword ? <LuEyeOff size={18} /> : <LuEye size={18} />}
                                    </button>
                                </div>

                                <p className="text-xs text-muted-foreground">
                                    Minimum 6 characters, including uppercase, lowercase, number and special character.
                                </p>
                            </div>

                        </div>

                        {/* role based authentication */}
                        <RoleSelect
                            value={role}
                            onValueChange={setRole}
                        />

                        {/* card footer */}
                        <div className="flex flex-col gap-3">

                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="h-11 w-full rounded-xl bg-[#6633ff] hover:bg-[#5522ee]"
                            >
                                {isLoading ? (
                                    <>
                                        <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                                        Creating Account...
                                    </>
                                ) : (
                                    "Sign Up"
                                )}
                            </Button>

                            <div className="relative w-full py-2">

                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t" />
                                </div>

                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="px-3 text-muted-foreground">
                                        OR
                                    </span>
                                </div>

                            </div>

                            <Button
                                variant="outline"
                                className="h-11 w-full cursor-pointer rounded-xl"
                            >
                                <FaGoogle className="mr-2 h-4 w-4" />
                                Continue with Google
                            </Button>
                        </div>

                    </form>

                </CardContent>
            </Card>

        </div>
    );
};


export default SignUpPage;