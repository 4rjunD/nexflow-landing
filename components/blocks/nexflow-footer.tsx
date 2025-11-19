"use client"
import React, { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface NexFlowFooterProps {
  hidePricing?: boolean;
}

const NexFlowFooter = ({ hidePricing = false }: NexFlowFooterProps = {}) => {
  const waveRefs = useRef<(HTMLDivElement | null)[]>([]);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const allLeftLinks = [
    { href: "#features", label: "Features", isExternal: false },
    { href: "#pricing", label: "Pricing", isExternal: false },
    { href: "mailto:arjundixit@nexflowinc.com", label: "Contact", isExternal: true },
  ];

  const leftLinks = hidePricing 
    ? allLeftLinks.filter(link => link.label !== "Pricing")
    : allLeftLinks;

  const rightLinks = [
    { label: "Privacy Policy", onClick: () => setPrivacyOpen(true) },
    { label: "Terms of Service", onClick: () => setTermsOpen(true) },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const currentRef = footerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    let t = 0;

    const animateWave = () => {
      const waveElements = waveRefs.current;
      let offset = 0;

      waveElements.forEach((element, index) => {
        if (element) {
          offset += Math.max(0, 20 * Math.sin((t + index) * 0.3));
          element.style.transform = `translateY(${index + offset}px)`;
        }
      });

      t += 0.1;
      animationFrameRef.current = requestAnimationFrame(animateWave);
    };

    if (isVisible) {
      animateWave();
    } else if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isVisible]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white relative flex flex-col w-full h-full justify-between lg:h-screen select-none"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between w-full gap-4 pb-24 pt-8 px-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-regular tracking-tighter mb-4">NexFlow Inc</h3>
          <ul className="flex flex-wrap gap-4">
            {leftLinks.map((link, index) => (
              <li key={index}>
                {link.isExternal ? (
                  <a 
                    href={link.href} 
                    className="text-sm hover:text-sky-400"
                    {...(link.href.startsWith('mailto:') ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {link.label}
                  </a>
                ) : (
                  <a 
                    href={link.href} 
                    className="text-sm hover:text-sky-400"
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <p className="text-sm mt-4">
            © 2025 NexFlow. All rights reserved.
          </p>
        </div>
        <div className="space-y-4">
          <ul className="flex flex-wrap gap-4">
            {rightLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={link.onClick}
                  className="text-sm hover:text-sky-400 underline"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="text-right mt-4">
            <button 
              className="text-sm hover:underline inline-flex items-center"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
      <div
        id="waveContainer"
        aria-hidden="true"
        style={{ overflow: "hidden", height: 200 }}
      >
        <div style={{ marginTop: 0 }}>
          {Array.from({ length: 23 }).map((_, index) => (
            <div
              key={index}
              ref={(el) => { waveRefs.current[index] = el; }}
              className="wave-segment"
              style={{
                height: `${index + 1}px`,
                backgroundColor: "rgb(255, 255, 255)",
                transition: "transform 0.1s ease",
                willChange: "transform",
                marginTop: "-2px",
              }}
            />
          ))}
        </div>
      </div>

      {/* Privacy Policy Dialog */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Privacy Policy</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-sm">
            <p className="text-muted-foreground">Last updated: November 12, 2025</p>

            <section>
              <h3 className="text-lg font-semibold mb-2">1. Introduction</h3>
              <p className="leading-relaxed">
                NexFlow (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and clinical platform. We comply with HIPAA, GDPR, and other applicable data protection regulations.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">2. Information We Collect</h3>
              <p className="leading-relaxed mb-3">We collect health-related data, personal information, and technical information to provide our AI-powered health monitoring services.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">3. How We Use Your Information</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Providing AI-powered health predictions and personalized insights</li>
                <li>Generating your Risk Score and disease risk assessments</li>
                <li>Enabling healthcare providers to monitor patient health trends</li>
                <li>Improving our AI models and algorithms</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">4. Data Security</h3>
              <p className="leading-relaxed">
                We implement industry-standard security measures including end-to-end encryption, HIPAA-compliant cloud infrastructure, and regular security audits.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">5. Your Rights</h3>
              <p className="leading-relaxed">
                You have the right to access, correct, delete, and port your data. You can also opt-out of marketing communications and revoke consent at any time.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">6. Contact Us</h3>
              <p className="leading-relaxed">
                For questions about this Privacy Policy, contact us at <a href="mailto:privacy@nexflow.com" className="text-primary hover:underline">privacy@nexflow.com</a>
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>

      {/* Terms of Service Dialog */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Terms of Service</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-sm">
            <p className="text-muted-foreground">Last updated: November 12, 2025</p>

            <section>
              <h3 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h3>
              <p className="leading-relaxed">
                By accessing or using NexFlow&apos;s services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">2. Description of Service</h3>
              <p className="leading-relaxed">
                NexFlow provides AI-powered health monitoring and predictive analytics services designed to detect early signs of chronic disease.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">3. Medical Disclaimer</h3>
              <p className="leading-relaxed">
                NexFlow is not a medical device and does not provide medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for medical decisions.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">4. User Responsibilities</h3>
              <p className="leading-relaxed">
                You are responsible for maintaining the confidentiality of your account, providing accurate information, and using the service in compliance with applicable laws.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">5. Limitation of Liability</h3>
              <p className="leading-relaxed">
                NexFlow shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">6. Contact Us</h3>
              <p className="leading-relaxed">
                For questions about these Terms, contact us at <a href="mailto:legal@nexflow.com" className="text-primary hover:underline">legal@nexflow.com</a>
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export { NexFlowFooter };
