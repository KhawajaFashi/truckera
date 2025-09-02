import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { features, truckImages } from './data';

const FeaturesSection = () => {
  
  return (
    <section id="features" className="py-8 lg:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your trucking operations efficiently. 
            From load matching to real-time tracking, we've got you covered.
          </p>
        </div>

        {/* Main Features Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-12">
          {/* Left: Feature descriptions */}
          <div className="space-y-5">
            {features.slice(0, 4).map((feature, index) => (
              <Card 
                key={index} 
                className={`relative border-border hover:shadow-lg py-1 transition-all duration-300 animate-slide-up ${
                  feature.popular ? 'ring-2 ring-primary/20' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {feature.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-5">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
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

          {/* Right: Truck images grid */}
          <div className="grid grid-cols-2 gap-8">
            {truckImages.map((truck, index) => (
              <div
                key={index}
                className="truck-hover rounded-xl overflow-hidden bg-white shadow-lg"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <img
                  src={truck.src}
                  alt={truck.alt}
                  className="w-full h-52 object-contain"
                />
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-foreground">{truck.alt}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.slice(4).map((feature, index) => (
            <Card 
              key={index + 4} 
              className="bg-card border-border hover:shadow-lg transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${(index + 8) * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
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