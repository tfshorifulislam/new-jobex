import {
    Code2,
    Server,
    Layers3,
    Landmark,
    Building2,
    Brain,
    ShieldCheck,
    MessagesSquare,
} from "lucide-react";
import InterviewCard from "@/components/InterviewComponent/InterviewCard";
import InterviewHeading from "@/components/InterviewComponent/InterviewHeading";

const categories = [
    {
        title: "Frontend Interview",
        description: "React, Next.js, JavaScript, HTML, CSS, Tailwind CSS",
        icon: Code2,
        color: "bg-blue-50 text-blue-600",
        total: "250+ Questions",
        href: "/interview/frontend",
    },
    {
        title: "Backend Interview",
        description: "Node.js, Express.js, REST API, Authentication",
        icon: Server,
        color: "bg-green-50 text-green-600",
        total: "180+ Questions",
        href: "/interview/backend",
    },
    {
        title: "Full Stack Interview",
        description: "Frontend + Backend + Database + Deployment",
        icon: Layers3,
        color: "bg-purple-50 text-purple-600",
        total: "350+ Questions",
        href: "/interview/fullstack",
    },
    {
        title: "Government Job Interview",
        description: "BCS, Ministry, Government Viva Preparation",
        icon: Landmark,
        color: "bg-red-50 text-red-600",
        total: "120+ Questions",
        href: "/interview/govt",
    },
    {
        title: "Bank Job Interview",
        description: "Sonali, Janata, Islami, Dutch Bangla, BRAC",
        icon: Building2,
        color: "bg-yellow-50 text-yellow-700",
        total: "100+ Questions",
        href: "/interview/bank",
    },
    {
        title: "HR Interview",
        description: "Behavioral, HR Round & Communication Questions",
        icon: MessagesSquare,
        color: "bg-pink-50 text-pink-600",
        total: "80+ Questions",
        href: "/interview/hr",
    },
    {
        title: "AI Interview",
        description: "Prompt Engineering, OpenAI API, LangChain, RAG",
        icon: Brain,
        color: "bg-indigo-50 text-indigo-600",
        total: "90+ Questions",
        href: "/interview/ai",
    },
    {
        title: "DevOps Interview",
        description: "Docker, Linux, CI/CD, GitHub Actions",
        icon: ShieldCheck,
        color: "bg-cyan-50 text-cyan-600",
        total: "110+ Questions",
        href: "/interview/devops",
    },
];

const InterviewPage = () => {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero */}
            <InterviewHeading />

            {/* Cards */}
            <InterviewCard categories={categories} />
        </main>
    );
};

export default InterviewPage;