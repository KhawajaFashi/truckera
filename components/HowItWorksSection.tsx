import { Card, CardContent } from "@/components/ui/card";
import { steps } from './data';
import Image from 'next/image';
const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-background">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            How <span className="text-gradient">It Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes truck dispatching simple and efficient.
            Get started in minutes and see results immediately.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative hover:shadow-lg bg-black border-none transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Step number */}
                <div className="w-full h-[60vh] bg-primary/10 flex items-center justify-center">
                  <Image
                    src={step.src}
                    alt={step.title}
                    width={600}
                    height={600}
                    className="w-full h-full border-white shadow-md"
                  />
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-3xl font-bold text-white font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Connection lines for desktop */}

      </div>
    </section>
  );
};

export default HowItWorksSection;