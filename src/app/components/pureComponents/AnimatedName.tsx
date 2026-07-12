"use client";

import { useState, useEffect } from "react";

const names = ["Ignacio", "Nacho"];

export function AnimatedName() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState(names[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % names.length);
        setIsAnimating(false);
      }, 300);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setDisplayed(names[index]);
  }, [index]);

  return (
    <span
      className="inline-block text-[var(--accent)] transition-all duration-300"
      style={{
        opacity: isAnimating ? 0 : 1,
        transform: isAnimating ? "translateY(-8px)" : "translateY(0px)",
      }}
    >
      {displayed}
    </span>
  );
}
