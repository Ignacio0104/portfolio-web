"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { certificates } from "../education/education";
import { experiences } from "../experience/experience";
import { AnimatedName } from "../pureComponents/AnimatedName";

const skills = [
  { label: "Angular", match: ["angular"] },
  { label: "React", match: ["react"] },
  { label: "AI-assisted development", match: ["ai", "artificial"] },
  { label: "Leadership", match: ["leadership"] },
  { label: "RxJS", match: ["rxjs"] },
  { label: "Node.js", match: ["node.js", "node"] },
  { label: "Flutter", match: ["flutter"] },
  { label: "C# .NET", match: ["c#", ".net", "net"] },
];

function normalize(str: string) {
  return str.toLowerCase();
}

function matchesSkill(tag: string, matchKeys: string[]) {
  const n = normalize(tag);
  return matchKeys.some((k) => n.includes(k));
}

export default function About() {
  const [activeSkill, setActiveSkill] = useState<(typeof skills)[0] | null>(
    null,
  );

  useEffect(() => {
    if (activeSkill) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeSkill]);

  const matchedCerts = activeSkill
    ? certificates.filter((c) =>
        c.skills.some((s) => matchesSkill(s, activeSkill.match)),
      )
    : [];

  const matchedExperiences = activeSkill
    ? experiences
        .map((exp) => ({
          ...exp,
          roles: exp.roles.filter((r) =>
            r.tags.some((t) => matchesSkill(t, activeSkill.match)),
          ),
        }))
        .filter((exp) => exp.roles.length > 0)
    : [];

  return (
    <section id="about" className="h-screen flex items-center px-8 max-sm:px-5">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-2 max-[900px]:grid-cols-1 gap-16 max-[900px]:gap-10 items-center">
        {/* Left — intro */}
        <div className="flex flex-col gap-6">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--accent)]">
            About
          </span>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold tracking-[-0.02em] leading-[1.15] text-[var(--text-primary)]">
            Hi! My name is <AnimatedName />
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-[1.8]">
            I&apos;m an experienced web developer currently working on a
            high-profile project at Disney. My expertise lies in frontend
            development with Angular and React, and I&apos;m equally proficient
            in backend technologies like C# .NET and Node.js, as well as mobile
            development with Flutter.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-8">
          <blockquote className="border-l-2 border-[var(--accent)] pl-6 py-1 text-xl italic text-[var(--text-primary)]">
            Knowing the languages isn&apos;t the point — understanding software
            architecture is. That, combined with AI, lets me pivot between
            technologies without missing a beat.
          </blockquote>
          <p className="text-base text-[var(--text-secondary)] leading-[1.7]">
            I pride myself on being a quick learner and a collaborative team
            player. Throughout my career, I&apos;ve consistently demonstrated
            reliability, organization, and creativity — always willing to
            support my colleagues and go the extra mile to achieve team goals.
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <button
                key={skill.label}
                onClick={() => setActiveSkill(skill)}
                className="px-4 py-2 text-sm font-medium rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-pointer"
              >
                {skill.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeSkill && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(8px)",
          }}
          onClick={() => setActiveSkill(null)}
        >
          <div
            className="relative w-full max-w-xl max-h-[80vh] rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)] flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
                <h3 className="text-base font-semibold text-[var(--text-primary)]">
                  {activeSkill.label}
                </h3>
              </div>
              <button
                onClick={() => setActiveSkill(null)}
                className="text-[var(--text-muted)] cursor-pointer hover:text-[var(--text-primary)] transition-colors p-1"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 3l12 12M15 3L3 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto p-6 flex flex-col gap-6">
              {/* Professional Experience */}
              {matchedExperiences.length > 0 && (
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-medium tracking-widest uppercase text-[var(--text-muted)]">
                    Professional Experience
                  </p>
                  {matchedExperiences.map((exp) =>
                    exp.roles.map((role, i) => (
                      <div
                        key={i}
                        className="flex flex-col gap-1.5 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)]"
                      >
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-semibold text-[var(--text-primary)]">
                            {role.title}
                          </span>
                          {role.client && (
                            <>
                              <span className="text-[var(--text-muted)] text-xs">
                                ·
                              </span>
                              <span className="text-sm text-[var(--accent)]">
                                {role.client}
                              </span>
                            </>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                          <span>{exp.company}</span>
                          <span className="text-[var(--text-muted)]">·</span>
                          <span>{role.period}</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {role.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`text-xs px-2 py-0.5 rounded-full border ${
                                matchesSkill(tag, activeSkill.match)
                                  ? "text-[var(--accent)] bg-[rgba(79,142,247,0.1)] border-[rgba(79,142,247,0.25)]"
                                  : "text-[var(--text-muted)] bg-[var(--bg-card)] border-[var(--border)]"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )),
                  )}
                </div>
              )}

              {/* Certificates */}
              {matchedCerts.length > 0 && (
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-medium tracking-widest uppercase text-[var(--text-muted)]">
                    Certificates
                  </p>
                  {matchedCerts.map((cert) => (
                    <a
                      key={cert.title}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[rgba(79,142,247,0.3)] hover:bg-[var(--bg-card)] transition-all duration-200 group"
                    >
                      <div className="relative flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--bg-card)]">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                        <span className="text-sm font-semibold text-[var(--text-primary)] truncate group-hover:text-[var(--accent)] transition-colors">
                          {cert.title}
                        </span>
                        <span className="text-xs text-[var(--text-muted)]">
                          {cert.company} · {cert.hours}h
                        </span>
                        <div className="flex flex-wrap gap-1 mt-0.5">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className={`text-xs px-2 py-0.5 rounded-full border ${
                                matchesSkill(skill, activeSkill.match)
                                  ? "text-[var(--accent)] bg-[rgba(79,142,247,0.1)] border-[rgba(79,142,247,0.25)]"
                                  : "text-[var(--text-muted)] bg-[var(--bg-card)] border-[var(--border)]"
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <svg
                        className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-200"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5"
                          stroke="var(--accent)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              )}

              {/* Empty state */}
              {matchedCerts.length === 0 && matchedExperiences.length === 0 && (
                <p className="text-sm text-[var(--text-muted)] text-center py-8">
                  No certificates or experience found for this skill yet.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
