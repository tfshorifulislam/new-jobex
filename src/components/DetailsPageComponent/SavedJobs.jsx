"use client";

import { useEffect, useState } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useSession } from "@/lib/auth-client";
import { toast } from "react-toastify";

const SavedJobs = ({ job }) => {
    const { data: session } = useSession();

    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if (!session?.user?.id) return;

        const checkSaved = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/saved/check?userId=${session.user.id}&jobId=${job._id}`
                );

                const data = await res.json();

                if (data.success) {
                    setSaved(data.saved);
                }
            } catch (err) {
                console.error(err);
            }
        };

        checkSaved();
    }, [session?.user?.id, job._id]);


    const handleSave = async () => {
        if (!session?.user) {
            toast.error("Please login first");
            return;
        }

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/saved`,
                {
                    method: saved ? "DELETE" : "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        jobId: job._id,
                        userId: session?.user?.id,
                        job
                    }),
                }
            );

            const data = await res.json();

            if (res.ok && data.success) {
                setSaved(prev => !prev);
                toast.success(saved ? "Job removed" : "Job saved");
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong");
        }
    };
    return (
        <button
            onClick={handleSave}
            className="rounded-full border border-gray-200 p-2 hover:bg-gray-100 transition"
        >
            {saved ? (
                <BookmarkCheck className="text-[#6633ff]" size={20} />
            ) : (
                <Bookmark size={20} />
            )}
        </button>
    );
};

export default SavedJobs;