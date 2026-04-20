import { reviews } from "@/data/site-data";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative bg-navy py-24 sm:py-28">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,164,75,0.04)_0%,_transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-white sm:text-[2.5rem]">
          Reviews
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="group rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.06]"
            >
              {/* Quote mark */}
              <svg className="mb-4 h-6 w-6 text-gold/40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>

              <p className="mb-5 text-[13px] leading-[1.75] text-white/50">
                {r.text}
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[11px] font-bold text-white/60">
                  {r.name[0]}
                </div>
                <span className="text-[13px] font-semibold text-white/80">{r.name}</span>
              </div>
            </div>
          ))}

          {/* Instagram highlights block */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-gold/20 bg-gold/[0.05] p-7 text-center backdrop-blur-sm transition-all duration-300 hover:border-gold/30 hover:bg-gold/[0.08]">
            <svg className="mb-4 h-8 w-8 text-gold/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <p className="mb-1 text-[13px] font-semibold text-gold">
              More feedback can be
            </p>
            <p className="mb-5 text-[13px] font-semibold text-gold">
              found in our Instagram highlights
            </p>
            <a
              href="#"
              className="inline-block rounded-full border border-gold/40 px-5 py-2 text-[12px] font-bold tracking-wide text-gold transition-all hover:bg-gold hover:text-navy hover:shadow-md hover:shadow-gold/20"
            >
              @ag.oroi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
