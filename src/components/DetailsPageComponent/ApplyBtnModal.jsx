'use client';

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ExternalLink,
  Building2,
  TriangleAlert,
} from "lucide-react";

export function ApplyBtnModal({ job }) {

  const handleContinue = () => {
    if (!job?.applyLink) {
      alert("Application link is not available.");
      return;
    }

    window.open(job.applyLink, "_blank", "noopener,noreferrer");
  };

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button className="w-full rounded-xl bg-[#6633ff] py-5 font-semibold text-white hover:bg-[#5b2ef5] cursor-pointer">
            Apply Now
          </Button>
        }
      />

      <DialogContent className="sm:max-w-md rounded-2xl p-6">
        <DialogHeader className="space-y-3">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
            <ExternalLink className="h-7 w-7 text-[#6633ff]" />
          </div>

          <DialogTitle className="text-center text-2xl font-bold">
            Continue to Apply
          </DialogTitle>

          <DialogDescription className="text-center text-gray-500">
            You are about to leave <span className="font-semibold text-[#6633ff]">NewJobex</span> and
            continue your application on the companys official website.
          </DialogDescription>
        </DialogHeader>

        {/* Job Info */}
        <div className="mt-6 rounded-xl border bg-gray-50 p-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {job.jobTitle}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
            <Building2 size={16} />
            {job.companyName}
          </div>
        </div>

        {/* Notice */}
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <TriangleAlert className="mt-0.5 h-5 w-5 text-amber-600 shrink-0" />

          <p className="text-sm leading-6 text-gray-700">
            This job was collected from another trusted job portal. NewJobex
            does not receive your application. Clicking{" "}
            <strong>Continue</strong> will open the application page
            in a new tab.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <Button
            variant="outline"
            className="flex-1 rounded-xl"
          >
            Cancel
          </Button>

          <div className="flex-1" >
            <Button
              type="button"
              onClick={handleContinue}
              className="w-full rounded-xl bg-[#6633ff] hover:bg-[#5b2ef5]"
            >
              Continue
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}