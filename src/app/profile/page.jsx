import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import {
  BadgeCheck,
  BriefcaseBusiness,
  FileText,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const ProfilePage = async () => {
  const userInfo = await auth.api.getSession({
    headers: await headers(),
  });

  const user = userInfo?.user;

  const steps = [
    {
      icon: FileText,
      title: "Create Your CV",
      description:
        "Build a professional resume that highlights your education, experience and achievements.",
    },
    {
      icon: Sparkles,
      title: "Showcase Your Skills",
      description:
        "Add your technical and professional skills to stand out from other candidates.",
    },
    {
      icon: BadgeCheck,
      title: "Build Trust",
      description:
        "A complete profile helps employers feel confident about your application.",
    },
    {
      icon: Target,
      title: "Get Discovered",
      description:
        "Recruiters can easily find your profile based on your skills and experience.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Apply Faster",
      description:
        "A completed profile lets you apply for jobs in just a few clicks.",
    },
    {
      icon: TrendingUp,
      title: "Grow Your Career",
      description:
        "Keep learning, update your profile regularly and unlock better opportunities.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      {/* Hero */}
      <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#0b1d4d] via-[#162d69] to-[#253b80] text-white">
        <div className="grid items-center gap-10 p-8 md:grid-cols-2 lg:p-12">
          <div>
            <span className="rounded-full bg-white/10 px-4 py-1 text-sm">
              Welcome Back 👋
            </span>

            <h1 className="mt-6 text-3xl font-bold md:text-5xl">
              Hi, {user?.name || "User"}
            </h1>

            <p className="mt-5 max-w-lg text-white/80 leading-8">
              Your profile is more than just information—it represents your
              professional journey. Keep it updated and increase your chances
              of getting noticed by recruiters.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/banner1.png"
              alt="Career"
              className="max-h-72 w-full max-w-md object-contain rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Career Journey */}
      <section className="mt-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Your Journey to Getting Hired
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Every successful career starts with a strong profile. Complete your
            professional information and make yourself easier for recruiters to
            discover.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-violet-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#6633ff] hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6633ff]/10">
                  <Icon className="h-7 w-7 text-[#6633ff]" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tips */}
      <section className="mt-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">
          Career Tips
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-xl bg-violet-50 p-5">
            <h4 className="font-semibold text-gray-900">
              Keep Your Profile Updated
            </h4>

            <p className="mt-2 text-sm leading-7 text-gray-600">
              Regularly update your skills, education and work experience to
              improve your visibility.
            </p>
          </div>

          <div className="rounded-xl bg-violet-50 p-5">
            <h4 className="font-semibold text-gray-900">
              Add Relevant Skills
            </h4>

            <p className="mt-2 text-sm leading-7 text-gray-600">
              Employers often search by skills. Make sure your strongest skills
              are listed.
            </p>
          </div>

          <div className="rounded-xl bg-violet-50 p-5">
            <h4 className="font-semibold text-gray-900">
              Write a Professional Bio
            </h4>

            <p className="mt-2 text-sm leading-7 text-gray-600">
              A short and clear summary helps recruiters quickly understand your
              background.
            </p>
          </div>

          <div className="rounded-xl bg-violet-50 p-5">
            <h4 className="font-semibold text-gray-900">
              Apply Consistently
            </h4>

            <p className="mt-2 text-sm leading-7 text-gray-600">
              Consistent applications and an updated profile significantly
              increase interview opportunities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;