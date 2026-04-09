"use client";

import { GithubIcon, InstagramIcon, LinkedinIcon } from "../icons";
import { useEffect, useMemo, useRef, useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useTranslations } from "@/app/components/i18n/LanguageProvider";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Rochadevj",
    icon: GithubIcon,
    username: "@Rochadevj",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/hee_rocha/",
    icon: InstagramIcon,
    username: "@hee_rocha",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/henrique-rocha-389609287/",
    icon: LinkedinIcon,
    username: "Henrique Rocha",
  },
];

type FormData = {
  name: string;
  email: string;
  type: string;
  timeline: string;
  details: string;
  company: string;
};

const CONTACT_SUBMIT_COOLDOWN_MS = 60 * 1000;
const MIN_FORM_FILL_TIME_MS = 3500;
const LAST_SUBMIT_STORAGE_KEY = "portfolio-contact-last-submit";

export function ContactSection() {
  const { copy } = useTranslations();
  const projectTypeKeys = useMemo(
    () => ["web", "landing", "hiring", "general"],
    []
  );
  const timelineKeys = useMemo(() => ["lt1", "1to3", "3to6", "flex"], []);
  const hideTimelineFor = useMemo(() => new Set(["hiring", "general"]), []);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    type: "general",
    timeline: timelineKeys[1],
    details: "",
    company: "",
  });
  const formStartedAtRef = useRef(0);
  const shouldShowTimeline = !hideTimelineFor.has(formData.type);
  const detailsLabel = shouldShowTimeline
    ? copy.contact.labels.details
    : copy.contact.labels.detailsGeneral;
  const detailsPlaceholder = shouldShowTimeline
    ? copy.contact.placeholders.details
    : copy.contact.placeholders.detailsGeneral;

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    formStartedAtRef.current = Date.now();
  }, []);

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      type: "general",
      timeline: timelineKeys[1],
      details: "",
      company: "",
    });
    formStartedAtRef.current = Date.now();
  };

  const getLastSubmittedAt = () => {
    try {
      const rawValue = window.localStorage.getItem(LAST_SUBMIT_STORAGE_KEY);
      const parsedValue = Number(rawValue);
      return Number.isFinite(parsedValue) ? parsedValue : 0;
    } catch {
      return 0;
    }
  };

  const rememberSubmission = (timestamp: number) => {
    try {
      window.localStorage.setItem(LAST_SUBMIT_STORAGE_KEY, String(timestamp));
    } catch {
      // Ignore storage failures and keep the form usable.
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const submittedAt = Date.now();

      if (formData.company.trim()) {
        setStatus("success");
        resetForm();
        return;
      }

      if (submittedAt - formStartedAtRef.current < MIN_FORM_FILL_TIME_MS) {
        setStatus("error");
        setErrorMessage(copy.contact.errorTooFast);
        return;
      }

      const lastSubmittedAt = getLastSubmittedAt();
      if (
        lastSubmittedAt &&
        submittedAt - lastSubmittedAt < CONTACT_SUBMIT_COOLDOWN_MS
      ) {
        setStatus("error");
        setErrorMessage(copy.contact.errorCooldown);
        return;
      }

      const typeIndex = projectTypeKeys.indexOf(formData.type);
      const timelineIndex = timelineKeys.indexOf(formData.timeline);
      const visibleFormData = {
        name: formData.name,
        email: formData.email,
        type: formData.type,
        timeline: formData.timeline,
        details: formData.details,
      };
      const payload = {
        ...visibleFormData,
        type: copy.contact.options.projectTypes[typeIndex] ?? visibleFormData.type,
        ...(shouldShowTimeline && {
          timeline:
            copy.contact.options.timeline[timelineIndex] ??
            visibleFormData.timeline,
        }),
      };

      const response = await fetch("https://formspree.io/f/xvzbpdjl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        rememberSubmission(submittedAt);
        setStatus("success");
        resetForm();
      } else {
        setStatus("error");
        const data = (await response.json()) as {
          errors?: Array<{ message: string }>;
        };
        if (data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map((err) => err.message).join(", "));
        } else {
          setErrorMessage(copy.contact.errorGeneric);
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage(copy.contact.errorNetwork);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="relative px-4 py-16 sm:px-6 sm:py-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-24">
        {/* Left Column: Text & Intent */}
        <div>
          <span className="mb-5 inline-block rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-accent sm:mb-6 sm:text-sm">
            {copy.contact.badge}
          </span>
          <h2 className="mb-6 text-4xl font-black tracking-tight text-white sm:mb-8 sm:text-5xl md:text-6xl">
            {copy.contact.title}{" "}
            <span className="text-gray-500">{copy.contact.titleEmphasis}</span>
          </h2>

          <div className="mb-8 space-y-6 sm:mb-12 sm:space-y-8">
            <p className="text-base font-medium leading-relaxed text-gray-400 sm:text-lg">
              {copy.contact.intro}
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {copy.contact.list.map((item, index) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-accent text-sm mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-300">
                    <strong>{item.title}</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>

            <div className="inline-flex items-center gap-4 rounded-xl border border-cyan-400/45 bg-[linear-gradient(120deg,rgba(4,35,49,0.72)_0%,rgba(12,19,45,0.72)_48%,rgba(28,9,49,0.72)_100%)] p-3.5 shadow-[0_0_0_1px_rgba(20,188,255,0.12),0_10px_30px_rgba(0,0,0,0.45)] sm:p-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[linear-gradient(135deg,#2de7ff_0%,#884dff_100%)] border-2 border-black shadow-[0_0_12px_rgba(74,180,255,0.4)]"></div>
              </div>
              <div>
                <p className="text-xs text-gray-300/80 font-bold uppercase tracking-wider">
                  {copy.contact.responseTimeLabel}
                </p>
                <p className="text-white font-bold">
                  {copy.contact.responseTimeValue}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-white/30 hover:bg-white/20 sm:h-12 sm:w-12"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Short Form */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(7,10,16,0.98)_0%,rgba(8,18,30,0.95)_50%,rgba(18,14,34,0.92)_100%)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)] sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(98,196,255,0.12),transparent_28%),radial-gradient(circle_at_20%_28%,rgba(139,92,246,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(42,189,167,0.07),transparent_34%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.16] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[26px_26px]" />

          <h3 className="relative z-10 mb-5 text-2xl font-bold text-white sm:mb-6">
            {copy.contact.formTitle}
          </h3>

          {status === "success" ? (
            <div className="relative z-10 h-full flex flex-col items-center justify-center py-12 text-center animate-in fade-in duration-500">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10 text-green-500">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">
                {copy.contact.successTitle}
              </h4>
              <p className="mx-auto mb-8 max-w-xs text-gray-400">
                {copy.contact.successMessage}
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors font-medium text-sm"
              >
                {copy.contact.successButton}
              </button>
            </div>
          ) : (
            <form className="relative z-10 space-y-3.5 sm:space-y-4" onSubmit={handleSubmit}>
              <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
                <label htmlFor="company">{copy.contact.botFieldLabel}</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    {copy.contact.labels.name}
                  </label>
                  <input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder={copy.contact.placeholders.name}
                    disabled={status === "submitting"}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    {copy.contact.labels.email}
                  </label>
                  <input
                    name="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={copy.contact.placeholders.email}
                    disabled={status === "submitting"}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">
                  {copy.contact.labels.projectType}
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-accent/50 transition-colors disabled:opacity-50 appearance-none"
                >
                  {copy.contact.options.projectTypes.map((label, index) => (
                    <option
                      key={projectTypeKeys[index]}
                      value={projectTypeKeys[index]}
                    >
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              {shouldShowTimeline && (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    {copy.contact.labels.timeline}
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-accent/50 transition-colors disabled:opacity-50 appearance-none"
                  >
                    {copy.contact.options.timeline.map((label, index) => (
                      <option
                        key={timelineKeys[index]}
                        value={timelineKeys[index]}
                      >
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">
                  {detailsLabel}
                </label>
                <textarea
                  name="details"
                  required
                  rows={3}
                  value={formData.details}
                  onChange={handleChange}
                  placeholder={detailsPlaceholder}
                  disabled={status === "submitting"}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors resize-none disabled:opacity-50"
                ></textarea>
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3.5 font-bold text-black transition-all hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>{copy.contact.sending}</span>
                  </>
                ) : (
                  <>
                    <span>{copy.contact.submit}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              <p className="text-center text-xs text-gray-600 mt-4">
                {copy.contact.footer}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
