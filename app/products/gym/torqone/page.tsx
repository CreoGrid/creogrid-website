import { ProductHeader } from '@/components/products/TorqOne/ProductHeader';
import { Navigation } from '@/components/products/TorqOne/Navigation';
import { BreadcrumbBar } from '@/components/products/TorqOne/BreadcrumbBar';
import { Hero } from '@/components/products/TorqOne/Hero';
import { TrustBar } from '@/components/products/TorqOne/TrustBar';
import { IndustryProblems } from '@/components/products/TorqOne/IndustryProblems';
import { PlatformOverview } from '@/components/products/TorqOne/PlatformOverview';
import { FeaturesShowcase } from '@/components/products/TorqOne/FeaturesShowcase';
import { AIGrowthCoach } from '@/components/products/TorqOne/AIGrowthCoach';
import { AutomationShowcase } from '@/components/products/TorqOne/AutomationShowcase';
import { Metrics } from '@/components/products/TorqOne/Metrics';
import { ROISection } from '@/components/products/TorqOne/ROISection';
import { ComparisonTable } from '@/components/products/TorqOne/ComparisonTable';
import { Testimonials } from '@/components/products/TorqOne/Testimonials';
import { PlansComparison } from '@/components/products/TorqOne/PlansComparison';
import { FAQ } from '@/components/products/TorqOne/FAQ';
import { CTA } from '@/components/products/TorqOne/CTA';
import { ProductClosing } from '@/components/products/TorqOne/ProductClosing';
// import { Footer } from '@/components/products/TorqOne/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-torqone-background">
      <ProductHeader />
      {/* <BreadcrumbBar/> */}
      <Hero />
      {/* <TrustBar /> */}
      <IndustryProblems />
      <PlatformOverview />
      {/* <FeaturesShowcase /> */}
      <AIGrowthCoach />
      <AutomationShowcase />
      {/* <Metrics />
      <ROISection /> */}
      <PlansComparison />
      <ComparisonTable />
      {/* <Testimonials /> */}
      <FAQ />
      <CTA />
      <ProductClosing />
    </div>
  );
}
