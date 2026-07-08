import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BriefcaseBusiness,
  Globe2,
  Sparkles,
} from "lucide-react";

const BuildCareer = () => {
  return (
    <section className="py-16 lg:py-24 bg-linear-to-br from-violet-50 via-white to-indigo-50">
      <div className="mx-auto grid max-w-7xl items-center gap-14 p-6 sm:p-8 md:grid-cols-2 md:p-12 lg:gap-20 lg:p-20">

        {/* Left Content */}
        <div className="order-2 md:order-1">

          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-100/60 px-4 py-2 text-sm font-medium text-[#6633ff]">
            <Sparkles className="h-4 w-4" />
            Worldwide Career Platform
          </div>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Your Next Career
            <span className="block bg-linear-to-r from-[#6633ff] to-indigo-500 bg-clip-text text-transparent">
              Starts Here.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            Join thousands of professionals discovering verified jobs,
            internships, remote opportunities, and full-time careers from
            trusted companies worldwide. Let AI match you with your perfect
            opportunity faster.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button className="h-12 w-full bg-[#6633ff] hover:bg-[#5522ee] sm:w-auto">
              Explore Jobs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="h-12 w-full border-[#6633ff] text-[#6633ff] hover:bg-[#6633ff] hover:text-white sm:w-auto"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Cards */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative flex w-full max-w-md flex-col items-center gap-6 md:h-[420px] md:max-w-none md:block">

            {/* Card 1 */}
            <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl md:absolute md:right-0 md:top-0 md:w-80">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-violet-100 p-3">
                  <BriefcaseBusiness className="h-6 w-6 text-[#6633ff]" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Senior Frontend Developer
                  </h4>

                  <p className="text-sm text-gray-500">
                    Remote • Full Time
                  </p>
                </div>

              </div>

              <div className="mt-6 flex items-center justify-between">

                <span className="rounded-full bg-violet-50 px-3 py-1 text-sm font-medium text-[#6633ff]">
                  $6K - $9K
                </span>

                <button className="text-sm font-semibold text-[#6633ff] hover:underline">
                  Apply →
                </button>

              </div>

            </div>

            {/* Card 2 */}
            <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl md:absolute md:bottom-10 md:left-0 md:w-72">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-green-100 p-3">
                  <Globe2 className="h-6 w-6 text-green-600" />
                </div>

                <div>

                  <h4 className="font-semibold text-gray-900">
                    AI Job Match
                  </h4>

                  <p className="text-sm text-gray-500">
                    96% Match Score
                  </p>

                </div>

              </div>

              <div className="mt-5 h-2 rounded-full bg-gray-100">
                <div className="h-2 w-[96%] rounded-full bg-[#6633ff]" />
              </div>

              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>Excellent Match</span>
                <span className="font-semibold text-[#6633ff]">96%</span>
              </div>

            </div>

            {/* Card 3 */}
            <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl md:absolute md:bottom-0 md:right-8 md:w-64">

              <h4 className="text-lg font-bold text-gray-900">
                Global Reach
              </h4>

              <p className="mt-2 text-sm text-gray-500">
                Connect with companies across 120+ countries and discover
                worldwide opportunities.
              </p>

              <div className="mt-5 flex items-center justify-between">

                <div>
                  <h5 className="text-2xl font-bold text-[#6633ff]">
                    120+
                  </h5>

                  <p className="text-sm text-gray-500">
                    Countries
                  </p>
                </div>

                <div>
                  <h5 className="text-2xl font-bold text-[#6633ff]">
                    15K+
                  </h5>

                  <p className="text-sm text-gray-500">
                    Jobs
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BuildCareer;