import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Spotlight from "@/components/Spotlight";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

// SMOKE TEST:
// 1. All section IDs present: #features, #how-it-works, #spotlight, #download
// 2. Brand color tokens imported from lib/constants.ts for JS logic, or CSS variables for styling.
// 3. No hardcoded hex values inside components (using Tailwind classes like text-ticlu-blue).
// 4. Framer Motion animations implemented with whileInView and whileHover.

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Spotlight />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
