"use client";

import { motion } from "framer-motion";
import {
    Stethoscope,
    ShoppingBag,
    UtensilsCrossed,
    Factory,
    GraduationCap,
    Dumbbell,
    Briefcase,
    Sprout,
    Pill,
    BookOpen,
    Hotel,
    Store,
    Wrench,
    Car,
    Leaf,
    Building,
    Cog,
    Warehouse,
    Truck,
    Plane,
    Building2,
    HeartPulse,
    Scissors,
    Hospital,
    Microscope,
    ShoppingCart,
    Cpu,
    Home,
    Landmark,
    Package,
    UsersRound,
    UserCheck,
    Activity,
    RadioTower,
    Network,
    Cable,
    Gauge,
    SatelliteDish,
    ShieldHalf,
    Zap,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { fadeInUp, staggerParent, viewportOnce } from "@/lib/motion";
import { useConnectionAnchor } from "@/components/motion/useConnectionAnchor";

const ITEMS = [
    {
        icon: GraduationCap,
        title: "Schools",
        body: "Digitize admissions, attendance, examinations, fees, communication, and school administration.",
    },
    {
        icon: BookOpen,
        title: "Colleges",
        body: "Manage academics, student information, faculty, examinations, placements, and campus operations.",
    },
    {
        icon: Dumbbell,
        title: "Gyms",
        body: "Memberships, attendance, subscriptions, trainers, scheduling, and customer retention.",
    },
    {
        icon: HeartPulse,
        title: "Wellness Centers",
        body: "Manage appointments, memberships, wellness programs, and client engagement.",
    },
     {
        icon: Hospital,
        title: "Hospitals",
        body: "Integrated patient management, appointments, billing, pharmacy, staff, and operational workflows.",
    },
    {
        icon: Stethoscope,
        title: "Clinics",
        body: "Streamline appointments, consultations, prescriptions, patient records, and daily clinic operations.",
    },
    {
        icon: Microscope,
        title: "Diagnostic Laboratories",
        body: "Manage samples, test reports, billing, patient records, and laboratory workflows efficiently.",
    },
    {
        icon: Pill,
        title: "Pharmacies",
        body: "Inventory management, billing, prescriptions, suppliers, and customer engagement in one system.",
    },
    {
        icon: ShoppingBag,
        title: "Retail Stores",
        body: "Centralize inventory, billing, suppliers, customers, analytics, and day-to-day retail operations.",
    },
    {
        icon: ShoppingCart,
        title: "E-commerce",
        body: "Optimize inventory, orders, fulfillment, customer engagement, and business analytics.",
    },
    {
        icon: Store,
        title: "Supermarkets",
        body: "Manage inventory, billing, suppliers, promotions, loyalty programs, and multi-branch operations.",
    },
    {
        icon: UtensilsCrossed,
        title: "Restaurants",
        body: "Digitize ordering, billing, kitchen workflows, inventory, reservations, and customer experiences.",
    },
    {
        icon: Hotel,
        title: "Hotels",
        body: "Simplify reservations, guest services, housekeeping, billing, and hospitality management.",
    },
    {
        icon: Scissors,
        title: "Salons & Spas",
        body: "Appointments, staff schedules, memberships, billing, inventory, and customer loyalty.",
    },
    {
        icon: Factory,
        title: "Manufacturing",
        body: "Optimize production planning, inventory, quality control, and operational efficiency.",
    },
    {
        icon: Cpu,
        title: "Industrial Automation",
        body: "Build intelligent software that integrates machinery, monitoring, IoT, and production workflows.",
    },
    {
        icon: Cog,
        title: "SMEs",
        body: "Digitize operations, automate workflows, and create scalable systems tailored for growing businesses.",
    },
    {
        icon: Warehouse,
        title: "Warehousing",
        body: "Improve inventory accuracy, stock movement, dispatch, and warehouse efficiency.",
    },
    {
        icon: Truck,
        title: "Logistics",
        body: "Track deliveries, fleets, inventory, routes, and logistics operations in real time.",
    },
    {
        icon: Package,
        title: "Distribution",
        body: "Manage distributors, dealers, inventory, orders, pricing, and sales performance.",
    },
    {
        icon: Building2,
        title: "Real Estate",
        body: "Manage properties, leads, clients, documentation, and sales pipelines efficiently.",
    },
    {
        icon: Briefcase,
        title: "Professional Services",
        body: "Digitize projects, clients, billing, collaboration, and service delivery.",
    },
    {
        icon: Wrench,
        title: "Service Businesses",
        body: "Manage field operations, work orders, scheduling, customer requests, and invoicing.",
    },
    {
        icon: Car,
        title: "Automobile Businesses",
        body: "Handle inventory, servicing, customer records, appointments, and dealership operations.",
    },
    {
        icon: Home,
        title: "Construction",
        body: "Track projects, contractors, materials, procurement, budgets, and timelines.",
    },
    {
        icon: Landmark,
        title: "Financial Services",
        body: "Automate client onboarding, document management, workflows, compliance, and reporting.",
    },
    {
        icon: Plane,
        title: "Travel Agencies",
        body: "Simplify bookings, itineraries, customer management, payments, and business operations.",
    },
    {
        icon: Leaf,
        title: "Agriculture",
        body: "Manage farm operations, inventory, production, equipment, and supply chains digitally.",
    },
    {
        icon: Building,
        title: "Corporate Enterprises",
        body: "Enterprise software, automation, analytics, AI, and integrated digital transformation solutions.",
    },
    // HR & Workforce
    {
        icon: UsersRound,
        title: "HR Management Systems",
        body: "Streamline recruitment, onboarding, attendance, payroll, leave management, employee records, and performance tracking.",
    },
    {
        icon: UserCheck,
        title: "Workforce Management",
        body: "Manage shifts, workforce planning, productivity, field staff, and employee operations from one platform.",
    },

    // IoT & Smart Systems
    {
        icon: Cpu,
        title: "IoT Solutions",
        body: "Connect devices, sensors, and equipment to intelligent cloud platforms for real-time monitoring and automation.",
    },
    {
        icon: Factory,
        title: "Industrial IoT (IIoT)",
        body: "Integrate production equipment, machines, and sensors for predictive maintenance, monitoring, and operational efficiency.",
    },
    {
        icon: Activity,
        title: "Remote Monitoring Systems",
        body: "Monitor machines, facilities, utilities, and critical assets remotely with real-time alerts and analytics.",
    },
    {
        icon: RadioTower,
        title: "Smart Device Platforms",
        body: "Develop intelligent software platforms that communicate with embedded devices, controllers, and connected hardware.",
    },
    {
        icon: Network,
        title: "Connected Systems",
        body: "Create secure ecosystems where machines, software, people, and business operations work seamlessly together.",
    },
    {
        icon: Cable,
        title: "Machine Integration",
        body: "Integrate industrial equipment, PLCs, controllers, and production systems into centralized software platforms.",
    },
    {
        icon: Gauge,
        title: "Predictive Maintenance",
        body: "Leverage AI and sensor data to detect anomalies, predict failures, and minimize equipment downtime.",
    },
    {
        icon: SatelliteDish,
        title: "Telemetry & Data Acquisition",
        body: "Collect, process, and visualize real-time operational data from distributed devices and industrial systems.",
    },
    {
        icon: ShieldHalf,
        title: "Smart Security Systems",
        body: "Build intelligent monitoring, access control, surveillance, and alert systems powered by automation and AI.",
    },
    {
        icon: Building2,
        title: "Smart Facility Management",
        body: "Digitally manage buildings, energy consumption, maintenance, occupancy, and facility operations.",
    },
    {
        icon: Zap,
        title: "Energy Monitoring Systems",
        body: "Track energy usage, identify inefficiencies, automate reporting, and optimize operational costs.",
    },
];


export function Industries() {
    const anchor = useConnectionAnchor<HTMLDivElement>({ kind: "spine", section: "industries" });
    return (
        <section id="industries" className="py-24 lg:py-32">
            <div ref={anchor} className="container-page">
                <SectionHeader
                    eyebrow="Industries"
                    title="Built for the Way You Work."
                    description="Every industry has its own rhythm. We design systems that respect it — and quietly improve it."
                />

                <motion.ul
                    variants={staggerParent}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {ITEMS.map(({ icon: Icon, title, body }) => (
                        <motion.li
                            key={title}
                            variants={fadeInUp}
                            className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                                <Icon className="h-5 w-5" />
                            </div>
                            <h3 className="mt-5 text-base font-semibold text-foreground">
                                {title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {body}
                            </p>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
}
