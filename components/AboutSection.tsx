import { Card, CardContent } from "@/components/ui/card";
import { aboutFeatures } from './data'
import Image from "next/image";

const AboutSection = () => {
  const features = aboutFeatures;

  return (
    <section id="about" className="flex justify-center items-center py-16 lg:py-24 px-10  lg:px-32 bg-background max-lg:flex-col">
      {/* Image */}
      <div className="animate-fade-in lg:mr-10 mb-10">
        <Image
          src="/tech-professional.jpg"
          alt="Professional logistics management"
          width={400}
          height={400}
          className="rounded-2xl shadow-xl w-screen h-auto 2xl:w-[80vw] 3xl:w-[50vw]"
        />
      </div>
      {/* Content */}
      <div className="animate-slide-up max-w-screen">
        {/* <div className="max-w-xl"> */}
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
          About Us
        </h2>
        <p className="text-lg text-muted-foreground mb-2 leading-relaxed">
          At KARGOAS, we believe every mile you drive should bring you closer to success. We know the hard work, long hours, and sacrifices that go into life on the road, and that’s why we’re here—to make sure your effort pays off.
        </p>
        <p className="text-lg text-muted-foreground mb-2 leading-relaxed">
          Our job is simple: to keep your wheels turning and your income growing. From finding the best loads to handling negotiations and paperwork, we stand beside you every step of the way. We don’t just dispatch—we partner with you, so you can focus on driving while we take care of the rest.
        </p>
        <p className="text-lg text-muted-foreground mb-2 leading-relaxed">
          With honesty, dedication, and respect for your time, we’re here to help you build the business and lifestyle you deserve.
        </p>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Turning Miles into Money.
        </p>

        {/* Feature grid */}
        <div className="grid lg:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-md transition-shadow">
              <CardContent className="p-3">
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