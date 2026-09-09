import { useEffect, useRef, useState } from "react";

import { publicAsset } from "../data";

const VISUAL_VARIANTS = {
  heroMap: "hero-map",
  itinerary: "itinerary",
  wayfinding: "wayfinding",
  energyCorridor: "energy-corridor",
} as const;

const SPONSOR_MONOGRAMS = {
  PUNA_ENERGY: "puna-energy",
  VALLEYS_PRODUCTION: "valleys-production",
  QUEBRADA_TECHNOLOGY: "quebrada-technology",
  JAMA_CONNECTION: "jama-connection",
} as const;

type SponsorMonogramVariant = (typeof SPONSOR_MONOGRAMS)[keyof typeof SPONSOR_MONOGRAMS];

type VisualVariant = (typeof VISUAL_VARIANTS)[keyof typeof VISUAL_VARIANTS];

interface EditorialVisualProps {
  variant: VisualVariant;
  compact?: boolean;
}

export function EditorialVisual({ variant, compact = false }: EditorialVisualProps) {
  const className = `editorial-visual visual-${variant}${compact ? " is-compact" : ""}`;

  if (variant === VISUAL_VARIANTS.itinerary) {
    return <div className={className} aria-hidden="true"><svg viewBox="0 0 320 160" role="presentation"><path className="itinerary-outline" d="M145 8l46 20 21 41-17 31 29 31-32 21 2 32-49 17-38-29-35-7 8-38-24-34 30-21 3-42 37-12z" /><path className="itinerary-route" d="M142 31c-24 26 18 44-8 65s31 28 5 55" /><path className="itinerary-route second" d="M78 127c32-17 67-5 102-33s34-51 50-65" /><circle cx="142" cy="31" r="7" /><circle cx="134" cy="96" r="9" /><circle cx="180" cy="94" r="7" /></svg></div>;
  }

  if (variant === VISUAL_VARIANTS.wayfinding) {
    return <div className={className} aria-hidden="true"><svg viewBox="0 0 320 160" role="presentation"><path className="wayfinding-axis" d="M28 119h257" /><path className="wayfinding-arrow" d="M52 118L137 32l47 47 83-49" /><path className="wayfinding-marker marker-one" d="M122 21h30v30h-30z" /><path className="wayfinding-marker marker-two" d="M169 65h31v31h-31z" /><path className="wayfinding-marker marker-three" d="M251 19h25v25h-25z" /></svg></div>;
  }

  if (variant === VISUAL_VARIANTS.energyCorridor) {
    return <div className={className} aria-hidden="true"><svg viewBox="0 0 320 160" role="presentation"><path className="energy-outline" d="M143 8l50 24 17 40-16 31 28 28-34 28 4 31-49 15-40-29-34-7 9-39-24-33 31-23 4-40 45-12z" /><path className="energy-corridor-line" d="M58 129C101 108 120 90 145 72s54-33 111-41" /><path className="energy-corridor-line secondary" d="M95 144c24-25 43-38 63-55s31-38 42-68" /><path className="energy-array" d="M182 89l20-12 20 12-20 12zM207 104l20-12 20 12-20 12zM156 104l20-12 20 12-20 12z" /><circle className="energy-node" cx="58" cy="129" r="8" /><circle className="energy-node" cx="145" cy="72" r="10" /><circle className="energy-node" cx="256" cy="31" r="7" /></svg></div>;
  }

  return <div className={className} aria-hidden="true"><svg viewBox="0 0 320 160" role="presentation"><path className="hero-outline" d="M146 10l43 19 21 39-13 32 27 29-32 29 5 29-48 15-41-29-34-6 9-40-25-33 31-22 4-40 44-12z" /><path className="hero-corridor corridor-one" d="M146 27c-30 38 21 48-13 86s2 37-17 65" /><path className="hero-corridor corridor-two" d="M79 128c44-13 68 1 108-38s29-57 58-64" /><path className="hero-corridor corridor-three" d="M123 59c31 12 63 3 92-25" /><circle cx="146" cy="27" r="8" /><circle cx="133" cy="113" r="10" /><circle cx="187" cy="90" r="8" /><circle cx="245" cy="26" r="7" /></svg></div>;
}

