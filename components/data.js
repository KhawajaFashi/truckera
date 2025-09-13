import {
    Search,
    FileInput,
    FileText,
    Headphones,
    Truck, 
    BarChart3,
    Signature,
    MapPin,
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
    { src: "/1.jpg", alt: "Cargo Truck" },
    { src: "/2.jpg", alt: "Delivery Truck" },
    { src: "/3.jpg", alt: "Semi Truck" },
    { src: "/4.jpg", alt: "Lorry Truck" },
    { src: "/5.jpg", alt: "Flatbed Truck" },
    { src: "/6.jpg", alt: "Box Truck" }
];

export const steps = [
    {
        icon: Signature,
        src: "/img.jpg",
        title: "Sign Agreement",
        description: "Signed our open Dispatch Service Agreement, which allows you to leave at any time, all we ask for is two weeks notice.",
        number: "01"
    },
    {
        icon: FileInput,
        src: "/img.jpg",
        title: "Send us your documents",
        description: "We require a copy of your driver's packet, which includes a copy of your insurance, driver's license, MC Authority letter, W-9 Form.",
        number: "02"
    },
    {
        icon: Truck,
        src: "/img.jpg",
        title: "Start Hauling Loads",
        description: "Once we have all the paperwork, you'll be introduced to your personal dispatcher and start work immediately.",
        number: "03"
    },
];
