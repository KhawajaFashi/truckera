import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden h-screen ">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          {/* Fallback gradient background */}
        </video>
        <div className="absolute inset-0"></div>
        <div className="absolute inset-0 gradient-hero opacity-15"></div>
      </div>

      <div className="mx-auto px-6 lg:px-16 relative z-10 md:py-2 py-16 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Reliable Truck Dispatching,{" "}
              <span className="text-gradient">Simplified</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              We move loads, so you don't have to. Dispatching made simple for owner-operators 
              and fleet managers with real-time tracking, load matching, and 24/7 support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary text-white px-8 py-3 text-lg group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg group border-white hover:bg-white hover:text-secondary">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Image - Hidden on mobile for video focus */}
          {/* <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 w-[70%]"></div>
              <div className="relative p-8 rounded-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="/hero-vid.mp4"
                  className="w-[70%] h-[50%] object-cover rounded-3xl opacity-90"
                />
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;