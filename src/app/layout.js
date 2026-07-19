import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/shared/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  metadataBase: new URL("https://newjobex.com"),

  title: {
    default: "NewJobex - Find Your Dream Job & Hire Top Talent",
    template: "%s | NewJobex",
  },

  description:
    "NewJobex is a modern job portal connecting job seekers with top employers. Discover remote, full-time, part-time, internship, and freelance opportunities while helping companies hire the best talent.",

  keywords: [
    "NewJobex",
    "Job Portal",
    "Jobs",
    "Career",
    "Hiring",
    "Recruitment",
    "Remote Jobs",
    "Internships",
    "Full Time Jobs",
    "Part Time Jobs",
    "Freelance Jobs",
    "Software Engineer Jobs",
    "Frontend Developer Jobs",
    "Backend Developer Jobs",
    "React Jobs",
    "Next.js Jobs",
    "Tech Jobs",
    "Find Jobs",
    "Hire Developers",
    "Job Search",
  ],

  authors: [
    {
      name: "tf shoriful islam",
    },
  ],

  creator: "codegen",
  publisher: "codegen",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "NewJobex - Find Your Dream Job & Hire Top Talent",
    description:
      "Explore thousands of job opportunities and connect with top employers through NewJobex.",
    url: "https://newjobex.com",
    siteName: "NewJobex",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NewJobex Job Portal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NewJobex - Find Your Dream Job",
    description:
      "Find jobs, internships, remote opportunities, and hire top talent with NewJobex.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "Jobs & Careers",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          theme="light"
        />
      </body>
    </html>
  );
}
