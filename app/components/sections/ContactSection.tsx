"use client";

import { GithubIcon, XIcon, InstagramIcon } from "../icons";
import { useMemo, useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useTranslations } from "@/app/components/i18n/LanguageProvider";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/shafisma",
    icon: GithubIcon,
    username: "@shafisma",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/Shafigrate",
    icon: XIcon,
    username: "@Shafigrate",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sh4fi_dx/",
    icon: InstagramIcon,
    username: "@sh4fi_dx",
  },
];

type FormData = {
  name: string;
  email: string;
  type: string;
  timeline: string;
  details: string;
};

export function ContactSection() {
  const { copy } = useTranslations();
  const projectTypeKeys = useMemo(
    () => ["web", "landing", "mvp", "api", "consulting"],
    []
  );
  const timelineKeys = useMemo(() => ["lt1", "1to3", "3to6", "flex"], []);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    type: projectTypeKeys[0],
    timeline: timelineKeys[1],
    details: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const typeIndex = projectTypeKeys.indexOf(formData.type);
      const timelineIndex = timelineKeys.indexOf(formData.timeline);
      const payload = {
        ...formData,
        type: copy.contact.options.projectTypes[typeIndex] ?? formData.type,
        timeline:
          copy.contact.options.timeline[timelineIndex] ?? formData.timeline,
      };

      const response = await fetch("https://formspree.io/f/xreegbqy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          type: projectTypeKeys[0],
          timeline: timelineKeys[1],
          details: "",
        });
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
    <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Column: Text & Intent */}
        <div>
          <span className="inline-block px-4 py-2 border border-accent/20 bg-accent/10 text-accent text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 rounded-full">
            {copy.contact.badge}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
            {copy.contact.title}{" "}
            <span className="text-gray-500">{copy.contact.titleEmphasis}</span>
          </h2>

          <div className="space-y-8 mb-12">
            <p className="text-gray-400 font-medium text-lg leading-relaxed">
              {copy.contact.intro}
            </p>

            <ul className="space-y-4">
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

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 inline-flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-black"></div>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
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
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all text-white"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Short Form */}
        <div className="bg-[#111] border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10" />

          <h3 className="text-2xl font-bold text-white mb-6">
            {copy.contact.formTitle}
          </h3>

          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center py-12 text-center animate-in fade-in duration-500">
              <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">
                {copy.contact.successTitle}
              </h4>
              <p className="text-gray-400 max-w-xs mx-auto mb-8">
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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
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
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:border-accent/50 transition-colors disabled:opacity-50 appearance-none"
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

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">
                  {copy.contact.labels.timeline}
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:border-accent/50 transition-colors disabled:opacity-50 appearance-none"
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

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">
                  {copy.contact.labels.details}
                </label>
                <textarea
                  name="details"
                  required
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  placeholder={copy.contact.placeholders.details}
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
                className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
