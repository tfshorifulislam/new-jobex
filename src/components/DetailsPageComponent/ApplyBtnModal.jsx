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