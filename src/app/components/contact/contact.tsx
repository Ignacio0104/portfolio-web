"use client";

import { useState } from "react";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const WHATSAPP_LINK = "https://wa.me/5491151464652";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Ignacio0104",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ignacio-smirlian",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nachosmirlian/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = Partial<FormState>;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name) errors.name = "Name can't be empty";
  if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Enter a valid email";
  if (!values.subject) errors.subject = "Subject can't be empty";
  if (!values.message) errors.message = "Message can't be empty";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormState, boolean>>
  >({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const newErrors = validate({ ...form, [field]: value });
      setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
    }
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    const newErrors = validate(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    setServerError("");

    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY,
      );
      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTouched({});
    } catch {
      setServerError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: keyof FormState) =>
    `w-full bg-[var(--bg-secondary)] border ${
      touched[field] && errors[field]
        ? "border-red-500/60 focus:border-red-500"
        : "border-[var(--border)] focus:border-[var(--accent)]"
    } rounded-[var(--radius-md)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition-colors duration-200`;

  return (
    <section id="contact" className="py-24 px-8 max-sm:px-5">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.12em] uppercase text-[var(--accent)] bg-[rgba(79,142,247,0.1)] border border-[rgba(79,142,247,0.2)] px-3 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
            Contact
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Let&apos;s work together
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-start">
          {/* Left — info */}
          <div className="flex flex-col gap-8">
            <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
              I&apos;m open to freelance projects, full-time roles, and
              collaborations. Whether you have a question or just want to say hi
              — my inbox is always open.
            </p>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3.5 rounded-xl border border-[rgba(37,211,102,0.25)] bg-[rgba(37,211,102,0.06)] hover:bg-[rgba(37,211,102,0.1)] hover:border-[rgba(37,211,102,0.4)] transition-all duration-200 group w-fit"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="text-sm font-medium text-[#25D366]">
                Message on WhatsApp
              </span>
              <svg
                className="opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M2 7h10M7 2l5 5-5 5"
                  stroke="#25D366"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Socials */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-medium tracking-widest uppercase text-[var(--text-muted)]">
                Find me on
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[rgba(79,142,247,0.3)] hover:bg-[var(--bg-card)] transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {success ? (
              <div className="flex flex-col items-center gap-6 py-12 px-8 rounded-2xl border border-[rgba(79,142,247,0.2)] bg-[rgba(79,142,247,0.05)] text-center">
                <div className="w-14 h-14 rounded-full bg-[rgba(79,142,247,0.1)] border border-[rgba(79,142,247,0.2)] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="var(--accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">
                    Message sent!
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Thanks for reaching out. I&apos;ll get back to you as soon
                    as possible.
                  </p>
                </div>
                <button
                  onClick={() => setSuccess(false)}
                  className="text-sm text-[var(--accent)] hover:underline transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Ignacio..."
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      className={inputClass("name")}
                    />
                    {touched.name && errors.name && (
                      <span className="text-xs text-red-400">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      className={inputClass("email")}
                    />
                    {touched.email && errors.email && (
                      <span className="text-xs text-red-400">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wide">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project proposal..."
                    value={form.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    onBlur={() => handleBlur("subject")}
                    className={inputClass("subject")}
                  />
                  {touched.subject && errors.subject && (
                    <span className="text-xs text-red-400">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    className={`${inputClass("message")} resize-none`}
                  />
                  {touched.message && errors.message && (
                    <span className="text-xs text-red-400">
                      {errors.message}
                    </span>
                  )}
                </div>

                {serverError && (
                  <p className="text-sm text-red-400">{serverError}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 flex items-center justify-center gap-2 text-sm font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] disabled:opacity-60 disabled:cursor-not-allowed px-6 py-3 rounded-[var(--radius-md)] transition-all duration-200 hover:-translate-y-px"
                >
                  {loading ? (
                    <svg
                      className="animate-spin w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="white"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="white"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                  ) : (
                    <>
                      Send message
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M2 8h12M8 2l6 6-6 6"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
