"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Strangio Nutrición",
    description:
      "Portfolio website for Lic. Antonella Strangio, a clinical nutritionist specialized in diabetes and weight management. Features service breakdown, methodology steps, and WhatsApp booking integration.",
    date: "Jun 2026",
    technologies: ["Next.js", "TypeScript", "React"],
    role: "Full Stack",
    link: "https://strangionutricion.com/",
    image: "/assets/images/strangio-nutricion.png",
    wip: false,
  },
  {
    title: "Expense Tracker",
    description:
      "Helps users organize finances through highly interactive sections, visualizing incomes and expenses effortlessly. Released as a PWA for mobile.",
    date: "Jul 2023",
    technologies: ["React", "JS", "SCSS", "Firebase"],
    role: "Frontend",
    link: "https://expense-application-tracker.netlify.app/",
    image: "/assets/images/pwaApp.jpg",
    wip: true,
  },
  {
    title: "AmbienceHUB",
    description:
      "Provides an appropriate ambience for long study/work sessions. Connected to Firebase for persistent data, fully mobile responsive.",
    date: "Dec 2022",
    technologies: ["React", "JS", "HTML", "CSS"],
    role: "Frontend",
    link: "https://ambiencemusichub.netlify.app/",
    image: "/assets/images/ambience-hub.jpg",
    wip: false,
  },
  {
    title: "Rock Paper Scissors Lizard Spock",
    description:
      "Fully responsive frontend challenge focused on design, animation, and media queries.",
    date: "May 2023",
    technologies: ["React", "TS", "HTML", "CSS"],
    role: "Frontend",
    link: "https://rockpaperscissors-bazinga.netlify.app/",
    image: "/assets/images/rockpaperscissors.jpg",
    wip: false,
  },
  {
    title: "Rick and Morty GraphQL",
    description:
      "Displays Rick and Morty characters using a public GraphQL API. Implements Ag Grid, React Query, MSW, and RTL.",
    date: "May 2023",
    technologies: ["React", "TypeScript", "SCSS", "Jest", "RTL", "GraphQL"],
    role: "Frontend",
    link: "https://graphql-rick-and-morty.netlify.app/",
    image: "/assets/images/rick-and-morty.jpg",
    wip: false,
  },
  {
    title: "Tenzies Game",
    description:
      "Emulates the Tenzies dice game. Installable as a mobile PWA, tracks high scores via LocalStorage.",
    date: "Mar 2022",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    role: "Frontend",
    link: "https://tenzies-smirlian.netlify.app/",
    image: "/assets/images/tenzies-game.jpg",
    wip: false,
  },
  // {
  //   title: "PokeBattle",
  //   description:
  //     "Pokémon card game using the PokéAPI. Features a Pokédex tab, sounds, and the NES CSS framework.",
  //   date: "Jan 2022",
  //   technologies: ["JavaScript", "HTML", "CSS"],
  //   role: "Frontend",
  //   link: "https://ignacio0104.github.io/pokemonBattle/",
  //   image: "/assets/images/pokebattle.jpg",
  //   wip: false,
  // },
  // {
  //   title: "Todo App",
  //   description:
  //     "Track and organize activities with animations and LocalStorage persistence.",
  //   date: "Jan 2022",
  //   technologies: ["JavaScript", "HTML", "CSS"],
  //   role: "Frontend",
  //   link: "https://ignacio0104.github.io/Todo-App/",
  //   image: "/assets/images/todo-list.jpg",
  //   wip: false,
  // },
  // {
  //   title: "Pomodoro Clock",
  //   description:
  //     "Customizable, responsive Pomodoro timer for managing work and break schedules.",
  //   date: "Jan 2022",
  //   technologies: ["JavaScript", "HTML", "CSS"],
  //   role: "Frontend",
  //   link: "https://ignacio0104.github.io/pomodoroClock/",
  //   image: "/assets/images/pomodoro.jpg",
  //   wip: false,
  // },
];

const PREVIEW_COUNT = 2;

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] overflow-hidden hover:border-[rgba(79,142,247,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(79,142,247,0.08)]"
    >
      {/* Image */}
      <div className="relative w-full h-48 bg-[var(--bg-card)] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-[rgba(10,10,15,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <span className="text-sm font-medium text-white flex items-center gap-2">
            View Live
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="text-xs font-medium text-[var(--accent)] bg-[rgba(10,10,15,0.85)] border border-[rgba(79,142,247,0.3)] px-2.5 py-1 rounded-full backdrop-blur-sm">
            {project.role}
          </span>
          {project.wip && (
            <span className="text-xs font-medium text-amber-400 bg-[rgba(10,10,15,0.85)] border border-amber-400/30 px-2.5 py-1 rounded-full backdrop-blur-sm">
              WIP
            </span>
          )}
        </div>

        {/* Date */}
        <span className="absolute top-3 right-3 text-xs text-[var(--text-muted)] bg-[rgba(10,10,15,0.85)] px-2.5 py-1 rounded-full backdrop-blur-sm">
          {project.date}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs text-[var(--text-muted)] bg-[var(--bg-card)] border border-[var(--border)] px-2 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, PREVIEW_COUNT);

  return (
    <section id="projects" className="py-24 px-8 max-sm:px-5">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.12em] uppercase text-[var(--accent)] bg-[rgba(79,142,247,0.1)] border border-[rgba(79,142,247,0.2)] px-3 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
            Projects
          </span>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Things I&apos;ve built
            </h2>
            <span className="text-sm text-[var(--text-muted)]">
              {projects.length} projects
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Show more / less */}
        {projects.length > PREVIEW_COUNT && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll((p) => !p)}
              className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] border border-[var(--border)] hover:border-[rgba(79,142,247,0.3)] px-6 py-2.5 rounded-xl transition-all duration-200 group"
            >
              {showAll ? "Show less" : `Show all ${projects.length} projects`}
              <svg
                className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M2 5l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
