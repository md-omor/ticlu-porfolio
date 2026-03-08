import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
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
        className={`${openSans.variable} font-sans antialiased bg-white text-slate-900 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
