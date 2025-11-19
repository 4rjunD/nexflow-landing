import type { Metadata } from "next";
import "./globals.css";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { PreloadImages } from "@/components/ui/preload-images";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "NexFlow - Artificial Intelligence Layer for Preventive Healthcare",
  description: "Detect chronic disease risk before symptoms appear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="relative bg-black">
        <PreloadImages />
        <AnimatedGridPattern
          numSquares={50}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "fixed inset-0 h-full w-full",
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          )}
        />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
