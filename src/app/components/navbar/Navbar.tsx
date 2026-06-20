"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-8 border-b transition-all duration-200 ${
        scrolled
          ? "bg-[rgba(10,10,15,0.85)] backdrop-blur-md border-[var(--border)]"
          : "border-transparent"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto h-[68px] flex items-center gap-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <span className="w-8 h-8 bg-[var(--accent)] text-white text-[13px] font-bold tracking-wide rounded-[var(--radius-sm)] flex items-center justify-center">
            IS
          </span>
          <span className="text-[15px] font-medium text-[var(--text-primary)] tracking-tight">
            Ignacio Smirlian
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 list-none ml-auto">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--text-secondary)] px-3 py-1.5 rounded-[var(--radius-sm)] hover:text-[var(--text-primary)] hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/cv.pdf"
          download
          className="hidden md:block flex-shrink-0 text-[13px] font-medium text-white bg-[var(--accent)] px-4 py-[0.45rem] rounded-[var(--radius-sm)] hover:bg-[var(--accent-hover)] hover:-translate-y-px transition-all duration-200"
        >
          Download CV
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden ml-auto flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-[22px] h-0.5 bg-[var(--text-primary)] rounded" />
          <span className="block w-[22px] h-0.5 bg-[var(--text-primary)] rounded" />
          <span className="block w-[22px] h-0.5 bg-[var(--text-primary)] rounded" />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col py-4 pb-6 border-t border-[var(--border)] bg-[rgba(10,10,15,0.95)] backdrop-blur-md">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-[var(--text-secondary)] px-4 py-3 hover:text-[var(--text-primary)] transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
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
