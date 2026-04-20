export default function AboutSection() {
  return (
    <section id="about" className="bg-white pb-0 pt-20 sm:pt-24">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <h2 className="mb-7 text-3xl font-bold tracking-tight text-navy sm:text-[2.5rem]">
          About us
        </h2>
        <p className="mb-5 text-[15px] leading-[1.75] text-gray-500">
          Ag.oroi is a Mount Athos pilgrimage project founded by people devoted to the ultimate
          Orthodox tradition and Orthodox theology, offering travelers an unmatched sacred experience.
        </p>
        <p className="mb-0 text-[15px] italic leading-relaxed text-gray-400">
          The world of Mount Athos — Holy Mountain, Oros, Athos
        </p>
      </div>

      {/* Dark banner with wave-in */}
      <div className="mt-14">
        <div className="relative leading-[0]">
          <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none" className="block h-[24px] w-full sm:h-[30px]">
            <path d="M0 40C360 0 720 30 1080 10C1260 0 1380 20 1440 15V40H0Z" fill="#0d1b3e" />
          </svg>
        </div>
        <div className="bg-navy py-9 sm:py-10">
          <p className="text-center text-lg font-semibold tracking-[0.06em] text-gold sm:text-xl">
            a journey beyond coincidence
          </p>
        </div>
        <div className="relative leading-[0]">
          <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none" className="block h-[24px] w-full sm:h-[30px]">
            <path d="M0 0C360 35 720 5 1080 25C1260 35 1380 10 1440 20V0H0Z" fill="#0d1b3e" />
          </svg>
        </div>
      </div>
    </section>
  );
}
