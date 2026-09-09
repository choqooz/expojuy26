import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface RevealProps { children: ReactNode; className?: string; }

export function Reveal({ children, className = "" }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isObserved, setIsObserved] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const element = elementRef.current;
    if (!element) return;
    setIsObserved(true); setIsVisible(false);
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } }, { threshold: 0.12 });
    observer.observe(element); return () => observer.disconnect();
  }, []);
  return <div ref={elementRef} className={`reveal${isObserved ? " is-observed" : ""}${isVisible ? " is-visible" : ""} ${className}`}>{children}</div>;
}
