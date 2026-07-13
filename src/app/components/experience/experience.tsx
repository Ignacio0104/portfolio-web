"use client";

import { translations } from "@/i18/translations";
import { useTranslation } from "@/i18/useTranslations";
import { useState, useRef } from "react";

export const experiences = [
  {
    company: "Globant",
    // Adjust these to the real start date. endDate: null = still employed ("Present")
    startDate: "2022-03-01",
    endDate: null,
    employmentType: "full-time",
    location: "Buenos Aires, Argentina",
    roles: [
      {
        title: "uiLeaderTitle",
        client: "Disney",
        period: "uiLeaderPeriod",
        modality: "hybrid",
        bullets: [
          "Oversee team operations, prioritizing the development backlog and assigning tickets to ensure project milestones and deadlines are met.",
          "Serve as the primary technical liaison for clients, facilitating high-level discussions on release planning, scope definition, and delivery timelines.",
          "Spearhead the integration of AI-driven tools and workflows across development cycles, managing configuration, implementation, and governance.",
          "Act as the internal subject matter expert, training and coaching team members on leveraging AI to accelerate development.",
          "Provide comprehensive technical guidance across diverse technology stacks, assisting team members with cross-functional challenges.",
          "Partner with stakeholders to define and architect future-proof solutions, balancing delivery needs with long-term scalability.",
        ],
        tags: ["AI", "Leadership", "Angular", "Node.js"],
      },
      {
        title: "uiWebTitle",
        client: "Disney",
        period: "uiWebPeriod",
        modality: "hybrid",
        bullets: [
          "Developed and maintained multiple interconnected web pages with complex workflows, ensuring alignment with client requirements.",
          "Implemented and maintained a suite of reusable components within the company's internal library to drive consistency and development speed.",
          "Successfully integrated diverse backend resources and APIs to provide seamless data flow across enterprise front-end applications.",
          "Demonstrated application progress and validated functional requirements through consistent bi-weekly stakeholder meetings.",
        ],
        tags: ["Angular", "Jasmine", "TypeScript", "RxJS"],
      },
      {
        title: "uiOracleTitle",
        client: "Pernod Ricard",
        period: "uiOraclePeriod",
        modality: "hybrid",
        bullets: [
          "Analyzed and resolved issues for JD Edwards users through an incident ticket system.",
          "Developed a deep understanding of the client's business processes.",
          "Conducted monthly analysis and reporting on the flow, status, and backlog of all processed tickets.",
        ],
        tags: ["JD Edwards", "Oracle"],
      },
    ],
  },
  {
    company: "Freelance Developer",
    // Adjust these to the real start date. endDate: null = still active ("Present")
    startDate: "2022-01-01",
    endDate: null,
    employmentType: "part-time",
    location: "unitedStates",
    roles: [
      {
        title: "fullStackTitle",
        client: null,
        period: "fullStackPeriod",
        modality: "remote",
        bullets: [
          "Perform both front-end and back-end development tasks to create dynamic, user-friendly web applications.",
          "Ensure every component of the web application is responsive and accessible across various devices and platforms.",
          "Apply thoughtful design and architecture principles to ensure scalability, performance, and maintainability.",
        ],
        tags: ["React.js", "C#", "Node.js", "TypeScript"],
      },
    ],
  },
];

/**
 * Calculates a human-readable duration ("X yrs Y mos") between a start
 * date and an end date (defaults to "now" when endDate is null/undefined).
 */
function calculateDuration(
  translateFx: (module: keyof typeof translations, key: string) => string,
  startDate: string,
  endDate?: string | null,
) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (end.getDate() < start.getDate()) {
    months -= 1;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years < 0) {
    years = 0;
    months = 0;
  }

  const parts: string[] = [];

  if (years > 0) {
    parts.push(
      `${years} ${years === 1 ? translateFx("general", "year") : translateFx("general", "years")}`,
    );
  }

  if (months > 0 || years === 0) {
    parts.push(
      `${months} ${months === 1 ? translateFx("general", "month") : translateFx("general", "months")}`,
    );
  }

  return parts.join(" ");
}

