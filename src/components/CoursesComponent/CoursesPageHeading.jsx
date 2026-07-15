import { BookOpen } from 'lucide-react';
import React from 'react';

const CoursesPageHeading = () => {
    return (
        <section className="border-b bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#6633ff]/10 px-4 py-2 text-sm font-medium text-[#6633ff]">
                        <BookOpen size={16} />
                        Learning Hub
                    </span>

                    <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
                        Courses
                    </h1>

                    <p className="mt-5 text-lg leading-8 text-gray-600">
                        Learn in-demand technologies with official documentation,
                        hand-picked free resources, and structured learning paths.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CoursesPageHeading;