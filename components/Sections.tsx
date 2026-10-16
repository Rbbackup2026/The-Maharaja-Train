import Image from "next/image";
import {
  amenities,
  awards,
  cabins,
  faqs,
  features,
  highlights,
  journeys,
  otherTrains,
  reasons,
} from "@/lib/content";
import { Icon } from "./Icons";
import { Reveal } from "./Reveal";

export function Awards() {
  return (
    <section className="section band" id="awards" aria-labelledby="awards-title">
      <div className="wrap">
        <header className="section-title">
          <p className="kicker">
            <span>01</span> Awards
          </p>
          <h2 id="awards-title">Awards and accolades</h2>
        </header>
        <ul className="awards">
          {awards.map((award) => (
            <li className="award" key={award.title}>
              <img src={award.src} alt={award.alt} width={72} height={72} />
              <div>
                <h3>{award.title}</h3>
                <p>{award.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Journeys() {
  return (
    <section className="section" id="journeys" aria-labelledby="journeys-title">
      <div className="wrap">
        <header className="section-title">
          <p className="kicker">
            <span>02</span> Journeys
          </p>
          <h2 id="journeys-title">Indian luxury train tours</h2>
          <p className="lede" id="schedule">
            The season runs from late September to early April. Three journeys are six nights. Treasures of India is
            three. Dates are confirmed when you enquire — the train does not run every week.
          </p>
        </header>
        {journeys.map((journey) => (
          <article className="journey" id={journey.id} key={journey.id}>
            <div className="journey-photo">
              <Image src={journey.image} alt={journey.alt} width={1024} height={683} sizes="(max-width: 980px) 100vw, 50vw" />
            </div>
            <div>
              <p className="nights">{journey.nights}</p>
              <h3>{journey.name}</h3>
              <ol className="route">
                {journey.stops.map((stop) => (
                  <li key={stop}>{stop}</li>
                ))}
              </ol>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Why() {
  return (
    <section className="section band" id="why" aria-labelledby="why-title">
      <div className="wrap">
        <header className="section-title">
          <p className="kicker">
            <span>03</span> Why this train
          </p>
          <h2 id="why-title">Why travel on the Maharajas&apos; Express?</h2>
          <p className="lede">It is on bucket lists for a reason.</p>
        </header>
        <ul className="reasons">
          {reasons.map((reason) => (
            <li key={reason.title}>
              <span className="icon-ring">
                <Icon name={reason.icon} />
              </span>
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section className="section" id="features" aria-labelledby="features-title">
      <div className="wrap split">
        <div className="photo-frame feature-photo">
          <Image
            src="/images/trains/club.webp"
            alt="The Rajah Club lounge on the Maharajas' Express"
            width={1024}
            height={683}
            sizes="(max-width: 980px) 100vw, 50vw"
          />
        </div>
        <div>
          <header className="section-title">
            <p className="kicker">
              <span>05</span> On board
            </p>
            <h2 id="features-title">What the journey includes</h2>
          </header>
          <ol className="feature-list">
            {features.map((feature, index) => (
              <li key={feature}>
                <span className="feature-no">0{index + 1}</span>
                <span>{feature}</span>
              </li>
            ))}
          </ol>
          <p className="more-link">
            <a href="#facilities">Read about the carriages</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export function Cabins() {
  return (
    <section className="section band" id="cabins" aria-labelledby="cabins-title">
      <div className="wrap">
        <header className="section-title">
          <p className="kicker">
            <span>06</span> Cabins
          </p>
          <h2 id="cabins-title">Four ways to travel</h2>
          <p className="lede">
            Fourteen carriages, and room for 88 guests. The saloons are dressed with tapestry, linen, carpet and
            antiques. You choose one of four cabins.
          </p>
        </header>
        <Reveal className="cabin-grid">
          {cabins.map((cabin, index) => (
            <article className="cabin" key={cabin.name}>
              <div className="cabin-photo">
                <Image src={cabin.image} alt={cabin.alt} width={1024} height={683} sizes="(max-width: 720px) 100vw, 50vw" />
                <span className="cabin-cta" aria-hidden="true">
                  Enquire
                  <Icon name="arrow" />
                </span>
              </div>
              <div className="cabin-body">
                <span className="cabin-no">0{index + 1}</span>
                <h3>
                  <a className="cabin-link" href="#enquire">
                    {cabin.name}
                  </a>
                </h3>
                <p>{cabin.text}</p>
              </div>
            </article>
          ))}
        </Reveal>
        <p className="tariff-note" id="tariff">
          Fares start at US$ 4,900 per person. Treasures of India in a deluxe cabin begins at US$ 9,780 per couple. A
          presidential suite on a six-night journey can reach US$ 49,780 per couple. Taxes are extra. In rupees, the
          amount follows the dollar rate on the day you pay.
        </p>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="wrap essay">
        <div className="body">
          <header className="section-title">
            <p className="kicker">
              <span>08</span> The train
            </p>
            <h2 id="experience-title">India’s luxury train, in plain words</h2>
          </header>
          <p>
            The Maharajas&apos; Express has made a particular kind of trip possible: a few days through India’s
            famous places, with the comfort of a hotel that moves at night. Guests come home talking about the
            forts, and about the staff.
          </p>
          <p>
            It is the most comfortable way we know to see this much of the country in a short time. The amenities
            are modern, the interiors are carefully made, and the train is maintained and operated by the Indian
            Railways Catering and Tourism Corporation (IRCTC), a government company.
          </p>

          <h3 id="facilities">Life on board</h3>
          <p>
            The public cars take their cue from the private saloons of the old princely states. Each carriage is
            named for a gemstone and finished in that spirit. The days are for grandeur, a little panache, and
            time that is not rushed.
          </p>
          <p>
            Dinner is in one of two restaurant cars: Rang Mahal, the Colour Palace, and Mayur Mahal, the Peacock
            Palace. Between meals, the Rajah Club and the Safari Bar are where the train gathers — drinks, a
            snack, a board game, a seat that is actually comfortable. On some departures there are Vedic or
            astrology sessions, a Bollywood dance, and talks from the tour directors on history and myth. A few
            signature journeys bring a guest lecturer.
          </p>

          <h3>Guests of the train</h3>
          <p>
            People who have travelled on it include Cherie Blair, the chef Vivek Singh, Alan Cumming and Sir Mark
            Tully, along with a long list of travel writers. Single women travel it. So do alumni groups and
            company boards. The nationalities we see most often are American, British, Australian, Japanese,
            Indian and Emirati.
          </p>
          <p>
            The on-board team is used to different nationalities, and several languages are spoken among them.
            The chefs can cook for a wide range of tables — food from around fifty countries, if that is what the
            guest book asks for.
          </p>
        </div>

        <aside className="aside">
          <h3>Distinct amenities</h3>
          <ul className="diamond-list">
            {amenities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Off the train</h3>
          <ul className="diamond-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="wrap">
        <header className="section-title">
          <p className="kicker">
            <span>10</span> Questions
          </p>
          <h2 id="faq-title">Before you write to us</h2>
        </header>
        {faqs.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            {item.a.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </details>
        ))}
      </div>
    </section>
  );
}

export function OtherTrains() {
  return (
    <section className="section band" id="other-trains" aria-labelledby="other-title">
      <div className="wrap">
        <header className="section-title">
          <p className="kicker">
            <span>11</span> Also with us
          </p>
          <h2 id="other-title">More luxury trains</h2>
          <p className="lede">
            Royal Indian Trains also sells Palace on Wheels, Deccan Odyssey and Golden Chariot. Each opens on its
            own site.
          </p>
        </header>
        <div className="train-grid">
          {otherTrains.map((train) => (
            <a className="train-card" key={train.name} href={train.href} target="_blank" rel="noopener noreferrer">
              <div className="train-logo">
                <img src={train.image} alt={train.alt} />
              </div>
              <h3>{train.name}</h3>
              <p>{train.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
