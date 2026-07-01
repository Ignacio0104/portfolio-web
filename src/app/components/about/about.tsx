export default function About() {
  return (
    <section id="about" className="px-8 py-24 max-sm:px-5 max-sm:py-16">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 max-[900px]:grid-cols-1 gap-16 max-[900px]:gap-12 items-center">
        {/* Left — code snippet card */}
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius-md)] overflow-hidden">
          {/* Fake window controls */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>

          {/* Code lines */}
          <pre className="px-6 py-6 text-[13px] leading-[1.8] font-mono overflow-x-auto">
            <code>
              <span className="text-[var(--text-muted)]">const</span>{" "}
              <span className="text-[var(--text-primary)]">developer</span>{" "}
              <span className="text-[var(--text-muted)]">=</span>{" "}
              <span className="text-[var(--text-muted)]">{"{"}</span>
              {"\n"}
              {"  "}
              <span className="text-[var(--accent)]">name</span>:{" "}
              <span className="text-[#9ece6a]">&apos;Tech Weaver&apos;</span>,
              {"\n"}
              {"  "}
              <span className="text-[var(--accent)]">focus</span>: [
              <span className="text-[#9ece6a]">&apos;frontend&apos;</span>,{" "}
              <span className="text-[#9ece6a]">&apos;backend&apos;</span>,{" "}
              <span className="text-[#9ece6a]">&apos;devops&apos;</span>],{"\n"}
              {"  "}
              <span className="text-[var(--accent)]">tools</span>: [
              <span className="text-[#9ece6a]">&apos;React&apos;</span>,{" "}
              <span className="text-[#9ece6a]">&apos;Node&apos;</span>,{" "}
              <span className="text-[#9ece6a]">&apos;Go&apos;</span>,{" "}
              <span className="text-[#9ece6a]">&apos;AWS&apos;</span>],{"\n"}
              {"  "}
              <span className="text-[var(--accent)]">philosophy</span>:{" "}
              <span className="text-[#9ece6a]">
                &apos;Precision at scale&apos;
              </span>
              ,{"\n"}
              <span className="text-[var(--text-muted)]">{"}"}</span>;
            </code>
          </pre>
        </div>

        {/* Right — heading + description */}
        <div className="flex flex-col gap-6">
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
            Precision in Every Layer
          </h2>

          <p className="text-base text-[var(--text-secondary)] leading-[1.7]">
            With over 6 years of experience in the digital trenches, I bridge
            the gap between complex backend logic and intuitive frontend
            experiences. I don&apos;t just write code; I architect systems that
            are performant, accessible, and maintainable.
          </p>

          <div className="grid grid-cols-2 max-[480px]:grid-cols-1 gap-8 mt-2">
            <div>
              <h3 className="text-sm font-semibold text-[var(--accent)] mb-2 tracking-wide">
                Frontend
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-[1.7]">
                Expertise in React, TypeScript, and Tailwind CSS. Obsessed with
                60fps animations and accessible UI patterns.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[var(--accent)] mb-2 tracking-wide">
                Backend
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-[1.7]">
                Building resilient APIs with Node.js and Go. Specialized in
                PostgreSQL optimization and distributed systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
