import { Card, CardContent } from "@/components/ui/card";
import { steps } from './data';
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative bg-background hover:shadow-lg transition-all duration-300 animate-slide-up border-none text-foreground"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                {/* Step number */}

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center mt-4">
                  <step.icon className="w-8 h-8 text-muted-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="">
                  {step.description}
                </p>
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