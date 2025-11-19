"use client"

import { MoveRight, Users, TrendingUp, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NexFlowHeader } from "@/components/blocks/nexflow-header";
import { NexFlowFooter } from "@/components/blocks/nexflow-footer";
import { FeatureSection } from "@/components/ui/feature-section-1";
import { Features } from "@/components/blocks/features-5";
import Image from "next/image";

function ClinicHero() {
  return (
    <div className="overflow-hidden bg-background">
      {/* Background decorative elements */}
      <div
        aria-hidden
        className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
        <div className="w-[35rem] h-[80rem] -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-[80rem] -translate-y-87.5 absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>

      <section className="overflow-hidden bg-background">
        <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h1 className="text-balance text-4xl font-regular tracking-tighter md:text-5xl lg:text-6xl">
              Your patients only visit when they&apos;re already sick
            </h1>
            <p className="mx-auto my-8 max-w-2xl text-xl leading-relaxed tracking-tight text-muted-foreground">
              By the time symptoms appear, chronic diseases have often progressed. You&apos;re left treating conditions that could have been prevented with earlier intervention.
            </p>

            <div className="flex flex-row gap-4 justify-center">
              <Button size="lg" className="gap-4" onClick={() => window.open('https://cal.com/arjun-dixit-0nwkzi/30min', '_blank')}>
                Book Demo <MoveRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto -mt-16 max-w-7xl [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
          <div className="[perspective:1200px] [mask-image:linear-gradient(to_right,black_50%,transparent_100%)] -mr-16 pl-12 lg:-mr-56 lg:pl-40">
            <div className="[transform:rotateX(20deg);]">
              <div className="lg:h-[44rem] relative skew-x-[.36rad]">
                <Image
                  className="rounded-lg z-[2] relative border"
                  src="/ClinicDashFinal.png"
                  alt="NexFlow Clinical Dashboard"
                  width={2880}
                  height={2074}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ClinicFeatures() {
  const features = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "Reduce Management Overhead",
      description: "Automated monitoring means less time on routine check-ins. Focus on patients who need immediate attention.",
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Increase Patient Revenue",
      description: "Proactive care improves outcomes and retention, creating opportunities for additional services.",
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Meet Patients When Needed",
      description: "AI-powered alerts ensure appointments are scheduled based on actual health needs.",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Premium Wellness Offering",
      description: "Offer concierge-level preventive care that differentiates your practice and attracts high-value patients.",
    },
  ];

  return (
    <div id="features">
      <FeatureSection
        mainIcon={<Users className="h-7 w-7" />}
        title="Transform Your Clinical Practice"
        subtitle="Reduce workload, increase revenue, and deliver better patient care."
        features={features}
        callToAction={{
          title: "",
          description: "",
          appleUrl: "#",
          googleUrl: "#",
        }}
      />
      <div className="container mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-2xl border bg-card p-8 text-center">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Ready to transform your practice?</h2>
          <p className="mt-2 text-muted-foreground">See how NexFlow can help your clinic deliver better care while growing revenue.</p>
          <div className="mt-6 flex justify-center">
            <Button size="lg" className="gap-4" onClick={() => window.open('https://cal.com/arjun-dixit-0nwkzi/30min', '_blank')}>
              Book Demo <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ClinicsPage() {
  return (
    <div className="min-h-screen">
      <NexFlowHeader showPageLinks={false} showBookDemo={true} showFeatureLinks={true} showDownloadApp={false} excludeLinks={['Pricing']} />
      <ClinicHero />
      <ClinicFeatures />
      <Features />
      <NexFlowFooter hidePricing={true} />
    </div>
  );
}

