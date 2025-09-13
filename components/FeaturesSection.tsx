import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { features, truckImages } from './data';

const FeaturesSection = () => {

  return (
    <section id="features" className="py-8 lg:py-16 bg-background">
      <div className="container mx-auto px-2 sm:px-4 lg:px-4">

        {/* Main Features Layout */}
        <div className="flex flex-col gap-8 items-center justify-center mb-16">
          {/* Left: Feature descriptions */}
          <div className="text-center mb-16 animate-fade-in w-[90%] lg:w-[40%]">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Our Specialization
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Everything you need to manage your trucking operations efficiently.
              From load matching to real-time tracking, we&apos;ve got you covered.
            </p>
          </div>


          {/* Right: Truck images grid */}

          <div className="grid grid-col-1 lg:grid-cols-2 gap-6">
            {truckImages.map((truck, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg lg:w-[40vw] w-[90vw] h-48 flex items-center justify-start text-white cursor-pointer group"
                style={{
                  animationDelay: `${(index + 4) * 0.5}s`,
                  backgroundImage: `url(${truck.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Black gradient (default) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>

                {/* Red gradient (hover) */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-600/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10 p-4 text-center">
                  <h4 className="font-bold text-2xl">{truck.alt}</h4>
                </div>
              </div>


            ))}
          </div>
        </div>

        {/* Additional Features Grid */}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.slice(4).map((feature, index) => (
            <Card
              key={index + 4}
              className="hover:shadow-lg transition-all duration-300 group animate-slide-up bg-background border-none"
              style={{ animationDelay: `${(index + 8) * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}

      </div>
    </section>
  );
};

export default FeaturesSection;