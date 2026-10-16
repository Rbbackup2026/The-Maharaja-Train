export const phoneDisplay = "+91-9810145718";
export const phoneTel = "+919810145718";
export const email = "rajiv@royalindiantrains.com";
export const whatsapp = "https://wa.me/919810145718";

export type NavLink = { label: string; href: string; group?: string };

export type NavItem = {
  label: string;
  href: string;
  children?: NavLink[];
};

export const nav: NavItem[] = [
  {
    label: "The Train",
    href: "#the-train",
    children: [
      { label: "Introduction", href: "#the-train" },
      { label: "Cabins", href: "#cabins" },
      { label: "Facilities", href: "#facilities" },
    ],
  },
  {
    label: "Journeys",
    href: "#journeys",
    children: [
      { label: "Heritage of India", href: "#heritage-of-india" },
      { label: "Indian Splendour", href: "#indian-splendour" },
      { label: "Treasures of India", href: "#treasures-of-india" },
      { label: "Indian Panorama", href: "#indian-panorama" },
    ],
  },
  { label: "Schedule", href: "#schedule" },
  { label: "Tariff", href: "#tariff" },
  { label: "Inquire Now", href: "#enquire" },
  { label: "Gallery", href: "#gallery" },
  {
    label: "Destinations",
    href: "#journeys",
    children: [
      { label: "Agra", href: "#treasures-of-india", group: "North India" },
      { label: "Fatehpur Sikri", href: "#indian-panorama", group: "North India" },
      { label: "Jaipur", href: "#indian-splendour", group: "North India" },
      { label: "Ranthambore", href: "#treasures-of-india", group: "North India" },
      { label: "Bikaner", href: "#heritage-of-india", group: "Western India" },
      { label: "Jodhpur", href: "#heritage-of-india", group: "Western India" },
      { label: "Udaipur", href: "#heritage-of-india", group: "Western India" },
      { label: "Varanasi", href: "#indian-panorama", group: "Central India" },
      { label: "Khajuraho", href: "#indian-panorama", group: "Central India" },
    ],
  },
  { label: "Offers", href: "#offers" },
  { label: "Contact", href: "#contact" },
];

export const slides = [
  {
    src: "/images/hero-train.jpg",
    alt: "The Maharajas' Express carriage Panna waiting at the platform at dusk",
    caption: "Carriage Panna, at the platform",
  },
  {
    src: "/images/hero-dining.jpg",
    alt: "Mayur Mahal dining car on the Maharajas' Express",
    caption: "Mayur Mahal, the dining car",
  },
  {
    src: "/images/hero-safari.jpg",
    alt: "The Safari Bar on board the Maharajas' Express",
    caption: "The Safari Bar",
  },
];

export const awards = [
  {
    src: "/images/awards/world-travel.png",
    alt: "World Travel Awards",
    title: "World’s Leading Luxury Train",
    text: "World Travel Awards, seven years running, 2012 to 2018.",
  },
  {
    src: "/images/awards/seven-stars.png",
    alt: "Seven Stars Luxury Hospitality and Lifestyle Awards",
    title: "Seven Stars",
    text: "Luxury Hospitality & Lifestyle Award in 2015, 2016 and 2022.",
  },
  {
    src: "/images/awards/conde-nast.jpeg",
    alt: "Condé Nast Traveler Readers’ Choice Awards 2011",
    title: "Condé Nast Traveler",
    text: "Readers’ Choice Award, 2011.",
  },
  {
    src: "/images/awards/tripadvisor.png",
    alt: "Tripadvisor",
    title: "Tripadvisor",
    text: "A rating of 4 out of 5, from 43 reviews.",
  },
];

