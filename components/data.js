import {
    Search,
    MapPin,
    FileText,
    Headphones,
    BarChart3,
    UserCheck,
    CreditCard,
    Shield,
    Clock,
    Users,
    TrendingUp
} from "lucide-react";

export const aboutFeatures = [
    {
        icon: Shield,
        title: "Trusted Platform",
        description: "Built with security and reliability at its core"
    },
    {
        icon: Clock,
        title: "Real-Time Updates",
        description: "Live tracking and instant notifications"
    },
    {
        icon: Users,
        title: "Expert Support",
        description: "Dedicated team available 24/7"
    },
    {
        icon: TrendingUp,
        title: "Growth Focused",
        description: "Tools to scale your operations efficiently"
    }
];

export const features = [
    {
        icon: Search,
        title: "Load Matching",
        description: "Intelligent load matching system that finds the best freight opportunities for your fleet based on location, capacity, and preferences.",
        badge: "Smart AI",
        popular: true
    },
    {
        icon: MapPin,
        title: "Real-Time Tracking",
        description: "Live GPS tracking with automated status updates, route optimization, and delivery confirmations for complete visibility.",
        badge: "Live GPS"
    },
    {
        icon: Users,
        title: "Driver Management",
        description: "Comprehensive driver profiles, performance tracking, document management, and communication tools all in one place.",
        badge: "Complete"
    },
    {
        icon: FileText,
        title: "Automated Invoicing",
        description: "Streamlined billing process with automatic invoice generation, payment tracking, and integration with accounting systems.",
        badge: "Automated"
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        description: "Round-the-clock expert support from experienced dispatchers and technical specialists whenever you need assistance.",
        badge: "Always On"
    },
    {
        icon: BarChart3,
        title: "Analytics & Reports",
        description: "Detailed performance analytics, profit tracking, and customizable reports to help optimize your operations.",
        badge: "Insights"
    },
    {
        icon: Clock,
        title: "Schedule Management",
        description: "Advanced scheduling tools for managing driver hours, load deadlines, and maintenance schedules efficiently.",
        badge: "Efficient"
    },
    {
        icon: Shield,
        title: "Compliance Tools",
        description: "Stay compliant with DOT regulations, ELD requirements, and safety standards with automated compliance monitoring.",
        badge: "Secure"
    }
];

export const truckImages = [
    { src: "/truck-hotshot.jpg", alt: "Cargo Truck" },
    { src: "/truck-dry-van.jpg", alt: "Delivery Truck" },
    { src: "/truck-flat-bed.jpg", alt: "Semi Truck" },
    { src: "/truck-power.jpg", alt: "Lorry Truck" },
    { src: "/truck-step-deck.jpg", alt: "Flatbed Truck" },
    { src: "/truck-reefer.jpg", alt: "Box Truck" }
];

export const steps = [
    {
        icon: Search,
        src: "/img.jpg",
        title: "Get Matched with Loads",
        description: "Our intelligent system matches you with the best available loads based on your preferences and location.",
        number: "01"
    },
    {
        icon: UserCheck,
        src: "/img.jpg",
        title: "Assign Drivers",
        description: "Easily assign qualified drivers to loads with our streamlined driver management system.",
        number: "02"
    },
    {
        icon: MapPin,
        src: "/img.jpg",
        title: "Real-Time Tracking",
        description: "Monitor your fleet in real-time with live GPS tracking and automated status updates.",
        number: "03"
    },
    {
        icon: CreditCard,
        src: "/img.jpg",
        title: "Automated Billing",
        description: "Handle invoicing and payments automatically with our integrated billing system.",
        number: "04"
    }
];
