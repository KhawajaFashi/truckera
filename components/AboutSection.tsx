import { Card, CardContent } from "@/components/ui/card";
import { aboutFeatures } from './data'

const AboutSection = () => {
  const features = aboutFeatures;

  return (
    <section id="about" className="flex justify-center items-center py-16 lg:py-24 px-10  lg:px-32 bg-background ">
      {/* Image */}
      <div className="animate-fade-in lg:mr-10 mb-10">
        <img
          src="/tech-professional.jpg"
          alt="Professional logistics management"
          className="rounded-2xl shadow-xl w-screen h-auto"
        />
      </div>
      {/* Content */}
      <div className="animate-slide-up max-w-screen">
        {/* <div className="max-w-xl"> */}
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
          About <span className="text-gradient">Dispatchers</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Dispatchers is a tech-driven dispatching solution designed specifically for freight
          and trucking companies. We combine cutting-edge technology with industry expertise
          to deliver transparent, efficient, and reliable dispatch services.
        </p>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Our platform emphasizes ease of use, complete transparency, and round-the-clock
          support to help drivers and fleet managers focus on what they do best – moving freight safely and efficiently.
        </p>

        {/* Feature grid */}
        <div className="grid lg:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-md transition-shadow">
              <CardContent className="px-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default AboutSection;