interface SponsorMonogramProps {
  variant: SponsorMonogramVariant;
}

export function SponsorMonogram({ variant }: SponsorMonogramProps) {
  if (variant === SPONSOR_MONOGRAMS.PUNA_ENERGY) {
    return <svg className="sponsor-monogram sponsor-monogram-puna" viewBox="0 0 72 72" aria-hidden="true" role="presentation"><circle cx="36" cy="36" r="13" /><path d="M36 5v12M36 55v12M5 36h12M55 36h12M14 14l9 9M49 49l9 9M58 14l-9 9M23 49l-9 9" /></svg>;
  }
  if (variant === SPONSOR_MONOGRAMS.VALLEYS_PRODUCTION) {
    return <svg className="sponsor-monogram sponsor-monogram-valleys" viewBox="0 0 72 72" aria-hidden="true" role="presentation"><path d="M10 57h52M16 45h40M22 33h28M28 21h16" /><path d="M16 57l12-12 8 12 8-12 12 12" /></svg>;
  }
  if (variant === SPONSOR_MONOGRAMS.QUEBRADA_TECHNOLOGY) {
    return <svg className="sponsor-monogram sponsor-monogram-technology" viewBox="0 0 72 72" aria-hidden="true" role="presentation"><path d="M14 51L36 15l22 36H14z" /><circle cx="36" cy="15" r="5" /><circle cx="14" cy="51" r="5" /><circle cx="58" cy="51" r="5" /><circle cx="36" cy="39" r="5" /></svg>;
  }
  return <svg className="sponsor-monogram sponsor-monogram-jama" viewBox="0 0 72 72" aria-hidden="true" role="presentation"><path d="M11 52L52 11M40 11h12v12M20 61H8V49" /><path d="M17 18h20M35 18l-7-7M35 18l-7 7M55 54H35M37 54l7-7M37 54l7 7" /></svg>;
}

export function BrandMotionStage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canAutoplayRef = useRef(false);
  const hasMediaErrorRef = useRef(false);
  const [canAutoplay, setCanAutoplay] = useState(false);
  const [hasMediaError, setHasMediaError] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: EventTarget & { saveData?: boolean } }).connection;
    function attemptPlayback() {
      const video = videoRef.current;
      if (!video || !canAutoplayRef.current || hasMediaErrorRef.current) return;
      void video.play().catch(() => undefined);
    }
    function updateAutoplayPreference() {
      const enabled = !mediaQuery.matches && !connection?.saveData;
      canAutoplayRef.current = enabled;
      setCanAutoplay(enabled);
      if (!enabled) videoRef.current?.pause();
      else attemptPlayback();
    }
    updateAutoplayPreference();
    mediaQuery.addEventListener("change", updateAutoplayPreference);
    connection?.addEventListener("change", updateAutoplayPreference);
    return () => {
      mediaQuery.removeEventListener("change", updateAutoplayPreference);
      connection?.removeEventListener("change", updateAutoplayPreference);
      videoRef.current?.pause();
    };
  }, []);

  function handleCanPlay() {
    const video = videoRef.current;
    if (!video || hasMediaErrorRef.current) return;
    if (!canAutoplayRef.current) {
      video.pause();
      return;
    }
    void video.play().catch(() => undefined);
  }

  function handleMediaError() {
    hasMediaErrorRef.current = true;
    try { videoRef.current?.pause(); } catch { /* The non-image error panel remains available if pausing fails. */ }
    setHasMediaError(true);
  }

  return (
    <section className="brand-motion-stage" aria-label="Territorio en movimiento">
      {!hasMediaError && <video ref={videoRef} className="brand-motion-video" muted playsInline autoPlay={canAutoplay} loop preload={canAutoplay ? "auto" : "none"} aria-hidden="true" onCanPlay={handleCanPlay} onError={handleMediaError}><source src={publicAsset("media/territorio-en-movimiento.webm")} type="video/webm" /><source src={publicAsset("media/territorio-en-movimiento.mp4")} type="video/mp4" /></video>}
      {hasMediaError && <div className="brand-motion-fallback" role="status">El contenido audiovisual no está disponible en este momento.</div>}
    </section>
  );
}
