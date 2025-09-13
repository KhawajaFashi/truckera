"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";


const ContactSection = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      // Optionally reset form or show success message here
    } catch (error) {
      // Optionally handle error here
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="flex justify-center items-center min-h-[60vh] px-2">
        <div className="w-full max-w-5xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <Card className="flex flex-col md:flex-row overflow-hidden shadow-2xl rounded-2xl border border-border/40 bg-gradient-to-br from-background/90 to-background/60">
            {/* Left: Form */}
            <div className="flex-1 p-8 sm:p-10 bg-background/80">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">
                  Contact Us
                </h3>
                <p className="text-muted-foreground text-base">We&apos;re open for any suggestion or just to have a chat.</p>
              </div>
              <form className="space-y-5" onSubmit={handleSubmit} autoComplete="off">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    id="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="text"
                    id="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Email"
                  required
                />
                <input
                  type="text"
                  id="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Phone (123-456-7890)"
                  required
                />
                <select
                  id="truckType"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                >
                  <option value="">Select Truck Type</option>
                  <option value="dry-van">Dry Van</option>
                  <option value="flat-bed">Flat Bed</option>
                  <option value="power">Power Only</option>
                  <option value="hotshot">Hotshot</option>
                  <option value="step-deck">Step Deck</option>
                  <option value="reefer">Reefer</option>
                </select>
                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground py-4 text-lg font-semibold rounded-xl shadow-lg hover:bg-primary/90 transition-colors"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-2">
                  By starting your trial, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </div>
            {/* Right: Image */}
            <div className="hidden md:block md:w-1/2 bg-muted relative">
              <img
                src="/public/tech-professional.jpg"
                alt="Contact illustration"
                className="object-cover w-full h-full min-h-[400px] grayscale-[0.1] brightness-90"
                style={{ borderTopRightRadius: '1rem', borderBottomRightRadius: '1rem' }}
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;