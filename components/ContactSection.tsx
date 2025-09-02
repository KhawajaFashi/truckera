import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Start Dispatching <span className="text-gradient">Smarter</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to streamline your operations? Get in touch with our dispatch experts 
            and discover how we can transform your trucking business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Our team of dispatch professionals is available 24/7 to support your operations. 
                Whether you need immediate assistance or want to learn more about our services, 
                we're here to help.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Call Us</h4>
                  <p className="text-muted-foreground text-sm mb-2">24/7 Support Line</p>
                  <p className="text-primary font-semibold">+1 (555) 123-4567</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Email Us</h4>
                  <p className="text-muted-foreground text-sm mb-2">Quick Response</p>
                  <p className="text-primary font-semibold">support@dispatchers.com</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Visit Us</h4>
                  <p className="text-muted-foreground text-sm mb-2">Main Office</p>
                  <p className="text-primary font-semibold">123 Logistics Ave, Miami, FL</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Hours</h4>
                  <p className="text-muted-foreground text-sm mb-2">Always Available</p>
                  <p className="text-primary font-semibold">24/7 Operations</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            
          </div>

          {/* CTA Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 shadow-xl">
              <CardContent className="px-8 py-2">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Start Your Free Trial
                  </h3>
                  <p className="text-muted-foreground">
                    Experience our platform risk-free for 14 days. No credit card required.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Business Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Your Trucking Company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="fleetSize" className="block text-sm font-medium text-foreground mb-2">
                      Fleet Size
                    </label>
                    <select
                      id="fleetSize"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Select fleet size</option>
                      <option value="1-5">1-5 trucks</option>
                      <option value="6-20">6-20 trucks</option>
                      <option value="21-50">21-50 trucks</option>
                      <option value="50+">50+ trucks</option>
                    </select>
                  </div>

                  <Button size="lg" className="w-full gradient-primary text-white py-4 text-lg font-semibold">
                    Start Free Trial
                  </Button>
                  
                  <p className="text-center text-sm text-muted-foreground">
                    By starting your trial, you agree to our Terms of Service and Privacy Policy
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;