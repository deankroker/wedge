import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Unifies from "@/components/Unifies";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Manifesto />
      <Unifies />
      <HowItWorks />
      <Features />
      <GetStarted />
      <Footer />
    </main>
  );
}
