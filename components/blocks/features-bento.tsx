"use client"

import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { Activity, Brain, TrendingUp, Users, Shield, Zap } from "lucide-react";

const features: BentoItem[] = [
  {
    title: "Real-Time Monitoring",
    description: "Continuous tracking of vitals, sleep, and activity through wearable integration",
    icon: <Activity className="w-4 h-4 text-blue-500" />,
    status: "Live",
    tags: ["Consumer", "Mobile"],
    colSpan: 1,
  },
  {
    title: "Predictive AI Models",
    description: "Multi-disease prediction across metabolic, cardiovascular, neurocognitive, and hormonal health",
    icon: <Brain className="w-4 h-4 text-purple-500" />,
    status: "Active",
    tags: ["AI", "Clinical"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Risk Score",
    description: "AI-powered disease risk assessment to predict and prevent chronic conditions",
    icon: <TrendingUp className="w-4 h-4 text-green-500" />,
    status: "New",
    tags: ["Consumer", "Insights"],
    colSpan: 2,
  },
  {
    title: "Clinical Dashboard",
    description: "Population health analytics and patient risk stratification for providers",
    icon: <Users className="w-4 h-4 text-orange-500" />,
    status: "Pro",
    tags: ["Clinical", "Analytics"],
    colSpan: 1,
  },
  {
    title: "EHR Integration",
    description: "Seamless compatibility with existing healthcare systems and electronic health records",
    icon: <Shield className="w-4 h-4 text-cyan-500" />,
    status: "Enterprise",
    tags: ["Clinical", "Integration"],
    colSpan: 1,
  },
  {
    title: "Actionable Insights",
    description: "AI-generated recommendations and intervention strategies tailored to individual risk profiles",
    icon: <Zap className="w-4 h-4 text-yellow-500" />,
    status: "Active",
    tags: ["AI", "Personalized"],
    colSpan: 2,
  },
];

export function FeaturesBento() {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl mb-4">
            Platform Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive tools for consumers and clinicians to detect, monitor, and prevent chronic disease
          </p>
        </div>
        <BentoGrid items={features} />
      </div>
    </section>
  );
}
