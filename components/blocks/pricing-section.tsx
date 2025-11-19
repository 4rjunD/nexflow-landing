"use client"

import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function PricingSection() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>Pricing</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Choose Your Plan
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              From personal health tracking to enterprise clinical solutions
            </p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
            {/* Consumer App */}
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Consumer App
                  </span>
                </CardTitle>
                <CardDescription>
                  Personal health monitoring with AI-powered risk prediction and actionable insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-2">
                      <span className="text-2xl font-semibold">Free</span>
                      <span className="text-sm text-muted-foreground">- Basic features</span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <span className="text-2xl font-semibold">$4.99</span>
                      <span className="text-sm text-muted-foreground">/ month - Plus</span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <span className="text-2xl font-semibold">$24.99</span>
                      <span className="text-sm text-muted-foreground">/ month - Premium</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Healthspan Projection</p>
                        <p className="text-muted-foreground text-sm">
                          Projected healthy years remaining
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Wearable Integration</p>
                        <p className="text-muted-foreground text-sm">
                          Connect Apple Watch, Oura, and more
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>AI Risk Predictions</p>
                        <p className="text-muted-foreground text-sm">
                          5 disease models included
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Button 
                      variant="outline" 
                      className="gap-4 w-full"
                      onClick={() => setShowComingSoon(true)}
                    >
                      Download App <MoveRight className="w-4 h-4" />
                    </Button>
                    {showComingSoon && (
                      <div className="absolute top-full mt-2 left-0 right-0 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm text-center">
                        Coming Soon!
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Tier */}
            <Card className="w-full shadow-2xl rounded-md border-primary">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Professional
                  </span>
                </CardTitle>
                <CardDescription>
                  For small to medium clinics looking to integrate preventive care
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">Custom</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Clinical Dashboard</p>
                        <p className="text-muted-foreground text-sm">
                          Patient risk stratification
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Population Analytics</p>
                        <p className="text-muted-foreground text-sm">
                          Cohort analysis and trends
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>EHR Integration</p>
                        <p className="text-muted-foreground text-sm">
                          Seamless data flow
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="gap-4"
                    onClick={() => window.open('https://cal.com/arjun-dixit-0nwkzi/30min', '_blank')}
                  >
                    Contact Sales <PhoneCall className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Tier */}
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Enterprise
                  </span>
                </CardTitle>
                <CardDescription>
                  For health systems and large organizations with custom needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">Custom</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Everything in Professional</p>
                        <p className="text-muted-foreground text-sm">
                          Plus advanced features
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Custom AI Models</p>
                        <p className="text-muted-foreground text-sm">
                          Tailored to your population
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Dedicated Support</p>
                        <p className="text-muted-foreground text-sm">
                          White-glove onboarding
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="gap-4"
                    onClick={() => window.open('https://cal.com/arjun-dixit-0nwkzi/30min', '_blank')}
                  >
                    Book a Meeting <PhoneCall className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export { PricingSection };
