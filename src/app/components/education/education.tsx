"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const education = {
  degree: "Technician in Programming",
  institution: "UTN — Universidad Tecnológica Nacional",
  period: "2021 - Present",
};

const certificates = [
  {
    title: "Next JS: The Complete Developer's Guide",
    hours: 15.5,
    link: "https://www.udemy.com/certificate/UC-5950a566-367e-4aa9-80b6-4d5df78094dc/",
    skills: ["Next JS", "React", "Authentication", "Typescript"],
    company: "Udemy",
    image: "/assets/images/react-adv-certificate.png",
  },
  {
    title: "Angular - The Complete Guide",
    hours: 37,
    link: "https://www.udemy.com/certificate/UC-77dc4770-9277-42aa-b39d-db861461db3f/",
    skills: [
      "Directives",
      "Dep. Injection",
      "Services",
      "NgRx",
      "HTTP",
      "Routing",
    ],
    company: "Udemy",
    image: "/assets/images/react-adv-certificate.png",
  },
  {
    title: ".NET 7 Web API & Entity Framework Jumpstart",
    hours: 22,
    link: "https://www.udemy.com/certificate/UC-39ca2d56-8850-482e-abe3-3b3c09fee0f2/",
    skills: [".NET(7,6,5)", "Entity Framework", "Mvc", "API", "JWT"],
    company: "Udemy",
    image: "/assets/images/react-adv-certificate.png",
  },
  {
    title: ".NET 5 Web API & Entity Framework",
    hours: 3,
    link: "https://www.udemy.com/certificate/UC-d4eebf6b-801e-4481-8f0e-c67d8dae81de/",
    skills: ["C#", ".NET", "Entity Framework", "SQL", "HTTP"],
    company: "Udemy",
    image: "/assets/images/react-adv-certificate.png",
  },
  {
    title: "Search Engine Optimization Tutorial",
    hours: 37,
    link: "https://www.udemy.com/certificate/UC-3645053c-bd07-4a8a-bfcf-f9625665cc3f/",
    skills: ["SEO", "Google Analytics"],
    company: "Udemy",
    image: "/assets/images/react-adv-certificate.png",
  },
  {
    title: "Flutter - Beginners Course",
    hours: 2.5,
    link: "https://www.udemy.com/certificate/UC-f4a2376b-cf78-44e7-8e84-bb082b850947/",
    skills: ["Flutter", "Dart", "Android Studio"],
    company: "Udemy",
    image: "/assets/images/react-adv-certificate.png",
  },
  {
    title: "Master React Hooks Development",
    hours: 6,
    link: "https://udemy.com/certificate/UC-39e77c72-b6aa-42ce-b7af-bc843e4a85bd/",
    skills: ["Hooks", "Redux", "Reducers"],
    company: "Udemy",
    image: "/assets/images/react-adv-certificate.png",
  },
  {
    title: "React Query",
    hours: 8,
    link: "https://www.udemy.com/certificate/UC-0cdd24dd-e10d-487e-b49e-17692076ade0/",
    skills: [
      "Queries",
      "Mutation",
      "Pre-Fetching",
      "Authentication",
      "Testing",
    ],
    company: "Udemy",
    image: "/assets/images/react-adv-certificate.png",
  },
  {
    title: "React Testing Library and Jest",
    hours: 7.5,
    link: "https://www.udemy.com/certificate/UC-a029f12b-c221-4ca6-844e-78c647d9b757/",
    skills: ["Mock", "Query", "Matchers", "Handlers", "SWR", "Testing"],
    company: "Udemy",
    image: "/assets/images/react-adv-certificate.png",
  },
  {
    title: "Angular Core Deep Dive",
    hours: 9,
    link: "https://www.udemy.com/certificate/UC-b4053e2a-a22a-4391-b9d5-a5ba4135c69f/",
    skills: [
      "Components",
      "Content projection",
      "Dependency Injection",
      "Lifecycle",
    ],
    company: "Udemy",
    image: "/assets/images/react-adv-certificate.png",
  },
  {
    title: "Rest Api's with ASP.NET & C#",
    hours: 4.5,
    link: "https://www.udemy.com/certificate/UC-78832f92-0021-4e57-9600-98bf472f79e1/",
    skills: ["Rest Api's", "C#", "Azure", ".NET"],
    company: "Udemy",
    image: "/assets/images/react-adv-certificate.png",
  },
  {
    title: "Scrum Fundamentals Certified",
    hours: 1,
    link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=909115",
    skills: ["Scrum Methodology"],
    company: "SCRUMstudy",
    image: "/assets/images/react-adv-certificate.png",
  },
  {
    title: "Complete React Hooks Course",
    hours: 8,
    link: "https://www.udemy.com/certificate/UC-d42fd5d0-48ff-4a4a-8472-99fa5753ea1a/",
    skills: ["Components Lifecycle", "React Router", "Redux", "Hooks Testing"],
    company: "Udemy",
    image: "/assets/images/react-adv-certificate.png",
  },
  {
    title: "Testing React with Jest and RTL",
    hours: 8,
    link: "https://www.udemy.com/certificate/UC-148d4b8a-f75d-4475-9ffd-24cef5848f26/",
    skills: ["TDD", "Jest-DOM", "Unit testing", "Mock Service Worker"],
    company: "Udemy",
    image: "/assets/images/react-adv-certificate.png",
  },
  {
    title: "Super Pack JavaScript, Canvas and Videogames JS",
    hours: 25,
    link: "https://www.udemy.com/certificate/UC-fd7fa42d-e67e-4db1-bfcf-947585db7716/",
    skills: ["Canvas", "Functions", "Loops", "DOM"],
    company: "Udemy",
    image: "/assets/images/react-adv-certificate.png",
  },
  {
    title: "HTML & CSS Intermediate",
    hours: 17,
    link: "https://community.open-bootcamp.com/user/ignacio_smirlian/certificaciones/b4f05fd8-348f-46c6-b75f-beac0d37c66a",
    skills: ["Selectors", "Bootstrap", "Grid", "Labels"],
    company: "OpenBootcamp",
    image: "/assets/images/react-adv-certificate.png",
  },
  {
    title: "React JS Advanced",
    hours: 30,
    link: "https://community.open-bootcamp.com/user/ignacio_smirlian/certificaciones/7b8ffe0b-f850-405b-a2a9-2ed2ba25f826",
    skills: ["Custom Hooks", "PWA", "Testing", "TypeScript"],
    company: "OpenBootcamp",
    image: "/assets/images/react-adv-certificate.png",
  },
  {
    title: "React JS Intermediate",
    hours: 30,
    link: "https://community.open-bootcamp.com/user/ignacio_smirlian/certificaciones/d99c79cd-25c2-4888-89b0-6fa3de3cc426",
    skills: ["Hooks", "Events", "Routing", "HTTP Requests", "Async"],
    company: "OpenBootcamp",
    image: "/assets/images/react-adv-certificate.png",
  },
  {
    title: "JavaScript Basic",
    hours: 15,
    link: "https://community.open-bootcamp.com/user/ignacio_smirlian/certificaciones/8ce5a151-111d-4a99-af2f-0619f9109402",
    skills: ["Variables", "POO", "Loops"],
    company: "OpenBootcamp",
    image: "/assets/images/react-adv-certificate.png",
  },
  {
    title: "Git Intermediate",
    hours: 16,
    link: "https://community.open-bootcamp.com/user/ignacio_smirlian/certificaciones/80007d33-6523-490e-9f1d-ccad53e04bcf",
    skills: ["Local Repositories", "Merge/Conflicts", "Gitflow", "CI/CD"],
    company: "OpenBootcamp",
    image: "/assets/images/react-adv-certificate.png",
  },
];