export const journeys = [
  {
    id: "heritage-of-india",
    name: "Heritage of India",
    nights: "6 nights / 7 days",
    image: "/images/journeys/jodhpur.jpeg",
    alt: "Mehrangarh Fort and Jaswant Thada, Jodhpur",
    stops: [
      "Mumbai",
      "Udaipur",
      "Jodhpur",
      "Bikaner",
      "Jaipur",
      "Ranthambore",
      "Fatehpur Sikri",
      "Agra",
      "Delhi",
    ],
  },
  {
    id: "indian-splendour",
    name: "Indian Splendour",
    nights: "6 nights / 7 days",
    image: "/images/journeys/jaipur.jpeg",
    alt: "Visitors on elephants at sunrise below Amer Fort, Jaipur",
    stops: [
      "Delhi",
      "Agra",
      "Ranthambore",
      "Jaipur",
      "Bikaner",
      "Jodhpur",
      "Udaipur",
      "Mumbai",
    ],
  },
  {
    id: "treasures-of-india",
    name: "Treasures of India",
    nights: "3 nights / 4 days",
    image: "/images/journeys/ranthambore.jpeg",
    alt: "A Bengal tiger at Ranthambore National Park. Photograph by Dhritiman",
    stops: ["Delhi", "Agra", "Ranthambore", "Jaipur", "Delhi"],
  },
  {
    id: "indian-panorama",
    name: "Indian Panorama",
    nights: "6 nights / 7 days",
    image: "/images/journeys/orchha.jpg",
    alt: "Royal cenotaphs at Orchha, Madhya Pradesh",
    stops: [
      "Delhi",
      "Jaipur",
      "Ranthambore",
      "Fatehpur Sikri",
      "Agra",
      "Orchha",
      "Khajuraho",
      "Varanasi",
      "Delhi",
    ],
  },
];

export const reasons = [
  {
    icon: "window" as const,
    title: "Unparalleled luxury",
    text: "In almost every aspect, a cut above the rest in ambience, service, facilities, and anything you can think of.",
  },
  {
    icon: "bell" as const,
    title: "Renowned service",
    text: "A dedicated khidmatgar — your butler — available through the day and night in each saloon.",
  },
  {
    icon: "shield" as const,
    title: "Safety",
    text: "A paramedic on call around the clock, security on board and off, routine checks, and an air ambulance if an emergency demands it.",
  },
  {
    icon: "cloche" as const,
    title: "World-renowned cuisine",
    text: "From vegan to kosher, cooked to the preference you give us before you board.",
  },
  {
    icon: "clock" as const,
    title: "Timely and convenient",
    text: "Everything runs to a set schedule. It is hard to find another way to see these places, comfortably, in the same number of days.",
  },
  {
    icon: "quote" as const,
    title: "Rave reviews",
    text: "Don’t take only our word. Tripadvisor, the travel press, film and Instagram have been kind to this train for years.",
  },
];

export const features = [
  "Cultural immersions, with a veteran tour director.",
  "A set itinerary, with optional excursions and spa time at hotels.",
  "All inclusive: meals, entrance fees, and house wines, spirits and beer.",
  "Two multi-cuisine restaurants, and meals adjusted to diet.",
  "A lounge saloon, and a bar with books and board games.",
  "A valet through the day and night.",
];

export const cabins = [
  {
    name: "Deluxe Cabin",
    image: "/images/cabins/deluxe.jpg",
    alt: "Deluxe double cabin on the Maharajas' Express",
    text: "The cabin most guests book. Twin or double, with a private bathroom.",
  },
  {
    name: "Junior Suite",
    image: "/images/cabins/junior.jpg",
    alt: "Junior suite with twin beds",
    text: "A wider cabin and room to sit, arranged for two.",
  },
  {
    name: "Suite",
    image: "/images/cabins/suite.jpg",
    alt: "Suite sitting area",
    text: "A separate sitting space, for a quieter stretch of the journey.",
  },
  {
    name: "Presidential Suite",
    image: "/images/cabins/presidential.jpg",
    alt: "Living room of the Presidential Suite",
    text: "448 square feet, the largest cabin on the train, with its own living room.",
  },
];

