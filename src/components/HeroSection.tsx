export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy">
      {/* Layered background */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-transparent to-transparent" />

      {/* Decorative glow */}
      <div className="absolute right-[10%] top-1/3 h-[500px] w-[500px] rounded-full bg-gold/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 pt-24 pb-32 lg:px-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_auto]">
          {/* Left: headline */}
          <div className="max-w-xl">
            <div className="mb-6 inline-block rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
              Mount Athos Pilgrimages
            </div>

            <h1 className="mb-6 text-[2.5rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
              Tailor-made
              <br />
              journeys to
              <br />
              <span className="text-gold">Mount Athos</span>
            </h1>

            <p className="mb-10 max-w-md text-[15px] leading-[1.7] text-white/50">
              A fully supported pilgrimage experience from
              arrival to departure — crafted for meaningful travel.
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-[13px] font-bold uppercase tracking-wider text-navy shadow-lg shadow-gold/20 transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/25"
            >
              Book a tour
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Right: emblem */}
          <div className="hidden lg:block">
            <div className="relative flex h-56 w-56 items-center justify-center xl:h-64 xl:w-64">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-white/[0.06]" />
              <div className="absolute inset-3 rounded-full border border-white/[0.04]" />

              {/* Cross / star motif */}
              <svg viewBox="0 0 120 120" className="h-28 w-28 xl:h-32 xl:w-32" fill="none">
                <path d="M60 8L68 48H108L74 72L84 112L60 88L36 112L46 72L12 48H52L60 8Z" fill="white" fillOpacity="0.06" />
                <path d="M60 8L68 48H108L74 72L84 112L60 88L36 112L46 72L12 48H52L60 8Z" stroke="white" strokeOpacity="0.1" strokeWidth="0.5" />
              </svg>

              <div className="absolute flex flex-col items-center gap-0.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/30">
                  Athos
                </span>
                <span className="text-lg font-bold tracking-[0.15em] text-white/70">
                  AG.OROI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative z-10 -mt-px leading-[0]">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-[40px] w-full sm:h-[50px] lg:h-[60px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30C180 60 360 0 540 30C720 60 900 5 1080 30C1260 55 1380 15 1440 30V80H0V30Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
