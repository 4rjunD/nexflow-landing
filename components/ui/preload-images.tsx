"use client"

import Script from "next/script"

export function PreloadImages() {
  return (
    <Script
      id="preload-images"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const images = [
              "/ClinicDashFinal.png",
              "/FinalSS1.png",
              "/FinalSS2.png",
              "/AllPatients.png",
            ];
            images.forEach(function(src) {
              if (!document.querySelector('link[href="' + src + '"]')) {
                const link = document.createElement("link");
                link.rel = "preload";
                link.as = "image";
                link.href = src;
                link.fetchPriority = "high";
                document.head.appendChild(link);
              }
            });
          })();
        `,
      }}
    />
  )
}

