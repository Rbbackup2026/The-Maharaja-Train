"use client";

import { FormEvent, useState } from "react";
import { email, journeys, phoneDisplay, phoneTel, whatsapp } from "@/lib/content";
import { Icon } from "./Icons";

export function Enquire() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (String(data.get("company") || "").trim()) return;

    const lines = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Journey: ${data.get("journey")}`,
      `When: ${data.get("when")}`,
      `Guests: ${data.get("guests")}`,
      "",
      String(data.get("note") || ""),
    ];
    const href = `mailto:${email}?subject=${encodeURIComponent("Maharajas' Express enquiry")}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
    window.location.href = href;
  }

  return (
    <section className="section offer" id="offers">
      <div className="wrap offer-grid">
        <div>
          <p className="kicker">
            <span>09</span> Limited departures
          </p>
          <h2>Up to 10% off a handful of dates.</h2>
          <p className="intro">
            Tell us the journey, the month, and how many of you are travelling. We check what is actually free and
            reply with the fare. The reduction applies only to selected departures.
          </p>
          <div className="direct">
            <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>
            <a href={`mailto:${email}`}>{email}</a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" /> WhatsApp
            </a>
          </div>
        </div>

        <form className="form" id="enquire" onSubmit={onSubmit}>
          <div className="form-row">
            <label>
              Name
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
          </div>
          <div className="form-row">
            <label>
              Phone
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
            <label>
              Guests
              <input name="guests" inputMode="numeric" placeholder="2" />
            </label>
          </div>
          <div className="form-row">
            <label>
              Journey
              <select name="journey" defaultValue="Not sure yet">
                <option>Not sure yet</option>
                {journeys.map((journey) => (
                  <option key={journey.id}>{journey.name}</option>
                ))}
                <option>Charter or private journey</option>
              </select>
            </label>
            <label>
              When
              <input name="when" placeholder="March 2027" />
            </label>
          </div>
          <label>
            Anything we should know
            <textarea name="note" placeholder="Cabin preference, a celebration, diet, cities you hope to add before or after." />
          </label>
          <label className="hp" aria-hidden="true">
            Company
            <input name="company" tabIndex={-1} autoComplete="off" />
          </label>
          <button className="btn btn-gold" type="submit">
            Send the enquiry
          </button>
          <p className="form-note">
            {sent
              ? "If your email app did not open, write to us directly. We read every note."
              : "This opens an email to the desk. Nothing is stored on the website."}
          </p>
        </form>
      </div>
    </section>
  );
}
