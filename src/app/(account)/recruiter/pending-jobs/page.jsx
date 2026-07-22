'use client';

import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {
    Search,
    Check,
    X,
    Eye,
    Building2,
    MapPin,
    Briefcase,
    DollarSign,
    Clock,
    User,
    Mail,
    RefreshCw,
    AlertCircle,
    CheckCircle2,
    XCircle,
    FileText
} from 'lucide-react';

// Shadcn UI Imports
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";

const PendingJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedJob, setSelectedJob] = useState(null);
    const [actionLoading, setActionLoading] = useState(null); // stores id of job currently being updated

    // Fetch pending jobs from backend
    const fetchPendingJobs = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/pending-jobs`);
            if (!res.ok) throw new Error('Failed to fetch pending jobs');
            const data = await res.json();
            setJobs(data);
        } catch (error) {
            console.error(error);
            toast.error("Could not load pending job requisitions");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPendingJobs();
    }, []);

    // Handle Approve / Reject Actions
    const handleStatusUpdate = async (id, newStatus) => {
        setActionLoading(id);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/jobs/${id}/status`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus }),
            });

            if (res.ok) {
                toast.success(`Job requisition ${newStatus === 'approved' ? 'approved' : 'rejected'} successfully!`);
                // Remove updated job from local pending list
                setJobs((prevJobs) => prevJobs.filter((job) => (job._id || job.id) !== id));
                if (selectedJob && (selectedJob._id || selectedJob.id) === id) {
                    setSelectedJob(null);
                }
            } else {
                toast.error(`Failed to update job status`);
            }
        } catch (error) {
            console.error(error);
            toast.error("An unexpected error occurred");
        } finally {
            setActionLoading(null);
        }
    };

    // Filter jobs by search term
    const filteredJobs = jobs.filter((job) => {
        const query = searchQuery.toLowerCase();
        return (
            job.jobTitle?.toLowerCase().includes(query) ||
            job.companyName?.toLowerCase().includes(query) ||
            job.location?.toLowerCase().includes(query) ||
            job.recruiterName?.toLowerCase().includes(query)
        );
    });

    const labelCls = "text-[11px] font-medium uppercase tracking-[0.12em] text-[#7A7666] dark:text-zinc-500";

    return (
        <div className="mx-auto my-10 max-w-7xl px-4 md:my-16">
            {/* Header Section */}
            <div className="mb-10 flex flex-col gap-4 border-b border-[#1C2321]/10 pb-6 md:flex-row md:items-end md:justify-between dark:border-zinc-800">
                <div>
                    <p className="mb-2 text-[12px] tracking-[0.18em] text-[#2B6F60] dark:text-[#7fc4b2]">
                        ADMIN DASHBOARD · NEWJOBEX
                    </p>
                    <h1 className="text-3xl font-medium text-[#1C2321] md:text-4xl dark:text-zinc-50">
                        Pending Approvals
                    </h1>
                </div>
                <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#2B6F60]/30 bg-[#2B6F60]/[0.06] px-3.5 py-1.5 text-xs font-medium text-[#215347] dark:border-[#5fae9c]/40 dark:bg-[#5fae9c]/10 dark:text-[#8fd0bf]">
                        <Clock className="h-3.5 w-3.5" />
                        {jobs.length} Pending {jobs.length === 1 ? 'Role' : 'Roles'}
                    </span>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={fetchPendingJobs}
                        disabled={isLoading}
                        className="rounded-full border-[#DCD9CC] text-xs hover:bg-[#1C2321]/5 dark:border-zinc-700 dark:hover:bg-zinc-800"
                    >
                        <RefreshCw className={`mr-1.5 h-3.5 w-3.5 ${isLoading ? 'animate-spin' : ''}`} />
                        Refresh
                    </Button>
                </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative w-full sm:w-80">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9A9686] dark:text-zinc-500" />
                    <Input
                        type="text"
                        placeholder="Search by title, company, recruiter..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="h-10 rounded-full border-[#DCD9CC] bg-transparent pl-9 text-sm focus-visible:border-[#2B6F60] focus-visible:ring-0 dark:border-zinc-700 dark:focus-visible:border-[#5fae9c]"
                    />
                </div>
            </div>

            {/* Content Table / Cards */}
            {isLoading ? (
                <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-dashed border-[#DCD9CC] dark:border-zinc-800">
                    <RefreshCw className="h-8 w-8 animate-spin text-[#2B6F60] dark:text-[#5fae9c]" />
                    <p className="mt-3 text-sm text-[#7A7666] dark:text-zinc-400">Loading pending job requisitions...</p>
                </div>
            ) : filteredJobs.length === 0 ? (
                <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-dashed border-[#DCD9CC] p-8 text-center dark:border-zinc-800">
                    <CheckCircle2 className="mb-3 h-10 w-10 text-[#2B6F60]/60 dark:text-[#5fae9c]/60" />
                    <h3 className="text-base font-medium text-[#1C2321] dark:text-zinc-100">All caught up!</h3>
                    <p className="mt-1 text-sm text-[#7A7666] dark:text-zinc-400">
                        {searchQuery ? 'No pending jobs match your search filter.' : 'There are no pending job postings waiting for review.'}
                    </p>
                </div>
            ) : (
                <div className="overflow-hidden rounded-xl border border-[#DCD9CC] dark:border-zinc-800">
                    <Table>
                        <TableHeader className="bg-[#1C2321]/[0.02] dark:bg-zinc-900/50">
                            <TableRow className="border-[#DCD9CC] dark:border-zinc-800">
                                <TableHead className={labelCls}>Role & Company</TableHead>
                                <TableHead className={labelCls}>Type / Location</TableHead>
                                <TableHead className={labelCls}>Salary</TableHead>
                                <TableHead className={labelCls}>Submitted By</TableHead>
                                <TableHead className={labelCls}>Date</TableHead>
                                <TableHead className={`text-right ${labelCls}`}>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredJobs.map((job) => {
                                const jobId = job._id || job.id;
                                return (
                                    <TableRow key={jobId} className="border-[#DCD9CC] transition-colors hover:bg-[#1C2321]/[0.01] dark:border-zinc-800/80 dark:hover:bg-zinc-900/30">
                                        {/* Role & Company */}
                                        <TableCell>
                                            <div className="font-medium text-[#1C2321] dark:text-zinc-100">
                                                {job.jobTitle}
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs text-[#7A7666] dark:text-zinc-400">
                                                <Building2 className="h-3 w-3 shrink-0" />
                                                <span>{job.companyName}</span>
                                            </div>
                                        </TableCell>

                                        {/* Type / Location */}
                                        <TableCell>
                                            <div className="flex flex-wrap items-center gap-1.5">
                                                <Badge variant="outline" className="border-[#2B6F60]/30 bg-[#2B6F60]/[0.04] text-[11px] font-normal text-[#215347] dark:border-[#5fae9c]/30 dark:bg-[#5fae9c]/10 dark:text-[#8fd0bf]">
                                                    {job.employmentType || 'Full-time'}
                                                </Badge>
                                                <span className="text-xs text-[#7A7666] dark:text-zinc-400">•</span>
                                                <span className="text-xs text-[#7A7666] dark:text-zinc-400">{job.workplaceType || 'Remote'}</span>
                                            </div>
                                            <div className="mt-1 flex items-center gap-1 text-xs text-[#9A9686] dark:text-zinc-500">
                                                <MapPin className="h-3 w-3 shrink-0" />
                                                <span className="truncate max-w-[150px]">{job.location}</span>
                                            </div>
                                        </TableCell>

                                        {/* Salary */}
                                        <TableCell className="text-sm font-medium text-[#1C2321] dark:text-zinc-200">
                                            {job.salary || 'N/A'}
                                        </TableCell>

                                        {/* Submitted By */}
                                        <TableCell>
                                            <div className="text-xs font-medium text-[#1C2321] dark:text-zinc-200">
                                                {job.recruiterName || 'Unknown Recruiter'}
                                            </div>
                                            <div className="text-[11px] text-[#9A9686] dark:text-zinc-500">
                                                {job.recruiterEmail}
                                            </div>
                                        </TableCell>

                                        {/* Date */}
                                        <TableCell className="text-xs text-[#7A7666] dark:text-zinc-400">
                                            {job.postedAt ? new Date(job.postedAt).toLocaleDateString() : 'Recent'}
                                        </TableCell>

                                        {/* Actions */}
                                        <TableCell className="text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button
                                                    size="icon"
                                                    variant="outline"
                                                    onClick={() => setSelectedJob(job)}
                                                    className="h-8 w-8 rounded-full border-[#DCD9CC] hover:bg-[#1C2321]/5 dark:border-zinc-700 dark:hover:bg-zinc-800"
                                                    title="View Details"
                                                >
                                                    <Eye className="h-4 w-4 text-[#1C2321] dark:text-zinc-300" />
                                                </Button>

                                                <Button
                                                    size="icon"
                                                    onClick={() => handleStatusUpdate(jobId, 'approved')}
                                                    disabled={actionLoading === jobId}
                                                    className="h-8 w-8 rounded-full bg-[#2B6F60] text-white hover:bg-[#215347] dark:bg-[#5fae9c] dark:text-zinc-950 dark:hover:bg-[#4d9384]"
                                                    title="Approve Role"
                                                >
                                                    <Check className="h-4 w-4" />
                                                </Button>

                                                <Button
                                                    size="icon"
                                                    variant="outline"
                                                    onClick={() => handleStatusUpdate(jobId, 'rejected')}
                                                    disabled={actionLoading === jobId}
                                                    className="h-8 w-8 rounded-full border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900/50 dark:text-red-400 dark:hover:bg-red-950/30"
                                                    title="Reject Role"
                                                >
                                                    <X className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
            )}

            {/* Modal / Dialog for Reviewing Full Job Details */}
            <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
                <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-2xl border-[#DCD9CC] bg-[var(--page-bg,#F7F7F4)] p-6 dark:border-zinc-800 dark:bg-zinc-900">
                    {selectedJob && (
                        <>
                            <DialogHeader className="border-b border-[#1C2321]/10 pb-4 text-left dark:border-zinc-800">
                                <div className="flex items-center gap-2">
                                    <Badge variant="outline" className="border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400">
                                        Pending Approval
                                    </Badge>
                                    <span className="text-xs text-[#9A9686]">
                                        Submitted {selectedJob.postedAt ? new Date(selectedJob.postedAt).toLocaleDateString() : ''}
                                    </span>
                                </div>
                                <DialogTitle className="mt-2 text-2xl font-medium text-[#1C2321] dark:text-zinc-50">
                                    {selectedJob.jobTitle}
                                </DialogTitle>
                                <DialogDescription className="text-sm font-medium text-[#2B6F60] dark:text-[#7fc4b2]">
                                    {selectedJob.companyName}
                                </DialogDescription>
                            </DialogHeader>

                            {/* Job Meta Details Grid */}
                            <div className="my-6 grid grid-cols-2 gap-4 rounded-xl border border-[#DCD9CC] bg-white/60 p-4 dark:border-zinc-800 dark:bg-zinc-950/50">
                                <div>
                                    <p className={labelCls}>Location</p>
                                    <p className="mt-1 flex items-center gap-1.5 text-sm text-[#1C2321] dark:text-zinc-200">
                                        <MapPin className="h-3.5 w-3.5 text-[#2B6F60] dark:text-[#5fae9c]" />
                                        {selectedJob.location}
                                    </p>
                                </div>
                                <div>
                                    <p className={labelCls}>Salary</p>
                                    <p className="mt-1 flex items-center gap-1.5 text-sm text-[#1C2321] dark:text-zinc-200">
                                        <DollarSign className="h-3.5 w-3.5 text-[#2B6F60] dark:text-[#5fae9c]" />
                                        {selectedJob.salary}
                                    </p>
                                </div>
                                <div>
                                    <p className={labelCls}>Employment Type</p>
                                    <p className="mt-1 flex items-center gap-1.5 text-sm text-[#1C2321] dark:text-zinc-200">
                                        <Briefcase className="h-3.5 w-3.5 text-[#2B6F60] dark:text-[#5fae9c]" />
                                        {selectedJob.employmentType} ({selectedJob.workplaceType})
                                    </p>
                                </div>
                                <div>
                                    <p className={labelCls}>Recruiter</p>
                                    <p className="mt-1 flex items-center gap-1.5 text-sm text-[#1C2321] dark:text-zinc-200">
                                        <User className="h-3.5 w-3.5 text-[#2B6F60] dark:text-[#5fae9c]" />
                                        {selectedJob.recruiterName}
                                    </p>
                                </div>
                            </div>

                            {/* Skills Section */}
                            {selectedJob.skillsAndExpertise && selectedJob.skillsAndExpertise.length > 0 && (
                                <div className="mb-6">
                                    <p className={`mb-2 ${labelCls}`}>Required Skills</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {selectedJob.skillsAndExpertise.map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full border border-[#2B6F60]/30 bg-[#2B6F60]/[0.06] px-3 py-1 text-xs text-[#215347] dark:border-[#5fae9c]/30 dark:bg-[#5fae9c]/10 dark:text-[#8fd0bf]"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Job Description */}
                            <div className="mb-6">
                                <p className={`mb-2 ${labelCls}`}>Job Description</p>
                                <div className="max-h-60 overflow-y-auto whitespace-pre-line rounded-lg border border-[#DCD9CC] bg-white/40 p-4 text-sm leading-relaxed text-[#1C2321] dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-zinc-300">
                                    {selectedJob.description}
                                </div>
                            </div>

                            {/* Recruiter Email Info */}
                            <div className="mb-6 flex items-center gap-2 text-xs text-[#7A7666] dark:text-zinc-400">
                                <Mail className="h-3.5 w-3.5" />
                                <span>Recruiter Contact: {selectedJob.recruiterEmail}</span>
                            </div>

                            {/* Footer Actions */}
                            <DialogFooter className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => handleStatusUpdate(selectedJob._id || selectedJob.id, 'rejected')}
                                    disabled={actionLoading === (selectedJob._id || selectedJob.id)}
                                    className="rounded-full border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900/50 dark:text-red-400 dark:hover:bg-red-950/30"
                                >
                                    <XCircle className="mr-1.5 h-4 w-4" />
                                    Reject Job
                                </Button>
                                <Button
                                    type="button"
                                    onClick={() => handleStatusUpdate(selectedJob._id || selectedJob.id, 'approved')}
                                    disabled={actionLoading === (selectedJob._id || selectedJob.id)}
                                    className="rounded-full bg-[#2B6F60] text-white hover:bg-[#215347] dark:bg-[#5fae9c] dark:text-zinc-950 dark:hover:bg-[#4d9384]"
                                >
                                    <CheckCircle2 className="mr-1.5 h-4 w-4" />
                                    Approve & Publish
                                </Button>
                            </DialogFooter>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default PendingJobs;