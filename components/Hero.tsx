"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { slides } from "@/lib/content";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <section className="hero" id="the-train" aria-label="Introduction">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">Late September to early April</p>
          <h1>The Maharajas&apos; Express</h1>
          <p className="hero-sub">Luxury train tours across India</p>
          <p className="body">
            Set out across India on the Maharajas&apos; Express. Regal cabins, a staff who stay with you, and four
            itineraries through the places people cross a continent to see. The train runs from late September to
            early April. It is a slow way to travel, and that is the point.
          </p>
          <p className="body">
            Book a passage for a few days inside India&apos;s royal past. Cabin fares start at US$ 4,900 per person.
          </p>
          <p className="fare">
            <span>Cabin fare from</span>
            <strong>US$ 4,900</strong>
            <span>per person</span>
          </p>
          <p className="fine">Taxes extra. The figure is a starting fare, and it moves with the cabin and the journey.</p>
          <div className="actions">
            <a className="btn" href="#enquire">
              Get a free quote
            </a>
            <a className="btn btn-line" href="#journeys">
              See the journeys
            </a>
          </div>
        </div>

        <div id="gallery">
          <div className="hero-frame">
            {slides.map((item, itemIndex) => (
              <Image
                key={item.src}
                src={item.src}
                alt={item.alt}
                fill
                priority={itemIndex === 0}
                sizes="(max-width: 980px) 100vw, 58vw"
                className={itemIndex === index ? "is-on" : undefined}
              />
            ))}
          </div>
          <div className="hero-meta">
            <p>{slide.caption}</p>
            <div className="hero-controls">
              <button type="button" aria-label="Previous photograph" onClick={() => setIndex((current) => (current + slides.length - 1) % slides.length)}>
                Prev
              </button>
              <span>
                {index + 1} / {slides.length}
              </span>
              <button type="button" aria-label="Next photograph" onClick={() => setIndex((current) => (current + 1) % slides.length)}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
