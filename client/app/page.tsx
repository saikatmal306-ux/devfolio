import LandingNavbar from "@/components/landing/navbar";
import LandingHero from "@/components/landing/hero";
import PortfolioPreview from "@/components/landing/portfolio-preview";
import HowItWorks from "@/components/landing/how-it-works";
import CTASection from "@/components/landing/cta";
import LandingFooter from "@/components/landing/footer";

export default function HomePage() {
  return (
    <>
      <LandingNavbar />

      <main className="mx-auto max-w-7xl px-6">
        <LandingHero />
        <PortfolioPreview />
        <HowItWorks />
        <CTASection />
      </main>

      <LandingFooter />
    </>
  );
}