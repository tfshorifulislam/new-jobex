"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Building2, ExternalLink, ShieldCheck } from "lucide-react";
import ApplyForm from "./ApplyForm";

export function ApplyBtnModal({ job }) {
  const isExternal = job.source === "remotive" || "arbeitnow";

  // ==========================
  // External Job
  // ==========================
  if (isExternal) {
    return (
      <Dialog>
        <DialogTrigger className="w-full rounded-xl bg-[#6633ff] py-3 font-semibold text-white hover:bg-[#5b2ef5] cursor-pointer">
          Apply Now
        </DialogTrigger>

        <DialogContent className="max-w-md overflow-hidden rounded-2xl p-0">

          <div className="w-full bg-linear-to-r from-indigo-600 to-violet-600 px-6 py-7 text-white">

            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
              <ExternalLink className="h-7 w-7" />
            </div>

            <h2 className="text-xl font-bold">
              External Application
            </h2>

            <p className="mt-2 text-sm text-indigo-100">
              You'll be redirected to the employer's official website.
            </p>

          </div>

          <div className="space-y-5 p-6">

            <div>
              <h3 className="text-lg font-semibold">
                {job.jobTitle}
              </h3>

              <p className="text-sm text-muted-foreground">
                {job.companyName}
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                {job.location}
              </p>
            </div>

            <div className="rounded-xl border bg-muted/40 p-4">

              <div className="space-y-3">

                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                  <span>Secure redirect</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <ExternalLink className="h-5 w-5 text-blue-600" />
                  <span>Opens in a new tab</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Building2 className="h-5 w-5 text-violet-600" />
                  <span>Application handled by employer</span>
                </div>

              </div>

            </div>

            <div className="flex gap-3">

              <DialogClose className="flex-1 border rounded-xl cursor-pointer">
                <div>
                  Cancel
                </div>
              </DialogClose>

              <Button className="flex-1 rounded-xl">
                <a
                  href={job.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span>Continue to Apply</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>

            </div>

          </div>

        </DialogContent>
      </Dialog>
    );
  }

  // ==========================
  // NewJobex Job
  // ==========================
  else {
    return (
      <Dialog>
        <DialogTrigger className="w-full rounded-xl bg-[#6633ff] py-3 font-semibold text-white hover:bg-[#5b2ef5] cursor-pointer">
          Apply Now
        </DialogTrigger>

        <DialogContent className="w-[calc(100vw-22px)] max-w-2xl rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className='leading-6'>
              Apply for {job.jobTitle}
            </DialogTitle>

            <DialogDescription>
              Complete the form below to submit your
              application.
            </DialogDescription>
          </DialogHeader>

          {/* তোমার existing apply form */}
          <div className="">
            <ApplyForm job={job} />
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}