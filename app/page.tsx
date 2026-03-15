import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Spotlight from "@/components/Spotlight";
import Testimonials from "@/components/Testimonials";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <Spotlight />
      <Testimonials />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
