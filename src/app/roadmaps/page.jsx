import Link from "next/link";
import {
    Code2,
    Atom,
    Braces,
    Server,
    Database,
    GitBranch,
    Container,
    Brain,
} from "lucide-react";
import RoadmapCard from "@/components/RoadmapsComponents/RoadmapCard";
import RoadMapHadding from "@/components/RoadmapsComponents/RoadMapHadding";

const roadmaps = [
    {
        title: "Frontend Developer",
        description: "Become a modern frontend developer from scratch.",
        level: "Beginner → Advanced",
        icon: Code2,
        color: "bg-blue-50 text-blue-600",
        link: "https://roadmap.sh/frontend",
    },
    {
        title: "React",
        description: "Master React.js and build modern applications.",
        level: "Intermediate",
        icon: Atom,
        color: "bg-cyan-50 text-cyan-600",
        link: "https://roadmap.sh/react",
    },
    {
        title: "JavaScript",
        description: "Learn modern JavaScript fundamentals and beyond.",
        level: "Beginner → Advanced",
        icon: Braces,
        color: "bg-yellow-50 text-yellow-600",
        link: "https://roadmap.sh/javascript",
    },
    {
        title: "Backend",
        description: "Learn APIs, authentication, databases and servers.",
        level: "Intermediate",
        icon: Server,
        color: "bg-green-50 text-green-600",
        link: "https://roadmap.sh/backend",
    },
    {
        title: "Node.js",
        description: "Build scalable backend applications using Node.js.",
        level: "Intermediate",
        icon: Server,
        color: "bg-emerald-50 text-emerald-600",
        link: "https://roadmap.sh/nodejs",
    },
    {
        title: "MongoDB",
        description: "Master NoSQL database concepts and MongoDB.",
        level: "Beginner",
        icon: Database,
        color: "bg-green-50 text-green-700",
        link: "https://roadmap.sh/mongodb",
    },
    {
        title: "Git & GitHub",
        description: "Version control and collaboration workflow.",
        level: "Beginner",
        icon: GitBranch,
        color: "bg-orange-50 text-orange-600",
        link: "https://roadmap.sh/git-github",
    },
    {
        title: "Docker",
        description: "Containerize your applications with Docker.",
        level: "Intermediate",
        icon: Container,
        color: "bg-sky-50 text-sky-600",
        link: "https://roadmap.sh/docker",
    },
    {
        title: "AI Engineer",
        description: "Roadmap for building AI-powered applications.",
        level: "Intermediate → Advanced",
        icon: Brain,
        color: "bg-purple-50 text-purple-600",
        link: "https://roadmap.sh/ai-engineer",
    },
];

const RoadmapsPage = () => {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero */}
            <RoadMapHadding />

            {/* Cards */}
            <RoadmapCard
                roadmaps={roadmaps}
            />
        </main>
    );
};

export default RoadmapsPage;