'use client';

import { useSession } from "@/lib/auth-client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
    X,
    Plus,
    ArrowRight,
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

// Generates a requisition-style reference shown at the top of the form.
// Purely cosmetic — replace with a real ID from your backend if you have one.
function useRequisitionRef() {
    const [ref, setRef] = useState('REQ-000000');
    useEffect(() => {
        const n = Math.floor(100000 + Math.random() * 900000);
        setRef(`REQ-${n}`);
    }, []);
    return ref;
}

const SectionNumber = ({ n }) => (
    <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#6633ff]/30 text-[13px] text-[#6633ff] dark:border-violet-400/40 dark:text-violet-400"
    >
        {n}
    </span>
);

const PostJobs = () => {
    const { data: session } = useSession();
    const requisitionRef = useRequisitionRef();

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

    const [skillInput, setSkillInput] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState(null);

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

    const handleRemoveSkill = (skillToRemove) => {
        setForm({
            ...form,
            skillsAndExpertise: form.skillsAndExpertise.filter((s) => s !== skillToRemove),
        });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddSkill();
        }
    };

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
                setMessage({ type: 'success', text: 'Job posted successfully!' });

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
                setMessage({ type: 'error', text: data.message || 'Failed to add job request' });
            }
        } catch (error) {
            console.error(error);
            toast.error('An unexpected error occurred');
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputCls =
        "h-12 rounded-none border-0 border-b border-[#DCD9CC] bg-transparent px-0 text-[15px] text-[#1C2321] " +
        "placeholder:text-[#9A9686] focus-visible:border-[#6633ff] focus-visible:ring-0 dark:border-zinc-700 " +
        "dark:text-zinc-100 dark:focus-visible:border-violet-400";

    const labelCls =
        "text-[11px] font-medium uppercase tracking-[0.12em] text-[#7A7666] dark:text-zinc-500";

    return (
        <div className="mx-auto my-10 max-w-4xl px-4 md:my-16">
            {/* Requisition header */}
            <div className="mb-10 flex items-end justify-between border-b border-[#1C2321]/10 pb-6 dark:border-zinc-800">
                <div>
                    <p
                        className="mb-2 text-[12px] font-medium tracking-[0.18em] text-[#6633ff] dark:text-violet-400"
                    >
                        JOB REQUISITION · NEWJOBEX
                    </p>
                    <h1
                        className="text-4xl font-bold text-[#1C2321] md:text-5xl dark:text-zinc-50"
                    >
                        Post a new role
                    </h1>
                </div>
                <div className="hidden text-right md:block">
                    <p className="text-[11px] text-[#9A9686] dark:text-zinc-500">Reference</p>
                    <p className="text-sm text-[#1C2321] dark:text-zinc-200">{requisitionRef}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="space-y-14">

                    {/* 01 — Position */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr]">
                        <SectionNumber n="01" />
                        <div>
                            <h2
                                className="mb-6 text-lg font-semibold text-[#1C2321] dark:text-zinc-100"
                            >
                                Position
                            </h2>
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="jobTitle" className={labelCls}>
                                        Job title
                                    </Label>
                                    <Input
                                        id="jobTitle"
                                        placeholder="Senior Frontend Developer"
                                        value={form.jobTitle}
                                        onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
                                        required
                                        className={inputCls}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="companyName" className={labelCls}>
                                        Company
                                    </Label>
                                    <Input
                                        id="companyName"
                                        placeholder="TechCorp Industries"
                                        value={form.companyName}
                                        onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                                        required
                                        className={inputCls}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label className={labelCls}>Employment type</Label>
                                    <Select
                                        value={form.employmentType}
                                        onValueChange={(val) => setForm({ ...form, employmentType: val })}
                                        required
                                    >
                                        <SelectTrigger className="h-12 w-full rounded-none border-0 border-b border-[#DCD9CC] bg-transparent px-0 text-[15px] focus:ring-0 dark:border-zinc-700">
                                            <SelectValue placeholder="Select type" />
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
                                    <Label className={labelCls}>Workplace type</Label>
                                    <Select
                                        value={form.workplaceType}
                                        onValueChange={(val) => setForm({ ...form, workplaceType: val })}
                                        required
                                    >
                                        <SelectTrigger className="h-12 w-full rounded-none border-0 border-b border-[#DCD9CC] bg-transparent px-0 text-[15px] focus:ring-0 dark:border-zinc-700">
                                            <SelectValue placeholder="Select type" />
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
                    </div>

                    {/* 02 — Location & compensation */}
                    <div className="grid grid-cols-1 gap-6 border-t border-[#1C2321]/10 pt-14 md:grid-cols-[auto_1fr] dark:border-zinc-800">
                        <SectionNumber n="02" />
                        <div>
                            <h2
                                className="mb-6 text-lg font-semibold text-[#1C2321] dark:text-zinc-100"
                            >
                                Location and pay
                            </h2>
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="location" className={labelCls}>
                                        Location
                                    </Label>
                                    <Input
                                        id="location"
                                        placeholder="Bangalore, India (or Remote)"
                                        value={form.location}
                                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                                        required
                                        className={inputCls}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="salary" className={labelCls}>
                                        Salary range
                                    </Label>
                                    <Input
                                        id="salary"
                                        placeholder="$80,000 – $110,000 / year"
                                        value={form.salary}
                                        onChange={(e) => setForm({ ...form, salary: e.target.value })}
                                        required
                                        className={inputCls}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 03 — Description */}
                    <div className="grid grid-cols-1 gap-6 border-t border-[#1C2321]/10 pt-14 md:grid-cols-[auto_1fr] dark:border-zinc-800">
                        <SectionNumber n="03" />
                        <div>
                            <h2
                                className="mb-6 text-lg font-semibold text-[#1C2321] dark:text-zinc-100"
                            >
                                Description
                            </h2>
                            <div className="space-y-2">
                                <Label htmlFor="description" className={labelCls}>
                                    Responsibilities, requirements, benefits
                                </Label>
                                <Textarea
                                    id="description"
                                    rows={6}
                                    placeholder="Describe the role — what the person will own, what's required, and what's on offer."
                                    className="resize-y rounded-none border-0 border-b border-[#DCD9CC] bg-transparent px-0 py-3 text-[15px] leading-relaxed focus-visible:border-[#6633ff] focus-visible:ring-0 dark:border-zinc-700 dark:focus-visible:border-violet-400"
                                    value={form.description}
                                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* 04 — Skills */}
                    <div className="grid grid-cols-1 gap-6 border-t border-[#1C2321]/10 pt-14 md:grid-cols-[auto_1fr] dark:border-zinc-800">
                        <SectionNumber n="04" />
                        <div>
                            <h2
                                className="mb-1 text-lg font-semibold text-[#1C2321] dark:text-zinc-100"
                            >
                                Skills and expertise
                            </h2>
                            <p className="mb-6 text-sm text-[#7A7666] dark:text-zinc-500">
                                Type a skill and press enter, or pick from the list below.
                            </p>

                            <div className="mb-5 flex gap-3">
                                <Input
                                    type="text"
                                    value={skillInput}
                                    onChange={(e) => setSkillInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="React Native, GraphQL, Tailwind CSS…"
                                    className={`flex-1 ${inputCls}`}
                                />
                                <Button
                                    type="button"
                                    onClick={() => handleAddSkill()}
                                    disabled={!skillInput.trim()}
                                    className="flex h-12 items-center gap-1.5 rounded-full bg-linear-to-r from-indigo-600 to-violet-600 px-5 text-sm font-medium text-white hover:opacity-90 disabled:opacity-40"
                                >
                                    <Plus className="h-4 w-4" />
                                    Add
                                </Button>
                            </div>

                            {form.skillsAndExpertise.length > 0 && (
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {form.skillsAndExpertise.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center gap-1.5 rounded-full border border-[#6633ff]/30 bg-[#6633ff]/[0.06] px-3 py-1.5 text-sm text-[#5522cc] dark:border-violet-400/40 dark:bg-violet-400/10 dark:text-violet-300"
                                        >
                                            {skill}
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveSkill(skill)}
                                                className="rounded-full p-0.5 text-[#5522cc]/60 transition hover:bg-[#6633ff]/15 hover:text-[#5522cc] dark:text-violet-300/70 dark:hover:bg-violet-400/20"
                                                title="Remove skill"
                                            >
                                                <X className="h-3.5 w-3.5" />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div>
                                <span
                                    className="mb-2 block text-[11px] tracking-[0.12em] text-[#9A9686] dark:text-zinc-500"
                                >
                                    SUGGESTED
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
                                                className="cursor-pointer rounded-full border border-dashed border-[#DCD9CC] px-3 py-1.5 text-xs text-[#7A7666] transition hover:border-[#6633ff] hover:text-[#6633ff] dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-violet-400 dark:hover:text-violet-400"
                                            >
                                                + {skill}
                                            </button>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 05 — Recruiter info */}
                    <div className="grid grid-cols-1 gap-6 border-t border-[#1C2321]/10 pt-14 md:grid-cols-[auto_1fr] dark:border-zinc-800">
                        <SectionNumber n="05" />
                        <div>
                            <h2
                                className="mb-6 text-lg font-semibold text-[#1C2321] dark:text-zinc-100"
                            >
                                Filed by
                            </h2>
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label className={labelCls}>Name</Label>
                                    <Input
                                        readOnly
                                        value={session?.user?.name || ''}
                                        className={`${inputCls} cursor-not-allowed text-[#7A7666] dark:text-zinc-500`}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className={labelCls}>Email</Label>
                                    <Input
                                        readOnly
                                        value={session?.user?.email || ''}
                                        className={`${inputCls} cursor-not-allowed text-[#7A7666] dark:text-zinc-500`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submission — ticket stub */}
                    <div className="relative border-t-2 border-dashed border-[#1C2321]/15 pt-10 dark:border-zinc-700">
                        <div
                            aria-hidden="true"
                            className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--page-bg,#F7F7F4)] dark:bg-zinc-950"
                        />

                        {message && (
                            <div
                                className={`mb-6 rounded-md border px-4 py-3 text-sm ${message.type === "success"
                                    ? "border-[#6633ff]/30 bg-[#6633ff]/[0.06] text-[#5522cc] dark:border-violet-400/30 dark:bg-violet-400/10 dark:text-violet-300"
                                    : "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300"
                                    }`}
                            >
                                {message.text}
                            </div>
                        )}

                        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                            <p className="max-w-sm text-sm text-[#7A7666] dark:text-zinc-500">
                                Your listing goes to review before it's published on NewJobex and
                                visible to job seekers.
                            </p>

                            {session?.user?.isFraud ? (
                                <Button
                                    type="button"
                                    disabled
                                    className="h-14 w-full shrink-0 cursor-not-allowed rounded-full bg-red-500 px-8 text-base font-medium text-white opacity-80 md:w-auto"
                                >
                                    Access blocked — flagged recruiter
                                </Button>
                            ) : (
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group h-14 w-full shrink-0 rounded-full bg-linear-to-r from-indigo-600 to-violet-600 px-8 text-base font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                            </svg>
                                            Submitting
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            Submit for review
                                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                                        </span>
                                    )}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PostJobs;