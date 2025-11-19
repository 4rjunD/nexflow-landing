"use client"

import { MoveRight, Heart, Activity, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AppStoreButton } from "@/components/ui/app-store-button";
import DisplayCards from "@/components/ui/display-cards";
import { NexFlowHeader } from "@/components/blocks/nexflow-header";
import { NexFlowFooter } from "@/components/blocks/nexflow-footer";
import FeatureSection from "@/components/ui/feature-section";
import Image from "next/image";

function ConsumerHero() {
  return (
    <div className="w-full py-8 lg:py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Coming Soon!</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                Your Personal Health Intelligence
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Track your health metrics, predict disease risk before symptoms appear, and take control of your wellness journey with AI-powered insights.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <AppStoreButton variant="outline" />
              <Button size="lg" className="gap-4">
                Join the Waitlist <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="relative h-[700px] w-full">
            <div className="absolute top-0 right-[5%] w-[55%] h-full rounded-lg overflow-hidden shadow-xl bg-muted">
              <Image
                src="/FinalSS1.png"
                alt="NexFlow Consumer App Screenshot"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="absolute bottom-8 left-[5%] w-[55%] h-[90%] rounded-lg overflow-hidden shadow-2xl z-10 bg-muted">
              <Image
                src="/FinalSS2.png"
                alt="NexFlow App Feature Preview"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConsumerFeatures() {
  const featureCards = [
    {
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
      icon: <Heart className="size-4 text-red-300" />,
      title: "Health Tracking",
      description: "Monitor vitals in real-time",
      date: "Continuous",
      iconClassName: "text-red-500",
      titleClassName: "text-red-500",
    },
    {
      className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
      icon: <Brain className="size-4 text-purple-300" />,
      title: "AI Predictions",
      description: "Detect disease risk early",
      date: "Powered by AI",
      iconClassName: "text-purple-500",
      titleClassName: "text-purple-500",
    },
    {
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
      icon: <Activity className="size-4 text-green-300" />,
      title: "Wellness Insights",
      description: "Personalized recommendations",
      date: "Daily updates",
      iconClassName: "text-green-500",
      titleClassName: "text-green-500",
    },
  ];

  return (
    <div className="w-full py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-regular tracking-tighter mb-4">
              Your Health, Simplified
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of preventive healthcare with our AI-powered consumer app
            </p>
          </div>
          <DisplayCards cards={featureCards} />
        </div>
      </div>
    </div>
  );
}

export default function ConsumersPage() {
  return (
    <div className="min-h-screen">
      <NexFlowHeader showPageLinks={false} showBookDemo={false} showFeatureLinks={false} />
      <ConsumerHero />
      <ConsumerFeatures />
      <FeatureSection />
      <NexFlowFooter hidePricing={true} />
    </div>
  );
}
