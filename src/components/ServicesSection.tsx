import { services } from "@/data/site-data";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-navy sm:text-[2.5rem]">
          Services
        </h2>

        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1fr]">
          {/* Left: service list */}
          <div>
            <div className="space-y-0">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className="group flex gap-5 border-b border-gray-100 py-6 transition-colors first:pt-0 last:border-0 hover:bg-gray-50/50"
                >
                  <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-navy/[0.05] text-[12px] font-bold text-navy/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="mb-1.5 text-[15px] font-bold text-navy">
                      {s.title}
                    </h3>
                    <p className="text-[13px] leading-[1.7] text-gray-400">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-3.5 text-[13px] font-bold uppercase tracking-wider text-navy shadow-md shadow-gold/15 transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/25"
              >
                Book a service
                <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: tall image placeholder */}
          <div className="relative hidden overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-50 lg:block">
            <div className="flex aspect-[3/4] items-center justify-center">
              <div className="text-center">
                <svg className="mx-auto h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.7}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                </svg>
                <p className="mt-3 text-xs text-gray-300">Image placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
