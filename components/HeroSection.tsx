import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import HeroVideo from "./HeroVideo";

const HeroSection = () => {

  return (
    <section id="home" className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden h-screen bg-gradient-to-br from-background via-background to-primary-lighter">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-br from-background/75 via-background/80 to-primary-lighter/60"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="mx-auto px-6 lg:px-16 relative z-10 md:py-2 py-16 h-full w-screen flex items-center justify-center">
        <div className="">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-transparent bg-gradient-to-r from-primary via-accent to-white bg-clip-text mb-6 leading-tight drop-shadow-xl">
              Turning Miles Into Money
            </h1>
            <p className="text-lg sm:text-2xl text-muted-foreground mb-10 leading-relaxed xl:w-[65%] font-medium">
              We move loads, so you don&apos;t have to. Dispatching made simple for owner-operators
              and fleet managers with real-time tracking, load matching, and 24/7 support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact">
                <Button size="lg" className="gradient-primary text-white px-10 py-4 text-xl font-semibold rounded-full shadow-xl group hover:scale-105 transition-transform">
                  Get Started
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;