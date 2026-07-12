"use client";

import { useTranslation } from "@/i18/useTranslations";
import Image from "next/image";
import React from "react";

export default function HeroContent() {
  const { translate } = useTranslation();
  return (
    <div className="max-w-[1200px] mx-auto w-full grid grid-cols-2 max-[900px]:grid-cols-1 items-center gap-16 max-[900px]:gap-12 max-[900px]:text-center">
      {/* Left — text content */}
      <div className="flex flex-col gap-6">
        <span className="inline-flex items-center gap-4 text-[12px] font-medium tracking-[0.12em] uppercase text-[var(--accent)] bg-[rgba(79,142,247,0.1)] border border-[rgba(79,142,247,0.2)] px-3 py-1.5 rounded-full w-fit max-[900px]:mx-auto before:content-[''] before:w-1.5 before:h-1.5 before:bg-[var(--accent)] before:rounded-full">
          {translate("hero", "eyebrow")}
        </span>

        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[var(--text-primary)]">
          {translate("hero", "heading1")}{" "}
          <span
            className="bg-cover bg-center bg-clip-text text-transparent"
            style={{
              backgroundImage: "url('/assets/images/background-pattern.jpg')",
              WebkitTextStroke: "1px var(--accent)",
            }}
          >
            {translate("hero", "headingBold")}
          </span>{" "}
          {translate("hero", "heading2")}
        </h1>

        <p className="text-base text-[var(--text-secondary)] leading-[1.7] max-w-[480px] max-[900px]:max-w-full">
          {translate("hero", "subheading")}
        </p>

        <div className="flex gap-3 flex-wrap mt-2 max-[900px]:justify-center">
          <a
            href="#projects"
            className="text-sm font-medium text-white bg-[var(--accent)] px-6 py-[0.65rem] rounded-[var(--radius-sm)] hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 transition-all duration-200"
          >
            {translate("hero", "cta1")}
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-[var(--text-primary)] border border-[var(--border-hover)] px-6 py-[0.65rem] rounded-[var(--radius-sm)] hover:border-[var(--text-muted)] hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-200"
          >
            {translate("hero", "cta2")}
          </a>
        </div>
      </div>

      {/* Right — portrait */}
      <div className="relative flex justify-center items-center max-[900px]:max-w-[360px] max-[900px]:mx-auto">
        <div className="absolute inset-[-24px]  z-0" />
        <Image
          src="/assets/images/profile-pic.webp"
          alt="Ignacio Smirlian"
          width={420}
          height={520}
          className="relative z-10 w-full max-w-[420px] h-auto aspect-[4/5] object-cover rounded-[var(--radius-lg)] grayscale-[20%]"
          priority
        />
      </div>
    </div>
  );
}
