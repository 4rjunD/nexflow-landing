"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface DiseaseModel {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const diseaseModels: DiseaseModel[] = [
  {
    id: "metabolic",
    title: "Metabolic Health",
    description: "AI-powered prediction of insulin resistance and diabetes risk through continuous glucose monitoring, activity patterns, and metabolic biomarkers.",
    icon: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="3"/>
        <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="2"/>
        <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="2"/>
        <path d="M 100 20 L 100 40 M 100 160 L 100 180 M 20 100 L 40 100 M 160 100 L 180 100" stroke="white" strokeWidth="3"/>
        <circle cx="100" cy="100" r="15" fill="white"/>
      </svg>
    ),
  },
  {
    id: "cardiovascular",
    title: "Cardiovascular Health",
    description: "Early detection of heart disease risk through HRV analysis, blood pressure trends, and cardiovascular strain indicators.",
    icon: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <path d="M 100 160 C 60 140, 40 100, 60 70 C 75 50, 100 60, 100 60 C 100 60, 125 50, 140 70 C 160 100, 140 140, 100 160 Z" fill="white"/>
        <path d="M 70 90 L 80 90 L 85 80 L 90 100 L 95 70 L 100 90 L 130 90" stroke="black" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    id: "neurocognitive",
    title: "Neurocognitive Health",
    description: "Predict early signs of cognitive decline and Parkinson's disease through sleep patterns, motor function, and cognitive assessments.",
    icon: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <ellipse cx="100" cy="90" rx="70" ry="80" fill="white"/>
        <path d="M 70 90 C 60 100, 50 120, 55 135" stroke="white" strokeWidth="3" fill="none"/>
        <path d="M 130 90 C 140 100, 150 120, 145 135" stroke="white" strokeWidth="3" fill="none"/>
        <path d="M 100 40 C 100 40, 90 50, 95 60" stroke="white" strokeWidth="3" fill="none"/>
        <circle cx="75" cy="75" r="8" fill="black"/>
        <circle cx="125" cy="75" r="8" fill="black"/>
        <path d="M 85 105 Q 100 115, 115 105" stroke="black" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    id: "hormonal",
    title: "Hormonal Balance",
    description: "Monitor thyroid function, cortisol rhythms, and reproductive health through biomarker tracking and symptom correlation.",
    icon: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <ellipse cx="100" cy="80" rx="30" ry="25" fill="white"/>
        <rect x="95" y="105" width="10" height="20" fill="white"/>
        <ellipse cx="85" cy="135" rx="20" ry="25" fill="white"/>
        <ellipse cx="115" cy="135" rx="20" ry="25" fill="white"/>
        <circle cx="100" cy="70" r="5" fill="black"/>
        <circle cx="100" cy="85" r="5" fill="black"/>
      </svg>
    ),
  },
  {
    id: "liver",
    title: "Liver Health",
    description: "Assess fatty liver disease and metabolic dysfunction through enzyme levels, lipid profiles, and lifestyle indicators.",
    icon: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <path d="M 60 80 C 60 60, 80 50, 100 50 C 120 50, 140 60, 140 80 L 140 120 C 140 140, 130 150, 115 155 L 115 165 C 115 170, 110 175, 100 175 C 90 175, 85 170, 85 165 L 85 155 C 70 150, 60 140, 60 120 Z" fill="white"/>
        <ellipse cx="90" cy="90" rx="15" ry="20" fill="black" opacity="0.2"/>
        <ellipse cx="110" cy="95" rx="12" ry="18" fill="black" opacity="0.2"/>
      </svg>
    ),
  },
];

const DiseaseModels = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mb-8 flex flex-col items-center justify-center md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4 items-center text-center max-w-3xl">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
              AI Disease Models
            </h2>
            <p className="text-muted-foreground">
              Specialized predictive models analyzing patterns across multiple data streams to detect disease risk before symptoms emerge.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {diseaseModels.map((model) => (
              <CarouselItem
                key={model.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <div className="group rounded-xl h-full">
                  <div className="relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-black via-zinc-900 to-black p-8 flex flex-col">
                    <div className="mb-8 flex items-center justify-center h-48">
                      <div className="w-32 h-32">
                        {model.icon}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="mb-4 text-2xl font-semibold text-white">
                        {model.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {model.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {diseaseModels.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-white" : "bg-white/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { DiseaseModels };