export const reviews: { quote: string; name: string }[] = [
  {
    quote: "The service, the creative programming and overall mix of activities fulfilled the mantra of Incredible India.",
    name: "Clarence M Bishop, Oregon, USA",
  },
  {
    quote: "The organization of the boarding and de-boarding, tour vehicles and guides are all integrated very well.",
    name: "John Dudas, London, UK",
  },
  {
    quote: "We have never received better service in any place around the world, thank you very much.",
    name: "H. Wall, UK",
  },
  {
    quote: "Very well organized throughout the trip.",
    name: "Mihoko, Japan & Paul Robertson, Canada",
  },
  {
    quote: "An extremely luxurious way to travel — a bit over the top with the red carpets. A very memorable, enjoyable trip, thank you.",
    name: "David & Susie Burall, West Sussex, UK",
  },
  {
    quote: "The attention to detail, the variety of activities and the fabulous service impressed us most.",
    name: "Stephanie Campbell & Jan Kopic, Los Angeles, USA",
  },
  {
    quote: "You stated at the beginning that we would be treated like kings and you kept your word. Colourful and magical. We are sad to leave but take with us many wonderful memories.",
    name: "Stephen & Robina Bolton, UK",
  },
  {
    quote: "Beautiful palaces, the kindness of Indian people, and the train staff impressed us.",
    name: "Hendrika Kuijlars & Marcel Jacobs, Schilde, Belgium",
  },
  {
    quote: "We had a fantastic time. It was an amazing experience. Keep up the good work — we would like to see you all on another adventure.",
    name: "Nili & Amit Mistry, UK",
  },
  {
    quote: "Maharajas’ Express is absolutely the best way to see hard-to-reach places, and the best way to experience Incredible India.",
    name: "Dolorosa & David Margulis, Orlando, USA",
  },
  {
    quote: "The tour had some amazing experiences. The warm greetings we received, on and off the train, were memorable.",
    name: "Ann Clivette & Arthur Taylor, UK",
  },
  {
    quote: "The chef was excellent and the whole trip lived up to our expectations. We loved the trip and all the staff were excellent.",
    name: "Nancy & John Rumler, Victoria, Australia",
  },
  {
    quote: "It is a once-in-a-lifetime experience and I want to remember it as one of the best trips. A big thank you to all.",
    name: "Kirti & Paresh Shah, Middlesex, UK",
  },
  {
    quote: "Food and service were excellent. We enjoyed ourselves and hope to travel on the Maharajas’ Express again.",
    name: "Ju Yin & Lee Yu Fang Chang, China",
  },
  {
    quote: "Thank you all for the wonderful time. This was the best experience and will never be forgotten.",
    name: "Bipin & Eila Pabari, UK",
  },
  {
    quote: "My family and I had an amazing first time in India, only enhanced by the care, attention and service from the staff.",
    name: "Sasha Jairam, Trinidad & Tobago",
  },
  {
    quote: "A brilliant way to see marvellous parts of India in a short space of time.",
    name: "Lucy Slater, Oxon, UK",
  },
  {
    quote: "We were able to experience a wide array of sites. Our valet did a great job of taking care of us.",
    name: "Diane & Nick Partsch, USA",
  },
  {
    quote: "The staff were polite and always willing to help. Visiting so many places and landscapes was possible because of the train.",
    name: "Louise & Adam Caplin, UK",
  },
  {
    quote: "Service and food were great and all is perfect. Thank you so much.",
    name: "Gambini Jean Pierre Mathieu, France",
  },
  {
    quote: "The attention to detail, the attentiveness and friendliness of the staff, and the quality of the drivers and guides were excellent.",
    name: "Joan & Carie Fletcher, Surrey, UK",
  },
  {
    quote: "The extremely courteous, polite and pleasant staff were the hallmark of Maharajas’ Express.",
    name: "Ella Gupta, Delhi, India",
  },
  {
    quote: "Lovely attitude of the staff, attention to detail, and a great carnival atmosphere on board.",
    name: "Lionel & Laura Mill, London, UK",
  },
  {
    quote: "The whole trip was good and we would definitely recommend Maharajas’ Express to our friends.",
    name: "Elina & Eduard Apsit, Russia",
  },
  {
    quote: "Incredible India, and you transported us like jewels in your crown. A total pleasure, in superb style.",
    name: "Michael & Anne Fontayn, UK",
  },
  {
    quote: "Very good venues and side trips. All staff courteous, attentive and professional, always helpful.",
    name: "Anne & Stephen Hayes, New South Wales, Australia",
  },
  {
    quote: "We love travelling on luxury trains. This has been one of our best. The itinerary is good and the logistics of the day trips outstanding. It makes us want to come back.",
    name: "May Tiampo, Vancouver, Canada",
  },
  {
    quote: "While I know this trip is more popular with retirees, it proved a wonderful family trip as well.",
    name: "Karen Holmberg, UK",
  },
  {
    quote: "The organization of the tour was excellent. We really felt like kings and queens.",
    name: "Mitchell Muntner, New York, USA",
  },
];

export const amenities = [
  "Live television, and cameras in the public areas.",
  "The largest passenger cabins on an Indian luxury train — the Presidential Suite is 448 sq. ft.",
  "A paramedic on board, day and night.",
  "Air ambulance, if an emergency requires it.",
  "A water filtration plant on the train.",
  "A wide range of cuisine.",
];

