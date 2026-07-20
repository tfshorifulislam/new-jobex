'use client';

import { useSession } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "react-toastify";
import {
    Briefcase,
    MapPin,
    FileText,
    Award,
    User,
    X,
    Plus
} from "lucide-react";


import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";


const suggestedSkills = [
    "JavaScript", "TypeScript", "React", "Next.js",
    "Node.js", "Python", "Java", "SQL",
    "MongoDB", "AWS", "Docker", "Git",
    "UI/UX Design", "Project Management", "Marketing", "Sales"
];

const PostJobs = () => {
    const { data: session } = useSession();

    const [form, setForm] = useState({
        jobTitle: '',
        companyName: '',
        location: '',
        salary: '',
        employmentType: '',
        workplaceType: '',
        description: '',
        skillsAndExpertise: [],
    });

    // Local state for the custom skill input field
    const [skillInput, setSkillInput] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState(null);

    // Add a skill (either from typing or clicking a suggestion)
    const handleAddSkill = (skillToAdd) => {
        const trimmedSkill = (skillToAdd || skillInput).trim();
        if (trimmedSkill && !form.skillsAndExpertise.includes(trimmedSkill)) {
            setForm({
                ...form,
                skillsAndExpertise: [...form.skillsAndExpertise, trimmedSkill],
            });
            setSkillInput('');
        }
    };

    // Remove a selected skill
    const handleRemoveSkill = (skillToRemove) => {
        setForm({
            ...form,
            skillsAndExpertise: form.skillsAndExpertise.filter((s) => s !== skillToRemove),
        });
    };

    // Prevent Enter key from submitting the entire job form while typing a skill
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddSkill();
        }
    };

    // Handle Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!session?.user) {
            setMessage({ type: 'error', text: 'Please login to post a job' });
            return;
        }

        if (form.skillsAndExpertise.length === 0) {
            toast.warning('Please add at least one skill');
            return;
        }

        setIsSubmitting(true);
        setMessage(null);

        try {
            const payload = {
                jobTitle: form.jobTitle,
                companyName: form.companyName,
                location: form.location,
                salary: form.salary,
                description: form.description,
                employmentType: form.employmentType,
                workplaceType: form.workplaceType,
                postedAt: new Date().toISOString(),
                skillsAndExpertise: form.skillsAndExpertise || [],
                source: "newjobex",
                recruiterName: session?.user?.name,
                recruiterEmail: session?.user?.email,
                status: 'pending',
            };

            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/post-jobs`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (data.insertedId || res.ok) {
                toast.success("Job request sent!");

                setMessage({
                    type: 'success',
                    text: 'Job posted successfully!',
                });

                // Reset Form
                setForm({
                    jobTitle: '',
                    companyName: '',
                    location: '',
                    salary: '',
                    employmentType: '',
                    workplaceType: '',
                    description: '',
                    skillsAndExpertise: [],
                });
                setSkillInput('');
                e.target.reset();
            } else {
                toast.error('Failed to post job request');
                setMessage({
                    type: 'error',
                    text: data.message || 'Failed to add job request',
                });
            }
        } catch (error) {
            console.error(error);
            toast.error('An unexpected error occurred');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="mx-auto max-w-7xl my-10 md:my-15">
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-[#6633ff] via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                    Post a New Job
                </h1>

                <p className="mt-3 text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                    Publish your job opening and connect with thousands of qualified candidates worldwide.
                </p>
            </div>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-950 rounded-3xl">
                <div className="p-8 md:p-10 space-y-10">

                    {/* Core Job Details */}
                    <div>
                        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                            <Briefcase className="w-6 h-6 text-[#6633ff]" />
                            Job Details
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="jobTitle" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Job Title <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="jobTitle"
                                    placeholder="Senior Frontend Developer"
                                    value={form.jobTitle}
                                    onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
                                    required
                                    className="rounded-xl h-12"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="companyName" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Company Name <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="companyName"
                                    placeholder="TechCorp Industries"
                                    value={form.companyName}
                                    onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                                    required
                                    className="rounded-xl h-12"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Employment Type <span className="text-red-500">*</span>
                                </Label>
                                <Select
                                    value={form.employmentType}
                                    onValueChange={(val) => setForm({ ...form, employmentType: val })}
                                    required
                                >
                                    <SelectTrigger className="w-full rounded-xl h-12">
                                        <SelectValue placeholder="Select Employment Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Full-time">Full-time</SelectItem>
                                        <SelectItem value="Part-time">Part-time</SelectItem>
                                        <SelectItem value="Contract">Contract</SelectItem>
                                        <SelectItem value="Internship">Internship</SelectItem>
                                        <SelectItem value="Freelance">Freelance</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Workplace Type <span className="text-red-500">*</span>
                                </Label>
                                <Select
                                    value={form.workplaceType}
                                    onValueChange={(val) => setForm({ ...form, workplaceType: val })}
                                    required
                                >
                                    <SelectTrigger className="w-full rounded-xl h-12">
                                        <SelectValue placeholder="Select Workplace Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Remote">Remote</SelectItem>
                                        <SelectItem value="On-site">On-site</SelectItem>
                                        <SelectItem value="Hybrid">Hybrid</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* Location & Compensation */}
                    <div>
                        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                            <MapPin className="w-6 h-6 text-[#6633ff]" />
                            Location & Compensation
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="location" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Location <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="location"
                                    placeholder="Bangalore, India (or Remote)"
                                    value={form.location}
                                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                                    required
                                    className="rounded-xl h-12"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="salary" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Salary Range / Compensation <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="salary"
                                    placeholder="$80,000 - $110,000 / year or ₹12 LPA - ₹18 LPA"
                                    value={form.salary}
                                    onChange={(e) => setForm({ ...form, salary: e.target.value })}
                                    required
                                    className="rounded-xl h-12"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Job Description */}
                    <div>
                        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                            <FileText className="w-6 h-6 text-[#6633ff]" />
                            Job Description
                        </h2>

                        <div className="space-y-2">
                            <Label htmlFor="description" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                Detailed Description <span className="text-red-500">*</span>
                            </Label>
                            <Textarea
                                id="description"
                                rows={5}
                                placeholder="Describe key responsibilities, requirements, and benefits..."
                                className="rounded-xl p-4 resize-y min-h-[120px]"
                                value={form.description}
                                onChange={(e) => setForm({ ...form, description: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    {/* Dynamic Skills & Expertise Input */}
                    <div>
                        <div className="flex flex-col gap-1 mb-4">
                            <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
                                <Award className="w-6 h-6 text-[#6633ff]" />
                                Skills & Expertise
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Type a skill and press Enter, or click suggestions below.
                            </p>
                        </div>

                        {/* Input and Add Button */}
                        <div className="flex gap-2 mb-4">
                            <Input
                                type="text"
                                value={skillInput}
                                onChange={(e) => setSkillInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="e.g. React Native, GraphQL, Tailwind CSS..."
                                className="flex-1 rounded-xl h-12"
                            />
                            <Button
                                type="button"
                                onClick={() => handleAddSkill()}
                                disabled={!skillInput.trim()}
                                className="bg-[#6633ff] hover:bg-[#5522ee] text-white px-6 h-12 rounded-xl text-sm font-medium flex items-center gap-1 transition"
                            >
                                <Plus className="w-4 h-4" />
                                Add
                            </Button>
                        </div>

                        {/* Display Selected Skills (Removable Badges) */}
                        {form.skillsAndExpertise.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6 p-4 rounded-2xl bg-gray-50 dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800">
                                {form.skillsAndExpertise.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-[#6633ff] dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/50 text-sm font-medium"
                                    >
                                        {skill}
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveSkill(skill)}
                                            className="hover:bg-indigo-200 dark:hover:bg-indigo-800 rounded-full p-0.5 transition text-indigo-600 dark:text-indigo-400"
                                            title="Remove skill"
                                        >
                                            <X className="w-3.5 h-3.5" />
                                        </button>
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Quick-Add Suggestions */}
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-2">
                                Quick Add Suggestions
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                                {suggestedSkills
                                    .filter((skill) => !form.skillsAndExpertise.includes(skill))
                                    .slice(0, 12)
                                    .map((skill) => (
                                        <button
                                            key={skill}
                                            type="button"
                                            onClick={() => handleAddSkill(skill)}
                                            className="text-xs px-3 py-1.5 rounded-lg border border-dashed border-gray-300 dark:border-zinc-700 text-gray-600 dark:text-zinc-400 hover:border-[#6633ff] hover:text-[#6633ff] dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition cursor-pointer"
                                        >
                                            + {skill}
                                        </button>
                                    ))}
                            </div>
                        </div>
                    </div>

                    {/* Recruiter / Vendor Info */}
                    <div>
                        <h2 className="text-sm font-medium text-gray-700 dark:text-white mb-4 flex items-center gap-2">
                            <User className="w-4 h-4 text-[#6633ff]" />
                            Recruiter Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className="text-xs text-gray-500 dark:text-gray-400">Name</Label>
                                <Input
                                    readOnly
                                    value={session?.user?.name || ''}
                                    className="rounded-xl h-12 bg-gray-50 dark:bg-zinc-900 text-gray-500 cursor-not-allowed"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label className="text-xs text-gray-500 dark:text-gray-400">Email</Label>
                                <Input
                                    readOnly
                                    value={session?.user?.email || ''}
                                    className="rounded-xl h-12 bg-gray-50 dark:bg-zinc-900 text-gray-500 cursor-not-allowed"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Submit Section */}
                    <div className="rounded-2xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 p-6 md:p-8">

                        {message && (
                            <div
                                className={`mb-6 rounded-xl border px-4 py-3 text-center text-sm font-medium ${message.type === "success"
                                    ? "border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-950/40 dark:text-green-300"
                                    : "border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950/40 dark:text-red-300"
                                    }`}
                            >
                                {message.text}
                            </div>
                        )}

                        <div className="mb-6 rounded-xl border border-indigo-100 bg-indigo-50 p-4 dark:border-indigo-900 dark:bg-indigo-950/30">
                            <h4 className="font-semibold text-indigo-700 dark:text-indigo-300">
                                Ready to publish?
                            </h4>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                Your job will be submitted for review. After approval, it will be
                                published on NewJobex and become visible to job seekers.
                            </p>
                        </div>

                        {session?.user?.isFraud ? (
                            <Button
                                type="button"
                                disabled
                                className="w-full h-14 rounded-xl bg-red-500 text-lg font-semibold text-white cursor-not-allowed opacity-80"
                            >
                                🚫 Fraud Recruiter - Access Blocked
                            </Button>
                        ) : (
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-14 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <svg
                                            className="h-5 w-5 animate-spin"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                            />
                                        </svg>
                                        Publishing Job...
                                    </div>
                                ) : (
                                    "🚀 Publish Job"
                                )}
                            </Button>
                        )}
                    </div>
                </div>

            </form>
        </div>
    );
};

export default PostJobs;