"use client";

import { contactLinks } from "@/data/site-data";

const iconPaths: Record<string, string> = {
  phone:
    "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
  whatsapp:
    "M12 2C6.477 2 2 6.477 2 12c0 1.76.46 3.413 1.265 4.848L2 22l5.265-1.265A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z",
  email:
    "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  facebook:
    "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z",
  vk: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5.07 13.28c-.04.06-.22.28-.22.28s-.3.32-.56.5c-.54.36-.78.18-1.62-.5-.68-.54-1.3-1.56-1.72-1.56-.1 0-.28.1-.28.56v.92c0 .36-.12.58-.96.58-1.42 0-3-1.06-4.14-2.92C6.14 10.84 5.72 9 5.72 8.72c0-.14.06-.28.32-.28h1.14c.32 0 .4.12.52.42.56 1.44 1.56 2.76 1.92 2.76.14 0 .2-.06.2-.44V9.6c-.04-.72-.38-.78-.38-1.04 0-.14.1-.26.28-.26h1.78c.24 0 .32.12.32.4v2.16c0 .24.1.32.16.32.14 0 .26-.08.52-.36.82-.94 1.4-2.38 1.4-2.38.08-.14.2-.28.48-.28h1.14c.34 0 .42.18.34.42-.14.56-1.58 2.74-1.58 2.74-.12.2-.16.3 0 .52.12.16.5.52.76.84.48.58.86 1.06.96 1.4.1.34-.06.52-.4.52h-1.14c-.32 0-.48-.16-.72-.42z",
};

const inputClasses =
  "w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-5 py-4 text-[14px] text-white placeholder-white/25 outline-none transition-all focus:border-gold/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-gold/30";

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-navy py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,164,75,0.03)_0%,_transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: form */}
          <div>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-white sm:text-[2rem]">
              Take the first step
            </h2>
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-gold sm:text-[2rem]">
              on your journey
            </h2>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full name" className={inputClasses} />
              <input type="tel" placeholder="Phone number" className={inputClasses} />
              <input type="email" placeholder="Email" className={inputClasses} />
              <textarea rows={4} placeholder="Your enquiry" className={`${inputClasses} resize-none`} />
              <button
                type="submit"
                className="w-full rounded-full bg-gold py-4 text-[13px] font-bold uppercase tracking-wider text-navy shadow-lg shadow-gold/20 transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/25"
              >
                Send enquiry
              </button>
            </form>
          </div>

          {/* Right: contact links */}
          <div>
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-white sm:text-[2rem]">
              Contact us
            </h2>

            <div className="space-y-3.5">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:border-gold/25 hover:bg-white/[0.06]"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/[0.06] transition-colors group-hover:bg-gold/15">
                    <svg className="h-[18px] w-[18px] text-gold/70 transition-colors group-hover:text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={iconPaths[link.icon]} />
                    </svg>
                  </div>
                  <span className="text-[14px] font-medium text-white/70 transition-colors group-hover:text-white/90">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
