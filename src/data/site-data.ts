export const navLinks = [
  { label: "About us", href: "#about" },
  { label: "Tours", href: "#tours" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact us", href: "#contact" },
];

export const stats = [
  { value: "5", label: "years of experience" },
  { value: "100+", label: "completed journeys" },
  { value: "23", label: "countries of origin" },
];

export const benefits = [
  {
    title: "Signature tours",
    description:
      "Carefully crafted itineraries that reveal the hidden spiritual heart of Mount Athos, beyond what ordinary visits offer.",
    variant: "white" as const,
  },
  {
    title: "Safe passage",
    description:
      "We handle every permit, transfer, and logistic detail so your only concern is the journey itself.",
    variant: "gold" as const,
  },
  {
    title: "Self-port guide",
    description:
      "Detailed self-guided materials for independent pilgrims who prefer to walk at their own pace.",
    variant: "dark" as const,
  },
  {
    title: "Community",
    description:
      "Join a growing network of like-minded travelers who share a passion for sacred journeys and authentic experiences.",
    variant: "white" as const,
  },
  {
    title: "Consultation",
    description:
      "Personal one-on-one sessions to plan your pilgrimage around your schedule, fitness level, and spiritual goals.",
    variant: "dark" as const,
  },
  {
    title: "Qualified Expertise",
    description:
      "Our guides hold deep knowledge of Orthodox tradition, local history, and the monasteries of Mount Athos.",
    variant: "white" as const,
  },
];

export const services = [
  {
    title: "Diamonitirion",
    description:
      "We arrange the official entry permit required for visiting Mount Athos, handling all paperwork on your behalf.",
  },
  {
    title: "Transfers",
    description:
      "Airport pickups, hotel-to-port shuttles, and all ground transportation arranged seamlessly.",
  },
  {
    title: "Gym of Mount Athos",
    description:
      "Access to guided monastery visits, walking routes, and spiritual programs across the peninsula.",
  },
  {
    title: "Ferry tours / Lines",
    description:
      "Scenic coastal boat tours and scheduled ferry connections between monasteries and ports.",
  },
  {
    title: "Hiking Athos",
    description:
      "Curated hiking routes through ancient forests and mountain trails connecting the holy monasteries.",
  },
];

export const tours = [
  {
    tier: "Self-Guide",
    description:
      "Explore Mount Athos independently with our comprehensive guide package, maps, and permit handling.",
    features: [
      "Diamonitirion permit",
      "Detailed route maps",
      "Monastery guide booklet",
      "24/7 phone support",
    ],
    price: "€300+",
    cta: "Get started",
    highlighted: false,
  },
  {
    tier: "Standard",
    description:
      "A fully guided 3-day pilgrimage covering the most important monasteries with an experienced local guide.",
    features: [
      "Everything in Self-Guide",
      "Professional local guide",
      "Accommodation booking",
      "Meals included",
      "Small group (up to 8)",
    ],
    price: "€600+",
    cta: "Book now",
    highlighted: true,
  },
  {
    tier: "Extended",
    description:
      "An immersive 5–7 day journey deep into the peninsula, visiting remote sketes and hidden monasteries.",
    features: [
      "Everything in Standard",
      "Extended 5–7 day itinerary",
      "Remote monastery access",
      "Private boat transfers",
      "Personalized schedule",
    ],
    price: "€1000+",
    cta: "Book now",
    highlighted: false,
  },
];

export const reviews = [
  { name: "Jacob", text: "An unforgettable spiritual experience. Every detail was taken care of." },
  { name: "Anton", text: "The guides knew every trail and monastery. Truly authentic and deeply moving." },
  { name: "Timothy", text: "I've traveled the world, but nothing compares to this pilgrimage. Life-changing." },
  { name: "Aleksey", text: "Seamless organization from start to finish. I felt safe and inspired the entire time." },
  { name: "Angus", text: "The beauty of Mount Athos is indescribable. Ag.oroi made it all possible." },
];

export const faqItems = [
  {
    question: "What is Mount Athos?",
    answer:
      "Mount Athos is a peninsula in northeastern Greece that is home to 20 Eastern Orthodox monasteries. It has been a UNESCO World Heritage Site since 1988 and is considered one of the holiest places in Orthodox Christianity.",
  },
  {
    question: "Who is allowed to visit Mount Athos and who is not?",
    answer:
      "Only male visitors are permitted to enter Mount Athos. A special entry permit called a Diamonitirion is required, which we arrange as part of all our tour packages. Visitors of all faiths and nationalities are welcome.",
  },
  {
    question: "Do you have to be Christian / Religious to visit Mount Athos?",
    answer:
      "No. While Mount Athos is a major center of Orthodox Christianity, visitors of all faiths and backgrounds are welcome. Many travelers visit for the history, nature, architecture, and the unique cultural experience.",
  },
  {
    question: "What documents and permits are required for pilgrimage?",
    answer:
      "You will need a valid passport and a Diamonitirion (Mount Athos entry permit). We handle the permit application process for you. EU citizens can also use a national ID card for travel to Greece.",
  },
  {
    question: "What is the dress code for Mount Athos?",
    answer:
      "Visitors are expected to dress modestly. Long trousers and shirts with sleeves are required. Hats should be removed when entering churches. We provide a detailed packing guide with your booking confirmation.",
  },
  {
    question: "Accommodation and options for staying overnight?",
    answer:
      "Visitors stay in monastery guest houses (archontariki). Accommodation is basic but comfortable, and meals are provided by the monasteries. We book your stays in advance as part of our guided packages.",
  },
  {
    question: "How are meals organized?",
    answer:
      "Monasteries provide two meals a day — typically after morning and evening services. The food is simple, traditional, and vegetarian during fasting periods. Our guided tours include all meals.",
  },
  {
    question: "How physically demanding is the pilgrimage?",
    answer:
      "It depends on your chosen route. Some monasteries are accessible by road, while others require moderate hiking. Our team will recommend a route suited to your fitness level and preferences.",
  },
  {
    question: "Is it possible to use mobile phones and take photos or videos?",
    answer:
      "Mobile phones are generally allowed but photography and video recording rules vary by monastery. Many monasteries prohibit photos inside churches. We provide specific guidance for each location in your itinerary.",
  },
];

export const contactLinks = [
  { label: "info@agoroi.com", icon: "phone", href: "tel:+1234567890" },
  { label: "WhatsApp", icon: "whatsapp", href: "#" },
  { label: "Email", icon: "email", href: "mailto:info@agoroi.com" },
  { label: "Facebook", icon: "facebook", href: "#" },
  { label: "VK", icon: "vk", href: "#" },
];