/**
 * "full-time" -> "Full-time", "part-time" -> "Part-time"
 */
function formatEmploymentType(employmentType: string) {
  return employmentType
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("-");
}

function AnimatedPanel({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        maxHeight: isOpen ? (ref.current?.scrollHeight ?? 1000) : 0,
        overflow: "hidden",
        transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
}

export default function Experience() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const { translate } = useTranslation();

  const toggle = (key: string) =>
    setExpanded((prev) => (prev === key ? null : key));

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center py-20 px-8 max-sm:px-5"
    >
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Heading */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.12em] uppercase text-[var(--accent)] bg-[rgba(79,142,247,0.1)] border border-[rgba(79,142,247,0.2)] px-3 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
            {translate("experience", "eyebrow")}
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            {translate("experience", "heading")}
          </h2>
        </div>

        {/* Experience groups */}
        <div className="flex flex-col gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12"
            >
              {/* Left — company info */}
              <div className="flex flex-col gap-1 md:pt-2">
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  {exp.company}
                </span>
                <span className="text-xs text-[var(--text-secondary)]">
                  {formatEmploymentType(exp.employmentType)} ·{" "}
                  {calculateDuration(translate, exp.startDate, exp.endDate)}
                </span>
                <span className="text-xs text-[var(--text-muted)]">
                  {translate("general", exp.location)}
                </span>
              </div>

              {/* Right — roles */}
              <div className="flex flex-col gap-3">
                {exp.roles.map((role, i) => {
                  const key = `${exp.company}-${i}`;
                  const isOpen = expanded === key;

                  return (
                    <div
                      key={i}
                      className="border border-[var(--border)] rounded-xl overflow-hidden transition-colors duration-300"
                      style={{
                        background: isOpen
                          ? "var(--bg-card)"
                          : "var(--bg-secondary)",
                      }}
                    >
                      {/* Pill header */}
                      <button
                        onClick={() => toggle(key)}
                        className="w-full cursor-pointer flex items-center justify-between px-5 py-3.5 text-left transition-colors duration-200 hover:bg-white/5"
                      >
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                          <span className="text-sm font-semibold text-[var(--text-primary)]">
                            {translate("experience", role.title)}
                          </span>
                          {role.client && (
                            <>
                              <span className="text-[var(--text-muted)] text-xs">
                                ·
                              </span>
                              <span className="text-sm text-[var(--accent)] font-medium">
                                {role.client}
                              </span>
                            </>
                          )}
                          <span className="text-[var(--text-muted)] text-xs">
                            ·
                          </span>
                          <span className="text-xs text-[var(--text-secondary)]">
                            {translate("experience", role.period)}
                          </span>
                        </div>

                        {/* Chevron */}
                        <svg
                          className="flex-shrink-0 ml-4 transition-transform duration-300"
                          style={{
                            transform: isOpen
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          }}
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M4 6l4 4 4-4"
                            stroke="var(--text-muted)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {/* Animated expanded content */}
                      <AnimatedPanel isOpen={isOpen}>
                        <div className="px-5 pb-5 border-t border-[var(--border)]">
                          <p className="text-xs text-[var(--text-muted)] mt-3 mb-4">
                            {role.modality}
                          </p>

                          <ul className="flex flex-col gap-2 mb-5">
                            {role.bullets.map((b, j) => (
                              <li
                                key={j}
                                className="flex gap-3 text-sm text-[var(--text-secondary)] leading-relaxed"
                              >
                                <span className="mt-2 w-1 h-1 rounded-full bg-[var(--accent)] flex-shrink-0" />
                                {b}
                              </li>
                            ))}
                          </ul>

                          {role.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {role.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs font-medium text-[var(--accent)] bg-[rgba(79,142,247,0.08)] border border-[rgba(79,142,247,0.15)] px-2.5 py-1 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </AnimatedPanel>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="https://www.linkedin.com/in/ignacio-smirlian/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 group"
          >
            More information on LinkedIn
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path
                d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
