import { Enquire } from "@/components/Enquire";
import { Film } from "@/components/Film";
import { Hero } from "@/components/Hero";
import { Reviews } from "@/components/Reviews";
import { Awards, Cabins, Experience, Faq, Features, Journeys, OtherTrains, Why } from "@/components/Sections";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Awards />
      <Journeys />
      <Why />
      <Film />
      <Features />
      <Cabins />
      <Reviews />
      <Experience />
      <Enquire />
      <Faq />
      <OtherTrains />
    </main>
  );
}