function CertificateRow({ cert }: { cert: (typeof certificates)[0] }) {
  return (
    <a
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
        <span className="text-sm font-semibold text-[var(--text-primary)] truncate group-hover:text-[var(--accent)] transition-colors duration-200">
          {cert.title}
        </span>
        <span className="text-xs text-[var(--text-muted)]">
          {cert.company} · {cert.hours}h
        </span>
        <div className="flex flex-wrap gap-1 mt-0.5">
          {cert.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="text-xs text-[var(--accent)] bg-[rgba(79,142,247,0.08)] border border-[rgba(79,142,247,0.15)] px-2 py-0.5 rounded-full"
            >
              {skill}
            </span>
          ))}
          {cert.skills.length > 3 && (
            <span className="text-xs text-[var(--text-muted)] py-0.5">
              +{cert.skills.length - 3}
            </span>
          )}
        </div>
      </div>
      <svg
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
  );
}

export default function Education() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col justify-center py-20 px-8 max-sm:px-5"
    >
      <div className="max-w-[860px] mx-auto w-full flex flex-col gap-4 md:gap-12">
        {/* Heading */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.12em] uppercase text-[var(--accent)] bg-[rgba(79,142,247,0.1)] border border-[rgba(79,142,247,0.2)] px-3 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
            Education
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Learning path
          </h2>
        </div>

        {/* University */}
        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-widest uppercase text-[var(--text-muted)]">
            University
          </p>
          <div className="flex items-center gap-5 p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)]">
            {/* Icon */}
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[rgba(79,142,247,0.1)] border border-[rgba(79,142,247,0.2)] flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path
                  d="M11 2L2 7l9 5 9-5-9-5zM2 15l9 5 9-5M2 11l9 5 9-5"
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-base font-semibold text-[var(--text-primary)]">
                {education.degree}
              </span>
              <span className="text-sm text-[var(--accent)]">
                {education.institution}
              </span>
              <span className="text-xs text-[var(--text-muted)]">
                {education.period}
              </span>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-widest uppercase text-[var(--text-muted)]">
            Certificates
          </p>
          <div className="flex flex-col gap-2">
            {certificates.slice(0, 3).map((cert) => (
              <CertificateRow key={cert.title} cert={cert} />
            ))}
            <button
              onClick={() => setModalOpen(true)}
              className="mt-1 flex items-center justify-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] border border-[var(--border)] hover:border-[rgba(79,142,247,0.3)] rounded-xl py-3 transition-all duration-200 group"
            >
              View all {certificates.length} certificates
              <svg
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M2 7h10M7 2l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(8px)",
          }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[80vh] rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)] flex-shrink-0">
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                All Certificates
                <span className="ml-2 text-sm font-normal text-[var(--text-muted)]">
                  ({certificates.length})
                </span>
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-200 p-1"
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
            <div className="overflow-y-auto p-6 flex flex-col gap-2">
              {certificates.map((cert) => (
                <CertificateRow key={cert.title} cert={cert} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
