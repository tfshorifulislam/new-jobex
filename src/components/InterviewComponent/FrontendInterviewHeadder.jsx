import { Code2 } from 'lucide-react';
import React from 'react';

const FrontendInterviewHeadder = ({ questions }) => {
    return (
        <section className="border-b bg-white">
            <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
                {/* Header */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6633ff]/10">
                        <Code2 className="h-8 w-8 text-[#6633ff]" />
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                            Frontend Interview Questions
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                            Practice the most frequently asked Frontend interview questions
                            covering React, Next.js, JavaScript, HTML, CSS, TypeScript and more.
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm">
                        <h2 className="text-3xl font-bold text-[#6633ff]">
                            {questions.length}
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Questions
                        </p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm">
                        <h2 className="text-3xl font-bold text-green-600">
                            {questions.filter((q) => q.level === "Beginner").length}
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Beginner
                        </p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm">
                        <h2 className="text-3xl font-bold text-yellow-600">
                            {questions.filter((q) => q.level === "Intermediate").length}
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Intermediate
                        </p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm">
                        <h2 className="text-3xl font-bold text-red-600">
                            {questions.filter((q) => q.level === "Advanced").length}
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Advanced
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FrontendInterviewHeadder;