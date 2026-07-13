"use client";

import { useState } from "react";
import LogoIcon from "../pureComponents/LogoIcon";
import { useLang } from "@/i18/context";
import { useTranslation } from "@/i18/useTranslations";

const leftLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

const rightLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const flags = {
  ar: (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="14" rx="2" fill="white" />
      <rect width="20" height="4.67" fill="#74ACDF" />
      <rect y="9.33" width="20" height="4.67" fill="#74ACDF" />
      <circle
        cx="10"
        cy="7"
        r="1.8"
        fill="#F6B40E"
        stroke="#85340A"
        strokeWidth="0.3"
      />
    </svg>
  ),
  us: (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="14" rx="2" fill="white" />
      <rect width="20" height="1.08" y="0" fill="#B22234" />
      <rect width="20" height="1.08" y="2.15" fill="#B22234" />
      <rect width="20" height="1.08" y="4.31" fill="#B22234" />
      <rect width="20" height="1.08" y="6.46" fill="#B22234" />
      <rect width="20" height="1.08" y="8.62" fill="#B22234" />
      <rect width="20" height="1.08" y="10.77" fill="#B22234" />
      <rect width="20" height="1.08" y="12.92" fill="#B22234" />
      <rect width="8" height="7.54" fill="#3C3B6E" />
    </svg>
  ),
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLang();
  const { translate } = useTranslation();

  const linkClass =
    "text-[clamp(12px,1.2vw,14px)] lg:text-[clamp(17px,1.3vw,15px)] text-[var(--text-secondary)] px-[clamp(0.4rem,0.8vw,0.75rem)] py-1.5 rounded-[var(--radius-sm)] hover:text-[var(--text-primary)] hover:bg-white/5 transition-all duration-200 whitespace-nowrap";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-[clamp(1rem,3vw,2rem)] w-full border-b border-[var(--border)] bg-[rgba(10,10,15,0.85)] backdrop-blur-md `}
    >
      {/* Desktop */}
      <nav className="max-md:hidden grid grid-cols-[1fr_auto_1fr] items-center gap-[clamp(0.5rem,2vw,1rem)] w-full  h-[clamp(52px,6vw,68px)]">
        {/* Left links */}
        <div className="flex items-center gap-10">
          {leftLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {translate("navbar", link.label.toLowerCase())}
            </a>
          ))}
        </div>

        {/* Center — Logo */}
        <a href="#" className="hidden md:flex justify-center">
          <LogoIcon />
        </a>

        {/* Right links + CV */}
        <div className="flex items-center justify-end gap-10">
          {rightLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {translate("navbar", link.label.toLowerCase())}
            </a>
          ))}
          <a
            href="/cv.pdf"
            download
            className="ml-2 text-[clamp(11px,1.1vw,13px)] font-medium lg:font-large text-white bg-[var(--accent)] px-[clamp(0.5rem,1.2vw,1rem)] py-[0.45rem] rounded-[var(--radius-sm)] hover:bg-[var(--accent-hover)] hover:-translate-y-px transition-all duration-200 whitespace-nowrap"
          >
            {translate("navbar", "download")}
          </a>
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="cursor-pointer inline-flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] border border-[var(--border)] hover:border-[rgba(79,142,247,0.3)] px-3 py-1.5 rounded-md transition-all duration-200"
          >
            {lang === "en" ? flags.ar : flags.us}
            {lang === "en" ? "ES" : "EN"}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <nav className="flex md:hidden items-center h-[55px]">
        <a href="#" className="flex-shrink-0">
          <LogoIcon />
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="ml-auto flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-[22px] h-0.5 bg-[var(--text-primary)] rounded"
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col pt-4 pb-6 border-t border-[var(--border)] bg-[rgba(10,10,15,0.95)] backdrop-blur-md">
          {[...leftLinks, ...rightLinks].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[15px] text-[var(--text-secondary)] px-4 py-3 hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            download
            className="mx-4 mt-3 text-center text-sm font-medium text-white bg-[var(--accent)] px-4 py-2.5 rounded-[var(--radius-sm)] hover:bg-[var(--accent-hover)] transition-colors duration-200"
          >
            {translate("navbar", "download")}
          </a>
        </div>
      )}
    </header>
  );
}
