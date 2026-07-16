import { Toaster } from "sonner";

import { SiteNav } from "@/components/site/SiteNav";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { BusinessChallenges } from "@/components/sections/BusinessChallenges";
import { Solutions } from "@/components/sections/Solutions";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { Technology } from "@/components/sections/Technology";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { ConnectionLine } from "@/components/motion/ConnectionLine";

export function HomePage() {
  return (
    <div className="relative min-h-dvh bg-background">
      <SiteNav />
      <ConnectionLine />
      <main className="relative z-10">
        <Hero />
        <BusinessChallenges />
        <Solutions />
        <Industries />
        <Process />
        <Technology />
        <BeforeAfter />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" richColors closeButton />
    </div>
  );
}
