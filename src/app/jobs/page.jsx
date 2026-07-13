import { Search, MapPin, Briefcase, Calendar, CheckCircle2, SlidersHorizontal, Percent } from 'lucide-react';


const dummyJobs = [
    {
        id: 1,
        title: "Online Support Executive",
        company: "Xan Tach",
        experience: "1 to 2 years",
        type: "On-Site",
        location: "Dhaka",
        salary: "Negotiable",
        match: "20%",
        skills: ["Customer Support", "Bug tracking", "SISA"],
        deadline: "31 Jul. 2026"
    },
    {
        id: 2,
        title: "Executive Director (Marketing & Merchandising)",
        company: "Lyric Industries (Pvt) Ltd",
        experience: "N/A",
        type: "On-Site",
        location: "Dhaka",
        salary: "Negotiable",
        match: "85%",
        skills: ["Apparel Merchandising", "Team Building", "Leadership", "Sourcing"],
        deadline: "19 Aug. 2026"
    },
    {
        id: 3,
        title: "Manager Quality (Quality & Technical)",
        company: "MNR Sweaters Ltd",
        experience: "5+ years",
        type: "On-Site",
        location: "Dhaka",
        salary: "Negotiable",
        match: "20%",
        skills: ["Quality management system", "Garment Manufacturing", "Problem Solving"],
        deadline: "12 Aug. 2026"
    },
    {
        id: 4,
        title: "Senior Manager/AGM - Brand",
        company: "Akij Food & Beverage Ltd",
        experience: "Min: 10 years",
        type: "Full-time",
        location: "Dhaka",
        salary: "Negotiable",
        match: "60%",
        skills: ["Brand Management", "Corporate Branding", "Market Planning", "Brand Strategies"],
        deadline: "15 Jul. 2026"
    },
    {
        id: 5,
        title: "Senior Security Officer (VIP Residence)",
        company: "An Noor Academy",
        experience: "1 to 5 years",
        type: "On-Site",
        location: "Dhaka",
        salary: "20k-25k",
        match: "20%",
        skills: ["Security services", "CCTV monitoring", "System monitoring"],
        deadline: "20 Jul. 2026"
    },
    {
        id: 6,
        title: "হাউসকিপার",
        company: "An Noor Academy",
        experience: "1 to 2 years",
        type: "On-Site",
        location: "Dhaka",
        salary: "25k-30k",
        match: "20%",
        skills: ["Housekeeping", "Cleaning Management"],
        deadline: "20 Jul. 2026"
    }
];

const JobsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
            {/* Top Header */}
            <div className="max-w-7xl mx-auto mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Latest Jobs in Bangladesh</h1>
                <p className="text-sm text-gray-500 mt-1">
                    <span className="font-semibold text-blue-600">Private 2571</span> | <span className="font-semibold text-green-600">Govt. 179</span>
                </p>
            </div>

            {/* Main Layout Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
                
                {/* LEFT SIDEBAR: FILTERS */}
                <div className="lg:col-span-1 bg-white p-5 rounded-xl shadow-sm border border-gray-100 h-fit space-y-6">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                        <span className="font-bold text-gray-700 flex items-center gap-2">
                            <SlidersHorizontal size={18} /> Filter
                        </span>
                        <button className="text-xs text-red-500 hover:underline">Clear All</button>
                    </div>

                    {/* Workplace Type */}
                    <div>
                        <h3 className="font-semibold text-sm text-gray-800 mb-2">Workplace Type</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                            {['Onsite', 'Hybrid', 'Remote'].map((type) => (
                                <label key={type} className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                                    {type}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Job Type */}
                    <div>
                        <h3 className="font-semibold text-sm text-gray-800 mb-2">Job Type</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                            {['Full-Time', 'Part-Time', 'Contractual', 'Internship'].map((type) => (
                                <label key={type} className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                                    {type}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Job Posted */}
                    <div>
                        <h3 className="font-semibold text-sm text-gray-800 mb-2">Job Posted</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                            {['All', 'Last Week', 'Last 3 Months', 'This Year'].map((time) => (
                                <label key={time} className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="posted" className="text-blue-600 focus:ring-blue-500" />
                                    {time}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Job Deadline */}
                    <div>
                        <h3 className="font-semibold text-sm text-gray-800 mb-2">Job Deadline</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                            {['Today', 'Next Week', 'Next Month'].map((time) => (
                                <label key={time} className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                                    {time}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Salary Range */}
                    <div>
                        <h3 className="font-semibold text-sm text-gray-800 mb-2">Salary Range (Monthly)</h3>
                        <div className="flex gap-2">
                            <input type="number" placeholder="Min" className="w-full text-xs p-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500" />
                            <input type="number" placeholder="Max" className="w-full text-xs p-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500" />
                        </div>
                    </div>
                </div>

                {/* RIGHT CONTENT: SEARCH & JOB CARDS */}
                <div className="lg:col-span-3 space-y-4">
                    
                    {/* Search Bar & Stats */}
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <div className="relative">
                                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                                <input type="text" placeholder="Title or keyword" className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-2.5 text-gray-400" size={18} />
                                <input type="text" placeholder="Enter desired location" className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500" />
                            </div>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg text-sm transition-colors">
                                Search
                            </button>
                        </div>
                        <div className="text-sm font-semibold text-gray-700 pt-1">
                            2568 Jobs Found
                        </div>
                    </div>

                    {/* Job Cards List */}
                    <div className="space-y-4">
                        {dummyJobs.map((job) => (
                            <div key={job.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden">
                                
                                {/* Top Badges / Row */}
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h2 className="text-lg font-bold text-gray-800 hover:text-blue-600 cursor-pointer">{job.title}</h2>
                                        <p className="text-sm font-medium text-gray-600">{job.company}</p>
                                    </div>
                                    
                                    {/* Profile Match Circular Badge */}
                                    <div className="flex flex-col items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-200">
                                        <span className="flex items-center gap-1"><Percent size={12}/>{job.match}</span>
                                        <span className="text-[10px] font-normal text-green-600">Profile Match</span>
                                    </div>
                                </div>

                                {/* Job Meta Info */}
                                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-gray-500 mb-4 bg-gray-50 p-2 rounded-lg">
                                    <div className="flex items-center gap-1">
                                        <Briefcase size={14} /> <span>{job.experience}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin size={14} /> <span>{job.type} • {job.location}</span>
                                    </div>
                                    <div className="font-semibold text-gray-700">
                                        ৳ {job.salary}
                                    </div>
                                    <div className="ml-auto flex items-center gap-1 text-red-500 font-medium">
                                        <Calendar size={14} /> <span>Deadline: {job.deadline}</span>
                                    </div>
                                </div>

                                {/* Tags / Skills */}
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

            </div>
        </div>
    );
};

export default JobsPage;