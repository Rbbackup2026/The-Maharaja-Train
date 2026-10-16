"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ className, children }: { className: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "armed" | "in">("idle");

  useEffect(() => {
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setState("armed");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("in");
          observer.disconnect();
          timer = window.setTimeout(() => setState("idle"), 1400);
        }
      },
      { threshold: 0.15 },
    );
    let timer: number | undefined;
    observer.observe(node);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  const stateClass = state === "armed" ? " reveal" : state === "in" ? " reveal is-in" : "";
  return (
    <div ref={ref} className={className + stateClass}>
      {children}
    </div>
  );
}
