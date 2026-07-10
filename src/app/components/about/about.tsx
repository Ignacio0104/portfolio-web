export default function About() {
  return (
    <section id="about" className="h-screen flex items-center px-8 max-sm:px-5">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-2 max-[900px]:grid-cols-1 gap-16 max-[900px]:gap-10 items-center">
        {/* Left — intro */}
        <div className="flex flex-col gap-6">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--accent)]">
            About
          </span>

          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold tracking-[-0.02em] leading-[1.15] text-[var(--text-primary)]">
            Hi! My name is Ignacio.
          </h2>

          <p className="text-lg text-[var(--text-secondary)] leading-[1.8]">
            I&apos;m an experienced web developer currently working on a
            high-profile project at Disney. My expertise lies in frontend
            development with Angular and React, and I&apos;m equally proficient
            in backend technologies like C# .NET and Node.js, as well as mobile
            development with Flutter.
          </p>
        </div>

        {/* Right — quote, traits, skills */}
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
            {[
              "Angular",
              "React",
              "C# .NET",
              "Node.js",
              "Flutter",
              "AI-assisted development",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 cursor-pointer text-sm font-medium rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
