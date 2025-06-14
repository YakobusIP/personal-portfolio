import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Yakobus Iryanto Prasethio",
  description:
    "Yakobus Iryanto Prasethio's personal portfolio website. I am a web developer with a passion for building beautiful and functional websites and web applications. I have experience with a variety of programming languages and technologies, including HTML, CSS, and JavaScript.",
  keywords: [
    "Yakobus Iryanto Prasethio",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Bandung Developer",
    "Indonesian Developer",
    "Personal Portfolio",
    "Web Development",
    "Cloud Computing",
    "Google Bangkit",
    "TypeScript",
    "Python",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Google Cloud"
  ],
  authors: [{ name: "Yakobus Iryanto Prasethio" }],
  creator: "Yakobus Iryanto Prasethio",
  publisher: "Yakobus Iryanto Prasethio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL("https://yakobusiryantoprasethio.com"),
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
