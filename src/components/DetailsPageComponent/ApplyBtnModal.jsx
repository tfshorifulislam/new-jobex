"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import ApplyForm from "./ApplyForm";

export function ApplyBtnModal({ job }) {
  const isExternal = job.source === "remotive";

  // ==========================
  // External Job
  // ==========================
  if (isExternal) {
    return (
      <Dialog>
        <DialogTrigger className="w-full rounded-xl bg-[#6633ff] py-3 font-semibold text-white hover:bg-[#5b2ef5] cursor-pointer">
          Apply Now
        </DialogTrigger>

        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              Apply on Company Website
            </DialogTitle>

            <DialogDescription>
              This job is hosted on an external website.
              Clicking <strong>Continue</strong> will open the
              employer's application page in a new tab.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 rounded-lg border bg-gray-50 p-4">
            <div>
              <p className="text-sm text-gray-500">
                Job Title
              </p>
              <p className="font-medium">
                {job.jobTitle}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Company
              </p>
              <p className="font-medium">
                {job.companyName}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Location
              </p>
              <p className="font-medium">
                {job.location}
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button className="w-full">
              <a
                href={job.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Continue to Apply
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </DialogFooter>
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