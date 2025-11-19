import { AnimatedHero } from "@/components/ui/animated-hero";
import { FeaturesBento } from "@/components/blocks/features-bento";
import { PricingSection } from "@/components/blocks/pricing-section";
import { NexFlowHeader } from "@/components/blocks/nexflow-header";
import { NexFlowFooter } from "@/components/blocks/nexflow-footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NexFlowHeader />
      
      <AnimatedHero
        title="Artificial Intelligence Layer for Preventive Healthcare"
        subtitle="Detect chronic disease risk before symptoms appear. Continuous health monitoring powered by predictive AI models."
        primaryCta={{
          text: "Download App",
          href: "#"
        }}
        secondaryCta={{
          text: "Book Demo",
          href: "https://cal.com/arjun-dixit-0nwkzi/30min"
        }}
      />
      
      <div id="features">
        <FeaturesBento />
      </div>
      
      <div id="pricing">
        <PricingSection />
      </div>

      <NexFlowFooter />
    </div>
  );
}
