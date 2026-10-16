"use client";

import { useState } from "react";
import { reviews } from "@/lib/content";

export function Reviews() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  return (
    <section className="section" id="reviews" aria-labelledby="reviews-title">
      <div className="wrap">
        <header className="section-title">
          <p className="kicker">
            <span>07</span> Guest book
          </p>
          <h2 id="reviews-title">Notes from the train</h2>
          <p className="lede">Written by guests after the journey. {reviews.length} of them, kept as they were sent.</p>
        </header>
        <figure className="guest-book">
          <blockquote>“{review.quote}”</blockquote>
          <figcaption>{review.name}</figcaption>
          <div className="guest-nav">
            <button
              type="button"
              aria-label="Previous note"
              onClick={() => setIndex((current) => (current + reviews.length - 1) % reviews.length)}
            >
              Prev
            </button>
            <span>
              {index + 1} / {reviews.length}
            </span>
            <button type="button" aria-label="Next note" onClick={() => setIndex((current) => (current + 1) % reviews.length)}>
              Next
            </button>
          </div>
        </figure>
      </div>
    </section>
  );
}
