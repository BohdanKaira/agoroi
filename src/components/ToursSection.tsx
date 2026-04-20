import { tours } from "@/data/site-data";

export default function ToursSection() {
  return (
    <section id="tours" className="bg-gray-50/80 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-navy sm:text-[2.5rem]">
            Tours by Ag.oroi
          </h2>
          <p className="mx-auto max-w-xl text-[14px] leading-[1.7] text-gray-400">
            All tours run on a group basis, starting every 2 days.
            Pricing varies depending on a chosen tour, journey dates and length of additional facilities.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <div
              key={tour.tier}
              className={`relative flex flex-col rounded-2xl transition-all duration-300 ${
                tour.highlighted
                  ? "bg-white shadow-xl shadow-navy/10 ring-2 ring-navy lg:-translate-y-2"
                  : "bg-white shadow-sm shadow-gray-200/60 ring-1 ring-gray-200/80 hover:shadow-md hover:shadow-gray-200/80"
              }`}
            >
              {/* Card header */}
              <div className="p-7 pb-0 sm:p-8 sm:pb-0">
                <span
                  className={`inline-block rounded-full px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider ${
                    tour.highlighted
                      ? "bg-navy text-white"
                      : "bg-gray-100 text-navy/70"
                  }`}
                >
                  {tour.tier}
                </span>

                <p className="mt-4 text-[13px] leading-[1.7] text-gray-400">
                  {tour.description}
                </p>
              </div>

              {/* Features */}
              <div className="flex-1 p-7 pt-5 sm:p-8 sm:pt-5">
                <ul className="space-y-3">
                  {tour.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[13px] leading-snug text-gray-600">
                      <svg
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                          tour.highlighted ? "text-gold" : "text-gold/70"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price + CTA */}
              <div className="border-t border-gray-100 p-7 sm:p-8">
                <p className="mb-5">
                  <span className="text-3xl font-bold tracking-tight text-navy sm:text-[2rem]">
                    {tour.price}
                  </span>
                  <span className="ml-1 text-[12px] text-gray-400">/ person</span>
                </p>
                <a
                  href="#contact"
                  className={`block rounded-full py-3.5 text-center text-[13px] font-bold uppercase tracking-wider transition-all ${
                    tour.highlighted
                      ? "bg-gold text-navy shadow-md shadow-gold/15 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/25"
                      : "ring-1 ring-navy/20 text-navy hover:bg-navy hover:text-white hover:ring-navy"
                  }`}
                >
                  {tour.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
