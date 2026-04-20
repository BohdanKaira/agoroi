import { stats } from "@/data/site-data";

export default function StatsSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative text-center">
              {i > 0 && (
                <div className="absolute left-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-gray-200 sm:block" />
              )}
              <p className="text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.15em] text-gray-400 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
