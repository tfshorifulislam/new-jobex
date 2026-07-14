import { Briefcase, Calendar, MapPin } from 'lucide-react';
import React from 'react';

const JobCard = () => {

    // ডামি ডাটা (Dummy Data)
    const dummyJobs = [
        {
            id: 1,
            title: "Frontend Developer",
            company: "Google",
            experience: "1-2 Years",
            workplaceType: "Remote",
            location: "Dhaka",
            salary: "60,000 - 80,000",
            deadline: "30 Jul 2026",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        },
        {
            id: 2,
            title: "Backend Developer",
            company: "Microsoft",
            experience: "2-4 Years",
            workplaceType: "Hybrid",
            location: "Chattogram",
            salary: "70,000 - 100,000",
            deadline: "05 Aug 2026",
            skills: ["Node.js", "Express.js", "MongoDB", "JWT"],
        },
        {
            id: 3,
            title: "Full Stack Developer",
            company: "Meta",
            experience: "2+ Years",
            workplaceType: "Remote",
            location: "Dhaka",
            salary: "90,000 - 120,000",
            deadline: "10 Aug 2026",
            skills: ["React", "Node.js", "MongoDB", "Next.js"],
        },
        {
            id: 4,
            title: "UI/UX Designer",
            company: "Adobe",
            experience: "1-3 Years",
            workplaceType: "On-site",
            location: "Sylhet",
            salary: "45,000 - 65,000",
            deadline: "15 Aug 2026",
            skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
        },
        {
            id: 5,
            title: "React Developer",
            company: "Netflix",
            experience: "1+ Years",
            workplaceType: "Remote",
            location: "Khulna",
            salary: "65,000 - 90,000",
            deadline: "20 Aug 2026",
            skills: ["React", "Redux", "JavaScript", "REST API"],
        },
        {
            id: 6,
            title: "Software Engineer",
            company: "Amazon",
            experience: "3+ Years",
            workplaceType: "Hybrid",
            location: "Dhaka",
            salary: "120,000 - 150,000",
            deadline: "25 Aug 2026",
            skills: ["Java", "Spring Boot", "AWS", "MySQL"],
        },
        {
            id: 7,
            title: "DevOps Engineer",
            company: "Oracle",
            experience: "2+ Years",
            workplaceType: "Remote",
            location: "Rajshahi",
            salary: "90,000 - 130,000",
            deadline: "01 Sep 2026",
            skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
        },
        {
            id: 8,
            title: "Mobile App Developer",
            company: "Spotify",
            experience: "1-3 Years",
            workplaceType: "Hybrid",
            location: "Dhaka",
            salary: "70,000 - 95,000",
            deadline: "08 Sep 2026",
            skills: ["React Native", "Expo", "Firebase", "TypeScript"],
        },
    ];

    return (
        <div>
            {/* Job Cards List */}
            <div className="space-y-4">
                {dummyJobs.map((job) => (
                    <div key={job.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden">

                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h2 className="text-lg font-bold text-gray-800 hover:text-blue-600 cursor-pointer">{job.title}</h2>
                                <p className="text-sm font-medium text-gray-600">{job.company}</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-gray-500 mb-4 bg-gray-50 p-2 rounded-lg">
                            <div className="flex items-center gap-1">
                                <Briefcase size={14} /> <span>{job.experience}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <MapPin size={14} /> <span>{job.workplaceType} • {job.location}</span>
                            </div>
                            <div className="font-semibold text-gray-700">
                                ৳ {job.salary}
                            </div>
                            <div className="ml-auto flex items-center gap-1 text-red-500 font-medium">
                                <Calendar size={14} /> <span>Deadline: {job.deadline}</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                            {job.skills.map((skill, index) => (
                                <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md border border-gray-200">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobCard;