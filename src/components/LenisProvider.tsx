"use client";

import React, { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    // Synchronize Lenis smooth scroll updates with GSAP's ticker animation frame updates
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    
    // Recalculate ScrollTrigger start/end coordinates once Scroll is synced
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis 
      root 
      ref={lenisRef} 
      options={{ 
        autoRaf: false, // Turn off Lenis's internal RAF so it uses GSAP Ticker instead
        lerp: 0.1, 
        duration: 1.2, 
        smoothWheel: true 
      }}
    >
      {children}
    </ReactLenis>
  );
}
