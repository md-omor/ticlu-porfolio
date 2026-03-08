import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ticlu — Connecting Creativity",
  description: "A short-form video social media app that connects creativity through passion-based feeds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${rubik.variable} font-rubik antialiased bg-ticlu-dark text-slate-200 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
