import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Category = ({ categories }) => {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
                const Icon = category.icon;

                return (
                    <Link
                        href={`/courses/${category.title.toLowerCase()}`}
                        key={category.title}
                        className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#6633ff] hover:shadow-lg"
                    >
                        <div
                            className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl ${category.color}`}
                        >
                            <Icon size={28} />
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900">
                            {category.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-gray-500">
                            {category.description}
                        </p>

                        <div className="mt-6 flex items-center justify-between">
                            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                                {category.total} Courses
                            </span>

                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default Category;