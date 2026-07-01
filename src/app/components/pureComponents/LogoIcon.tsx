"use client";

import { useEffect, useState } from "react";

const NAME = "Nacho Smirlian";
const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export default function LogoIcon() {
  const [displayed, setDisplayed] = useState<(string | null)[]>(
    Array(NAME.length).fill(null),
  );

  useEffect(() => {
    let frame: ReturnType<typeof setTimeout>;

    function build() {
      let iteration = 0;
      // how many chars are "visible" (scrambling or resolved)
      let visible = 0;
      const revealStep = 6; // frames before revealing next char
      const scrambleFrames = 8; // how long each char scrambles before resolving

      function buildFrame() {
        // reveal one new char every revealStep frames
        const newVisible = Math.min(
          NAME.length,
          Math.floor(iteration / revealStep) + 1,
        );
        if (newVisible > visible) visible = newVisible;

        setDisplayed(
          NAME.split("").map((char, i) => {
            if (char === " ") return i < visible ? " " : null;
            if (i >= visible) return null;
            const resolveAt = i * revealStep + scrambleFrames;
            if (iteration >= resolveAt) return char;
            return randomChar();
          }),
        );

        iteration++;

        const totalFrames = NAME.length * revealStep + scrambleFrames;
        if (iteration <= totalFrames) {
          frame = setTimeout(buildFrame, 40);
        } else {
          frame = setTimeout(() => destroy(), 2000);
        }
      }

      buildFrame();
    }

    function destroy() {
      let iteration = 0;
      const vanishStep = 6;
      const scrambleFrames = 8;
      let visible = NAME.length;

      function destroyFrame() {
        const newVisible = Math.max(
          0,
          NAME.length - Math.floor(iteration / vanishStep) - 1,
        );
        if (newVisible < visible) visible = newVisible;

        setDisplayed(
          NAME.split("").map((char, i) => {
            if (i > visible) return null;
            if (i === visible) {
              const scrambleAt = (NAME.length - 1 - i) * vanishStep;
              if (iteration >= scrambleAt + scrambleFrames) return null;
              return randomChar();
            }
            if (char === " ") return " ";
            return char;
          }),
        );

        iteration++;

        const totalFrames = NAME.length * vanishStep + scrambleFrames;
        if (iteration <= totalFrames) {
          frame = setTimeout(destroyFrame, 40);
        } else {
          frame = setTimeout(() => build(), 600);
        }
      }

      destroyFrame();
    }

    build();
    return () => clearTimeout(frame);
  }, []);

  return (
    <span
      style={{
        fontFamily: "JetBrains Mono, Fira Code, monospace",
        fontSize: "15px",
        fontWeight: 500,
        letterSpacing: "0.04em",
        minWidth: `${NAME.length}ch`,
        display: "inline-block",
      }}
    >
      {displayed.map((char, i) => (
        <span
          key={i}
          style={{
            color: char === NAME[i] ? "var(--text-primary)" : "var(--accent)",
            visibility: char === null ? "hidden" : "visible",
            transition: "color 0.1s",
          }}
        >
          {char ?? NAME[i]}
        </span>
      ))}
    </span>
  );
}