export const highlights = [
  "Guided excursions to monuments, forts, wildlife sanctuaries and World Heritage sites.",
  "Cultural performances arranged for the guests.",
  "Optional tours, including spa treatments, golf and shopping.",
  "Fine dining set out on some excursions.",
  "Sightseeing in comfortable coaches.",
];

export const faqs: { q: string; a: string[] }[] = [
  {
    q: "What is the Maharajas’ Express ticket price?",
    a: [
      "The fare depends on the cabin and the journey.",
      "It starts from US$ 9,780 per couple for Treasures of India, three nights in a deluxe cabin, and can reach US$ 49,780 for a couple in the presidential suite on a six-night journey. Taxes are extra. A published starting point for a cabin is US$ 4,900 per person.",
    ],
  },
  {
    q: "What is the Maharajas’ Express ticket price in rupees?",
    a: [
      "The rupee amount is the dollar fare converted at the rate on the day you pay. If you pay in parts, each part is converted on the day that part is paid.",
    ],
  },
  {
    q: "What is the Maharajas’ Express route?",
    a: [
      "There are four routes. Three journeys are six nights and one is three nights.",
      "The places along them include Agra, Bharatpur, Ranthambore, Jaipur, Jaisalmer, Udaipur, Jodhpur, Varanasi and Khajuraho.",
    ],
  },
  {
    q: "Which is the best luxury train in the world?",
    a: [
      "Maharajas’ Express has been named among the world’s leading luxury trains by the World Travel Awards and by travel publications. It held the World Travel Awards title from 2012 to 2018.",
    ],
  },
  {
    q: "What railway station does Maharajas’ Express run from?",
    a: [
      "In Delhi it uses Safdarjung railway station, in Chanakyapuri, near The Leela Palace. In Mumbai it uses Chhatrapati Shivaji Maharaj Terminus.",
    ],
  },
  {
    q: "How do I book the Maharajas’ Express?",
    a: [
      "Send an enquiry with the journey, the month and the number of guests. We confirm availability, and you can then pay by bank transfer or by card through a payment link.",
      "If you apply on the operator’s own site, IRCTC will ask you to buy through one of its appointed agents. Royal Indian Trains is one of those agents, with global selling rights.",
    ],
  },
  {
    q: "Can you host a private event on the train?",
    a: [
      "Yes. The price, the date and the route depend on the plan, and a journey can be shaped around it.",
    ],
  },
  {
    q: "Can you hold a wedding on the Maharajas’ Express?",
    a: [
      "A formal wedding has not been held on board yet. The train is open to organising one.",
    ],
  },
  {
    q: "Can you charter the Maharajas’ Express?",
    a: [
      "Yes. The whole train can be chartered, and we have arranged charters before. A custom itinerary is possible.",
    ],
  },
  {
    q: "Can you do only part of a journey?",
    a: ["You can join for part of a route. The full fare for that cabin is still payable."],
  },
];

export const otherTrains = [
  {
    name: "Palace on Wheels",
    href: "https://www.thepalaceonwheels.com/detailed-tours.html",
    image: "/images/trains/palace.png",
    alt: "Palace on Wheels emblem",
    text: "India’s original luxury train, operating since 1982. Recently refurbished, it runs a fixed seven-night circuit across Rajasthan and Agra.",
  },
  {
    name: "Deccan Odyssey",
    href: "https://www.deccanodyssey.com/index.html",
    image: "/images/trains/deccan.jpg",
    alt: "Deccan Odyssey emblem",
    text: "Operating since 2004, on six circuits across India.",
  },
  {
    name: "Golden Chariot",
    href: "https://www.goldenchariottrain.com/",
    image: "/images/trains/chariot.jpg",
    alt: "The Golden Chariot emblem",
    text: "South India’s heritage train, on three circuits that leave from Bengaluru and return there.",
  },
];

export const footerLinks = {
  explore: [
    { label: "The train", href: "#the-train" },
    { label: "Journeys", href: "#journeys" },
    { label: "Schedule", href: "#schedule" },
    { label: "Other luxury trains", href: "#other-trains" },
    { label: "Contact", href: "#contact" },
  ],
  more: [
    { label: "Book / enquire", href: "#enquire" },
    { label: "Offers", href: "#offers" },
    { label: "Guest notes", href: "#reviews" },
    { label: "Questions", href: "#faq" },
  ],
};
