"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Heart,
  Brain,
  Activity,
  TrendingUp,
  Shield,
} from "lucide-react";

const tasks = [
  {
    title: "Continuous health monitoring",
    subtitle: "Real-time vital signs tracking",
    icon: <Heart className="w-4 h-4" />,
  },
  {
    title: "AI disease predictions",
    subtitle: "Early risk detection before symptoms",
    icon: <Brain className="w-4 h-4" />,
  },
  {
    title: "Wellness insights",
    subtitle: "Personalized health recommendations",
    icon: <Activity className="w-4 h-4" />,
  },
  {
    title: "Health trend analysis",
    subtitle: "Track progress over time",
    icon: <TrendingUp className="w-4 h-4" />,
  },
  {
    title: "Preventive care alerts",
    subtitle: "Proactive health notifications",
    icon: <Shield className="w-4 h-4" />,
  },
];

export default function FeatureSection() {
  return (
    <section className="relative w-full py-20 px-4 bg-background text-foreground">
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* LEFT SIDE - Task Loop with Vertical Bar */}
        <div className="relative w-full max-w-sm">
          <Card className="overflow-hidden bg-muted/30 dark:bg-muted/20 backdrop-blur-md shadow-xl rounded-lg">
            <CardContent className="relative h-[320px] p-0 overflow-hidden">
              {/* Scrollable Container */}
              <div className="relative h-full overflow-hidden">
                {/* Motion list */}
                <motion.div
                  className="flex flex-col gap-2 absolute w-full"
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 14,
                    ease: "linear",
                  }}
                >
                  {[...tasks, ...tasks].map((task, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-700 relative"
                    >
                      {/* Icon + Content */}
                      <div className="flex items-center justify-between flex-1">
                        <div className="flex items-center gap-2">
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{task.title}</p>
                            <p className="text-xs text-gray-500">{task.subtitle}</p>
                          </div>
                        </div>
                        {task.icon}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Fade effect only inside card */}
                <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-background via-background/70 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT SIDE - Content */}
        <div className="space-y-6">
          <Badge variant="secondary" className="px-3 py-1 text-sm">
            Preventive Healthcare
          </Badge>
          <h3 className="text-lg sm:text-md lg:text-2xl font-normal text-gray-900 dark:text-white leading-relaxed">
            Detect disease risk early {" "}
            <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-base lg:text-2xl">we help you
              monitor your health continuously with AI-powered predictions. From
              vital signs tracking to chronic disease risk assessment, our
              platform provides personalized insights that enable proactive care
              and early intervention before symptoms appear.</span>
          </h3>

          <div className="flex gap-3">
            <Badge className="px-4 py-2 text-sm">AI Predictions</Badge>
            <Badge className="px-4 py-2 text-sm">Real-time Monitoring</Badge>
            <Badge className="px-4 py-2 text-sm">Wearable Integration</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
