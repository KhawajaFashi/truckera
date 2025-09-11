"use client";

import { Button } from "@/components/ui/button";
import { Truck, Menu, X } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect mx-4 mt-4 lg:rounded-full rounded-3xl text-foreground' 
        : 'bg-foreground/95 backdrop-blur-sm border-b border-border  opacity-90'
      }`}
    >
      <div className="sm:px-6 transition-all duration-300">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Kargoas</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="hover:text-muted-foreground transition-colors">
              About
            </Link>
            <Link href="#how-it-works" className="hover:text-muted-foreground transition-colors">
              How It Works
            </Link>
            <Link href="#features" className="hover:text-muted-foreground transition-colors">
              Features
            </Link>
            <Link href="#contact" className="hover:text-muted-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-background" />
            ) : (
              <Menu className="w-6 h-6 text-background" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="#how-it-works" 
                className="text-muted-foreground hover:text-foreground transition-colors pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href="#features" 
                className="text-muted-foreground hover:text-foreground transition-colors pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#contact" 
                className="text-muted-foreground hover:text-foreground transition-colors pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="#about" 
                className="text-muted-foreground hover:text-foreground transition-colors pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-4 space-y-2 px-4">
                <Button className="w-full gradient-primary text-white">
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