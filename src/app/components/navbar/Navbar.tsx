"use client";

import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle = {
    fontSize: "14px",
    color: "var(--text-secondary)",
    padding: "0.375rem 0.75rem",
    borderRadius: "var(--radius-sm)",
    transition: "all 0.2s",
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        paddingLeft: "2rem",
        paddingRight: "2rem",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
        background: scrolled ? "rgba(10,10,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.2s ease",
      }}
    >
      {/* Desktop */}
      <nav
        className="hide-on-mobile"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          height: "68px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {/* Left links */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
          {leftLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Center — Logo */}
        <a href="#" style={{ display: "flex", justifyContent: "center" }}>
          <LogoIcon />
        </a>

        {/* Right links + CV */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "0.25rem",
          }}
        >
          {rightLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            download
            style={{
              marginLeft: "0.5rem",
              fontSize: "13px",
              fontWeight: 500,
              color: "#fff",
              background: "var(--accent)",
              padding: "0.45rem 1rem",
              borderRadius: "var(--radius-sm)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--accent-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--accent)")
            }
          >
            Download CV
          </a>
        </div>
      </nav>

      {/* Mobile */}
      <nav
        className="show-on-mobile"
        style={{
          margin: "0 auto",
          height: "68px",
          display: "none",
          alignItems: "center",
        }}
      >
        <a href="#" style={{ flexShrink: 0 }}>
          <LogoIcon />
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            marginLeft: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "4px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "var(--text-primary)",
                borderRadius: "2px",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="show-on-mobile"
          style={{
            flexDirection: "column",
            paddingTop: "1rem",
            paddingBottom: "1.5rem",
            borderTop: "1px solid var(--border)",
            background: "rgba(10,10,15,0.95)",
            backdropFilter: "blur(12px)",
          }}
        >
          {[...leftLinks, ...rightLinks].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "15px",
                color: "var(--text-secondary)",
                padding: "0.75rem 1rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            download
            style={{
              margin: "0.75rem 1rem 0",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: 500,
              color: "#fff",
              background: "var(--accent)",
              padding: "0.625rem 1rem",
              borderRadius: "var(--radius-sm)",
            }}
          >
            Download CV
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hide-on-mobile { display: grid !important; }
          .show-on-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hide-on-mobile { display: none !important; }
          .show-on-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
