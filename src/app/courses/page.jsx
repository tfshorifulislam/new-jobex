import Category from "@/components/CoursesComponent/Category";
import ComingSoonCourses from "@/components/CoursesComponent/ComingSoonCourses";
import CoursesPageHeading from "@/components/CoursesComponent/CoursesPageHeading";
import {
    Code2,
    Database,
    Brain,
    Server,
} from "lucide-react";

const categories = [
    {
        title: "Frontend",
        description: "Build modern and responsive user interfaces.",
        icon: Code2,
        color: "bg-blue-50 text-blue-600",
        total: 5,
    },
    {
        title: "Backend",
        description: "Learn server-side development and APIs.",
        icon: Server,
        color: "bg-green-50 text-green-600",
        total: 4,
    },
    {
        title: "Database",
        description: "Master SQL and NoSQL databases with NewJobex.",
        icon: Database,
        color: "bg-orange-50 text-orange-600",
        total: 2,
    },
    {
        title: "AI",
        description: "Learn AI tools and modern LLM development.",
        icon: Brain,
        color: "bg-purple-50 text-purple-600",
        total: 3,
    },
];

export default function CoursesPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero */}
            <CoursesPageHeading />

            {/* Categories */}
            <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Browse by Category
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Choose a category and start learning.
                    </p>
                </div>

                <Category
                    categories={categories}
                />
            </section>

            {/* Coming Soon */}
            <ComingSoonCourses />
        </main>
    );
}