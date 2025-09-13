"use client";

import { Button } from "@/components/ui/button";
import { Truck, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'glass-effect mx-4 mt-4 rounded-full border border-border/60 shadow-2xl'
          : 'border-b border-border/70 backdrop-blur-md shadow-lg'
        }`}
    >
      <div className="sm:px-6 transition-all duration-300">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-2 group">
            <div className="w-14 h-14">
              <Image src="/logo.png" alt="Kargoas Logo" width={500} height={500} className="w-full h-full"/>
            </div>
            <span className="text-xl font-bold text-foreground">Kargoas</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 text-foreground">
            <Link href="#about" className="hover:text-primary transition-colors font-medium px-2 py-1 rounded-lg hover:bg-primary/10">
              About
            </Link>
            <Link href="#how-it-works" className="hover:text-primary transition-colors font-medium px-2 py-1 rounded-lg hover:bg-primary/10">
              How It Works
            </Link>
            <Link href="#features" className="hover:text-primary transition-colors font-medium px-2 py-1 rounded-lg hover:bg-primary/10">
              Features
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors font-medium px-2 py-1 rounded-lg hover:bg-primary/10">
              Contact
            </Link>
          </nav>
          <button
            className="md:hidden p-2 rounded-lg bg-background/70 border border-border/40 shadow hover:bg-background/90"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/60 animate-fade-in bg-background/95 rounded-b-2xl shadow-xl">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#how-it-works"
                className="text-muted-foreground hover:text-primary transition-colors pl-4 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#features"
                className="text-muted-foreground hover:text-primary transition-colors pl-4 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors pl-4 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors pl-4 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-4 space-y-2 px-4">
                <Button className="w-full gradient-primary text-white shadow-lg">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;