import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oleg Grom - Frontend Developer Portfolio",
  description:
    "A portfolio showcasing the work and experience of Oleg Grom, a frontend developer specializing in building scalable, performant, and modern web interfaces with a strong focus on aesthetics and user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning // This is needed to prevent hydration mismatch warnings due to font loading
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
