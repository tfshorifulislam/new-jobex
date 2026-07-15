import {
  Code2,
  FileCode2,
  Palette,
  Braces,
  Atom,
  Triangle,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const courses = [
  {
    title: "HTML5",
    level: "Beginner",
    icon: FileCode2,
    docs: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    learn: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
  },
  {
    title: "CSS3",
    level: "Beginner",
    icon: Palette,
    docs: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    learn: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
  },
  {
    title: "JavaScript",
    level: "Beginner → Advanced",
    icon: Braces,
    docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    learn:
      "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/",
  },
  {
    title: "TypeScript",
    level: "Intermediate",
    icon: Code2,
    docs: "https://www.typescriptlang.org/docs/",
    learn:
      "https://www.freecodecamp.org/news/learn-typescript-beginners-guide/",
  },
  {
    title: "React.js",
    level: "Intermediate",
    icon: Atom,
    docs: "https://react.dev",
    // React-এর official interactive course
    learn: "https://scrimba.com/learn-react-c0e",
  },
  {
    title: "Next.js",
    level: "Intermediate",
    icon: Triangle,
    docs: "https://nextjs.org/docs",
    // Official Next.js course
    learn: "https://nextjs.org/learn",
  },
  {
    title: "Tailwind CSS",
    level: "Intermediate",
    icon: Palette,
    docs: "https://tailwindcss.com/docs",
    // Official Tailwind tutorial
    learn: "https://tailwindcss.com/docs/installation",
  },
];

export default function FrontendCoursePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Frontend Development
          </span>

          <h1 className="mt-5 text-4xl font-bold text-gray-900">
            Frontend Learning Path
          </h1>

          <p className="mt-4 max-w-3xl text-gray-600 leading-7">
            Learn modern frontend development from HTML to Next.js using
            official documentation and completely free resources.
          </p>
        </div>
      </section>

      {/* Course Cards */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <div
                key={course.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#6633ff] hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                    <Icon size={28} />
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold">
                      {course.title}
                    </h2>

                    <p className="text-sm text-gray-500">
                      {course.level}
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Link
                    href={course.docs}
                    target="_blank"
                    className="flex items-center justify-between rounded-xl border p-4 transition hover:border-[#6633ff]"
                  >
                    <div>
                      <p className="font-medium">Official Documentation</p>
                      <p className="text-sm text-gray-500">
                        Read the official docs
                      </p>
                    </div>

                    <ExternalLink size={18} />
                  </Link>

                  <Link
                    href={course.learn}
                    target="_blank"
                    className="flex items-center justify-between rounded-xl border p-4 transition hover:border-[#6633ff]"
                  >
                    <div>
                      <p className="font-medium">Free Course</p>
                      <p className="text-sm text-gray-500">
                        Learn completely free
                      </p>
                    </div>

                    <ExternalLink size={18} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}