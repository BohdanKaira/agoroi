import { navLinks } from "@/data/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark">
      {/* Wave transition */}
      <div className="relative -mt-px leading-[0]">
        <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none" className="block h-[20px] w-full sm:h-[28px]">
          <path d="M0 40C360 10 720 30 1080 15C1260 8 1380 25 1440 20V40H0Z" fill="#080e1e" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 lg:px-10">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <a href="#home" className="text-lg font-bold text-white">
            Ag<span className="text-gold">.</span>oroi
          </a>

          <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[12px] font-medium tracking-wide text-white/30 transition-colors hover:text-white/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-[11px] tracking-wide text-white/20">
            &copy; {year} Ag.oroi
          </p>
        </div>
      </div>
    </footer>
  );
}
