"use client";

import { useState } from "react";
import LogoIcon from "../pureComponents/LogoIcon";

const leftLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

const rightLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass =
    "text-[clamp(12px,1.2vw,14px)] text-[var(--text-secondary)] px-[clamp(0.4rem,0.8vw,0.75rem)] py-1.5 rounded-[var(--radius-sm)] hover:text-[var(--text-primary)] hover:bg-white/5 transition-all duration-200 whitespace-nowrap";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-[clamp(1rem,3vw,2rem)] w-full border-b border-[var(--border)] bg-[rgba(10,10,15,0.85)] backdrop-blur-md `}
    >
      {/* Desktop */}
      <nav className="max-md:hidden  grid grid-cols-[1fr_auto_1fr] items-center gap-[clamp(0.5rem,2vw,1rem)] w-full  h-[clamp(52px,6vw,68px)]">
        {/* Left links */}
        <div className="flex items-center 0 gap-10">
          {leftLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Center — Logo */}
        <a href="#" className="hidden md:flex justify-center">
          <LogoIcon />
        </a>

        {/* Right links + CV */}
        <div className="flex items-center justify-end gap-1">
          {rightLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            download
            className="ml-2 text-[clamp(11px,1.1vw,13px)] font-medium text-white bg-[var(--accent)] px-[clamp(0.5rem,1.2vw,1rem)] py-[0.45rem] rounded-[var(--radius-sm)] hover:bg-[var(--accent-hover)] hover:-translate-y-px transition-all duration-200 whitespace-nowrap"
          >
            Download CV
          </a>
        </div>
      </nav>

      {/* Mobile nav */}
      <nav className="hidden items-center h-[68px]">
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
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
