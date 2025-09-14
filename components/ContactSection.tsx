"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";


const ContactSection = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    truckType: "",
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
          <Card className="flex flex-col md:flex-row justify-center overflow-hidden shadow-2xl rounded-2xl border border-border/40 bg-gradient-to-br from-background/90 to-background/60">
            {/* Left: Form */}
            <div className="flex-1 p-8 sm:p-10 bg-background/80">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground text-base">Hurry Up! Get Started Today!!</p>
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
                  <option value="default">Select Truck Type</option>
                  <option value="dry-van">Dry Van</option>
                  <option value="flat-bed">Flat Bed</option>
                  <option value="power">Power Only</option>
                  <option value="hotshot">Hotshot</option>
                  <option value="step-deck">Step Deck</option>
                  <option value="reefer">Reefer</option>
                </select>
                <Button
                  size="lg"
                  className="w-full cursor-pointer bg-primary text-primary-foreground py-4 text-lg font-semibold rounded-xl shadow-lg hover:bg-primary/90 transition-colors"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-2">
                  By starting your trial, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </div>
            {/* Right: Image */}
            <div className="hidden md:block md:w-1/2 relative overflow-hidden pt-4">
              {/* Background image with filters */}
              <div
                className="absolute inset-0 bg-cover bg-center grayscale-[0.8] brightness-10"
                style={{ backgroundImage: `url(/contact.jpg)` }}
              ></div>

              {/* Foreground content (unaffected by filters) */}
              <p className="relative z-10 text-foreground flex items-center justify-center pt-4 text-center px-6 text-xl font-bold">
                Get Your Power Only, Dry Van, Reefer & Flatbed Truck Dispatched In Minutes!
              </p>
              <div className="flex flex-col items-center gap-6 p-6 z-10 relative">
                {/* First Box */}
                <div className="w-[350px] rounded-2xl glass-effect shadow-lg text-center">
                  <h3 className="text-sm font-bold text-foreground border-b-1 border-black w-full p-2">DRY VAN, REEFER, FLATBED</h3>

                  {/* Hybrid Model */}
                  <div className="border-b-1 border-black">
                    <span className="px-4 py-1.5 rounded-b-full bg-black text-white text-xs font-semibold">
                      HYBRID MODEL
                    </span>
                    <div className="flex items-center justify-center gap-2 p-4">
                      <span className="text-md font-bold text-foreground"><span className="text-primary">6%</span> of Total WEEKLY REVENUE</span>
                    </div>
                  </div>

                  {/* Fixed Model */}
                  <div className="flex flex-col justify-center items-center">
                    <span className="px-4 py-1.5 rounded-b-full bg-black text-white text-xs font-semibold">
                      Fixed MODEL
                    </span>
                    <div className="p-2">
                      <span className="text-md font-bold text-primary">350$</span>
                      <span className="text-md font-bold text-foreground"> per week</span>
                    </div>
                  </div>
                </div>

                {/* Second Box */}
                <div className="w-[350px] rounded-2xl glass-effect shadow-lg text-center">
                  <h3 className="text-sm font-bold text-foreground border-b-1 border-black w-full p-2">Power Only</h3>

                  {/* Hybrid Model */}
                  <div className="border-b-1 border-black">
                    <span className="px-4 py-1.5 rounded-b-full bg-black text-white text-xs font-semibold">
                      HYBRID MODEL
                    </span>
                    <div className="flex items-center justify-center gap-2 p-4">
                      <span className="text-md font-bold text-foreground"><span className="text-primary">7%</span> of Total WEEKLY REVENUE</span>
                    </div>
                  </div>

                  {/* Fixed Model */}
                  <div className="flex flex-col justify-center items-center">
                    <span className="px-4 py-1.5 rounded-b-full bg-black text-white text-xs font-semibold">
                      Fixed MODEL
                    </span>
                    <div className="p-2">
                      <span className="text-md font-bold text-primary">400$</span>
                      <span className="text-md font-bold text-foreground"> per week</span>
                    </div>
                  </div>
                </div>
              </div>



              {/* <img
                src="/contact.jpg"
                alt="Contact illustration"
                className="relative z-10 object-cover w-full h-full min-h-[400px]"
                style={{ borderTopRightRadius: '1rem', borderBottomRightRadius: '1rem' }}
              /> */}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;