import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/shared/Footer";

// Plus Jakarta Sans — a geometric, high-contrast sans built for product UI.
// Reads more distinctive than Inter at display sizes (headlines, hero copy)
// while staying just as legible for body text and form controls.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://newjobex.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "NewJobex — Find your next role or hire top talent",
    template: "%s | NewJobex",
  },

  description:
    "NewJobex is a modern job portal connecting job seekers with verified employers worldwide. Browse remote, full-time, part-time, internship, and freelance roles, apply in minutes, and hire faster with AI-assisted matching.",

  applicationName: "NewJobex",

  keywords: [
    "NewJobex",
    "job portal",
    "job search",
    "find jobs",
    "career opportunities",
    "hiring platform",
    "recruitment software",
    "remote jobs",
    "internships",
    "full time jobs",
    "part time jobs",
    "freelance jobs",
    "software engineer jobs",
    "frontend developer jobs",
    "backend developer jobs",
    "react jobs",
    "next.js jobs",
    "tech jobs",
    "hire developers",
    "post a job",
  ],

  authors: [{ name: "TF Shoriful Islam", url: SITE_URL }],
  creator: "codegen",
  publisher: "codegen",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

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
    title: "NewJobex — Find your next role or hire top talent",
    description:
      "Browse thousands of verified job opportunities or post a role and reach qualified candidates fast. Remote, full-time, internships, and more.",
    url: SITE_URL,
    siteName: "NewJobex",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NewJobex — modern job portal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NewJobex — Find your next role or hire top talent",
    description:
      "A modern job portal for job seekers and recruiters. Search verified roles or post a job in minutes.",
    images: ["/og-image.png"],
    // site: "@newjobex",
    // creator: "@newjobex",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  category: "Jobs & Careers",

  // Uncomment and fill in once you've registered these with each provider.
  // verification: {
  //   google: "",
  //   yandex: "",
  // },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-gray-900 selection:bg-[#6633ff]/15 selection:text-[#6633ff]">
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