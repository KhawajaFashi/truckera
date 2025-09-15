import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-16 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-14 h-14">
                <Image src="/logo.png" alt="Kargoas Logo" width={500} height={500} className="w-full h-full" />
              </div>
              <span className="text-xl font-bold">Kargoas</span>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              Reliable truck dispatching services that simplify logistics operations
              for drivers and fleet managers nationwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-foreground/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-foreground/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-foreground/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#" className="hover:text-foreground transition-colors">Load Matching</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Real-Time Tracking</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Driver Management</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Automated Billing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">24/7 Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#about" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-4 text-foreground/70">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>(555) 123-DISPATCH</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>contact@dispatchers.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">1001 S. Main St. STE 500 <br /> Kalispell, MT 5990</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-foreground/70 text-sm">
              © 2025 Kargoas. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-foreground/70">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;