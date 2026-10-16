import type { Metadata } from "next";
import { Cinzel, EB_Garamond, Work_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cinzel",
  display: "swap",
});

const work = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-work",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.themaharajatrain.com"),
  title: {
    default: "Maharajas' Express | Luxury train tours across India",
    template: "%s | Royal Indian Trains",
  },
  description:
    "Preferred sales agents for the Maharajas' Express. Four luxury train journeys across India, from late September to early April. Cabins from US$ 4,900 per person. Royal Indian Trains, by Lawrence Travels.",
  openGraph: {
    title: "Maharajas' Express | Luxury train tours across India",
    description:
      "Royal Indian Trains, by Lawrence Travels — preferred sales agents for the Maharajas' Express.",
    url: "https://www.themaharajatrain.com",
    siteName: "Royal Indian Trains",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${garamond.variable} ${cinzel.variable} ${work.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
