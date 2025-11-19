"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export const AnimatedHero = ({
  subtitle,
  primaryCta,
  secondaryCta,
}: {
  subtitle: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
}) => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  
  const words = ["Preventive Healthcare", "Chronic Disease", "Early Detection", "Wellness Optimization"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="w-full relative">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      <div className="container mx-auto relative z-10">
        <div className="flex gap-8 py-12 lg:py-24 items-center justify-center flex-col">
          <div className="flex justify-center">
            <Button variant="secondary" size="sm" className="gap-4">
              Backed by Character Capital
            </Button>
          </div>
          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-regular leading-tight">
              Artificial Intelligence Layer for{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block text-green-400"
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-row gap-3 justify-center relative">
            <Button 
              size="lg" 
              className="gap-4" 
              variant="outline"
              onClick={() => window.open('https://cal.com/arjun-dixit-0nwkzi/30min', '_blank')}
            >
              {secondaryCta.text} <PhoneCall className="w-4 h-4" />
            </Button>
            <div className="relative">
              <Button 
                size="lg" 
                className="gap-4"
                onClick={() => setShowComingSoon(true)}
              >
                {primaryCta.text} <MoveRight className="w-4 h-4" />
              </Button>
              {showComingSoon && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-card border border-border px-6 py-3 rounded-lg shadow-lg text-sm whitespace-nowrap z-50">
                  <p className="font-medium">Coming Soon!</p>
                  <button 
                    onClick={() => setShowComingSoon(false)}
                    className="absolute -top-2 -right-2 bg-background border border-border rounded-full w-6 h-6 flex items-center justify-center hover:bg-accent"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
