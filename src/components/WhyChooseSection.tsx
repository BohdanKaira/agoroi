import { benefits } from "@/data/site-data";

const variantStyles = {
  white:
    "bg-white border border-gray-200/80 text-navy hover:shadow-lg hover:shadow-gray-200/50 hover:border-gray-300/60",
  gold:
    "bg-gold text-navy shadow-md shadow-gold/15 hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5",
  dark:
    "bg-navy text-white shadow-md shadow-navy/20 hover:shadow-lg hover:shadow-navy/30 hover:-translate-y-0.5",
} as const;

const descStyles = {
  white: "text-gray-500",
  gold: "text-navy/60",
  dark: "text-white/55",
} as const;

const titleStyles = {
  white: "text-navy",
  gold: "text-navy",
  dark: "text-white",
} as const;

export default function WhyChooseSection() {
  return (
    <section className="bg-gray-50/80 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-[2.5rem]">
            Why choose Ag.oroi?
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className={`rounded-2xl p-7 transition-all duration-300 sm:p-8 ${variantStyles[b.variant]}`}
            >
              <h3 className={`mb-3 text-[17px] font-bold ${titleStyles[b.variant]}`}>
                {b.title}
              </h3>
              <p className={`text-[13px] leading-[1.7] ${descStyles[b.variant]}`}>
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
