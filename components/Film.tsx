"use client";

import { useState } from "react";
import { Icon } from "./Icons";

const films = [
  {
    id: "hwdATZXWkaE",
    source: "Guest film · Emily Luxton",
    title: "Discovering India on the Maharajas' Express, days 1 to 4",
  },
  {
    id: "jIGMRy4Zp3g",
    source: "Lawrence Travels",
    title: "The Maharajas' Express",
  },
];

function FilmCard({ id, source, title }: (typeof films)[number]) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="film-card">
      <div className="film-frame">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button className="play" type="button" onClick={() => setPlaying(true)} aria-label={`Play: ${title}`}>
            <img src={`/images/film/${id}.jpg`} alt="" loading="lazy" width={1280} height={720} />
            <span className="play-ring">
              <Icon name="play" />
            </span>
          </button>
        )}
      </div>
      <figcaption>
        <span className="film-source">{source}</span>
        <span className="film-title">{title}</span>
      </figcaption>
    </figure>
  );
}

export function Film() {
  return (
    <section className="section" id="journey-film" aria-labelledby="film-title">
      <div className="wrap">
        <header className="section-title">
          <p className="kicker">
            <span>04</span> The films
          </p>
          <h2 id="film-title">View the Maharajas&apos; Express journey</h2>
        </header>
        <div className="film-grid">
          {films.map((film) => (
            <FilmCard key={film.id} {...film} />
          ))}
        </div>
      </div>
    </section>
  );
}
