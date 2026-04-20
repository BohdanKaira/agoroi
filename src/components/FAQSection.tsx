"use client";

import { useState } from "react";
import { faqItems } from "@/data/site-data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-navy sm:text-[2.5rem]">
          FAQs
        </h2>

        <div className="space-y-0">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`border-b border-gray-100 transition-colors ${isOpen ? "bg-gray-50/50" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-start justify-between gap-5 px-1 py-5 text-left sm:py-6"
                >
                  <span className="text-[14px] font-semibold leading-relaxed text-navy sm:text-[15px]">
                    {item.question}
                  </span>
                  <div
                    className={`mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen ? "bg-navy text-white rotate-180" : "bg-gray-100 text-navy/40"
                    }`}
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-1 pb-6 text-[13px] leading-[1.8] text-gray-400">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
