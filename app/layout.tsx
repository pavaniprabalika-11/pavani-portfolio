import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pavani Prabalika | AI & Full Stack Developer",
  description:
    "Portfolio of Pavani Prabalika showcasing AI, Machine Learning, Computer Vision, Data Analytics and Full Stack Development projects.",
  keywords: [
    "Pavani Prabalika",
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "Full Stack Developer",
    "Python Developer",
    "YOLOv8",
    "Data Analytics",
    "Next.js Portfolio",
  ],
  authors: [
    {
      name: "Pavani Prabalika",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        {children}

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}