"use client";

import { signUp } from "@/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const Verify = () => {
    const [otp, setOtp] = useState("");
    const router = useRouter();

    const handleVerify = async () => {

        if (otp.length !== 6) {
            return toast("Please enter a valid 6-digit OTP.");
        }

        const signupData = JSON.parse(localStorage.getItem("signupData"));

        if (!signupData) {
            return toast.error("Signup data not found. please try again!");
        }

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/verify-otp`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: signupData.email,
                    otp,
                }),
            }
        );

        const result = await res.json();

        if (!result.success) {
            return toast.error(result.message);
        }

        const { error } = await signUp.email({
            email: signupData.email,
            password: signupData.password,
            name: signupData.name,
            role: signupData.role,
        });

        if (error) {
            return toast.error(error.message);
        }

        localStorage.removeItem("signupData");
        toast.success("Account created successfully!");
        router.push("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 ">
            <div className="w-full max-w-md rounded-2xl bg-linear-to-br from-blue-50 via-white to-blue-100 shadow-lg border p-8">
                <h2 className="text-3xl font-bold text-center text-gray-900">
                    Verify Email
                </h2>

                <p className="text-center text-gray-500 mt-2">
                    Enter the 6-digit verification code sent to your email.
                </p>

                <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={otp}
                    onChange={(e) =>
                        setOtp(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="Enter OTP"
                    className="mt-8 w-full h-14 rounded-xl border border-gray-300 text-center text-2xl tracking-[10px] font-semibold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
                />

                <button
                    onClick={handleVerify}
                    disabled={otp.length !== 6}
                    className="mt-6 w-full h-12 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    Verify OTP
                </button>

                <p className="mt-5 text-center text-sm text-gray-500">
                    If you don't see the email, please check your spam or junk folder.
                </p>
            </div>
        </div>
    );
};

export default Verify;